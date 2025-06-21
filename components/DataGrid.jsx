'use client'

import { useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'


const initialMetrics = [
  { label: 'Years of Experience', value: 3, isGithubSync: false, description: 'Years actively developing web applications and software solutions' },
  { label: 'Projects Built', value: 8, isGithubSync: true, description: 'Total number of non-forked repositories on GitHub' },
  { label: 'Technologies Used', value: 12, isGithubSync: true, description: 'Unique programming languages and technologies used across projects' },
  { label: 'Commits Made', value: 200, isGithubSync: true, description: 'Estimated total number of code commits across all repositories' },
  { label: 'Stars Received', value: 15, isGithubSync: true, description: 'Total stars received across all GitHub repositories' },
]


const CACHE_DURATION = 24 * 60 * 60 * 1000

export default function DataGrid() {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [counts, setCounts] = useState(metrics.map(() => 0))
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)


  const checkGitHubUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub user not found: ${username}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error checking GitHub user:', error);
      return null;
    }
  }


  const fetchGithubData = async (forceRefresh = false) => {
    try {
      setIsRefreshing(forceRefresh)
      if (forceRefresh) {
        setIsLoading(true)
      }
      

      if (!forceRefresh) {
        const cachedData = localStorage.getItem('githubMetrics')
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData)

          if (Date.now() - timestamp < CACHE_DURATION) {
            setMetrics([

              ...data.slice(1)
            ])
            setLastUpdated(new Date(timestamp))
            setIsLoading(false)
            return
          }
        }
      }
      const username = 'Bigjay2708'
      

      const user = await checkGitHubUser(username)
      if (!user) {
        throw new Error('GitHub user not found')
      }
      

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        },        cache: forceRefresh ? 'no-cache' : 'default'
      })
      
      if (!reposResponse.ok) {
        throw new Error(`Failed to fetch repositories: ${reposResponse.status} ${reposResponse.statusText}`)
      }
      
      const repos = await reposResponse.json()
          const projectsCount = repos.filter(repo => !repo.fork).length
      const languages = new Set()
      

      const nonForkedRepos = repos.filter(repo => !repo.fork)
      

      for (const repo of nonForkedRepos) {
        if (repo.language) {
          languages.add(repo.language)
        }
      }
        const reposForLanguages = nonForkedRepos.slice(0, 10)
      
      for (const repo of reposForLanguages) {
        try {
          const langResponse = await fetch(repo.languages_url, {
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          })
          
          if (langResponse.ok) {
            const repoLanguages = await langResponse.json()
            Object.keys(repoLanguages).forEach(lang => languages.add(lang))
          }
        } catch (err) {
          console.error(`Error fetching languages for ${repo.name}:`, err)
        }
      }

      let totalCommits = 0
      

      const reposToCheck = nonForkedRepos.slice(0, 5)
      

      for (const repo of reposToCheck) {
        try {
          const statsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/stats/contributors`, {
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          })
          
          if (statsResponse.ok) {
            const stats = await statsResponse.json()

            if (stats.length > 0) {
              const userStats = stats.find(stat => stat.author?.login === username)
              if (userStats) {
                totalCommits += userStats.total
              }
            }
          } else if (statsResponse.status === 202) {
            // GitHub is computing the stats, so we need to add a fallback
            // Add an estimate based on the repo size
            totalCommits += Math.max(20, Math.round(repo.size / 1000))
          }
        } catch (err) {
          console.error(`Error fetching stats for ${repo.name}:`, err)
        }
      }
      
      // Multiply by a factor since we're only checking a few repos
      // Use a more conservative multiplier to avoid overestimating
      const estimatedCommits = totalCommits * Math.min(3, Math.ceil(nonForkedRepos.length / reposToCheck.length))

      // Get total stars
      const starsCount = repos.reduce((total, repo) => total + repo.stargazers_count, 0)      // Create updated metrics with fallbacks for when API data is incomplete
      const updatedMetrics = [
        initialMetrics[0], // Keep years of experience static
        { 
          label: 'Projects Built', 
          value: projectsCount || 5, // Fallback to 5 if projectsCount is 0
          isGithubSync: true,
          description: initialMetrics[1].description
        },
        { 
          label: 'Technologies Used', 
          value: languages.size || 8, // Fallback to 8 if languages.size is 0
          isGithubSync: true,
          description: initialMetrics[2].description 
        },
        { 
          label: 'Commits Made', 
          value: Math.max(estimatedCommits, 50), // Ensure at least 50 commits
          isGithubSync: true,
          description: initialMetrics[3].description
        },
        {
          label: 'Stars Received',
          value: starsCount || 15, // Fallback to 15 if starsCount is 0
          isGithubSync: true,
          description: initialMetrics[4].description
        }
      ]
      
      // Update metrics
      setMetrics(updatedMetrics)
      
      // Save to cache
      const now = Date.now()
      localStorage.setItem('githubMetrics', JSON.stringify({
        data: updatedMetrics,
        timestamp: now
      }))
      
      setLastUpdated(new Date(now))
      setError(null)
      setIsLoading(false)
      setIsRefreshing(false)    } catch (err) {
      console.error('Error fetching GitHub data:', err)
      
      // Use cached data if available
      const cachedData = localStorage.getItem('githubMetrics')
      if (cachedData) {
        try {
          const { data } = JSON.parse(cachedData)
          setMetrics([
            initialMetrics[0], // Keep years of experience static
            ...data.slice(1) // Use cached GitHub data
          ])
        } catch (cacheErr) {
          console.error('Error parsing cached data:', cacheErr)
          // If we can't parse the cache, use the fallback metrics
          setMetrics(initialMetrics)
        }      } else {
        // Use fallback metrics with reasonable values if no cache
        setMetrics([
          initialMetrics[0], // Years of Experience stays the same
          { ...initialMetrics[1], value: 5 }, // Projects
          { ...initialMetrics[2], value: 8 }, // Technologies
          { ...initialMetrics[3], value: 50 }, // Commits
          { ...initialMetrics[4], value: 15 }, // Stars
        ])
      }
      
      setError(err.message)
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  // Fetch data on initial load
  useEffect(() => {
    fetchGithubData()
  }, [])

  // Counter animation effect
  useEffect(() => {
    setCounts(metrics.map(() => 0))
    
    const timers = metrics.map((metric, i) =>
      setInterval(() => {
        setCounts(prev => {
          const updated = [...prev]
          if (updated[i] < metric.value) {
            // Increment faster for larger values
            const increment = Math.max(1, Math.floor(metric.value / 100))
            updated[i] = Math.min(updated[i] + increment, metric.value)
          }
          return updated
        })
      }, 50)
    )

    return () => timers.forEach(clearInterval)
  }, [metrics])

  // Format date to a friendly string
  const formatLastUpdated = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  return (
    <div className="max-w-4xl mx-auto mt-16">
      {/* Header with refresh button */}
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-semibold text-gray-200">Developer Metrics</h2>
        <div className="flex items-center space-x-2">
          {lastUpdated && (
            <span className="text-xs text-gray-400">
              Last updated: {formatLastUpdated(lastUpdated)}
            </span>
          )}
          <button
            onClick={() => fetchGithubData(true)}
            disabled={isRefreshing}
            className="flex items-center text-sm bg-darkgreen px-3 py-1 rounded text-white hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRefreshing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Syncing...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Refresh Stats
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-200 px-4 py-3 rounded mb-6 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Failed to update GitHub stats: {error}. Using cached or fallback data.</span>
        </div>
      )}      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 text-center">{
        metrics.map((metric, i) => (          <div
            key={i}
            data-tooltip-id={`metric-tooltip-${i}`}
            data-tooltip-content={metric.description}
            className="bg-[#1a1a1a] border border-darkgreen p-4 md:p-6 rounded shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 relative group h-full flex flex-col justify-center"
          >
            {/* Loading indicator */}
            {isLoading && metric.isGithubSync && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] bg-opacity-70 rounded">
                <div className="w-8 h-8 border-t-2 border-b-2 border-darkgreen rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Progress bar for visual representation */}
            <div className="absolute bottom-0 left-0 h-1 bg-darkgreen bg-opacity-50 transition-all duration-1000" 
                style={{ width: `${isLoading ? 0 : (counts[i] / metric.value) * 100}%` }}>
            </div>
            
            <div className="text-4xl font-bold text-darkgreen mb-2">
              {isLoading && metric.isGithubSync ? (
                <span className="opacity-50">...</span>
              ) : (
                counts[i].toLocaleString()
              )}
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              {metric.label}
              {metric.isGithubSync && (
                <span className="inline-block ml-1" title="Synced with GitHub">
                  <svg className="w-3 h-3 text-green-400 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.59.5.092.682-.217.682-.48 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </span>
              )}
            </div>
            <Tooltip id={`metric-tooltip-${i}`} place="top" effect="solid" className="bg-gray-800 text-xs max-w-xs" />
          </div>
        ))}
      </div>
    </div>
  )
}

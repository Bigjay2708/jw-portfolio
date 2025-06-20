'use client'

import { useEffect, useState } from 'react'

// Initial static metrics (fallback)
const initialMetrics = [
  { label: 'Years of Experience', value: 2, isGithubSync: false },
  { label: 'Projects Built', value: 0, isGithubSync: true },
  { label: 'Technologies Used', value: 0, isGithubSync: true },
  { label: 'Commits Made', value: 0, isGithubSync: true },
]

export default function DataGrid() {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [counts, setCounts] = useState(metrics.map(() => 0))
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch GitHub data
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true)
        
        // GitHub username - replace with your own
        const username = 'Bigjay2708'
        
        // Fetch repositories data
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories')
        }
        
        const repos = await reposResponse.ok ? await reposResponse.json() : []
        
        // Calculate projects count (non-forked repositories)
        const projectsCount = repos.filter(repo => !repo.fork).length
        
        // Calculate technologies used (unique languages)
        const languages = new Set()
        
        // We need to fetch languages for each repo
        for (const repo of repos.filter(repo => !repo.fork)) {
          if (repo.language) {
            languages.add(repo.language)
          }
          
          // Optionally fetch all languages for each repo - this makes more API requests
          // This is commented out to avoid hitting rate limits, but you can enable it
          /*
          const langResponse = await fetch(repo.languages_url)
          if (langResponse.ok) {
            const repoLanguages = await langResponse.json()
            Object.keys(repoLanguages).forEach(lang => languages.add(lang))
          }
          */
        }
        
        // Calculate total commits (estimated from repository stats)
        let totalCommits = 0
        
        // Get first 5 repos to avoid too many API requests
        const reposToCheck = repos.filter(repo => !repo.fork).slice(0, 5)
        
        for (const repo of reposToCheck) {
          try {
            const statsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/stats/contributors`)
            if (statsResponse.ok) {
              const stats = await statsResponse.json()
              const userStats = stats.find(stat => stat.author?.login === username)
              if (userStats) {
                totalCommits += userStats.total
              }
            }
          } catch (err) {
            console.error(`Error fetching stats for ${repo.name}:`, err)
          }
        }
        
        // Multiply by a factor since we're only checking a few repos
        const estimatedCommits = totalCommits * Math.max(1, Math.ceil(repos.length / reposToCheck.length))
        
        // Update metrics with GitHub data
        setMetrics([
          initialMetrics[0], // Keep years of experience static
          { label: 'Projects Built', value: projectsCount, isGithubSync: true },
          { label: 'Technologies Used', value: languages.size, isGithubSync: true },
          { label: 'Commits Made', value: Math.max(estimatedCommits, 100), isGithubSync: true },
        ])
        
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching GitHub data:', err)
        setError(err.message)
        setIsLoading(false)
      }
    }

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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 text-center">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="bg-[#1a1a1a] border border-darkgreen p-6 rounded shadow-sm hover:scale-105 transition transform duration-300"
        >
          <div className="text-4xl font-bold text-darkgreen mb-2">
            {isLoading ? (
              <span className="opacity-50">...</span>
            ) : (
              counts[i]
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
        </div>
      ))}
    </div>
  )
}

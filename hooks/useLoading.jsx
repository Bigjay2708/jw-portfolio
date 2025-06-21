'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook for managing loading state and progress
 * 
 * @returns {Object} Object containing loading state and progress
 */
export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  
  // Simulate loading state with progress
  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setLoadingProgress(progress)
      
      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsLoading(false)
        }, 300)
      }
    }, 80)
    
    return () => clearInterval(interval)
  }, [])
  
  return { isLoading, loadingProgress }
}

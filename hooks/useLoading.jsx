'use client'

import { useState, useEffect } from 'react'


export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  

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

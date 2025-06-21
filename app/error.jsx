'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ErrorBoundary({ error, reset }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Log the error to an error reporting service
    console.error('Page error:', error)
  }, [error])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[#111]">
      <div className="w-full max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-darkgreen/20 rounded-full blur-xl"></div>
            <div className="relative bg-[#1a1a1a] text-darkgreen text-4xl flex items-center justify-center w-24 h-24 rounded-full border border-darkgreen/30">
              !
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
          
          <p className="text-gray-400 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 transform hover:scale-105"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Go Home
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-[#1a1a1a] rounded-lg border border-gray-800 text-left">
              <p className="text-red-400 text-sm font-mono mb-2">Error Details (visible in development only):</p>
              <p className="text-gray-400 text-xs font-mono overflow-auto">
                {error.message || 'Unknown error'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

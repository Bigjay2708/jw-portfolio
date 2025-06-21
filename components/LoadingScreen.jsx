'use client'

import { motion } from 'framer-motion'

/**
 * LoadingScreen component that displays an animated loading overlay
 * Used across all pages for consistent experience
 * 
 * @param {number} loadingProgress - Current progress value (0-100)
 * @param {boolean} isLoading - Whether the loading screen should be visible
 * @param {string} loadingText - Custom text to display (defaults to "Loading Profile")
 * @returns {JSX.Element|null} The loading overlay or null when not loading
 */
export default function LoadingScreen({ loadingProgress, isLoading, loadingText = "Loading Profile" }) {
  if (!isLoading) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center max-w-md w-full">
        <div className="w-20 h-20 border-t-4 border-b-4 border-darkgreen rounded-full animate-spin-slow mb-6 relative">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-300/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
        </div>
        
        <p className="text-darkgreen text-xl font-semibold mb-2">{loadingText}</p>
        
        <div className="w-full bg-gray-800 h-2 rounded-full mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            className="bg-gradient-to-r from-green-500 to-darkgreen h-2 rounded-full"
          />
        </div>
        
        <div className="mt-4 bg-[#111] rounded-lg p-4 text-sm text-gray-400 max-w-xs w-full border border-gray-800 overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 font-mono">terminal</span>
          </div>
          <div className="font-mono space-y-1">
            <span className="block">
              <span className="text-green-500">$</span> <span className="text-blue-400">npm</span> run load-developer
            </span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              <span className="text-yellow-400">Loading</span> dependencies...
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="block"
            >
              <span className="text-green-400">Fetching</span> skills and experience...
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="block"
            >
              <span className="text-blue-400">Rendering</span> portfolio data...
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: loadingProgress > 90 ? 1 : 0 }}
              className="block text-green-500"
            >
              Ready! <span className="animate-pulse">▌</span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

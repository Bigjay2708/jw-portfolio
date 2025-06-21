'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHome, FaEnvelope } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[#111]">
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-auto mb-8">
            <div className="text-9xl font-bold text-darkgreen opacity-10 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaHome />
              Go Home
            </Link>
            
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

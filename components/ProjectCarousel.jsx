'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {    
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website leveraging Next.js 15 that combines interactive elements, smooth animations, and professional content presentation.',
    image: '/PortfolioProject.png',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    repo: 'https://github.com/Bigjay2708/jw-portfolio',
    live: 'https://wells-jason.com'
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    description: 'A full-featured e-commerce platform with product browsing, cart management, user authentication, and secure checkout process.',
    image: '/e-commerce-store.png',
    tags: ['Next.js', 'React', 'TailwindCSS', 'State Management', 'Payment Integration'],
    repo: 'https://github.com/Bigjay2708/e-commerce-store',
    live: 'https://e-commerce-store-6xqqwdzz3-bigjays-projects.vercel.app'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A modern task management application that allows users to create, track, and organize tasks with priority levels and due dates.',
    image: '/task-management-app.png',
    tags: ['React', 'Next.js', 'TailwindCSS', 'State Management', 'Responsive Design'],
    repo: 'https://github.com/Bigjay2708/task-management-app',
    live: 'https://task-management-app-omega-amber.vercel.app/'
  },
  {
    id: 4,
    title: 'The Review Room',
    description: 'A modern movie review platform built with the MERN stack that allows users to browse movies, write reviews, and manage their profiles with TMDb API integration.',
    image: '/blog-project.webp',
    tags: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Bigjay2708/The-Review-Room',
    live: 'https://review-room-demo.vercel.app'
  }
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-[400px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
              <div className="relative h-full">
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-darkgreen/20 text-darkgreen px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link 
                        href={projects[currentIndex].repo} 
                        target="_blank"
                        className="px-3 py-1.5 bg-darkgreen text-white text-sm rounded-md hover:bg-opacity-90 transition-all duration-300"
                      >
                        GitHub
                      </Link>
                      {projects[currentIndex].live && (
                        <Link 
                          href={projects[currentIndex].live} 
                          target="_blank"
                          className="px-3 py-1.5 border border-darkgreen text-darkgreen text-sm rounded-md hover:bg-darkgreen hover:text-white transition-all duration-300"
                        >
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevProject}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextProject}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
        >
          →
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-darkgreen' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
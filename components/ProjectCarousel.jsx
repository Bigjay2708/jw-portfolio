'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js and Tailwind CSS.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tags: ['React', 'Next.js', 'Tailwind'],
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'Full-stack e-commerce application using MERN stack.',
    image: '/e-commerce.webp',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A headless CMS blog using Strapi and Gatsby.',
    image: '/blog-project.webp',
    tags: ['Gatsby', 'GraphQL', 'Strapi'],
    link: '/projects/3'
  },
  {
    id: 4,
    title: 'Chat App',
    description: 'Real-time chat application using Socket.io.',
    image: '/chat-app.jpg',
    tags: ['Socket.io', 'Express', 'React'],
    link: '/projects/4'
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Link href={projects[currentIndex].link} className="block h-full">
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
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-darkgreen/20 text-darkgreen px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
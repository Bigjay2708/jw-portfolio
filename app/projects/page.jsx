'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'JavaScript Projects',
    summary: 'An assortment of my JavaScript projects, exercises, and code snippets.',
    link: 'https://github.com/Bigjay2708/JavaScript',
    image: '/js.png'
  },
  {
    id: 2,
    title: 'HTML Projects',
    summary: 'An assortment of my HTML projects, exercises, and code snippets.',
    link: 'https://github.com/Bigjay2708/HTML',
    image: '/html.png'
  },
  {
    id: 3,
    title: 'CSS Projects',
    summary: 'An assortment of my CSS projects, exercises, and code snippets.',
    link: 'https://github.com/Bigjay2708/HTML',
    image: '/css.png'
  }
]

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
        Projects
      </h2>

      {/* Featured Project */}
      <motion.div
        layout
        className="bg-[#1a1a1a] p-6 rounded-lg mb-10 border border-darkgreen shadow-md cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <Image
          src="/github-pages.png"
          alt="Featured Project"
          width={1200}
          height={500}
          className="rounded mb-4 w-full object-cover"
        />
        <h3 className="text-2xl font-semibold text-darkgreen mb-2">
          Featured Project
        </h3>
        <AnimatePresence>
          {expanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-gray-300 mb-4 text-sm"
            >
              This is an in-depth overview of my GitHub Pages Portfolio, which highlights my comprehensive skills in full-stack development. The portfolio demonstrates my proficiency with various cutting-edge technologies, including HTML, CSS, JavaScript, and more. Explore this collection to see the blend of design and technology, and witness my enthusiasm for learning and improving in web development.
            </motion.p>
          )}
        </AnimatePresence>
        <a
          href="https://github.com/Bigjay2708/Bigjay2708.github.io"
          target="_blank"
          className="inline-block mt-2 px-4 py-2 bg-darkgreen text-white text-sm rounded hover:bg-opacity-80 transition"
        >
          View My Work
        </a>
      </motion.div>

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] rounded-lg shadow-md border border-gray-800 hover:border-darkgreen transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-40 object-contain rounded-t"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold text-darkgreen">{project.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{project.summary}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-sm bg-darkgreen text-white px-3 py-2 rounded hover:bg-opacity-80 transition"
              >
                View My Work
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

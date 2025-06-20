import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website leveraging Next.js 15 that combines interactive elements, smooth animations, and professional content presentation.',
    image: '/github-pages.png',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    repo: 'https://github.com/Bigjay2708/jw-portfolio',
    live: 'https://jw-portfolio.vercel.app'
  },
  {
    id: 2,
    title: 'The Review Room',
    description: 'A modern movie review platform built with the MERN stack that allows users to browse movies, write reviews, and manage their profiles with TMDb API integration.',
    image: '/blog-project.webp',
    tags: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Bigjay2708/The-Review-Room'
  },
  {
    id: 3,
    title: 'NeighborHub',
    description: 'A comprehensive neighborhood community platform built with the MERN stack enabling residents to connect through real-time chat, bulletin boards, events, and marketplace.',
    image: '/chat-app.jpg',
    tags: ['Next.js', 'React', 'Material-UI', 'Socket.io', 'MongoDB', 'JWT'],
    repo: 'https://github.com/Bigjay2708/neighbor-hub'
  },
  {
    id: 4,
    title: 'E-commerce Store',
    description: 'Full-stack e-commerce application using MERN stack with modern UI and secure payment processing.',
    image: '/e-commerce.webp',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
];

// Extract unique tags
const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

export default function ProjectGallery() {
  const [selectedTag, setSelectedTag] = useState('All');

  const filtered =
    selectedTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="bg-[#0D0D0D] p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl text-gray-200 mb-4">Projects</h2>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag('All')}
          className={`px-3 py-1 rounded-full text-sm font-medium focus:outline-none transition 
            ${selectedTag === 'All' ? 'bg-green-500 text-black' : 'bg-gray-700 text-gray-300'}`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium focus:outline-none transition 
              ${selectedTag === tag ? 'bg-green-500 text-black' : 'bg-gray-700 text-gray-300'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#171717] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />              <div className="p-4">
                <h3 className="text-xl text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-600 text-gray-200 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Project Links */}
                <div className="flex gap-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}




'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LoadingScreen from '@/components/LoadingScreen'
import useLoading from '@/hooks/useLoading'

import ProjectGallery from '../../components/ProjectGallery'  // ← adjust this path if needed

// Featured projects data
const featuredProjects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website leveraging Next.js 15 that combines interactive elements, smooth animations, and professional content presentation. The application demonstrates full-stack development capabilities through various interactive components and modern web development practices.',
    tech: ['Next.js v15.3.2', 'React v19.0.0', 'TailwindCSS v4', 'Framer Motion', 'React Icons'],
    image: '/PortfolioProject.png',
    repo: 'https://github.com/Bigjay2708/jw-portfolio',
    live: 'https://wells-jason.com',
  },
  {
    title: 'Task Management App',
    description: 
      'A modern task management application that allows users to create, track, and organize tasks with priority levels and due dates. Features a clean, intuitive UI for managing work effectively.',
    tech: ['React', 'Next.js', 'TailwindCSS', 'State Management', 'Responsive Design'],
    image: '/task-management-app.png',
    repo: 'https://github.com/Bigjay2708/task-management-app',
    live: 'https://task-management-app-omega-amber.vercel.app/',
  },
  {
    title: 'The Review Room',
    description: 
      'A modern movie review platform built with the MERN stack that allows users to browse movies, write reviews, and manage their profiles with TMDb API integration. Features include user authentication, personalized watchlists, and social sharing.',
    tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'MongoDB'],
    image: '/blog-project.webp',
    repo: 'https://github.com/Bigjay2708/The-Review-Room',
    live: 'https://review-room-demo.vercel.app',
  }
];

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(featuredProjects[1]); // Shows Task Management app by default
  // Use the same loading hook used in about page for consistency
  const { isLoading, loadingProgress } = useLoading();

  return (
    <>
      {/* Loading screen component */}
      <LoadingScreen isLoading={isLoading} loadingProgress={loadingProgress} loadingText="Loading Projects" />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-12 text-gray-200"
      >
        {/* Page header with animated text */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            <span className="inline-block bg-gradient-to-r from-teal-400 via-darkgreen to-emerald-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest work, from responsive web applications to full-stack solutions.
            Each project represents my commitment to clean code, modern design, and effective problem-solving.
          </p>        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <div className="flex space-x-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedProject.title === project.title 
                      ? 'bg-darkgreen scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View ${project.title}`}
                />
              ))}
            </div>
          </div>
          
          <motion.div
            key={selectedProject.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] border border-darkgreen rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden group">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-t md:from-black/70 md:to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 md:hidden">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="hidden md:block">
                  <h3 className="text-3xl font-bold text-darkgreen mb-4">{selectedProject.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-darkgreen bg-opacity-20 text-darkgreen px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.repo}
                    target="_blank"
                    className="px-4 py-2 bg-darkgreen text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <ProjectGallery />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center py-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-800 px-4 sm:px-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>        </motion.div>
      </motion.section>
    </>  );
}




// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'


// // Featured project data
// const featured = {
//   title: 'GitHub Portfolio Website',
//   description:
//     'A responsive portfolio site showcasing full stack development projects, tech stack, and design capabilities. Built with HTML, CSS, and JavaScript, hosted on GitHub Pages.',
//   tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
//   image: '/github-pages.png',
//   repo: 'https://github.com/Bigjay2708/Bigjay2708.github.io',
//   live: 'https://bigjay2708.github.io',
// }

// const projects = [
//   {
//     id: 1,
//     title: 'JavaScript Projects',
//     summary: 'An assortment of my JavaScript projects, exercises, and code snippets.',
//     link: 'https://github.com/Bigjay2708/JavaScript',
//     image: '/js.png'
//   },
//   {
//     id: 2,
//     title: 'HTML Projects',
//     summary: 'An assortment of my HTML projects, exercises, and code snippets.',
//     link: 'https://github.com/Bigjay2708/HTML',
//     image: '/html.png'
//   },
//   {
//     id: 3,
//     title: 'CSS Projects',
//     summary: 'An assortment of my CSS projects, exercises, and code snippets.',
//     link: 'https://github.com/Bigjay2708/HTML',
//     image: '/css.png'
//   }
// ]

// export default function ProjectsPage() {
//   const [expandedId, setExpandedId] = useState(null)

//   return (



//     <section className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
//       <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
//         Projects
//       </h2>

   

// {/* Learning Highlight */}
// <div className="fixed top-20 right-6 z-20">
//   <div className="bg-[#111] text-darkgreen border border-darkgreen px-4 py-2 rounded-md shadow-lg text-sm font-mono animate-pulse backdrop-blur-sm">
//     <span className="block">📚 Actively learning </span>
//     <span className="block"> this new technology </span>
//     <span className="font-bold text-green-400">Python 🐍</span>
//   </div>
// </div>


//       {/* ✅ Featured Project Spotlight */}
//       <motion.div
//         whileHover={{ scale: 1.01 }}
//         className="bg-[#1a1a1a] border border-darkgreen rounded-lg overflow-hidden shadow-lg mb-12"
//       >
//         <Image
//           src={featured.image}
//           alt={featured.title}
//           width={1200}
//           height={600}
//           className="w-full h-64 sm:h-80 object-cover"
//         />
//         <div className="p-6">
//           <h3 className="text-2xl font-bold text-darkgreen mb-2">{featured.title}</h3>
//           <p className="text-sm text-gray-300 mb-4">{featured.description}</p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {featured.tech.map((tech, i) => (
//               <span
//                 key={i}
//                 className="text-xs bg-darkgreen bg-opacity-20 text-darkgreen px-2 py-1 rounded"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <div className="flex gap-4">
//             <a
//               href={featured.repo}
//               target="_blank"
//               className="text-sm px-4 py-2 border border-darkgreen text-darkgreen rounded hover:bg-darkgreen hover:text-white transition"
//             >
//               View Code
//             </a>
//             <a
//               href={featured.live}
//               target="_blank"
//               className="text-sm px-4 py-2 border border-darkgreen text-darkgreen rounded hover:bg-darkgreen hover:text-white transition"
//             >
//               Live Demo
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* 🔽 Other Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-[#1a1a1a] rounded-lg shadow-md border border-gray-800 hover:border-darkgreen transition"
//           >
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={500}
//               height={300}
//               className="w-full h-40 object-contain rounded-t"
//             />
//             <div className="p-4">
//               <h4 className="text-lg font-bold text-darkgreen">{project.title}</h4>
//               <p className="text-sm text-gray-400 mb-3">{project.summary}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 className="text-sm bg-darkgreen text-white px-3 py-2 rounded hover:bg-opacity-80 transition"
//               >
//                 View My Work
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

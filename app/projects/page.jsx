


'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import ProjectGallery from '../../components/ProjectGallery'  // ← adjust this path if needed

// Featured project data
const featured = {
  title: 'GitHub Portfolio Website',
  description:
    'A responsive portfolio site showcasing full stack development projects, tech stack, and design capabilities. Built with HTML, CSS, and JavaScript, hosted on GitHub Pages.',
  tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  image: '/github-pages.png',
  repo: 'https://github.com/Bigjay2708/Bigjay2708.github.io',
  live: 'https://bigjay2708.github.io',
}

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
        Projects
      </h2>

      {/* Learning Highlight */}
      <div className="fixed top-20 right-6 z-20">
        <div className="bg-[#111] text-darkgreen border border-darkgreen px-4 py-2 rounded-md shadow-lg text-sm font-mono animate-pulse backdrop-blur-sm">
          <span className="block">📚 Actively learning </span>
          <span className="block"> this new technology </span>
          <span className="font-bold text-green-400">Python 🐍</span>
        </div>
      </div>

      {/* Featured Project Spotlight */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-[#1a1a1a] border border-darkgreen rounded-lg overflow-hidden shadow-lg mb-12"
      >
        <Image
          src={featured.image}
          alt={featured.title}
          width={1200}
          height={600}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-darkgreen mb-2">{featured.title}</h3>
          <p className="text-sm text-gray-300 mb-4">{featured.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-darkgreen bg-opacity-20 text-darkgreen px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={featured.repo}
              target="_blank"
              className="text-sm px-4 py-2 border border-darkgreen text-darkgreen rounded hover:bg-darkgreen hover:text-white transition"
            >
              View Code
            </a>
            <a
              href={featured.live}
              target="_blank"
              className="text-sm px-4 py-2 border border-darkgreen text-darkgreen rounded hover:bg-darkgreen hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      {/* Filterable Project Gallery */}
      <div className="mb-12">
        <ProjectGallery />
      </div>
    </section>
  )
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

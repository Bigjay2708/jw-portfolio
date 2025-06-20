import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample project data
const projects = [
  {    
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website leveraging Next.js 15 that combines interactive elements, smooth animations, and professional content presentation.',
    longDescription: 'This portfolio showcases my web development skills with modern animations, responsive design, and optimized performance. Built with Next.js, React, and TailwindCSS, it features interactive UI components, dynamic content rendering, and seamless navigation.',
    image: '/PortfolioProject.png',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    repo: 'https://github.com/Bigjay2708/jw-portfolio',
    live: 'https://jw-portfolio.vercel.app',
    featured: false
  },
  {
    id: 2,
    title: 'The Review Room',
    description: 'A modern movie review platform built with the MERN stack that allows users to browse movies, write reviews, and manage their profiles with TMDb API integration.',
    longDescription: 'The Review Room is a full-featured movie review platform that integrates with TMDb API for movie data. Users can create accounts, write and rate reviews, follow other reviewers, and build personalized watchlists. The application uses MongoDB for data storage, Express for API endpoints, React for the frontend, and Node.js for the backend.',
    image: '/blog-project.webp',
    tags: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Bigjay2708/The-Review-Room',
    featured: true
  },
  {
    id: 3,
    title: 'NeighborHub',
    description: 'A comprehensive neighborhood community platform built with the MERN stack enabling residents to connect through real-time chat, bulletin boards, events, and marketplace.',
    longDescription: 'NeighborHub connects local community members through a feature-rich platform. It includes real-time messaging with Socket.io, community event planning, local marketplace listings, and neighborhood bulletin boards. The application features user authentication, profile management, and geolocation services to connect neighbors within proximity.',
    image: '/chat-app.jpg',
    tags: ['Next.js', 'React', 'Material-UI', 'Socket.io', 'MongoDB', 'JWT'],
    repo: 'https://github.com/Bigjay2708/neighbor-hub',
    featured: true
  },
  {
    id: 4,
    title: 'E-commerce Store',
    description: 'Full-stack e-commerce application using MERN stack with modern UI and secure payment processing.',
    longDescription: 'This e-commerce platform provides a complete shopping experience with product browsing, cart management, secure checkout with Stripe integration, and user account management. The admin dashboard offers inventory management, sales analytics, and order processing functionality. Built with MongoDB for flexible product data storage, Express for RESTful APIs, React for dynamic UI, and Node.js for server-side operations.',
    image: '/e-commerce.webp',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Redux'],
    repo: 'https://github.com/Bigjay2708/e-commerce-platform',
    featured: false
  },  {
    id: 5,
    title: 'Task Management App',
    description: 'A productivity application for task management with drag-and-drop functionality, team collaboration, and progress tracking.',
    longDescription: 'This Kanban-style task management application helps users organize work with customizable boards, lists, and cards. Features include drag-and-drop task organization, due date reminders, file attachments, team member assignments, and progress tracking. The app uses React for the frontend with React Beautiful DND for drag-and-drop functionality, and Firebase for backend services including real-time updates.',
    image: '/tech-words.png',
    tags: ['React', 'Firebase', 'React Beautiful DND', 'Authentication', 'Real-time Updates'],
    repo: 'https://github.com/Bigjay2708/task-manager',
    featured: false
  }
];

// Extract unique tags
const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

export default function ProjectGallery() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  // Filter projects based on tags and search query
  const filtered = projects
    .filter(project => {
      // Tag filtering
      const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
      
      // Search filtering (case insensitive)
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesTag && matchesSearch;
    })
    .sort((a, b) => {
      // Sorting logic
      switch(sortOption) {
        case 'nameAsc':
          return a.title.localeCompare(b.title);
        case 'nameDesc':
          return b.title.localeCompare(a.title);
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0; // Default order (as defined in the array)
      }
    });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="bg-[#0D0D0D] p-6 rounded-xl shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl text-gray-200 mb-4 md:mb-0">Projects</h2>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-[#171717] text-gray-300 px-4 py-2 pl-10 rounded-lg border border-gray-700 focus:border-darkgreen focus:outline-none w-full sm:w-64 transition-all duration-300"
            />
            <svg 
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Sort dropdown */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="bg-[#171717] text-gray-300 px-4 py-2 rounded-lg border border-gray-700 focus:border-darkgreen focus:outline-none transition-all duration-300"
          >
            <option value="default">Default Order</option>
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
            <option value="featured">Featured First</option>
          </select>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag('All')}
          className={`px-3 py-1 rounded-full text-sm font-medium focus:outline-none transition-all duration-300 
            ${selectedTag === 'All' 
              ? 'bg-darkgreen text-white shadow-lg shadow-darkgreen/20' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium focus:outline-none transition-all duration-300
              ${selectedTag === tag 
                ? 'bg-darkgreen text-white shadow-lg shadow-darkgreen/20' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            {tag}
          </button>
        ))}
      </div>      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)'
                }}
                className="bg-[#171717] rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-darkgreen transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    style={{
                      transform: hoveredProject === project.id ? 'scale(1.08)' : 'scale(1)'
                    }}
                  />
                  {project.featured && (
                    <motion.div 
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="absolute top-3 right-3 bg-darkgreen text-white text-xs px-2 py-1 rounded-full shadow-lg"
                    >
                      Featured
                    </motion.div>
                  )}                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                >
                  <div className="p-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl text-gray-100 font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      className="text-xs bg-gray-800 text-darkgreen px-2 py-0.5 rounded-full border border-darkgreen/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 4 && (
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-gray-800 text-darkgreen px-2 py-0.5 rounded-full border border-darkgreen/20"
                    >
                      +{project.tags.length - 4} more
                    </motion.span>
                  )}
                </div>
                {/* Project Links */}
                <div className="flex gap-2">
                  {project.repo && (
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(75, 85, 99, 0.9)" }}
                      whileTap={{ scale: 0.95 }}
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs bg-gray-800 text-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-300 flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.8)" }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs bg-darkgreen text-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-300 flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-16"
          >
            <div className="bg-[#171717] rounded-lg p-8 border border-gray-800">
              <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16v-4m4 4h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => {setSelectedTag('All'); setSearchQuery('');}}
                className="mt-4 px-4 py-2 bg-darkgreen/20 text-darkgreen rounded-md hover:bg-darkgreen/30 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>      {/* Project Detail Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#171717] rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-700"
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(220, 38, 38, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowModal(false)} 
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-all z-10"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white"
                  >
                    {selectedProject.title}
                  </motion.h2>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {selectedProject.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      className="text-xs bg-gray-800 text-darkgreen px-2 py-1 rounded-full border border-darkgreen/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="prose prose-invert max-w-none"
                >
                  <h3 className="text-xl text-darkgreen font-semibold mb-2">Project Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedProject.longDescription || selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.repo && (
                      <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(75, 85, 99, 0.9)" }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md hover:shadow-md transition-all duration-300 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                        View Source Code
                      </motion.a>
                    )}
                    {selectedProject.live && (
                      <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-darkgreen hover:bg-darkgreen/80 text-white rounded-md hover:shadow-md transition-all duration-300 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit Live Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

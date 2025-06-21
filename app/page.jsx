'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import StackCube from '@/components/StackCube'
import TypewriterEffect from '@/components/TypewriterEffect'
import ProjectCarousel from '@/components/ProjectCarousel'
import LoadingScreen from '@/components/LoadingScreen'
import useLoading from '@/hooks/useLoading'


export default function HomePage() {
  const { isLoading, loadingProgress } = useLoading()

  return (
    <main>
      <LoadingScreen isLoading={isLoading} loadingProgress={loadingProgress} loadingText="Loading Homepage" />
      <section className="text-gray-200 px-4">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center relative">
          {/* TypewriterEffect - Positioned above grid */}
          <div className="w-full text-center mb-12 z-20">
            <TypewriterEffect 
              phrases={[
                'Jason Wells.',
                'Full Stack Dev.',
                'MERN Specialist.',
                'UI/UX Designer.',
                'Problem Solver.',
                'Tech Enthusiast.'
              ]}
              typingSpeed={70}
              deletingSpeed={40}
              delayBetweenPhrases={1800}
              className="text-6xl sm:text-7xl font-bold"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
                Detail-driven web developer with a strong foundation in the MERN stack, passionate about user-focused design, 
                modern frontend development, and collaborative problem solving.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/projects"
                    className="px-6 py-3 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    View Projects
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Me
                  </Link>
                </motion.div>
              </div>
              
              <div className="flex mt-12 gap-4">
                <motion.a 
                  href="https://github.com/Bigjay2708" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/jasonwells83" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="./contact" 
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex justify-center relative"
            >
              <div className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden border-4 border-darkgreen/30 shadow-2xl">
                <Image
                  src="/mypic2.jpg"
                  alt="Jason Wells"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating decoration elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-20 h-20 bg-darkgreen/10 rounded-full backdrop-blur-md border border-darkgreen/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-darkgreen/10 rounded-full backdrop-blur-md border border-darkgreen/20"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute top-1/2 -right-10 w-10 h-10 bg-darkgreen/10 rounded-full backdrop-blur-md border border-darkgreen/20"
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Section with StackCube */}
        <div className="py-20 bg-gray-900/30 border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Tech Stack
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I leverage cutting-edge technologies to build robust, scalable, and responsive applications that deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <StackCube />
              </div>
              <div className="order-1 md:order-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-darkgreen transition-all duration-300 hover:shadow-md">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-darkgreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                      </svg>
                      Frontend
                    </h3>
                    <div className="text-gray-300 space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>React</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Next.js</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Tailwind CSS</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Framer Motion</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-darkgreen transition-all duration-300 hover:shadow-md">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-darkgreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                      Backend
                    </h3>
                    <div className="text-gray-300 space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Node.js</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Express</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>MongoDB</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>RESTful APIs</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-darkgreen transition-all duration-300 hover:shadow-md">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-darkgreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      Tools
                    </h3>
                    <div className="text-gray-300 space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Git & GitHub</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>VS Code</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Vercel</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Postman</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-darkgreen transition-all duration-300 hover:shadow-md">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-darkgreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      Other Skills
                    </h3>
                    <div className="text-gray-300 space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Responsive Design</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>API Integration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>Performance Optimization</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-darkgreen rounded-full mr-2"></div>
                        <span>UI/UX Principles</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-end">
                  <Link
                    href="/about"
                    className="inline-block px-6 py-3 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300"
                  >
                    Learn More About My Skills
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <div className="py-20 border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore some of my recent work. Each project represents a unique challenge solved with creative solutions and modern technologies.
              </p>
            </div>
            <ProjectCarousel />
          </motion.div>
        </div>

        {/* About Me Section */}
        <div className="py-20 border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  About Me
                </h2>
                <p className="text-gray-300 mb-6">
                  I'm a passionate full-stack developer with a background in precision-based trades that has given me a unique eye for detail and problem-solving.
                </p>
                <p className="text-gray-300 mb-6">
                  My journey into web development began with a fascination for creating interactive experiences that solve real-world problems. I'm constantly expanding my skills and staying up-to-date with the latest technologies.
                </p>
                <p className="text-gray-300 mb-8">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors.
                </p>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Me
                </Link>
              </div>
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden border-4 border-darkgreen/30 shadow-2xl">
                  <Image
                    src="/PortfolioPhoto2.jpg"
                    alt="Jason Wells at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Expertise Section */}
        <div className="py-20 bg-gray-900/30 border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Skills & Expertise
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive look at my technical abilities and specialized knowledge areas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Frontend Development */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-darkgreen transition-all duration-300"
              >
                <div className="w-12 h-12 bg-darkgreen/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-darkgreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
                <p className="text-gray-300 mb-4">Creating responsive, intuitive user interfaces with modern frameworks and libraries.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">React</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Next.js</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">HTML/CSS</span>
                </div>
              </motion.div>
              
              {/* Backend Development */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-darkgreen transition-all duration-300"
              >
                <div className="w-12 h-12 bg-darkgreen/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-darkgreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                <p className="text-gray-300 mb-4">Building robust server-side applications with scalable architecture.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Node.js</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Express</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">RESTful APIs</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Authentication</span>
                </div>
              </motion.div>
              
              {/* Tools & Methodologies */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-darkgreen transition-all duration-300"
              >
                <div className="w-12 h-12 bg-darkgreen/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-darkgreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tools & Methodologies</h3>
                <p className="text-gray-300 mb-4">Leveraging modern tools and practices for efficient development workflows.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Git/GitHub</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">VS Code</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Responsive Design</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Agile/Scrum</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Vercel</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/80 border-t border-gray-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-darkgreen/20 filter blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-darkgreen/20 filter blur-3xl"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you have a project in mind or want to discuss potential opportunities, I'm always excited to connect with fellow developers and innovators.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start a Conversation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/JW-Resume.pdf"
                  target="_blank"
                  className="px-8 py-4 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View My Resume
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

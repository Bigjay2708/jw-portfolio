'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaPython, FaDatabase, FaLaptopCode, 
         FaReact, FaNodeJs, FaCoffee, FaBookOpen, FaChevronUp, FaRegLightbulb, FaBriefcase, FaLightbulb,
         FaGraduationCap, FaServer, FaTools, FaArrowRight, FaGamepad, FaMusic, FaRunning, FaHome, FaUsers } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiTypescript, SiMongodb, SiExpress } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import useLoading from '@/hooks/useLoading'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
}

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const techItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100
    }
  }
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('skills');
  const { isLoading, loadingProgress } = useLoading();
  const [showLearningBadge, setShowLearningBadge] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef(null);

  // Learning technologies
  const learningTech = [
    { name: 'Python', icon: <FaPython className="text-blue-500" />, progress: 40 },
    { name: 'Data Science', icon: <FaDatabase className="text-purple-500" />, progress: 25 },
    { name: 'ML Algorithms', icon: <FaLaptopCode className="text-yellow-500" />, progress: 20 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, progress: 75 },
  ];
  
  const [currentLearning, setCurrentLearning] = useState(0);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll event listener for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Learning highlight cycling effect
  useEffect(() => {
    // Show the badge after a delay
    const badgeTimer = setTimeout(() => {
      setShowLearningBadge(true);
    }, 2500);

    // Cycle through learning technologies
    const interval = setInterval(() => {
      setCurrentLearning(prev => (prev + 1) % learningTech.length);
    }, 5000);
    
    return () => {
      clearTimeout(badgeTimer);
      clearInterval(interval);
    };
  }, [learningTech.length]);

  // Skill data
  const frontendSkills = [
    { name: 'JavaScript/React', level: 90, icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', level: 85, icon: <SiNextdotjs className="text-white" /> },
    { name: 'HTML & CSS/TailwindCSS', level: 95, icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'TypeScript', level: 75, icon: <SiTypescript className="text-blue-400" /> },
  ];

  const backendSkills = [
    { name: 'Node.js/Express', level: 80, icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB/Mongoose', level: 85, icon: <SiMongodb className="text-green-400" /> },
    { name: 'REST API Design', level: 85, icon: <FaServer className="text-gray-300" /> },
    { name: 'Git/GitHub', level: 90, icon: <FaGithub className="text-white" /> },
  ];  // Certificate data
  const experiences = [
    {
      id: 'cert-1',
      title: 'Professional Certificate in Coding: Full Stack Development with MERN',
      company: 'MIT xPro',
      period: 'January 2023 - October 2023',
      skills: [
        'Web Development',
        'Back-End Development',
        'Build, test and deploy a web application',
        'Front-End Development and React',
        'Setup Continuous Integration (CI) and Continuous Delivery (CD)'
      ],
      type: 'certificate',
      icon: <FaGraduationCap />
    },
    {
      id: 'cert-2',
      title: 'Professional Certificate in Coding: Exemplary Assignment - Frontend',
      company: 'MIT xPro',
      period: 'April 2023',
      skills: [
        'Dynamic Rendering',
        'Data Fetching',
        'Application Performance Optimization',
        'User Experience Design',
        'API Integration'
      ],
      type: 'certificate',
      icon: <FaCode />
    },
    {
      id: 'cert-3',
      title: 'Professional Certificate in Coding: Exemplary Assignment - UX',
      company: 'MIT xPro',
      period: 'September 2023',
      skills: [
        'Responsive Design',
        'User Experience (UX)',
        'Page Navigation',
        'State Management',
        'Code Reusability'
      ],
      type: 'certificate',
      icon: <FaLaptopCode />
    }
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-200 relative" ref={sectionRef}>
      <LoadingScreen isLoading={isLoading} loadingProgress={loadingProgress} loadingText="Loading About" />

      {/* Learning Highlight - Enhanced with animation and cycling content */}
      <AnimatePresence>
        {showLearningBadge && (
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="fixed top-20 right-6 z-20"
          >
            <motion.div 
              className="bg-[#111]/90 backdrop-blur-md border border-darkgreen rounded-lg overflow-hidden shadow-lg animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-darkgreen to-green-700 px-3 py-1">
                <div className="flex items-center gap-2">
                  <FaCode className="text-white" />
                  <h3 className="text-white font-medium text-sm">Currently Learning</h3>
                </div>
              </div>
              
              <div className="p-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLearning}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="text-2xl animate-pulse-slow">{learningTech[currentLearning].icon}</div>
                    <div className="w-full">
                      <p className="text-green-400 font-semibold">{learningTech[currentLearning].name}</p>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${learningTech[currentLearning].progress}%` }}
                          transition={{ duration: 1.5, type: "spring" }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-1.5 rounded-full" 
                        ></motion.div>
                      </div>
                      <p className="text-right text-xs text-gray-400 mt-1">{learningTech[currentLearning].progress}% completed</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section - Enhanced with animated background and effect */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16 text-center relative py-10"
      >
        <div className="absolute inset-0 bg-gradient-radial from-darkgreen/10 to-transparent"></div>
        <div className="relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-darkgreen bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            About Jason Wells
          </motion.h1>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-darkgreen to-transparent max-w-sm mx-auto mb-6"
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full Stack Developer with a passion for creating responsive, user-focused web applications
          </motion.p>
        </div>
      </motion.div>      
      
      {/* Main Bio Section - Enhanced with blur/glow effects */}      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex flex-col md:flex-row items-center gap-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-green-500/30 hover:shadow-lg relative overflow-hidden group"
      >
        {/* Decorative code snippets in background */}
        <div className="absolute inset-0 opacity-5 bg-[url('/tech-words.png')] bg-repeat"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-darkgreen/20 rounded-full blur-3xl group-hover:bg-darkgreen/30 transition-all duration-700"></div>
        
        <div className="relative z-10">
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-darkgreen to-transparent opacity-20 rounded-md blur-lg"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            ></motion.div>
            <div className="relative">
              <div className="rounded-md overflow-hidden animate-morph border-2 border-darkgreen/60 shadow-neon">
                <Image
                  src="/MyPic.png" 
                  alt="Jason Wells - Full Stack Developer"
                  width={250}
                  height={250}
                  className="object-cover z-10 relative"
                  priority
                />
              </div>
            </div>
            <motion.div 
              className="absolute -top-3 -left-3 bg-[#111] border border-darkgreen rounded-md py-1 px-2 text-xs font-mono text-green-400 transform -rotate-6 shadow-md"
              whileHover={{ 
                rotate: 0,
                scale: 1.1, 
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="block">Full Stack</span>
              <span className="block">Developer</span>
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -right-2 bg-darkgreen/10 backdrop-blur-sm border border-darkgreen/50 rounded-md py-1 px-3 text-xs text-green-400 shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for hire
              </span>
            </motion.div>
          </div>
        </div>
        
        <div className="space-y-4 z-10">
          <h3 className="text-xl font-semibold text-darkgreen">Professional Profile</h3>
          <motion.p
            variants={fadeIn}
            className="text-gray-300 leading-relaxed relative z-10"
          >
            Detail-driven web developer with a strong foundation in the MERN stack and a background in precision-based trades. 
            Recently completed a Professional Certificate in Full Stack Web Development (MIT xPro), now leveraging technical discipline, 
            project planning, and communication skills to build clean, responsive, and accessible web applications.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-gray-300 leading-relaxed relative z-10"
          >
            Passionate about user-focused design, modern frontend development, and collaborative problem solving. 
            Actively pursuing opportunities to contribute meaningfully to development teams while continuing to refine my skills 
            in modern frontend technologies and industry best practices.
          </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-darkgreen/20 rounded-lg blur-md group-hover:bg-darkgreen/30 transition-all duration-300"></div>
              <Link 
                href="/JasonWellsResume.pdf" 
                className="relative inline-flex items-center gap-2 bg-darkgreen text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 z-10"
                download
              >
                <FaDownload className="text-sm" />
                Resume
              </Link>
            </motion.div>

            <div className="flex space-x-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://github.com/Bigjay2708" 
                  target="_blank"
                  className="inline-flex items-center justify-center w-9 h-9 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>                <Link 
                  href="https://linkedin.com/in/jasonwells83" 
                  target="_blank"
                  className="inline-flex items-center justify-center w-9 h-9 bg-[#0A66C2] text-white rounded-full hover:bg-[#0A66C2]/90 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-9 h-9 bg-darkgreen text-white rounded-full hover:bg-green-700 transition-all duration-300"
                  aria-label="Contact"
                >
                  <FaEnvelope className="text-lg" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>      </motion.div>
      
      {/* Skills Badges - Replacing Floating Tech Words */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 mb-6"
      >
        <div className="flex justify-center flex-wrap gap-2 max-w-3xl mx-auto">
          {[
            { name: 'React', icon: <FaReact className="text-blue-400" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> }
          ].map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-3 py-1.5 bg-[#1a1a1a] text-gray-300 rounded-full border border-gray-700 
                         hover:border-darkgreen/60 hover:bg-[#232323] transition-all duration-300
                         flex items-center gap-1.5 text-sm shadow-sm"
            >
              <span className="text-lg">{tech.icon}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Tab Navigation - Enhanced with better styling and animation */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-4 bg-[#111] p-1.5 rounded-lg shadow-md border border-gray-800">
          <motion.button 
            onClick={() => setActiveTab('skills')}
            className={`px-5 py-2.5 rounded-md transition-all duration-300 flex items-center gap-2 ${activeTab === 'skills' 
              ? 'bg-darkgreen text-white shadow-md' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
            whileHover={{ scale: activeTab !== 'skills' ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTools className={activeTab === 'skills' ? 'text-white' : 'text-gray-500'} />
            <span className="relative">
              Skills
              {activeTab === 'skills' && (
                <motion.span 
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                />
              )}
            </span>
          </motion.button>
            <motion.button 
            onClick={() => setActiveTab('experience')}
            className={`px-5 py-2.5 rounded-md transition-all duration-300 flex items-center gap-2 ${activeTab === 'experience' 
              ? 'bg-darkgreen text-white shadow-md' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
            whileHover={{ scale: activeTab !== 'experience' ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap className={activeTab === 'experience' ? 'text-white' : 'text-gray-500'} />
            <span className="relative">
              Certificates
              {activeTab === 'experience' && (
                <motion.span 
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                />
              )}
            </span>
          </motion.button>
          
          <motion.button 
            onClick={() => setActiveTab('personal')}
            className={`px-5 py-2.5 rounded-md transition-all duration-300 flex items-center gap-2 ${activeTab === 'personal' 
              ? 'bg-darkgreen text-white shadow-md' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
            whileHover={{ scale: activeTab !== 'personal' ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRegLightbulb className={activeTab === 'personal' ? 'text-white' : 'text-gray-500'} />
            <span className="relative">
              Personal
              {activeTab === 'personal' && (
                <motion.span 
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                />
              )}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Tab Content Container with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {/* Technical Skills Section - Enhanced with icon tags and interactive elements */}
        {activeTab === 'skills' && (
          <motion.div 
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-darkgreen/20 rounded-lg">
                <FaTools className="text-darkgreen text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Technical Skills</h3>
              <div className="h-0.5 flex-grow bg-gradient-to-r from-darkgreen to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Frontend Skills */}
              <motion.div variants={fadeInFromLeft} className="space-y-6">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-darkgreen mb-4 flex items-center gap-2">
                    <SiJavascript className="text-yellow-400" />
                    Frontend Development
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <FaReact className="text-blue-400" /> React
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <SiNextdotjs className="text-white" /> Next.js
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <SiTailwindcss className="text-sky-400" /> TailwindCSS
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <SiTypescript className="text-blue-400" /> TypeScript
                    </motion.span>
                  </div>
                </div>
                
                {frontendSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1 items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 group-hover:bg-gray-600 transition-colors duration-300">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        className="bg-gradient-to-r from-green-400 to-darkgreen h-2.5 rounded-full group-hover:animate-pulse"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              {/* Backend Skills */}
              <motion.div variants={fadeInFromRight} className="space-y-6">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-darkgreen mb-4 flex items-center gap-2">
                    <FaServer className="text-gray-300" />
                    Backend Development
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <FaNodeJs className="text-green-500" /> Node.js
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <SiExpress className="text-white" /> Express
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <SiMongodb className="text-green-400" /> MongoDB
                    </motion.span>
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 100, 0, 0.3)" }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 flex items-center gap-1.5"
                    >
                      <FaGithub className="text-white" /> Git/GitHub
                    </motion.span>
                  </div>
                </div>
                
                {backendSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1 items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 group-hover:bg-gray-600 transition-colors duration-300">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        className="bg-gradient-to-r from-green-400 to-darkgreen h-2.5 rounded-full group-hover:animate-pulse"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Development Tools & Methodologies */}
            <div className="mt-10">
              <h4 className="text-lg font-medium text-darkgreen mb-4">Development Tools & Methodologies</h4>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                {['VS Code', 'Git', 'GitHub', 'npm', 'Webpack', 'Figma', 'Responsive Design', 'REST API', 
                  'Agile/Scrum', 'Pair Programming', 'CI/CD', 'Jest', 'Netlify', 'Vercel'].map((item) => (
                  <motion.div
                    key={item}
                    variants={techItem}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(0, 100, 0, 0.3)",
                      borderColor: "#006400"
                    }}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 transition-all duration-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
        
        {/* Experience Section - Enhanced with timeline and cards */}
        {activeTab === 'experience' && (
          <motion.div 
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800"
          >            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-darkgreen/20 rounded-lg">
                <FaGraduationCap className="text-darkgreen text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Certifications</h3>
              <div className="h-0.5 flex-grow bg-gradient-to-r from-darkgreen to-transparent"></div>
            </div>
            
            <div className="relative border-l-2 border-darkgreen/50 pl-8 ml-4">              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-10 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 w-6 h-6 rounded-full bg-[#1a1a1a] border-2 border-darkgreen flex items-center justify-center text-darkgreen">
                    {exp.icon}
                  </div>
                  
                  {/* Timeline card */}
                  <motion.div 
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 100, 0, 0.1)" }}
                    className="bg-[#232323] rounded-lg p-5 border border-gray-700 hover:border-darkgreen/50 transition-all duration-300"
                  >
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>                      <span className="text-xs px-3 py-1 rounded-full bg-blue-900/40 text-blue-400 border border-blue-900/60">
                        Certificate
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span className="font-medium text-gray-300">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                      <div className="mt-3">
                        <h5 className="text-sm font-medium text-darkgreen mb-2">Skills / Knowledge:</h5>
                        <ul className="text-sm text-gray-300 space-y-1 list-disc ml-4">
                          {exp.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Personal Section - Enhanced with cards and design */}
        {activeTab === 'personal' && (
          <motion.div 
            key="personal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-darkgreen/20 rounded-lg">
                <FaRegLightbulb className="text-darkgreen text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Personal</h3>
              <div className="h-0.5 flex-grow bg-gradient-to-r from-darkgreen to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">              {/* About Me Section */}
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#232323] p-5 rounded-lg border border-gray-700"
                >
                  <h4 className="text-lg font-medium text-darkgreen mb-3 flex items-center gap-2">
                    <FaBookOpen className="text-gray-300" /> Background
                  </h4>
                  <p className="text-gray-300">
                    After working in precision-based trades for several years, I've transitioned to web development, 
                    bringing a unique perspective to digital craftsmanship. I apply the same meticulous attention to detail in my code 
                    that I developed in my previous career.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#232323] p-5 rounded-lg border border-gray-700"
                >
                  <h4 className="text-lg font-medium text-darkgreen mb-3 flex items-center gap-2">
                    <FaCoffee className="text-gray-300" /> Education Highlights
                  </h4>
                  <div className="flex items-center gap-3 mb-3">
                    <Image 
                      src="/MIT_logo.svg" 
                      width={35} 
                      height={20} 
                      alt="MIT xPro Logo"
                      className="rounded-sm"
                      unoptimized
                    />
                    <span className="font-medium text-gray-200">Massachusetts Institute of Technology</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    I recently completed my professional certification through MIT xPro's comprehensive MERN stack program, 
                    giving me a solid foundation in modern web development practices and technologies.
                  </p>
                  <div className="text-darkgreen text-xs font-semibold mt-2">08/2024 - 03/2025</div>
                </motion.div>
              </div>
              
              {/* Hobbies and Quote */}              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#232323] p-5 rounded-lg border border-gray-700"
                >
                  <h4 className="text-lg font-medium text-darkgreen mb-3 flex items-center gap-2">
                    <span>💡</span> Core Strengths
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 flex items-center gap-2">
                      <FaLaptopCode className="text-blue-400" /> Technical Accuracy
                    </span>                    <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 flex items-center gap-2">
                      <FaBookOpen className="text-green-400" /> Attention to Detail
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 flex items-center gap-2">
                      <FaRunning className="text-yellow-400" /> Time Management
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 flex items-center gap-2">
                      <FaLightbulb className="text-purple-400" /> Problem Solving
                    </span>                    <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 flex items-center gap-2">
                      <FaBriefcase className="text-red-400" /> Project Management
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700 flex items-center gap-2">
                      <FaLaptopCode className="text-teal-400" /> Client Communication
                    </span>
                  </div>
                </motion.div>
                  <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#232323] p-5 rounded-lg border border-gray-700 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-darkgreen/10 rounded-full blur-xl"></div>
                  <h4 className="text-lg font-medium text-darkgreen mb-3 flex items-center gap-2">
                    <span>💬</span> Interests & Hobbies
                  </h4>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-md">
                      <FaLaptopCode className="text-blue-400" />
                      <span className="text-gray-300 text-sm">Coding</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-md">
                      <FaMusic className="text-purple-400" />
                      <span className="text-gray-300 text-sm">Music</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-md">
                      <FaRunning className="text-green-400" />
                      <span className="text-gray-300 text-sm">Fitness</span>
                    </div>                    <div className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-md">
                      <FaUsers className="text-red-400" />                      <span className="text-gray-300 text-sm">Family</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-2 bg-darkgreen rounded-full shadow-md text-white z-30 hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 text-sm"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronUp size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  )
}

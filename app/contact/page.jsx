'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { FaDownload, FaCheckCircle, FaEnvelope, FaArrowUp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/LoadingScreen'
import useLoading from '@/hooks/useLoading'

export default function ContactPage() {    const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' })
  const [validation, setValidation] = useState({ user_name: true, user_email: true, message: true })
  const [showBackToTop, setShowBackToTop] = useState(false)
  const formRef = useRef()
  
  // Use the loading hook for page loading
  const { isLoading, loadingProgress } = useLoading()

  // Monitor scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Handle input changes and validate
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation
    if (value.trim() === '') {
      setValidation(prev => ({ ...prev, [name]: false }))
    } else if (name === 'user_email' && !/^\S+@\S+\.\S+$/.test(value)) {
      setValidation(prev => ({ ...prev, [name]: false }))
    } else {
      setValidation(prev => ({ ...prev, [name]: true }))
    }
  }
  
  const validateForm = () => {
    const newValidation = {
      user_name: formData.user_name.trim() !== '',
      user_email: /^\S+@\S+\.\S+$/.test(formData.user_email),
      message: formData.message.trim() !== ''
    }
    
    setValidation(newValidation)
    
    return Object.values(newValidation).every(isValid => isValid)
  }

  const handleSubmit = async (e) => {    
    e.preventDefault()
    
    if (!validateForm()) {
      setError('Please fill out all fields correctly.')
      return
    }
    
    setError('')
    setFormSubmitting(true)
    
    try {      const result = await emailjs.sendForm(
        'service_so976hz',
        'template_0t0so4p',
        formRef.current,
        'AK1LwOUccUhtCqIEW'
      )
      if (result.text === 'OK') {
        setSubmitted(true)
        formRef.current.reset()
        setFormData({ user_name: '', user_email: '', message: '' })
      }
    } catch (error) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)    
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-200 min-h-[80vh] relative">
      {/* Background decoration */}      <div className="absolute top-40 right-0 opacity-10 pointer-events-none hidden lg:block">
        <Image 
          src="/contact-decoration.svg" 
          alt="Decorative contact illustration" 
          width={200} 
          height={200} 
          aria-hidden="true"
        />
      </div>
      
      <LoadingScreen isLoading={isLoading} loadingProgress={loadingProgress} loadingText="Loading Contact" />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-darkgreen">Contact Me</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-darkgreen to-green-400 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-center max-w-2xl mx-auto text-gray-300">
          Let's connect and discuss how we can bring your ideas to life
        </p>
      </motion.div>

      {/* Contact + Info Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-6 text-gray-300">
            Ready to collaborate on innovative solutions? Whether you're looking to discuss a project, 
            explore potential opportunities, or connect with a fellow tech enthusiast, I'm here to engage. 
            Let's transform ideas into impactful digital experiences.
          </p>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-700 mb-6 hover:border-darkgreen/50 transition-all duration-300 hover:shadow-lg hover:shadow-darkgreen/20">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="bg-darkgreen/20 p-2 rounded-full mr-3 flex items-center justify-center">
                <FaEnvelope className="text-darkgreen" />
              </span>
              Quick Connect
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-darkgreen mr-3 mt-1">
                  <FaEnvelope />
                </span>
                <div>
                  <strong className="block text-white">Email:</strong>
                  <a href="mailto:bigjay2708@gmail.com" className="text-darkgreen hover:underline">
                    bigjay2708@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-darkgreen mr-3 mt-1">
                  <FaPhoneAlt />
                </span>
                <div>
                  <strong className="block text-white">Phone:</strong>
                  <span>(614) 738-5363</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-darkgreen mr-3 mt-1">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <strong className="block text-white">Location:</strong>
                  <span>Hilliard, OH (Remote OK)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-darkgreen mr-3 mt-1">
                  <FaClock />
                </span>
                <div>
                  <strong className="block text-white">Availability:</strong>
                  <span>Open to new opportunities</span>
                </div>
              </li>
            </ul>
          </div>          <div className="flex gap-4 mt-6">
            {/* Social Media Links */}
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

            {/* Resume Download Button */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-darkgreen/20 rounded-lg blur-md group-hover:bg-darkgreen/30 transition-all duration-300"></div>
              <Link
                href="/JasonWellsResume.pdf"
                download
                className="relative flex items-center gap-2 bg-darkgreen text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 z-10"
              >
                <FaDownload />
                Resume
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form - DO NOT MODIFY THIS SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-700 hover:border-darkgreen/50 transition-all duration-300 hover:shadow-lg hover:shadow-darkgreen/20"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
          {submitted ? (
            <div className="text-center py-6">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mb-4"
              >
                <FaCheckCircle className="text-green-500 text-5xl mx-auto" />
              </motion.div>
              <p className="text-darkgreen text-lg font-medium mb-2">Thank you for your message!</p>
              <p className="text-gray-400 mb-4">I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-darkgreen/20 text-darkgreen rounded-md hover:bg-darkgreen/30 transition-all duration-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input 
                  id="name"                  name="user_name"
                  type="text" 
                  required 
                  value={formData.user_name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100 placeholder-gray-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input 
                  id="email"                  name="user_email"
                  type="email" 
                  required 
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100 placeholder-gray-500" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message"                  name="message"
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your project details or let's explore potential opportunities..."                  className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100 placeholder-gray-500"
                ></textarea>
              </div>
              
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  disabled={formSubmitting}
                  className={`w-fit px-4 bg-gradient-to-r from-green-600 to-green-800 text-gray-600 py-1.5 rounded-lg 
                    transform transition-all duration-300 ease-in-out flex items-center justify-center gap-2
                    hover:from-green-700 hover:to-green-900 
                    hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 
                    hover:-translate-y-0.5
                    active:scale-95 active:shadow-inner
                    ${formSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {formSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-sm">Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-sm">Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>      {/* Closing Note */}
      <div className="text-center mt-8 text-gray-400 relative bg-[#1a1a1a] p-8 rounded-lg shadow-md border border-gray-700 max-w-3xl mx-auto">
        <div className="absolute inset-0 bg-gradient-radial from-darkgreen/5 to-transparent rounded-lg"></div>
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 font-medium">
              Let's build something extraordinary together.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Your next project is just a message away.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-darkgreen rounded-full shadow-md text-white z-30 hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp size={14} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Animated Corner Decoration */}
      <div className="fixed bottom-0 left-0 w-40 h-40 pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 100 Q 50 100 50 50 Q 50 0 100 0"
            stroke="#013220"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  )
}

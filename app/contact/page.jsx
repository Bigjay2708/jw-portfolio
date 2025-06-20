'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      const result = await emailjs.sendForm(
        'service_so976hz',
        'template_0t0so4p',
        formRef.current,
        'AK1LwOUccUhtCqIEW'
      )
      
      if (result.text === 'OK') {
        setSubmitted(true)
        formRef.current.reset()
      }
    } catch (error) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-200 min-h-[80vh]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>

      {/* Contact + Info Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-6">
            Ready to collaborate on innovative solutions? Whether you're looking to discuss a project, 
            explore potential opportunities, or connect with a fellow tech enthusiast, I'm here to engage. 
            Let's transform ideas into impactful digital experiences.
          </p>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow border border-gray-700 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Connect</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="text-darkgreen mr-2">→</span>
                <strong>Email:</strong> 
                <a href="mailto:bigjay2708@gmail.com" className="ml-2 text-darkgreen hover:underline">
                  bigjay2708@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-darkgreen mr-2">→</span>
                <strong>Phone:</strong> 
                <span className="ml-2">(614) 738-5363</span>
              </li>
              <li className="flex items-center">
                <span className="text-darkgreen mr-2">→</span>
                <strong>Location:</strong> 
                <span className="ml-2">Hilliard, OH (Remote OK)</span>
              </li>
              <li className="flex items-center">
                <span className="text-darkgreen mr-2">→</span>
                <strong>Availability:</strong> 
                <span className="ml-2">Open to new opportunities</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            {[
              { href: 'https://www.linkedin.com/in/jason-wells-329736304/', src: '/linkedin.png', alt: 'LinkedIn' },
              { href: 'https://github.com/Bigjay2708', src: '/github.jpg', alt: 'GitHub' },
            ].map(({ href, src, alt }) => (
              <a 
                key={alt} 
                href={href} 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#013220] p-2 rounded-lg hover:bg-opacity-80 transition-all duration-300"
                style={{
                  display: 'inline-block',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(12deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <Image 
                  src={src} 
                  alt={alt} 
                  width={32} 
                  height={32} 
                  style={{ display: 'block' }}
                />
              </a>
            ))}            {/* Resume Download Button */}
            <Link
              href="/JW-Resume.pdf"
              className="bg-[#013220] p-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center gap-2"
              download
              style={{
                display: 'inline-flex',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(12deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <FaDownload size={20} className="text-white" />
              <span className="text-white text-sm">Download Resume</span>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
          {submitted ? (
            <div className="text-darkgreen">
              <p>Thank you! Your message has been sent.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-darkgreen hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input 
                  id="name" 
                  name="user_name"
                  type="text" 
                  required 
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100 placeholder-gray-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input 
                  id="email" 
                  name="user_email"
                  type="email" 
                  required 
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100 placeholder-gray-500" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required 
                  placeholder="Share your project details or let's explore potential opportunities..."
                  className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100 placeholder-gray-500"
                ></textarea>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-fit px-4 bg-gradient-to-r from-green-600 to-green-800 text-gray-600 py-1.5 rounded-lg 
                    transform transition-all duration-300 ease-in-out flex items-center justify-center gap-2
                    hover:from-green-700 hover:to-green-900 
                    hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 
                    hover:-translate-y-0.5
                    active:scale-95 active:shadow-inner
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
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
        </div>
      </div>

      {/* Closing Note */}
      <div className="text-center mt-8 text-gray-400">
        <p className="text-sm">
          Let's build something extraordinary together. Your next project is just a message away.
        </p>
      </div>
    </section>
  )
}

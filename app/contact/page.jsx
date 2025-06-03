'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to EmailJS or backend
  
    setSubmitted(true)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>

      {/* Contact + Info Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Use this form to send me a message. I'm eager to connect with fellow developers,
            potential collaborators, or anyone interested in my work. Whether you have questions,
            project ideas, or just want to say hello, don't hesitate to reach out.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><strong>Name:</strong> Jason Wells</li>
            <li><strong>Address:</strong> 42 Anystreet Drive, Hilliard, Ohio 43000</li>
            <li><strong>Email:</strong> <a href="mailto:Bigjay2708@gmail.com" className="text-darkgreen hover:underline">Bigjay2708@gmail.com</a></li>
            <li><strong>Business Phone:</strong> 098-765-4321</li>
            <li><strong>Personal Phone:</strong> 123-456-7890</li>
          </ul>

          <div className="flex gap-4 mt-6 flex-wrap">
            {[
              { href: 'https://www.linkedin.com/in/jason-wells-329736304/', src: '/linkedin.png', alt: 'LinkedIn' },
              { href: 'https://github.com/Bigjay2708', src: '/github.jpg', alt: 'GitHub' },
              { href: 'https://x.com/BigJayWells', src: '/X.png', alt: 'X' },
              { href: 'https://www.facebook.com/jason.wells.5070', src: '/Facebook.png', alt: 'Facebook' },
              { href: 'https://www.instagram.com/bigjay2708', src: '/instagram.png', alt: 'Instagram' },
            ].map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noreferrer">
                <Image src={src} alt={alt} width={32} height={32} className="hover:opacity-80" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Send me a Message</h3>
          {submitted ? (
            <p className="text-darkgreen">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input id="name" type="text" required className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input id="email" type="email" required className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" rows={4} required className="w-full px-3 py-2 bg-[#111] border border-gray-600 rounded text-sm text-gray-100"></textarea>
              </div>
              <button type="submit" className="w-full bg-darkgreen text-white py-2 rounded hover:bg-opacity-90 transition">Send</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

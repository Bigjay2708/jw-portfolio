'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaDownload, FaEnvelope } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
        Full Stack Developer (MERN)
      </h2>

      {/* Main Bio Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-500/30 hover:shadow-lg">
        <Image
          src="/bio-pic.jpg" 
          alt="Jason Wells - Full Stack Developer"
          width={250}
          height={250}
          className="rounded-md object-cover"
        />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-darkgreen">Professional Profile</h3>
          <p>
            I'm a Full Stack Developer with a Professional Certificate in Full Stack Development with MERN from MIT xPro. 
            With a strong background in precision measurement and project management from my 13 years in the countertop industry, 
            I bring a unique perspective to web development, combining technical precision with problem-solving skills.
          </p>
          <p>
            I specialize in building clean, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), 
            with a focus on user-centered design and clean architecture. My experience in managing complex projects and maintaining 
            high accuracy rates translates well into developing reliable and efficient web solutions.
          </p>
          <div className="mt-4">
            <Link 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 bg-darkgreen text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              download
            >
              <FaDownload />
              Download Resume
            </Link>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-12 bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-darkgreen mb-4 text-center">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div>
            <h4 className="text-gray-300 mb-2">Frontend Development</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• React.js</li>
              <li>• HTML5 & CSS3</li>
              <li>• JavaScript</li>
              <li>• Responsive Design</li>
              <li>• Component-Based Architecture</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-300 mb-2">Backend Development</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Node.js & Express.js</li>
              <li>• MongoDB & Mongoose</li>
              <li>• RESTful APIs</li>
              <li>• CRUD Operations</li>
              <li>• Firebase</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-300 mb-2">Tools & Technologies</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Git & GitHub</li>
              <li>• Visual Studio Code</li>
              <li>• npm</li>
              <li>• Postman</li>
              <li>• Vercel</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mt-12 bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-darkgreen mb-4 text-center">Professional Experience</h3>
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-full md:w-2/3">
            <h4 className="text-gray-300">Full Stack Development (MERN)</h4>
            <p className="text-sm text-gray-400 mb-2">Professional Certificate from MIT xPro</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>• Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js</li>
              <li>• Implemented responsive designs and component-based architecture</li>
              <li>• Created RESTful APIs and performed CRUD operations</li>
              <li>• Utilized version control and modern development tools</li>
            </ul>
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="text-gray-300">Previous Experience Highlights</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>• Achieved 98% project accuracy rate through precise technical implementation</li>
              <li>• Managed 100+ complex projects annually with multiple material types</li>
              <li>• Increased client satisfaction by 20% through quality-focused development</li>
              <li>• Streamlined processes resulting in 25% faster project completion</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Looking for a detail-oriented Full Stack Developer with a strong foundation in MERN stack? 
          Let's connect and discuss how I can contribute to your development team.
        </p>

        {/* Centered Contact Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-darkgreen text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors gap-2"
          aria-label="Contact Me"
          title="Contact Me"
          style={{ textShadow: '0 1px 4px #22c55e' }}
        >
          <FaEnvelope size={20} />
          <span>Contact Me</span>
        </Link>
      </div>
    </section>
  )
}

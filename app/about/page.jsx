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

      {/* Main Bio Section */}      <div className="flex flex-col md:flex-row items-center gap-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-500/30 hover:shadow-lg">
        <Image
          src="/MyPic.png" 
          alt="Jason Wells - Full Stack Developer"
          width={250}
          height={250}
          className="rounded-md object-cover"
        />        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-darkgreen">Professional Profile</h3>
          <p>
            Detail-driven web developer with a strong foundation in the MERN stack and a background in precision-based trades. 
            Recently completed a Professional Certificate in Full Stack Web Development (MIT xPro), now leveraging technical discipline, 
            project planning, and communication skills to build clean, responsive, and accessible web applications.
          </p>
          <p>
            Passionate about user-focused design, modern frontend development, and collaborative problem solving. 
            Actively pursuing opportunities to contribute meaningfully to development teams while continuing to refine my skills 
            in modern frontend technologies and industry best practices.
          </p><div className="mt-4">
            <Link 
              href="/JW-Resume.pdf" 
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
        <h3 className="text-xl font-semibold text-darkgreen mb-4 text-center">Technical Skills</h3>        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div>
            <h4 className="text-gray-300 mb-2">Frontend Development</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• React.js</li>
              <li>• Next.js</li>
              <li>• HTML5 & CSS3</li>
              <li>• JavaScript & TypeScript</li>
              <li>• Responsive Design</li>
              <li>• Component-Based Architecture</li>
              <li>• Material-UI (MUI)</li>
              <li>• TailwindCSS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-300 mb-2">Backend Development</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Node.js & Express.js</li>
              <li>• MongoDB & Mongoose</li>
              <li>• RESTful APIs</li>
              <li>• CRUD Operations</li>
              <li>• JWT Authentication</li>
              <li>• Socket.IO</li>
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
              <li>• ESLint</li>
              <li>• Jest & Testing Library</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Experience */}      <div className="mt-12 bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-darkgreen mb-4 text-center">Education & Professional Experience</h3>
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-full md:w-2/3">
            <h4 className="text-gray-300">Massachusetts Institute of Technology</h4>
            <p className="text-sm text-gray-400 mb-2">Professional Certificate in Full Stack Development with MERN (08/2024 - 03/2025)</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>• Web Development & Back-End Development</li>
              <li>• Build, test and deploy web applications</li>
              <li>• Front-End Development and React</li>
              <li>• Setup Continuous Integration (CI) and Continuous Delivery (CD)</li>
              <li>• Dynamic Rendering & Data Fetching</li>
              <li>• Application Performance Optimization</li>
              <li>• User Experience Design & API Integration</li>
            </ul>
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="text-gray-300">Distinctive Marble & Granite - Countertop Templater</h4>
            <p className="text-sm text-gray-400 mb-2">04/2023 - 08/2024</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>• Achieved 98% project accuracy rate through advanced templating technology</li>
              <li>• Increased client satisfaction by 20% through timely delivery and quality assurance</li>
              <li>• Achieved 25% faster installation time by refining processes</li>
              <li>• Doubled customer satisfaction scores using advanced digital tools</li>
            </ul>
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="text-gray-300">Distinctive Kitchen - Countertop Templater</h4>
            <p className="text-sm text-gray-400 mb-2">03/2016 - 10/2022</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>• Improved client satisfaction by 50%+ through enhanced templating accuracy</li>
              <li>• Completed 100+ complex templating projects with 50+ material types</li>
              <li>• Handled 100+ projects annually with seamless installations</li>
              <li>• Boosted client satisfaction by 20% through measurement accuracy</li>
            </ul>
          </div>        </div>
      </div>

      {/* Transferable Skills Section */}
      <div className="mt-12 bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-darkgreen mb-4 text-center">Transferable Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          <div className="text-sm text-gray-400">• Attention to Detail</div>
          <div className="text-sm text-gray-400">• Technical Accuracy</div>
          <div className="text-sm text-gray-400">• Problem Solving</div>
          <div className="text-sm text-gray-400">• Project Planning</div>
          <div className="text-sm text-gray-400">• Client Communication</div>
          <div className="text-sm text-gray-400">• Process Optimization</div>
          <div className="text-sm text-gray-400">• Time Management</div>
          <div className="text-sm text-gray-400">• Tool Proficiency & Tech Learning</div>
          <div className="text-sm text-gray-400">• Collaboration</div>
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

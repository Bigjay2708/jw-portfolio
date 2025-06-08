'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import QuoteCarousel from '@/components/QuoteCarousel'
import DataGrid from '@/components/DataGrid'
import StackCube from '@/components/StackCube'
import TypewriterEffect from '@/components/TypewriterEffect'






export default function HomePage() {
  return (

        <section className="text-gray-200 px-4">

       
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <TypewriterEffect />

          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Innovative Full Stack Developer passionate about crafting cutting-edge web solutions. Currently enrolled in the MIT xPro Full Stack Development program.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-block px-6 py-3 border border-darkgreen text-darkgreen hover:bg-darkgreen hover:text-white rounded transition duration-300"
            >
              See My Work
            </Link>
          </motion.div>
        </div>
        <StackCube />

        <DataGrid />

        {/* About + Skills Section */}
        <div className="grid md:grid-cols-2 gap-10 my-20 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-darkgreen">About Me</h2>
            <p className="text-sm text-gray-400">
              I am a Full Stack Developer with a relentless drive to create high-quality web solutions. Currently enrolled in the MIT xPro Full Stack Development program, I am committed to mastering both front-end and back-end technologies. Visit my <Link href="/about" className="text-darkgreen underline">About Page</Link> to learn more.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-darkgreen">My Skills</h2>
            <ul className="list-disc list-inside text-sm text-gray-400">
              <li>HTML, CSS, JavaScript</li>
              <li>Node.js, Express</li>
              <li>React, MongoDB</li>
              <li>Git, GitHub</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>

        <QuoteCarousel />
      </section>
  )
}

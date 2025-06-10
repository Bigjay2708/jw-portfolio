'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import DataGrid from '@/components/DataGrid'
import StackCube from '@/components/StackCube'
import TypewriterEffect from '@/components/TypewriterEffect'
import ProjectCarousel from '@/components/ProjectCarousel'

export default function HomePage() {
  return (
    <main>
      <section className="text-gray-200 px-4">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-darkgreen">Jason Wells</span>
            </h1>
            <div className="h-20 mb-6">
              <TypewriterEffect />
            </div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Transforming complex challenges into elegant, scalable solutions through innovative development and strategic thinking
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/projects"
                className="px-6 py-3 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Projects
            </h2>
            <ProjectCarousel />
            <div className="mt-20">
              <DataGrid />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section with StackCube */}
        <div className="py-20 bg-gray-900/30">
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
                  Tech Stack
                </h2>
                <p className="text-gray-300 mb-8">
                  Leveraging cutting-edge technologies to build robust and scalable applications
                </p>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300"
                >
                  Learn More About My Skills
                </Link>
              </div>
              <div className="flex justify-center">
                <StackCube />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 mb-8">
              Whether you have a project in mind or want to discuss potential opportunities, I'm always excited to connect with fellow developers and innovators.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-darkgreen text-white rounded-lg hover:bg-darkgreen/90 transition-all duration-300 transform hover:scale-105"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

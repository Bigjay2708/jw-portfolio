'use client'

import React, { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function TypewriterEffect({
  phrases = ['Jason Wells.', 'Full Stack Dev.', 'MERN Developer.', 'React Specialist.', 'UI/UX Enthusiast.', 'Problem Solver.'],
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
  cursorColor = "#0AFF9C",
  className = "text-5xl sm:text-6xl font-bold text-white",
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [textHighlight, setTextHighlight] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setTextHighlight(true)
      setTimeout(() => setTextHighlight(false), 100)
    }, delayBetweenPhrases)
    
    return () => clearInterval(highlightInterval)
  }, [delayBetweenPhrases])

  const [text] = useTypewriter({
    words: phrases,
    loop: true,
    delaySpeed: delayBetweenPhrases,
    typeSpeed: typingSpeed,
    deleteSpeed: deletingSpeed,
  })

  return (    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden w-full"
    >
      <h1 className={className}>
        <motion.span 
          animate={{ scale: textHighlight ? 1.03 : 1 }}
          transition={{ duration: 0.2 }}
          className="inline-block animate-gradient-x bg-gradient-to-r from-teal-400 via-darkgreen to-emerald-400 bg-clip-text text-transparent font-extrabold whitespace-nowrap"
          style={{ textShadow: '0 0 1px rgba(255,255,255,0.1)' }}
        >
          {text}
        </motion.span>
        <Cursor cursorColor={cursorColor} />
      </h1>
    </motion.div>
  )
}

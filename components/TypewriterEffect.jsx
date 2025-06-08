'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function TypewriterEffect() {
  const [text] = useTypewriter({
    words: ['Jason Wells.', 'Full Stack Dev.', 'Tech Enthusiast.'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <h1 className="text-5xl sm:text-6xl font-bold text-white">
      {text}
      <Cursor cursorColor="#0AFF9C" />
    </h1>
  )
}

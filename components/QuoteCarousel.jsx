'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const quotes = [
  {
    text: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
    image: '/carousel-img/einstein1.jpg',
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    image: '/carousel-img/roosevelt.jpg',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    image: '/carousel-img/stevejobs.jpg',
  },
  {
    text: 'Do not follow where the path may lead. Go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
    image: '/carousel-img/emerson.jpg',
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
    image: '/carousel-img/gretzky.jpg',
  },
  {
    text: 'In the middle of every difficulty lies opportunity.',
    author: 'Albert Einstein',
    image: '/carousel-img/einstein2.jpg',
  },
  {
    text: "It always seems impossible until it's done.",
    author: 'Nelson Mandela',
    image: '/carousel-img/mandela.jpg',
  },
  {
    text: 'Creativity is intelligence having fun.',
    author: 'Albert Einstein',
    image: '/carousel-img/einstein3.jpg',
  }
]

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
  const timer = setInterval(() => {
    setIndex(prev => (prev + 1) % quotes.length)
  }, 5000) 
  return () => clearInterval(timer) 
}, [])


  const handleNext = () => setIndex((index + 1) % quotes.length)
  const handlePrev = () => setIndex((index - 1 + quotes.length) % quotes.length)

  return (
    <div className="my-16 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-darkgreen mb-4">Inspirational Quotes</h2>

      <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg border border-gray-800 bg-[#1a1a1a] shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="px-4 py-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={quotes[index].image}
              alt={quotes[index].author}
              width={600}
              height={300}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-300 italic text-lg mb-2">"{quotes[index].text}"</p>
            <p className="text-sm text-gray-500">– {quotes[index].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 border border-gray-600 text-sm rounded hover:border-darkgreen"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 border border-gray-600 text-sm rounded hover:border-darkgreen"
        >
          Next
        </button>
      </div>
    </div>
  )
}

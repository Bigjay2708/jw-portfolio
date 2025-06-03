'use client'

import { useEffect, useState } from 'react'

const metrics = [
  { label: 'Years of Experience', value: 2 },
  { label: 'Projects Built', value: 14 },
  { label: 'Technologies Used', value: 12 },
  { label: 'Commits Made', value: 1500 },
]

export default function DataGrid() {
  const [counts, setCounts] = useState(metrics.map(() => 0))

  useEffect(() => {
    const timers = metrics.map((metric, i) =>
      setInterval(() => {
        setCounts(prev => {
          const updated = [...prev]
          if (updated[i] < metric.value) updated[i]++
          return updated
        })
      }, 50)
    )

    return () => timers.forEach(clearInterval)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 text-center">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="bg-[#1a1a1a] border border-darkgreen p-6 rounded shadow-sm hover:scale-105 transition transform duration-300"
        >
          <div className="text-4xl font-bold text-darkgreen mb-2">
            {counts[i]}
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">{metric.label}</div>
        </div>
      ))}
    </div>
  )
}

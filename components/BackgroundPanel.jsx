'use client'

import { motion } from 'framer-motion'

export default function BackgroundPanel({ style = 'default' }) {
  const styles = {
    default: 'bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]',
    grid: 'bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px]',
    stripes: 'bg-[linear-gradient(135deg,#1a1a1a_25%,transparent_25%)_0_0,linear-gradient(225deg,#1a1a1a_25%,transparent_25%)_0_0,linear-gradient(45deg,#1a1a1a_25%,transparent_25%)_0_0,linear-gradient(315deg,#1a1a1a_25%,#0d0d0d_25%)] bg-[size:20px_20px]',
    glow: 'bg-[#0d0d0d]',
  }

  return (
    <motion.div
      className={`fixed inset-0 -z-10 opacity-60 ${styles[style]} animate-pulse`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
    />
  )
}

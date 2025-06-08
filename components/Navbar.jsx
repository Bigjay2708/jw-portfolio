'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  const linkClasses = (path) =>
    `px-4 py-2 transition-colors ${
      pathname === path
        ? 'text-[#006400] border-b-2 border-[#006400]'
        : 'hover:text-[#006400]'
    }`

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-4 border-b border-gray-800 bg-[#0D0D0D] z-50">
      <Link href="/" className="text-xl font-semibold text-white">JW</Link>
      <div className="space-x-4">
        <Link href="/" className={linkClasses('/')}>Home</Link>
        <Link href="/about" className={linkClasses('/about')}>About</Link>
        <Link href="/projects" className={linkClasses('/projects')}>Projects</Link>
        <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
      </div>
    </nav>
  )
}

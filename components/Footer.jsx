import Link from 'next/link'
import { FaDownload, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-6 text-sm text-gray-500 border-t border-gray-800 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left (Copyright) */}
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Jason Wells. All rights reserved.
        </div>

        {/* Right (Links) */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-xs">
          <Link href="/" className="hover:text-green-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-green-300 transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-green-300 transition-colors">Contact</Link>
          <Link 
            href="https://www.linkedin.com/in/jason-wells-329736304/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-green-300 transition-colors"
          >
            <FaLinkedinIn size={12} /> LinkedIn
          </Link>
          <Link 
            href="https://github.com/Bigjay2708" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-green-300 transition-colors"
          >
            <FaGithub size={12} /> GitHub
          </Link>          <Link 
            href="/JW-Resume.pdf" 
            download
            className="flex items-center gap-1 hover:text-green-300 transition-colors"
          >
            <FaDownload size={12} /> Resume
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

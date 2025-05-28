import './globals.css'
import { Navbar } from '@/components/Navbar'
import  Footer  from '@/components/Footer'

export const metadata = {
  title: 'Jason Wells Portfolio',
  description: 'Full stack MERN developer with a clean tech noir vibe.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-gray-200 font-sans">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

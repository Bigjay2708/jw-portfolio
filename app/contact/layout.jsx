import { Metadata } from 'next'

export const metadata = {
  title: 'Contact Jason Wells | Full Stack Developer',
  description: 'Get in touch with Jason Wells, a full stack developer specializing in React, Next.js, and MERN stack development. Available for freelance projects and career opportunities.',
  keywords: 'contact, Jason Wells, full stack developer, web developer, React developer, Next.js, MERN stack, portfolio',
  openGraph: {
    title: 'Contact Jason Wells | Full Stack Developer',
    description: 'Get in touch with Jason Wells, a full stack developer specializing in React, Next.js, and MERN stack development.',
    url: 'https://www.jasonwells.dev/contact',
    siteName: 'Jason Wells Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactLayout({ children }) {
  return children
}

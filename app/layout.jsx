// File: /app/layout.jsx
import './globals.css';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import CircuitBoardBackground from '../components/CircuitBoardBackground';


export const metadata = {
  title: 'Jason Wells | Full Stack Developer Portfolio',
  description: 'Detail-driven web developer with a strong foundation in the MERN stack and a background in precision-based trades. Professional Certificate in Full Stack Web Development from MIT xPro.',
  keywords: 'Jason Wells, full stack developer, web developer, React, Next.js, MERN stack, portfolio, JavaScript, Node.js, MongoDB',
  authors: [{ name: 'Jason Wells' }],
  creator: 'Jason Wells',
  publisher: 'Jason Wells',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: 'Jason Wells | Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, and MERN stack development',
    url: 'https://www.jasonwells.dev',
    siteName: 'Jason Wells Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Wells | Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, and MERN stack development',
    creator: '@jasonwells',
  },
  verification: {
    google: 'google-site-verification=YOUR_VERIFICATION_CODE', // Add your verification code
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#013220" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        {/* Preconnect to third party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="relative min-h-screen">
          <CircuitBoardBackground />
          <div className="relative z-10 bg-[#0D0D0D]/50 text-gray-200 font-sans min-h-screen">
            <Navbar />
            <main className="px-4 sm:px-8">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

// File: /app/layout.jsx
import './globals.css';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import CircuitBoardBackground from '../components/CircuitBoardBackground';


export const metadata = {
  title: 'Jason Wells Portfolio',
  description: 'Full stack MERN developer with a clean tech noir vibe',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

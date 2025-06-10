import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          I am a passionate software developer with extensive experience in building and maintaining 
          enterprise-level applications. My expertise spans full-stack development, with a strong focus 
          on creating robust, scalable solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>React.js and Next.js for modern web applications</li>
              <li>TypeScript for type-safe development</li>
              <li>Tailwind CSS for responsive design</li>
              <li>State management with Redux and Context API</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Node.js and Express.js for server-side applications</li>
              <li>RESTful API design and implementation</li>
              <li>Database design with PostgreSQL and MongoDB</li>
              <li>Authentication and authorization systems</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Experience</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
            <p className="text-gray-600 mb-2">Led development of enterprise applications using React, Node.js, and PostgreSQL</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Architected and implemented scalable microservices</li>
              <li>Optimized application performance and reduced load times by 40%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600 mb-2">Developed and maintained multiple web applications using modern JavaScript frameworks</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Implemented CI/CD pipelines for automated testing and deployment</li>
              <li>Integrated third-party APIs and services</li>
              <li>Improved code quality through unit and integration testing</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link 
            href="/resume.pdf" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            download
          >
            <FaDownload />
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
} 
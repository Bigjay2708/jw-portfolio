'use client'

import Image from 'next/image'



export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
        Aspiring Full Stack Web Developer
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
        <Image
          src="/bio-pic.jpg" 
          alt="Bio Pic"
          width={250}
          height={250}
          className="rounded-md object-cover"
        />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-darkgreen">Bio</h3>
          <p>
            Hello! I'm Jason Wells, and my interest in coding has been a part of me for as long as I can remember. Ever since I first encountered technology, I've been captivated by the endless possibilities that programming offers.
          </p>
          <p>
            I am currently a student in the MIT xPro Full Stack Development with MERN program, and I'm also expanding my knowledge through Udemy.com. I'm fascinated by both front-end and back-end technologies, building a strong foundation to succeed in the tech industry.
          </p>
          <p>
            Throughout my studies, I've refined my skills in HTML, CSS, JavaScript, and Node.js. I'm excited to dive into advanced coursework in React, MongoDB, Express, and other cutting-edge technologies.
          </p>
          <p>
            When I'm not coding, you'll find me exploring technology, camping, hiking, kayaking, jamming to music, staying fit, and spending quality time with my family.
          </p>
          <p>
            I'm committed to using my skills to create impactful, user-centric web solutions and contribute to meaningful digital projects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-sm sm:text-base">
        <ul className="space-y-2">
          <li><strong>Born:</strong> September 21, 1983</li>
          <li><strong>Birthplace:</strong> Columbus, Ohio USA</li>
          <li><strong>Current City:</strong> Hilliard, Ohio USA</li>
          <li><strong>Favorite Quote:</strong> "Well done is better than well said"</li>
        </ul>
        <ul className="space-y-2">
          <li><strong>Education:</strong> MIT xPro Full Stack Development</li>
          <li><strong>Hobbies:</strong> Tech, Music, Camping, Hiking, Fitness, Family</li>
          <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js</li>
          <li><strong>Languages:</strong> English</li>
        </ul>
      </div>
    </section>
  )
}

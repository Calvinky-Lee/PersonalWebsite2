"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import thri5Image from "@/components/icons/thri5.jpeg"
import snowflakeImage from "@/components/icons/snowflake.png"
import udemyImage from "@/components/icons/udemy.png"
import universityLogoImage from "@/components/icons/universityLogoNew_logo.png"
import meImage from "@/components/icons/me.jpg"

export const MainContent = () => {
  return (
    <section className="relative min-h-screen bg-white text-gray-900 px-6 py-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 border-2 border-gray-200 rounded-2xl bg-white shadow-sm select-text"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-center select-text">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-full md:w-auto">
                <Image
                  src={meImage}
                  alt="Calvin Lee"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover border-2 border-gray-300 shadow-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 text-left select-text">
                  Hi I&apos;m Calvin Lee!<br />
                  I&apos;m from Oakville, Ontario and I love to build cool things!<br />
                  Outside of school I enjoy playing the Violin, Watching Hockey and playing Baseball.<br />
                  Feel free to explore my website!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experiences Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-center">Experiences</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={thri5Image}
                  alt="Thri5"
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
                <p className="text-gray-600 mb-2">Thri5</p>
                <p className="text-sm text-gray-500">July 2025 — August 2025 | 2 Months</p>
              </div>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={universityLogoImage}
                  alt="University of Waterloo"
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">BCS in Computer Science</h3>
                <p className="text-gray-600 mb-2">University of Waterloo</p>
                <p className="text-sm text-gray-500">Expected Graduation 2030</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-center">Projects</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">UW-2DO</h3>
              <p className="text-gray-600 mb-4">
                An all-in-one tasks organizer and chatbot tailored for UWaterloo students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "HTML", "CSS", "Node"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="https://github.com/zach3141592/UW-2Do"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Project →
              </Link>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Personal Website</h3>
              <p className="text-gray-600 mb-4">My own personal website showcasing my work and experiences.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "JavaScript", "HTML", "CSS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="https://calvin-lee.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-center">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Python", "SQL", "Javascript", "React", "Java", "HTML", "CSS", "Node", "Snowflake"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-center">Certifications</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={snowflakeImage}
                  alt="Snowflake Certification"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Master Modern SQL with Snowflake</h3>
                <p className="text-gray-600 mb-4">Udemy · 2025</p>
                <Link
                  href="https://www.udemy.com/certificate/UC-38e57053-c2d1-4a89-9d9c-fa996c070005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View Certificate →
                </Link>
              </div>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={udemyImage}
                  alt="Full-Stack Bootcamp Certification"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">The Complete Full-Stack Web Development Bootcamp</h3>
                <p className="text-gray-600 mb-4">Udemy · 2024</p>
                <Link
                  href="https://www.udemy.com/certificate/UC-73323ebb-c0e1-4e73-b73f-2274f1cc2924/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View Certificate →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

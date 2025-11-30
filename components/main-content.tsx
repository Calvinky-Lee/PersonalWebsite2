"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import thri5Image from "@/components/icons/thri5.jpeg"
import snowflakeImage from "@/components/icons/snowflake.png"
import udemyImage from "@/components/icons/udemy.png"
import universityLogoImage from "@/components/icons/universityLogoNew_logo.png"
import meImage from "@/components/icons/me.jpg"

export const MainContent = () => {
  const [isThri5Expanded, setIsThri5Expanded] = useState(true)
  const [isUWaterlooExpanded, setIsUWaterlooExpanded] = useState(true)
  return (
    <section className="relative min-h-screen bg-gray-50 text-gray-900 px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-[90rem] mx-auto space-y-24">
        {/* About Me and Certifications Side by Side */}
        <div id="about-me" className="flex flex-col lg:flex-row gap-12 items-stretch scroll-mt-24">
          {/* About Me Section */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
            className="flex-[2] h-full p-10 md:p-16 border-2 border-gray-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl select-text relative overflow-hidden flex flex-col"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl -z-0"></div>
            
            <div className="space-y-12 relative z-10 flex-1 flex flex-col">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-gray-900 select-text mb-2">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-12 flex-1">
                <div className="flex-shrink-0 w-full md:w-auto relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl blur opacity-40"></div>
                  <Image
                    src={meImage}
                    alt="Calvin Lee"
                    width={320}
                    height={320}
                    className="rounded-2xl object-cover border-4 border-white shadow-2xl relative transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-5 select-text">
                      Hi I&apos;m Calvin Lee!
                    </h3>
                    <p className="text-lg md:text-xl leading-loose text-gray-700 font-serif select-text">
                      I&apos;m from Oakville, Ontario and I love to build cool things!
                    </p>
                  </div>
                  <div className="pt-3 border-l-2 border-gray-300 pl-4">
                    <p className="text-lg md:text-xl leading-loose text-gray-700 font-serif select-text">
                      Outside of school I enjoy playing the Violin, Watching Hockey and playing Baseball.
                    </p>
                  </div>
                  <div className="pt-3">
                    <p className="text-lg md:text-xl leading-loose text-gray-600 font-serif italic select-text">
                      Feel free to explore my website!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <div className="flex-1 h-full flex flex-col">
            <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-8">Certifications</h2>
            <div className="space-y-8 flex-1 flex flex-col justify-start">
              <div className="p-8 md:p-10 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex gap-6 items-start">
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
                    className="inline-block px-5 py-4 border border-gray-300 rounded-lg font-sans text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all tracking-wide"
                  >
                    View Certificate →
                  </Link>
                </div>
              </div>
              <div className="p-8 md:p-10 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex gap-6 items-start">
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
                    className="inline-block px-5 py-4 border border-gray-300 rounded-lg font-sans text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all tracking-wide"
                  >
                    View Certificate →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="p-6 md:p-8 border-2 border-gray-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-6">Skills</h2>
          <div className="flex flex-nowrap gap-3 justify-center overflow-x-auto">
            {["Python", "SQL", "Javascript", "React", "Next.js", "TypeScript", "Tailwind", "Java", "HTML", "CSS", "Node", "Snowflake"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm whitespace-nowrap flex-shrink-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experiences and Projects Side by Side */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Experiences Section */}
        <div
            id="experiences"
            className="flex-1 space-y-8 scroll-mt-24 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-8">Experiences</h2>
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gray-400 border-2 border-white shadow-md"></div>
                  </div>
                  {/* Timeline Content */}
                  <div className="flex-1 pt-2 min-w-0">
                    <div 
                      className="p-5 md:p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all bg-white cursor-pointer"
                      onClick={() => setIsThri5Expanded(!isThri5Expanded)}
                    >
                      <div className="flex items-start gap-4 md:gap-5">
                        <div className="flex-shrink-0">
                          <Image
                            src={thri5Image}
                            alt="Thri5"
                            width={64}
                            height={64}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-1.5">Software Developer</h3>
                              <p className="text-gray-600 mb-1.5">Thri5</p>
                              <p className="text-sm text-gray-500">July 2025 — August 2025 | 2 Months</p>
                            </div>
                            <motion.div
                              animate={{ rotate: isThri5Expanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0 text-gray-400"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      <AnimatePresence>
                        {isThri5Expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-8 pt-8 border-t border-gray-200">
                              <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Responsibilities & Achievements:</h4>
                              <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-gray-400 mt-1.5">•</span>
                                  <span>Co-developed SQL pipelines for an early-stage AI retail system, converting SAP and JSON data into clean Snowflake tables for real-time insights</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-gray-400 mt-1.5">•</span>
                                  <span>Built CTE queries across 50+ datasets with over 23 million rows, handling joins, normalization, and schema drift</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-gray-400 mt-1.5">•</span>
                                  <span>Designed anomaly detection frameworks using window functions and time-series logic to catch duplicate scans, short-dated items, and inventory shrink</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-gray-400 mt-1.5">•</span>
                                  <span>Identified and resolved a data integrity issue caused from misaligned shipment and store tables</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-gray-400 mt-1.5">•</span>
                                  <span>Rebuilt inconsistent SAP time-series pipelines to unify historical and live inventory using Snowflake views</span>
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gray-400 border-2 border-white shadow-md"></div>
                  </div>
                  {/* Timeline Content */}
                  <div className="flex-1 pt-2 min-w-0">
                    <div 
                      className="p-5 md:p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all bg-white cursor-pointer"
                      onClick={() => setIsUWaterlooExpanded(!isUWaterlooExpanded)}
                    >
                      <div className="flex items-start gap-4 md:gap-5">
                        <div className="flex-shrink-0">
                          <Image
                            src={universityLogoImage}
                            alt="University of Waterloo"
                            width={64}
                            height={64}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-1.5">BCS in Computer Science</h3>
                              <p className="text-gray-600 mb-1.5">University of Waterloo</p>
                              <p className="text-sm text-gray-500">Expected Graduation 2030</p>
                            </div>
                            <motion.div
                              animate={{ rotate: isUWaterlooExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0 text-gray-400"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      <AnimatePresence>
                        {isUWaterlooExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-8 pt-8 border-t border-gray-200">
                              <h4 className="text-lg font-semibold text-gray-900 mb-6">Scholarships:</h4>
                              <ul className="space-y-4 text-gray-700">
                                <li className="flex gap-2">
                                  <span className="text-gray-400 flex-shrink-0">•</span>
                                  <span>UW Alumni @ Microsoft Entrance Scholarship in Mathematics</span>
                                </li>
                                <li className="flex gap-2">
                                  <span className="text-gray-400 flex-shrink-0">•</span>
                                  <span>UW President&apos;s Scholarship of Distinction</span>
                                </li>
                                <li className="flex gap-2">
                                  <span className="text-gray-400 flex-shrink-0">•</span>
                                  <span>TC Energy STEM Scholarship</span>
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
        <div
            id="projects"
            className="flex-1 space-y-8 scroll-mt-24 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-8">Projects</h2>
            <div className="space-y-8">
            <div className="p-8 md:p-10 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">GooseGrade</h3>
              <p className="text-gray-600 mb-4">
                The Grade Calculator tailored for UWaterloo students with course weightings imbedded.
              </p>
              <div className="mb-4">
                <video
                  id="goosegrade-video"
                  className="w-full rounded-lg border border-gray-200 shadow-sm"
                  controls
                  preload="metadata"
                  playsInline
                  style={{ maxHeight: "500px" }}
                >
                  <source src="/GooseGrade1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TypeScript", "Next.js", "React", "Tailwind", "Supabase"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://goosegrade.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-4 border border-gray-300 rounded-lg font-sans text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all tracking-wide"
                >
                  View Website →
                </Link>
                <Link
                  href="https://github.com/Calvinky-Lee/GooseGrade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-4 border border-gray-300 rounded-lg font-sans text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all tracking-wide"
                >
                  View GitHub →
                </Link>
              </div>
          </div>
            <div className="p-8 md:p-10 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
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
                className="inline-block px-5 py-4 border border-gray-300 rounded-lg font-sans text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all tracking-wide"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

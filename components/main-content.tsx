"use client"

import { motion } from "framer-motion"

export const MainContent = () => {
  return (
    <section className="relative min-h-screen bg-white text-gray-900 px-6 py-24 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-center"
        >
          Welcome to My World
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700"
        >
          <p>
            This is the beginning of something extraordinary. A space where ideas come to life, creativity flows freely,
            and innovation knows no bounds.
          </p>

          <p>
            Through this platform, I share my journey, my work, and my vision for the future. Every project is a step
            forward, every creation a reflection of passion and dedication.
          </p>

          <p>
            Join me as we explore the intersection of design, technology, and human experience. Together, we&apos;ll
            build something meaningful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 pt-12"
        >
          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <p className="text-gray-600">
              Explore my latest work and creative endeavors that push the boundaries of what&apos;s possible.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              Learn more about my background, skills, and the journey that brought me here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

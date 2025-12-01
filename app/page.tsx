"use client"

import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { MainContent } from "@/components/main-content"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, -100, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 0.5, 0])

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-white">
      {/* Cloud overlay that parts to reveal content - like traveling through clouds */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ 
          duration: 1.2,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Multiple cloud layers for depth */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-[40px]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85 backdrop-blur-[30px]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -80, opacity: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 backdrop-blur-[20px]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -60, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/50 backdrop-blur-[15px]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -40, opacity: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </motion.div>

      {/* Content that fades in as clouds part */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{ willChange: 'opacity' }}
        className="relative z-50"
      >
        <Header />
        <div className="absolute top-0 left-0 w-full z-10 pt-16 md:pt-20">
          <div className="h-screen" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <MainContent />
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
        style={{
          y: heroY,
          opacity: heroOpacity,
          zIndex: 20,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroOpacity }}
        transition={{ 
          duration: 1,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <Background src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4" placeholder="/alt-placeholder.png" />

          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Newsletter />
            <Footer />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

"use client"

import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { MainContent } from "@/components/main-content"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, -100, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 0.5, 0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      // Fade out buttons when scrolling into white section (same threshold as header)
      setIsOverWhiteSection(scrollPosition > heroHeight * 0.8)
    }

    // Throttle scroll events
    let timeoutId: NodeJS.Timeout | null = null
    const throttledHandleScroll = () => {
      if (timeoutId) return
      timeoutId = setTimeout(() => {
        handleScroll()
        timeoutId = null
      }, 10)
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-white">
      {/* Cloud overlay that parts to reveal content - like traveling through clouds */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 0,
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
      <div className="relative z-50">
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
      </div>

      <motion.section
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
        style={{
          y: heroY,
          opacity: heroOpacity,
          zIndex: 20,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: heroOpacity }}
      >
        <div
          style={{ opacity: heroOpacity, pointerEvents: 'auto' }}
          className="absolute inset-0"
        >
          <Background src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4" placeholder="/alt-placeholder.png" />

          <div className="absolute inset-0 pointer-events-auto z-10">
            <Newsletter />
          </div>
        </div>
      </motion.section>

      {/* Footer buttons as top layer - fade out when in white section */}
      <AnimatePresence>
        {!isOverWhiteSection && (
          <motion.div 
            className="fixed bottom-[calc(var(--inset)+0.8rem)] md:bottom-[calc(var(--inset)+1.5rem)] left-1/2 -translate-x-1/2 z-[200] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

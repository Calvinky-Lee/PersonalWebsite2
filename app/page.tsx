"use client"

import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
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
      <div className="absolute top-0 left-0 w-full z-0">
        <div className="h-screen" />
        <MainContent />
      </div>

      <motion.section
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
        style={{
          y: heroY,
          opacity: heroOpacity,
          zIndex: 20,
        }}
      >
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: heroOpacity }}
          exit={{ opacity: 0 }}
        >
          <Background src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4" placeholder="/alt-placeholder.png" />

          <div className="absolute inset-0">
            <Newsletter />
            <Footer />
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

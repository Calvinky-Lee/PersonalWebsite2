"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export const Footer = () => {
  const handleScrollDown = () => {
    const heroHeight = window.innerHeight
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      onClick={handleScrollDown}
      className="flex flex-col items-center gap-4 text-white/80 hover:text-white transition-colors group cursor-pointer"
      aria-label="Scroll down to start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.span 
        className="font-serif text-sm md:text-base font-normal tracking-[0.15em] uppercase"
        initial={{ letterSpacing: "0.15em" }}
        whileHover={{ letterSpacing: "0.2em" }}
        transition={{ duration: 0.3 }}
      >
        Scroll down to start
      </motion.span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.button>
  )
}

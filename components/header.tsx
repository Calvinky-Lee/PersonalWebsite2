"use client"

import { GitHubLogoIcon, LinkedInLogoIcon, CheckIcon } from "@radix-ui/react-icons"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Header = () => {
  const [copied, setCopied] = useState(false)
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})
  const isProgrammaticScroll = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection during programmatic scrolling to prevent jitter
      if (isProgrammaticScroll.current) {
        return
      }
      
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      const headerOffset = 100
      const viewportTop = scrollPosition + headerOffset
      const vpCenter = scrollPosition + (window.innerHeight / 2)
      
      setIsOverWhiteSection(scrollPosition > heroHeight * 0.8)
      
      // Get section elements
      const aboutMeEl = document.getElementById('about-me')
      const experiencesEl = document.getElementById('experiences')
      const projectsEl = document.getElementById('projects')
      
      // Only set to "home" if we're clearly in the hero section (top 30% of viewport)
      if (scrollPosition < heroHeight * 0.3) {
        setActiveSection("home")
        return
      }
      
      // Once past hero, never show "home" - determine which white section is active
      
      // First, check if we're at or near the bottom of the page - always show "experiences"
      // Use a larger threshold to catch when user is scrolling near the bottom
      const distanceFromBottom = document.documentElement.scrollHeight - (scrollPosition + window.innerHeight)
      if (distanceFromBottom <= 200) {
        setActiveSection("experiences")
        return
      }
      
      // Check if viewport has reached the experiences section (same as clicking the Experience button)
      // The Experience button uses scrollIntoView with block: 'start', which accounts for scroll-mt-24 (96px)
      if (experiencesEl) {
        const experiencesTop = experiencesEl.offsetTop
        // Activate when viewport top actually reaches the experiences section
        // Use viewportTop (scrollPosition + headerOffset) to ensure we're past the Skills section
        // The scroll-mt-24 (96px) is already accounted for in the element's position
        // Only activate when the viewport has actually reached the experiences section
        if (viewportTop >= experiencesTop) {
          setActiveSection("experiences")
          return
        }
      }
      
      // Check "about" section
      if (aboutMeEl) {
        const aboutTop = aboutMeEl.offsetTop
        
        // Check if viewport has reached the about section
        if (viewportTop >= aboutTop - 200) {
          // Stay on "about" unless we've reached experiences or bottom
          setActiveSection("about")
          return
        }
      }
      
      // Default to "about" if we're past hero
      setActiveSection("about")
    }

    // Throttle scroll events
    const throttledHandleScroll = () => {
      // Clear any pending scroll end detection
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current)
        scrollEndTimeoutRef.current = null
      }
      
      // If programmatic scroll is active, detect when it ends
      if (isProgrammaticScroll.current) {
        scrollEndTimeoutRef.current = setTimeout(() => {
          isProgrammaticScroll.current = false
          scrollEndTimeoutRef.current = null
        }, 150) // Wait for scroll to stop
        return
      }
      
      if (scrollTimeoutRef.current) return
      scrollTimeoutRef.current = setTimeout(() => {
        handleScroll()
        scrollTimeoutRef.current = null
      }, 10)
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      if (scrollEndTimeoutRef.current) clearTimeout(scrollEndTimeoutRef.current)
    }
  }, [])

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isOverWhiteSection 
          ? "bg-white/90 border-gray-200/50" 
          : "bg-transparent border-white/20"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-start h-16 md:h-20 gap-6 md:gap-8">
          {/* CS Webring */}
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all backdrop-blur-sm ${
            isOverWhiteSection
              ? "border border-gray-300/50 hover:border-gray-400/50 bg-transparent"
              : "border border-white/20 hover:border-white/40 bg-white/10"
          }`}>
            <Link
              href="https://cs.uwatering.com/#calvin-lee.ca?nav=prev"
              className={`transition-colors text-xl font-medium ${
                isOverWhiteSection 
                  ? "text-gray-900 hover:text-gray-950" 
                  : "text-white hover:text-white"
              }`}
              aria-label="Previous in CS Webring"
            >
              ←
            </Link>
            <Link 
              href="https://cs.uwatering.com/#calvin-lee.ca" 
              target="_blank" 
              aria-label="CS Webring"
            >
              <img
                src="https://cs.uwatering.com/icon.white.svg"
                alt="CS Webring"
                className={`w-5 h-5 opacity-70 hover:opacity-100 transition-opacity ${
                  isOverWhiteSection ? "brightness-0" : ""
                }`}
              />
            </Link>
            <Link
              href="https://cs.uwatering.com/#calvin-lee.ca?nav=next"
              className={`transition-colors text-xl font-medium ${
                isOverWhiteSection 
                  ? "text-gray-900 hover:text-gray-950" 
                  : "text-white hover:text-white"
              }`}
              aria-label="Next in CS Webring"
            >
              →
            </Link>
          </div>

          {/* Navigation Links with Animated Underline */}
          <nav className="relative flex items-center gap-6 md:gap-8">
              <a
                ref={(el) => { navRefs.current.home = el }}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // Clear any pending scroll handler calls
                  if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current)
                    scrollTimeoutRef.current = null
                  }
                  if (scrollEndTimeoutRef.current) {
                    clearTimeout(scrollEndTimeoutRef.current)
                    scrollEndTimeoutRef.current = null
                  }
                  // Use requestAnimationFrame to ensure flag is set before scroll events
                  requestAnimationFrame(() => {
                    isProgrammaticScroll.current = true
                    setIsOverWhiteSection(false) // Home is in the hero section
                    setActiveSection("home")
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  })
                }}
                className={`font-serif transition-colors text-base md:text-lg font-medium pb-1 relative ${
                  isOverWhiteSection
                    ? "text-gray-900 hover:text-gray-950"
                    : "text-white hover:text-white"
                }`}
              >
                Home
                {activeSection === "home" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    animate={{
                      backgroundColor: isOverWhiteSection ? "#000000" : "#ffffff"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      backgroundColor: { duration: 0.3, ease: "easeInOut" }
                    }}
                  />
                )}
              </a>
              <a
                ref={(el) => { navRefs.current.about = el }}
                href="#about-me"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('about-me')
                  if (element) {
                    // Clear any pending scroll handler calls
                    if (scrollTimeoutRef.current) {
                      clearTimeout(scrollTimeoutRef.current)
                      scrollTimeoutRef.current = null
                    }
                    if (scrollEndTimeoutRef.current) {
                      clearTimeout(scrollEndTimeoutRef.current)
                      scrollEndTimeoutRef.current = null
                    }
                    // Use requestAnimationFrame to ensure flag is set before scroll events
                    requestAnimationFrame(() => {
                      isProgrammaticScroll.current = true
                      setIsOverWhiteSection(true) // About Me is in the white section
                      setActiveSection("about")
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    })
                  }
                }}
                className={`font-serif transition-colors text-base md:text-lg font-medium pb-1 relative ${
                  isOverWhiteSection
                    ? "text-gray-900 hover:text-gray-950"
                    : "text-white hover:text-white"
                }`}
              >
                About Me
                {activeSection === "about" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    animate={{
                      backgroundColor: isOverWhiteSection ? "#000000" : "#ffffff"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      backgroundColor: { duration: 0.3, ease: "easeInOut" }
                    }}
                  />
                )}
              </a>
              <a
                ref={(el) => { navRefs.current.experiences = el }}
                href="#experiences"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('experiences')
                  if (element) {
                    // Clear any pending scroll handler calls
                    if (scrollTimeoutRef.current) {
                      clearTimeout(scrollTimeoutRef.current)
                      scrollTimeoutRef.current = null
                    }
                    if (scrollEndTimeoutRef.current) {
                      clearTimeout(scrollEndTimeoutRef.current)
                      scrollEndTimeoutRef.current = null
                    }
                    // Use requestAnimationFrame to ensure flag is set before scroll events
                    requestAnimationFrame(() => {
                      isProgrammaticScroll.current = true
                      setIsOverWhiteSection(true) // Experiences is in the white section
                      setActiveSection("experiences")
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    })
                  }
                }}
                className={`font-serif transition-colors text-base md:text-lg font-medium pb-1 relative ${
                  isOverWhiteSection
                    ? "text-gray-900 hover:text-gray-950"
                    : "text-white hover:text-white"
                }`}
              >
                Experience
                {activeSection === "experiences" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    animate={{
                      backgroundColor: isOverWhiteSection ? "#000000" : "#ffffff"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      backgroundColor: { duration: 0.3, ease: "easeInOut" }
                    }}
                  />
                )}
              </a>
          </nav>

          {/* Right: Social Buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              target="_blank"
              href={socialLinks.resume}
              className={`px-4 py-2 rounded-lg transition-all backdrop-blur-sm font-serif text-base md:text-lg font-medium ${
                isOverWhiteSection
                  ? "border border-gray-300/50 hover:border-gray-400/50 bg-transparent text-gray-900 hover:text-gray-950"
                  : "border border-white/20 hover:border-white/40 bg-white/10 text-white hover:text-white"
              }`}
              aria-label="Résumé"
            >
              Résumé
            </Link>
            <button
              onClick={handleEmailClick}
              className={`p-2 rounded-lg transition-all backdrop-blur-sm relative overflow-visible ${
                isOverWhiteSection
                  ? "border border-gray-300/50 hover:border-gray-400/50 bg-transparent"
                  : "border border-white/20 hover:border-white/40 bg-white/10"
              } ${copied ? "scale-110" : ""}`}
              aria-label="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <CheckIcon className={`w-5 h-5 ${
                    isOverWhiteSection ? "text-gray-700" : "text-white"
                  }`} />
                  {/* Square animation rings */}
                  <span className="absolute inset-0 rounded-lg bg-green-400/30 animate-ping" />
                  <span className="absolute inset-0 rounded-lg bg-green-400/20 animate-pulse" />
                </>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 ${
                    isOverWhiteSection ? "text-gray-700" : "text-white"
                  }`}
                >
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )}
            </button>
            <Link
              target="_blank"
              href={socialLinks.linkedin}
              className={`p-2 rounded-lg transition-all backdrop-blur-sm ${
                isOverWhiteSection
                  ? "border border-gray-300/50 hover:border-gray-400/50 bg-transparent"
                  : "border border-white/20 hover:border-white/40 bg-white/10"
              }`}
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className={`w-5 h-5 ${
                isOverWhiteSection ? "text-gray-700" : "text-white"
              }`} />
            </Link>
            <Link
              target="_blank"
              href={socialLinks.github}
              className={`p-2 rounded-lg transition-all backdrop-blur-sm ${
                isOverWhiteSection
                  ? "border border-gray-300/50 hover:border-gray-400/50 bg-transparent"
                  : "border border-white/20 hover:border-white/40 bg-white/10"
              }`}
              aria-label="GitHub"
            >
              <GitHubLogoIcon className={`w-5 h-5 ${
                isOverWhiteSection ? "text-gray-700" : "text-white"
              }`} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}


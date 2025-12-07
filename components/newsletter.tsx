"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useIsV0 } from "@/lib/context"

const DURATION = 0.3
const DELAY = DURATION
const EASE_OUT = "easeOut"
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
}

export const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isInitialRender = useRef(true)

  useEffect(() => {
    return () => {
      isInitialRender.current = false
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8" style={{ pointerEvents: 'auto' }}>
      <div className="flex flex-col items-center gap-2" style={{ pointerEvents: 'auto' }}>
        <motion.div layout="position" transition={{ duration: DURATION, ease: EASE_OUT }}>
          <h1 className="font-serif text-[9rem] font-black tracking-wider short:lg:text-[12rem] sm:text-[12rem] lg:text-[16rem] text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] leading-none">
            Calvin Lee
          </h1>
        </motion.div>

        <motion.div
          initial={isInitialRender.current ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
          }}
          transition={{
            duration: DURATION,
            ease: EASE_OUT,
            delay: DELAY,
          }}
          className="text-xl short:lg:text-2xl sm:text-2xl lg:text-3xl !leading-[1.3] font-semibold text-center text-foreground text-pretty tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          style={{ pointerEvents: 'auto' }}
        >
          Computer Science
        </motion.div>
      </div>

      <div className="flex flex-col items-center min-h-0 shrink">
        <AnimatePresenceGuard>
          {!isOpen && (
            <motion.div
              key="newsletter"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: -150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
            >
              <div className="flex flex-col gap-4 w-full max-w-xl md:gap-6 lg:gap-8"></div>
            </motion.div>
          )}

          {isOpen && (
            <motion.div
              key="manifesto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
              className="relative flex min-h-0 flex-shrink overflow-hidden text-sm md:text-base max-h-[calc(70dvh-var(--footer-safe-area))] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-border/50 bg-primary/20 max-w-3xl text-foreground rounded-3xl ring-1 ring-offset-primary/10 ring-border/10 ring-offset-2 shadow-button"
            >
              <article className="relative overflow-y-auto p-6 h-full [&_p]:my-4">
                <p>
                  &quot;We stand at the forefront of a new era, where creativity meets technology to redefine
                  what&apos;s possible. Our mission is to empower individuals and businesses alike with groundbreaking
                  solutions that inspire change and drive progress.&quot;
                </p>
                <p>
                  &quot;We stand at the forefront of a new era, where creativity meets technology to redefine
                  what&apos;s possible. Our mission is to empower individuals and businesses alike with groundbreaking
                  solutions that inspire change and drive progress.&quot;
                </p>
                <p>
                  &quot;We believe in constant innovation, pushing boundaries to create products that are not just
                  tools, but catalysts for transformation. We value simplicity, designing intuitive experiences that
                  make complex tasks effortless and enjoyable. Our commitment to sustainability drives us to protect our
                  planet while delivering exceptional value. We foster collaboration, building a community of thinkers,
                  creators, and doers who share a vision for a better tomorrow.&quot;
                </p>
                <p>
                  &quot;Our promise is to deliver cutting-edge technology that is accessible, reliable, and tailored to
                  meet the needs of our users. We will challenge the status quo, embrace change, and lead the charge
                  towards a brighter, more innovative future.&quot;
                </p>
                <p>
                  &quot;Join us on this journey as we innovate, inspire, and ignite the spark of creativity in every
                  corner of the globe.&quot;
                </p>
              </article>
            </motion.div>
          )}
        </AnimatePresenceGuard>
      </div>
    </div>
  )
}

const AnimatePresenceGuard = ({ children }: { children: React.ReactNode }) => {
  const isV0 = useIsV0()

  return isV0 ? (
    <>{children}</>
  ) : (
    <AnimatePresence mode="popLayout" propagate>
      {children}
    </AnimatePresence>
  )
}

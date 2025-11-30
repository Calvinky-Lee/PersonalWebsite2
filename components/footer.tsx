"use client"

import { GitHubLogoIcon, LinkedInLogoIcon, CheckIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "./ui/button"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export const Footer = () => {
  const [copied, setCopied] = useState(false)
  const socialIconsRef = useRef<HTMLDivElement>(null)
  const [resumeButtonWidth, setResumeButtonWidth] = useState<number | undefined>(undefined)

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  useEffect(() => {
    const updateWidth = () => {
      if (socialIconsRef.current) {
        setResumeButtonWidth(socialIconsRef.current.offsetWidth)
      }
    }

    // Use requestAnimationFrame to ensure measurement happens after render
    requestAnimationFrame(() => {
      updateWidth()
    })
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center absolute bottom-[calc(var(--inset)+0.8rem)] md:bottom-[calc(var(--inset)+1.5rem)] left-1/2 -translate-x-1/2">
      <div className="flex flex-col gap-4 items-center w-full">
        <Link
          target="_blank"
          className={`${buttonVariants({ size: "lg" })} text-white bg-primary/5 hover:bg-primary/8 px-12`}
          href={socialLinks.resume}
        >
          Résumé
        </Link>

        <div ref={socialIconsRef} className="flex items-center gap-4 justify-center w-full">
          <Link 
            target="_blank" 
            className={buttonVariants({ size: "icon-xl" })} 
            href={socialLinks.linkedin}
          >
          <LinkedInLogoIcon className="size-6" />
        </Link>

        <button
            id="email-button"
          className={`${buttonVariants({ size: "icon-xl" })} relative overflow-visible transition-transform ${
            copied ? "scale-110" : ""
          }`}
          onClick={handleEmailClick}
          aria-label="Copy email to clipboard"
        >
          {copied ? (
            <>
              <CheckIcon className="size-6" />
              {/* Bubble animation rings */}
              <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
              <span className="absolute inset-0 rounded-full bg-green-400/20 animate-pulse" />
            </>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          )}
        </button>

          <Link 
            target="_blank" 
            className={buttonVariants({ size: "icon-xl" })} 
            href={socialLinks.github}
          >
          <GitHubLogoIcon className="size-6" />
        </Link>
      </div>
      </div>
    </div>
  )
}

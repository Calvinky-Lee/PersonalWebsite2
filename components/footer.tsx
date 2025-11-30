"use client"

import { GitHubLogoIcon, LinkedInLogoIcon, CheckIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "./ui/button"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"

export const Footer = () => {
  const [copied, setCopied] = useState(false)

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
    <div className="flex flex-col gap-4 items-center absolute bottom-[calc(var(--inset)+0.8rem)] md:bottom-[calc(var(--inset)+1.5rem)] left-1/2 -translate-x-1/2">
      <div className="flex gap-4 items-center relative">
        <Link
          target="_blank"
          className={`${buttonVariants({ size: "lg" })} absolute -top-16 left-0 right-0 w-full text-white bg-primary/5 hover:bg-primary/8`}
          href={socialLinks.resume}
        >
          Resume
        </Link>

        <Link target="_blank" className={buttonVariants({ size: "icon-xl" })} href={socialLinks.linkedin}>
          <LinkedInLogoIcon className="size-6" />
        </Link>

        <button
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

        <Link target="_blank" className={buttonVariants({ size: "icon-xl" })} href={socialLinks.github}>
          <GitHubLogoIcon className="size-6" />
        </Link>
      </div>

      <div className="flex items-center gap-2 ml-12">
        <Link
          href="https://cs.uwatering.com/#calvin-lee.ca?nav=prev"
          className="text-white/80 hover:text-white transition-colors text-xl"
          aria-label="Previous in CS Webring"
        >
          ←
        </Link>
        <Link href="https://cs.uwatering.com/#calvin-lee.ca" target="_blank" aria-label="CS Webring">
          <img
            src="https://cs.uwatering.com/icon.white.svg"
            alt="CS Webring"
            className="w-6 h-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          href="https://cs.uwatering.com/#calvin-lee.ca?nav=next"
          className="text-white/80 hover:text-white transition-colors text-xl"
          aria-label="Next in CS Webring"
        >
          →
        </Link>
      </div>
    </div>
  )
}

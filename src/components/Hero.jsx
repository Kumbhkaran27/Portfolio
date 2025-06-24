"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import useMediaQuery from "../hooks/useMediaQuery"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Development Engineer"
  const isMobile = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500">Pankaj Jagtap</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium h-8">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <a href="https://github.com/Kumbhkaran27/Portfolio" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-blue-600 transition">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/pankaj-jagtap-52b6031aa/" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-blue-600 transition">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </button>
            </a>

            {/* Contact Me Button — changes on mobile */}
            {isMobile ? (
              <a href="#contact" aria-label="Contact">
                <button className="flex items-center rounded-full bg-white p-2 text-blue-600 hover:bg-blue-100 transition">
                  <Mail className="h-5 w-5" />
                </button>
              </a>
            ) : (
              <a href="#contact">
                <button className="flex items-center rounded-full bg-white px-6 py-2 text-blue-600 hover:bg-blue-100 transition">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </button>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-white" />
        </a>
      </div>
    </section>
  )
}

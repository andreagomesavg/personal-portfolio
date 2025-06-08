"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle active section detection
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const sectionId: string = target.id
          setActiveSection(sectionId === '' ? 'home' : sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Close mobile menu when clicking outside or on link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "#", label: "Home", id: "home" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#experience", label: "Experience", id: "experience" }
  ]


  const isActive = (linkId: string): boolean => {
    if (linkId === "home") {
      return activeSection === "home" || activeSection === ""
    }
    return activeSection === linkId
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center space-x-2"
            >
              <a
                href="#"
                className={`text-xl font-bold transition-colors duration-200 ${
                  scrolled ? "text-slate-800" : "text-slate-800"
                }`}
              >
               Valentina
              </a>
              <span className="">| Frontend Web Developer</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                      scrolled
                        ? "text-slate-800 hover:text-slate-900"
                        : "text-slate-800 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${
                        isActive(link.id) 
                          ? `w-full ${scrolled ? "bg-[#094E82]" : "bg-[#094E82]"}` 
                          : `w-0 group-hover:w-full ${scrolled ? "bg-[#094E82]" : "bg-[#094E82]"}`
                      }`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={handleLinkClick}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActive(link.id)
                        ? "text-slate-900 bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

    
    </>
  )
}
"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/andreagomesavg",
      icon: "fab fa-github"
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/valentina-gomes-araque-48b504218/",
      icon: "fab fa-linkedin"
    },
    {
      name: "Email",
      href: "mailto:a.valentinagomesaraque@gmail.com",
      icon: "fas fa-square-envelope"
    }
  ]

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-gray-100 text-slate-300 border-t border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Valentina</h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Frontend Web Developer passionate about creating beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-200 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-[#094E82] transition-colors duration-200"
                    aria-label={social.name}
                  >
                     <i className={`${social.icon} text-xl`}></i>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-slate-400 hover:text-[#094E82] transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <motion.a
                href="mailto:a.valentinagomesaraque@gmail.com?subject=Hello Valentina!&body=Hi Valentina, I saw your portfolio and would like to get in touch..."
                whileHover={{ x: 4 }}
                className="text-slate-400 hover:text-[#094E82] transition-colors duration-200 block"
              >
                a.valentinagomesaraque@gmail.com
              </motion.a>
        
              <p className="text-slate-400">
                Valencia, Spain
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center"
        >
        
          <motion.p 
            className="text-slate-400 text-sm flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Next.js
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
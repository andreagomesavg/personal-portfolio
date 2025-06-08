"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { skillsData } from '../assets';
import { motion } from 'framer-motion'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }


  return (
    <div className='max-w-[1200px] mx-auto p-4 ' id='skills'>
      <div className=' max-w-[1200px] mx-auto p-4 '>
        <div className='flex flex-col items-start justify-start gap-4 py-8'>
             <div className="w-16 h-[3px] bg-black float-left  my-0 py-0  "></div>
             <span className="text-lg lg:text-xl font-normal  text-left   !py-0 !leading-none tracking-tight text-black">Checkout</span>
             <h1 className={` !text-[45px] lg:!text-[64px] font-black uppercase pl-6  !py-0 !leading-none -mt-12  tracking-tight text-black`}>
  <br />
  MY SKILLS
  <br />
</h1> 
        </div>
    </div>
    <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {skillsData.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex} 
            custom={categoryIndex}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 overflow-hidden"
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { 
                type: "spring",
                damping: 20,
                stiffness: 300,
                duration: 0.3 
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Category Title with Animation */}
            <motion.h2 
              className="text-2xl font-bold text-gray-800 mb-6 text-center border-b border-gray-200 pb-3"
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.1 + 0.3,
                type: "spring",
                damping: 25
              }}
            >
              {category.title}
            </motion.h2>
            
            {/* Skills Grid with Staggered Animation */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: categoryIndex * 0.1 + 0.5
                  }
                }
              }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="flex flex-col items-center text-center p-3 rounded-lg cursor-pointer"
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderRadius: "12px",
                    transition: { 
                      type: "spring",
                      damping: 15,
                      stiffness: 300,
                      duration: 0.2 
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Skill Icon with Enhanced Animation */}
                  <motion.div 
                    className="w-12 h-12 mb-2 flex items-center justify-center"
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 5, 0],
                      y: -5,
                      transition: { 
                        duration: 0.6,
                        ease: "easeInOut"
                      }
                    }}
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: skillIndex * 0.1,
                      type: "spring",
                      damping: 15,
                      stiffness: 200
                    }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                  
                  {/* Skill Name with Fade-in */}
                  <motion.span 
                    className="text-sm font-medium text-gray-700 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: skillIndex * 0.05 + 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      </div>
   
  )
}

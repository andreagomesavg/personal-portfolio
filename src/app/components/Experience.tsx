"use client"


import { experienceData } from "../assets"
import {motion } from "framer-motion"


export default function Experience() {

  return (
    <div >
      <div className=' max-w-[1200px] mx-auto p-4 ' id="experience">
        <div className='flex flex-col items-center justify-start gap-4 py-8'>
             <div className="w-[3px] h-16 bg-black float-left  my-0 py-0  lg:-mb-8"></div>
             <span className="text-lg lg:text-xl font-normal  text-right pl-64 !my-0 !py-0 !leading-none tracking-tight text-black">Foundation and basics</span>
             <h1 className={` !text-[45px] lg:!text-[64px] font-black uppercase pl-6  !py-0 !leading-none -mt-12  tracking-tight text-black`}>
  <br />
  EXPERIENCE & EDUCATION
  <br />
</h1> 
        </div>
    </div>
       <div className="relative py-20 flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 px-5 ">
        {/* Timeline line - centered */}
        <div  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 rounded-full "></div>
        
        {/* Map over experience data */}
        {experienceData.map((experience, index) => (
          <div key={index} className="relative w-full max-w-4xl pt-28 lg:pt-0 mb-20">
            {/* Card positioned alternating left/right */}
            <motion.div initial={{opacity: 0, x: index % 2 === 0 ? -80: 80}} whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.7, type: 'spring', stiffness: 50}} className={`flex flex-col gap-y-4 rounded-md border border-[#4499F4] bg-white p-6 tracking-wide sm:text-sm w-auto lg:w-[400px] ${
              index % 2 === 0 
                ? 'lg:ml-0' // Left side for even indices (0, 2, 4...)
                : 'lg:ml-auto lg:mr-0' // Right side for odd indices (1, 3, 5...)
            }`}>
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-xl font-semibold text-gray-800">{experience.position}</h2>
                <h3 className="text-lg !font-medium text-[#4499F4]">{experience.company}</h3>
                <p className="text-sm text-gray-600">{experience.initial} - {experience.final}</p>
              </div>
              
              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <div className="text-gray-800">
                  <span className="block font-medium text-gray-700 mb-2">Key Responsibilities:</span>
                  <ul className="pl-4 space-y-1">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-sm font-light leading-relaxed list-disc">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {experience.stack && experience.stack.length > 0 && (
                <div className="text-gray-800">
                  <span className="block font-medium text-gray-700 mb-2">Technologies:</span>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            
            {/* Year indicator - centered on timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-14 h-14 border border-gray-300 rounded-full bg-white flex items-center justify-center text-[#4499F4] font-light z-10">
              {experience.year}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
  )
}

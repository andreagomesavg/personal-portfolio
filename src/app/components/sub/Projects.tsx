"use client"

import PortfolioShowcase from "./PortfolioShowCase"



export default function Projects() {


  return (
    <div className=' max-w-[1200px] mx-auto p-4 ' id="projects">
        <div className='flex flex-col items-center justify-start gap-4 py-8'>
             <div className="w-[3px] h-16 bg-black float-left  my-0 py-0  lg:-mb-8"></div>
             <span className="text-lg lg:text-xl font-normal  text-right pl-42 !my-0 !py-0 !leading-none tracking-tight text-black">Some projects</span>
             <h1 className={` !text-[45px] lg:!text-[64px] font-black uppercase pl-6  !py-0 !leading-none -mt-12  tracking-tight text-black`}>
  <br />
  My work
  <br />
</h1> 
        </div>
    <PortfolioShowcase/>
      
    </div>
  )
}

import Image from "next/image";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"
  ],
  variable: "--font-raleway",
  display: "swap",
});




export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-4 items-end justify-between  max-w-[1200px] mx-auto p-4 pt-24" id="hero">
        <div className="z-20 flex flex-col items-start justify-start py-0 lg:py-8">
            <div className="w-[30px] h-0.5 bg-black float-left  my-0 py-0  lg:-mb-8"></div>
<h1 className={` !text-[45px] lg:!text-[100px] font-black uppercase pl-6 !my-0 !py-0 !leading-none  ${raleway.variable} tracking-tight text-black`}>
  <span className="!text-[34px] font-normal normal-case tracking-normal text-black">Hey!</span>
  <br />
  I&apos;m Valentina
  <br />
</h1> <span className="pl-6 text-xl lg:text-[38px] text-[#A0A8AC] italic font-normal  normal-case tracking-normal">
    Junior web developer 
  </span>
        <div className="pl-6 flex items-end justify-start gap-4 py-4 ">
             <a href="https://github.com/andreagomesavg"><i className='fab fa-github text-5xl hover:cursor-pointer hover:text-[#094E82] hover:scale-125 duration-300 ease-in'></i></a>
              <a href="https://www.linkedin.com/in/valentina-gomes-araque-48b504218/"><i className='fab fa-linkedin text-5xl hover:cursor-pointer hover:text-[#094E82] hover:scale-125 duration-300 ease-in'></i></a>
               <a href="mailto:a.valentinagomesaraque@gmail.com?subject=Hello Valentina!&body=Hi Valentina, I saw your portfolio and would like to get in touch..."><i className='fas fa-square-envelope text-5xl hover:cursor-pointer hover:text-[#094E82] hover:scale-125 duration-300 ease-in'></i></a>
               <a href=""><i className='fas fa-globe  text-5xl  hover:cursor-pointer hover:text-[#094E82] hover:scale-125 duration-300 ease-in'></i></a>
        </div>
        </div>

        <div className="flex flex-col items-center lg:items-end justify-center lg:justify-end">
            <Image
            className="z-10 "
                src="/ValentinaImageCropped.png"
                alt="hero image"
                width={300}
                height={100}
                ></Image>
                  {/* <div className="z-20 w-[250px] h-[150px] -mt-35 bottom-0 right-0  bg-gradient-to-t from-gray-100 to-transparent"></div> */}
        </div>
       
    </div>
  )
}

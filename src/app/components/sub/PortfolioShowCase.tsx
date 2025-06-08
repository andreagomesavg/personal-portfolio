"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"
  ],
  variable: "--font-raleway",
  display: "swap",
});


interface Project {
  id: string
  title: string
  description: string
  image: string
  images: string[]
  purpose: string[]
  technologies: string[]
  liveUrl?: string
  linkedinUrl?: string
  repoUrl?: string
  category: string
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Pet health management platform - DailyPawie",
    description: "Digital platform to store your pet's medical records and set care reminders - never forget a vet appointment or medication again.",
    image: "/dailyPawie.png",
    images: [
      "/dailyPawie.png",
      "/DPdashboard.png",
      "/DPdetail.png",
      "/DPnews.png"
    ],
    purpose:
     [
    "Store all your pet's medical records in one secure digital place",
    "Never miss vet appointments, medications, or grooming sessions with smart reminders",
    "Access complete health history instantly when visiting new veterinarians",
    "Replace lost paperwork and chaotic physical documents with organized digital files",
    "Manage multiple pets' care schedules effortlessly from one platform"
  ],
    technologies: ["Payload CMS",
            "Supabase",
            "Next.js",
            "Tailwind CSS 4",
            "TypeScript",],
    liveUrl: "",
    linkedinUrl: "",
    repoUrl: "https://github.com/andreagomesavg/DailyPawie",
    category: "Web Application",
  },

]

export default function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
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

  return (
     <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className={`gap-8 ${
            sampleProjects.length === 1 
              ? "flex justify-center" 
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sampleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className="py-0 border-gray-300 hover:bg-slate-750 transition-colors duration-300 cursor-pointer group hover:shadow-xl max-w-xl"
                onClick={() => openModal(project)}
              >
                <CardContent className="p-0 m-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className={`!text-3xl mb-2 group-hover:text-gray-700 transition-colors !font-semibold ${raleway.variable}`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#094E82] text-slate-200 hover:bg-[#094E82] text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-[#094E82]/70 text-slate-200 text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-[600px] w-full max-h-[90vh] overflow-y-auto border-gray-300 py-5 scroll-y-auto custom-scrollbar">
              <DialogHeader>
                <DialogTitle className="!text-4xl text-[#094E82] font-bold">{selectedProject?.title}</DialogTitle>
              </DialogHeader>

              {selectedProject && (
                <div className="">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-slate-700 border-slate-600 text-white hover:bg-slate-600" />
                    <CarouselNext className="right-2 bg-slate-700 border-slate-600 text-white hover:bg-slate-600" />
                  </Carousel>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#094E82] mb-2 pt-4">Project Purpose</h3>
                      <ul className="space-y-3 text-slate-600">
                        {selectedProject.purpose.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#094E82] mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-[#094E82] text-slate-200 hover:bg-[#094E82]/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#094E82] mb-2">Category</h3>
                      <Badge className="bg-[#094E82] hover:bg-[#094E82]/80">{selectedProject.category}</Badge>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {selectedProject.liveUrl && (
                        <Button asChild className="bg-slate-600 hover:bg-slate-700 text-white">
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Live Project
                          </a>
                        </Button>
                      )}
                       {selectedProject.linkedinUrl && (
                        <Button asChild className="bg-[#094E82] hover:bg-[#094E82]/40 text-white">
                          <a
                            href={selectedProject.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            LinkedIn Post
                          </a>
                        </Button>
                      )}
                      {selectedProject.repoUrl && (
                        <Button variant="outline" asChild className="border-[#094E82] text-[#094E82] hover:text-[#094E82]/40 hover:border-[#094E82]/40">
                          <a
                            href={selectedProject.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            View Repository
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    
  )
}

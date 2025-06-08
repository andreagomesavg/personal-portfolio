
"use client";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/sub/Footer";
import Hero from "./components/sub/Hero";
import Loading from "./components/sub/Loading";
import StickyNavbar from "./components/sub/Navbar";
import Projects from "./components/sub/Projects";
import { useLoading } from "./hooks/useLoading";


export default function Home() {
    const isLoading = useLoading()

  if (isLoading) {
    return <Loading/>
  }

  return (
    
      <div>
      
        <StickyNavbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Footer/>
    </div>
    
   
  );
}

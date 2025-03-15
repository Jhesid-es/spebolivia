import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import VideoEstudiante from "@/components/VideoEstudiante";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPE Bolivian Section",
  description: "Pagina de la SPE Bolivia",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <VideoEstudiante />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}

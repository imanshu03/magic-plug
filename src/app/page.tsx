"use client";
import About from "@/Sections/About";
import Intro from "@/Sections/Intro";
import Expertise from "@/Sections/Expertise";
import Divider from "@/Components/Divider";
import Services from "@/Sections/Services";
import Contact from "@/Sections/Contact";
import Carousel from "@/Sections/Carousel";

export default function Home() {
  return (
    <main className="w-screen h-auto">
      <Intro />
      <About />
      <Divider margin />
      <Expertise />
      <Divider />
      <Carousel />
      <Divider />
      <Services />
      <Contact />
    </main>
  );
}

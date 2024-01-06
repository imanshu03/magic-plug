"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";

const SmoothScrollWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SmoothScrollWrapper;

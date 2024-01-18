"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { LinkData } from "@/types";
import Lenis from "@studio-freight/lenis";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext<Lenis | null>(null);

export const useScroll = () => useContext(ScrollContext);

const SmoothScrollWrapper: React.FC<
  {
    children: React.ReactNode;
  } & LinkData
> = ({ children, linkData }) => {
  const active = useSelectedLayoutSegment();
  const [lenisScroll, setLenisScroll] = useState<Lenis | null>(null);

  useEffect(() => {
    if (!active?.includes("studio")) {
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      setLenisScroll(lenis);
      return () => {
        setLenisScroll(null);
        lenis.destroy();
      };
    }
  }, [active]);

  return active?.includes("studio") ? (
    <>{children}</>
  ) : (
    <ScrollContext.Provider value={lenisScroll}>
      <Header linkData={linkData} />
      {children}
      <Footer linkData={linkData} />
    </ScrollContext.Provider>
  );
};

export default SmoothScrollWrapper;

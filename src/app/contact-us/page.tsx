import Contact from "@/Sections/Contact";
import { getReferrers, getServices } from "@studio/queries";
import { Metadata } from "next";
import React from "react";

const isDev = process.env.NEXT_PUBLIC_ENV === "development";
export const revalidate = isDev ? 0 : 900;

export const metadata: Metadata = {
  title: "Contact Us | MagicPlug",
};

export default async function ContactUs() {
  const [services, referrers] = await Promise.allSettled([
    getServices(),
    getReferrers(),
  ]);

  const props = {
    services: services.status === "fulfilled" ? services.value : [],
    referrers: referrers.status === "fulfilled" ? referrers.value : [],
  };

  return (
    <main className="w-screen h-auto bg-app-bg">
      <Contact {...props} />
    </main>
  );
}

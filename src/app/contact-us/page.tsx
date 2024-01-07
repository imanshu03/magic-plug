import Contact from "@/Sections/Contact";
import { getReferrers, getServices } from "@studio/queries";
import React from "react";

export const revalidate = 3600;

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

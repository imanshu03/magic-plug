import Loader from "@/Atoms/Loader";
import Contact from "@/Sections/Contact";
import { getReferrers, getServices } from "@studio/queries";
import { Metadata } from "next";
import React, { Suspense } from "react";

const isDev = process.env.ENVIRONMENT === "development";
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
    <Suspense fallback={<Loader />}>
      <main className="w-screen h-auto bg-app-bg">
        <Contact {...props} />
      </main>
    </Suspense>
  );
}

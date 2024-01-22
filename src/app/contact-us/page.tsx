import Loader from "@/Atoms/Loader";
import Contact from "@/Sections/Contact";
import { getReferrers, getServices, getSocialLinks } from "@studio/queries";
import { Metadata } from "next";
import React, { Suspense } from "react";

const isDev = process.env.ENVIRONMENT === "development";
export const revalidate = isDev ? 0 : 900;

export const metadata: Metadata = {
  title: "Contact Us | MagicPlug Concepts | Software Development Company",
};

export default async function ContactUs() {
  const [services, referrers, socials] = await Promise.allSettled([
    getServices(),
    getReferrers(),
    getSocialLinks(),
  ]);

  const props = {
    services: services.status === "fulfilled" ? services.value : [],
    referrers: referrers.status === "fulfilled" ? referrers.value : [],
    socialLinks:
      socials.status === "fulfilled"
        ? socials.value.filter((e) => !e.social)
        : [],
  };

  return (
    <Suspense fallback={<Loader />}>
      <main className="w-screen h-auto bg-app-bg">
        <Contact {...props} />
      </main>
    </Suspense>
  );
}

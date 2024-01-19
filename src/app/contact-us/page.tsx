import Loader from "@/Atoms/Loader";
import Contact from "@/Sections/Contact";
import { SERVICES_DATA } from "@/dataStore/services";
import { getReferrers, getSocialLinks } from "@studio/queries";
import { Metadata } from "next";
import React, { Suspense } from "react";

const isDev = process.env.ENVIRONMENT === "development";
export const revalidate = isDev ? 0 : 900;

export const metadata: Metadata = {
  title: "Contact Us | MagicPlug",
};

export default async function ContactUs() {
  const [socials, referrers] = await Promise.allSettled([
    getSocialLinks(),
    getReferrers(),
  ]);

  const props = {
    services: SERVICES_DATA,
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

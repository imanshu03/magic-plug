import About from "@/Sections/About";
import Intro from "@/Sections/Intro";
import Expertise from "@/Sections/Expertise";
import Divider from "@/Atoms/Divider";
import Services from "@/Sections/Services";
import Contact from "@/Sections/Contact";
import Carousel from "@/Sections/Carousel";
import {
  getClients,
  getExpertise,
  getReferrers,
  getSocialLinks,
} from "@studio/queries";
import Clients from "@/Sections/Clients";
import { Suspense } from "react";
import Loader from "@/Atoms/Loader";
import { SERVICES_DATA } from "@/dataStore/services";

const isDev = process.env.ENVIRONMENT === "development";
export const revalidate = isDev ? 0 : 900;

export default async function Home() {
  const [expertise, socials, referrers, clients] = await Promise.allSettled([
    getExpertise(),
    getSocialLinks(),
    getReferrers(),
    getClients(),
  ]);

  const contactPageProps = {
    services: SERVICES_DATA,
    referrers: referrers.status === "fulfilled" ? referrers.value : [],
    socialLinks:
      socials.status === "fulfilled"
        ? socials.value.filter((e) => !e.social)
        : [],
  };

  const expertiseData = expertise.status === "fulfilled" ? expertise.value : [];
  const clientsData = clients.status === "fulfilled" ? clients.value : [];

  return (
    <Suspense fallback={<Loader />}>
      <main className="w-screen h-auto">
        <Intro />
        <About />
        {expertiseData.length ? (
          <>
            <Divider margin />
            <Expertise data={expertiseData} />
          </>
        ) : null}
        <Divider />
        <Carousel />
        <Divider />
        <Services data={SERVICES_DATA} />
        {clientsData.length ? (
          <>
            <Divider margin direction="down" />
            <Clients data={clientsData} />
            <Divider margin direction="up" />
          </>
        ) : null}
        <Contact {...contactPageProps} />
      </main>
    </Suspense>
  );
}

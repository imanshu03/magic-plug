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
  getServices,
  getSocialLinks,
} from "@studio/queries";
import Clients from "@/Sections/Clients";
import { Suspense } from "react";
import Loader from "@/Atoms/Loader";
import About from "@/Sections/About";

const isDev = process.env.ENVIRONMENT === "development";
export const revalidate = isDev ? 0 : 900;

export default async function Home() {
  const [expertise, services, referrers, clients, socials] =
    await Promise.allSettled([
      getExpertise(),
      getServices(),
      getReferrers(),
      getClients(),
      getSocialLinks(),
    ]);

  const contactPageProps = {
    services: services.status === "fulfilled" ? services.value : [],
    referrers: referrers.status === "fulfilled" ? referrers.value : [],
    socialLinks:
      socials.status === "fulfilled"
        ? socials.value.filter((e) => !e.social)
        : [],
  };

  const expertiseData = expertise.status === "fulfilled" ? expertise.value : [];
  const servicesData = services.status === "fulfilled" ? services.value : [];
  const clientsData = clients.status === "fulfilled" ? clients.value : [];

  return (
    <Suspense fallback={<Loader />}>
      <main className="w-screen h-auto">
        <Intro />
        <About />
        {servicesData.length ? (
          <>
            <Divider margin />
            <Services data={servicesData} />
          </>
        ) : null}
        <Divider margin direction="up" />
        <Carousel />
        <Divider margin direction="down" />
        {expertiseData.length ? (
          <>
            <Expertise data={expertiseData} />
          </>
        ) : null}
        {clientsData.length ? (
          <>
            <Divider margin />
            <Clients data={clientsData} />
            <Divider margin direction="up" />
          </>
        ) : null}
        <Contact {...contactPageProps} />
      </main>
    </Suspense>
  );
}

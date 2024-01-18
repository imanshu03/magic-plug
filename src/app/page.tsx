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
  getServices,
} from "@studio/queries";
import Clients from "@/Sections/Clients";
import Script from "next/script";

const isDev = process.env.NEXT_PUBLIC_ENV === "development";
export const revalidate = isDev ? 0 : 900;

export default async function Home() {
  const [expertise, services, referrers, clients] = await Promise.allSettled([
    getExpertise(),
    getServices(),
    getReferrers(),
    getClients(),
  ]);

  const contactPageProps = {
    services: services.status === "fulfilled" ? services.value : [],
    referrers: referrers.status === "fulfilled" ? referrers.value : [],
  };

  const expertiseData = expertise.status === "fulfilled" ? expertise.value : [];
  const servicesData = services.status === "fulfilled" ? services.value : [];
  const clientsData = clients.status === "fulfilled" ? clients.value : [];

  return (
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
      {servicesData.length ? <Services data={servicesData} /> : null}
      {clientsData.length ? (
        <>
          <Divider margin direction="down" />
          <Clients data={clientsData} />
          <Divider margin direction="up" />
        </>
      ) : null}
      <Contact {...contactPageProps} />
    </main>
  );
}

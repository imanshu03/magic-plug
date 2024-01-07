import About from "@/Sections/About";
import Intro from "@/Sections/Intro";
import Expertise from "@/Sections/Expertise";
import Divider from "@/Components/Divider";
import Services from "@/Sections/Services";
import Contact from "@/Sections/Contact";
import Carousel from "@/Sections/Carousel";
import { getExpertise, getReferrers, getServices } from "@studio/queries";

export const revalidate = 1;

export default async function Home() {
  const [expertise, services, referrers] = await Promise.allSettled([
    getExpertise(),
    getServices(),
    getReferrers(),
  ]);

  const contactPageProps = {
    services: services.status === "fulfilled" ? services.value : [],
    referrers: referrers.status === "fulfilled" ? referrers.value : [],
  };
  return (
    <main className="w-screen h-auto">
      <Intro />
      <About />
      <Divider margin />
      <Expertise
        data={expertise.status === "fulfilled" ? expertise.value : []}
      />
      <Divider />
      <Carousel />
      <Divider />
      <Services data={services.status === "fulfilled" ? services.value : []} />
      <Contact {...contactPageProps} />
    </main>
  );
}

import { PortableText } from "@portabletext/react";
import { getServicesPage } from "@studio/queries";
import clsx from "clsx";
import React from "react";
import SlugPageLayout, {
  portableTextComponents,
} from "@/Components/SlugPageLayout";
import StarIcon from "@/Icons/Star";
import { Metadata, ResolvingMetadata } from "next";

const isDev = process.env.NEXT_PUBLIC_ENV === "development";
export const revalidate = isDev ? 0 : 900;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getServicesPage(`/services/${slug}`);
  return {
    title: `${data.pageTitle} | MagicPlug`,
  };
}

export default async function ServicesSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getServicesPage(`/services/${params.slug}`);

  return (
    <main
      className={clsx(
        "w-screen min-h-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] flex flex-col items-stretch justify-start",
        "pt-[68px] sm:pt-[76px] md:pt-[84px] lg:pt-[92px] xl:pt-[100px]"
      )}
    >
      <SlugPageLayout data={data as any} slug={params.slug}>
        {data.servicesDescription ? (
          <article className="prose max-w-none prose-sm md:prose-lg lg:prose-xl text-dark-primary">
            <PortableText
              value={data.servicesDescription}
              components={portableTextComponents}
            />
          </article>
        ) : null}
        {data.servicesProvided?.length ? (
          <div className="mt-6 md:mt-10 lg:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-9 md:gap-y-12 lg:gap-x-12 lg:gap-y-16">
            {data.servicesProvided.map((item, i) => (
              <div
                className="flex flex-col items-start justify-start"
                key={item.heading}
              >
                <div className="flex items-center justify-start shrink-0">
                  <StarIcon className="mr-2 w-3 h-3 md:w-5 md:h-5" />
                  <p className="text-dark-light text-left capitalize font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
                    {item.heading}
                  </p>
                </div>
                <p className="text-dark-secondary text-left font-normal text-sm md:text-base lg:text-lg mt-2 lg:mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </SlugPageLayout>
    </main>
  );
}

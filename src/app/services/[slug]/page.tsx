import { PortableText } from "@portabletext/react";
import { getServiceExcludingCurrent, getServicesPage } from "@studio/queries";
import clsx from "clsx";
import React, { Suspense } from "react";
import SlugPageLayout, {
  portableTextComponents,
} from "@/Components/SlugPageLayout";
import StarIcon from "@/Icons/Star";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { convertSlugToName } from "@/utils";
import Loader from "@/Atoms/Loader";
import Divider from "@/Atoms/Divider";
import { H3Heading } from "@/Atoms/Heading";
import { CustomNextLink } from "@/Atoms/Links";

const isDev = process.env.ENVIRONMENT === "development";
export const revalidate = isDev ? 0 : 900;

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Metadata {
  return {
    title: `${convertSlugToName(slug)} | MagicPlug Concepts`,
  };
}

export default async function ServicesSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getServicesPage(params.slug);

  if (!data) notFound();

  const otherServices = await getServiceExcludingCurrent(params.slug);

  return (
    <Suspense fallback={<Loader />}>
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
          <Divider margin fullWidth />
          <article className="flex flex-col items-start justify-start prose max-w-none prose-sm md:prose-md lg:prose-lg text-dark-primary">
            <H3Heading>Explore our other offered services:</H3Heading>
            <ul>
              {otherServices.map(({ name, slug }) => (
                <li key={slug}>
                  <CustomNextLink href={slug}>{name}</CustomNextLink>
                </li>
              ))}
            </ul>
          </article>
        </SlugPageLayout>
      </main>
    </Suspense>
  );
}

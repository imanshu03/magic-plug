import { getPageData } from "@studio/queries";
import clsx from "clsx";
import React, { Suspense } from "react";
import SlugPageLayout from "@/Components/SlugPageLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { convertSlugToName } from "@/utils";
import Loader from "@/Atoms/Loader";

const isDev = process.env.ENVIRONMENT === "development";
export const revalidate = isDev ? 0 : 900;

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Metadata {
  return {
    title: `${convertSlugToName(
      slug
    )} | MagicPlug Concepts | Software Development Company`,
  };
}

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPageData(params.slug);

  if (!data) notFound();

  return (
    <Suspense fallback={<Loader />}>
      <main
        className={clsx(
          "w-screen min-h-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] flex flex-col items-stretch justify-start",
          "pt-[68px] sm:pt-[76px] md:pt-[84px] lg:pt-[92px] xl:pt-[100px]"
        )}
      >
        <SlugPageLayout data={data} slug={params.slug} />
      </main>
    </Suspense>
  );
}

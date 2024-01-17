import { getPageData } from "@studio/queries";
import clsx from "clsx";
import React from "react";
import SlugPageLayout from "@/Components/SlugPageLayout";

const isDev = process.env.NEXT_PUBLIC_ENV === "development";
export const revalidate = isDev ? 0 : 900;

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPageData(params.slug);

  return (
    <main
      className={clsx(
        "w-screen min-h-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] flex flex-col items-stretch justify-start",
        "pt-[68px] sm:pt-[76px] md:pt-[84px] lg:pt-[92px] xl:pt-[100px]"
      )}
    >
      <SlugPageLayout data={data} slug={params.slug} />
    </main>
  );
}

import { getPageData, getServices } from "@studio/queries";
import clsx from "clsx";
import React from "react";
import { getPrefixedNumber } from "@/utils";
import StarIcon from "@/Icons/Star";
import { CustomLink } from "@/Atoms/Links";
import SlugPageLayout from "@/Components/SlugPageLayout";
import { Metadata } from "next";

const isDev = process.env.NEXT_PUBLIC_ENV === "development";
export const revalidate = isDev ? 0 : 900;

export const metadata: Metadata = {
  title: "Services | MagicPlug",
};

export default async function ServicesPage() {
  const data = await getPageData("services");
  const services = await getServices();

  return (
    <main
      className={clsx(
        "w-screen min-h-screen h-auto bg-app-bg px-[5vw] lg:px-[10vw] flex flex-col items-stretch justify-start",
        "pt-[68px] sm:pt-[76px] md:pt-[84px] lg:pt-[92px] xl:pt-[100px]"
      )}
    >
      <SlugPageLayout data={data} slug="services">
        {services.length ? (
          <div className="mt-6 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-9 md:gap-y-12 lg:gap-x-12 lg:gap-y-16">
            {services.map((item, i) => (
              <div
                className="flex flex-col lg:flex-row items-start lg:items-start justify-start"
                key={item.slug}
              >
                <div className="text-8xl text-theme/10 font-semibold mr-4 mb-4 lg:mb-0">
                  {getPrefixedNumber(i + 1)}
                </div>
                <div className="h-full flex flex-col items-stretch justify-center">
                  <div className="flex items-center justify-start">
                    <StarIcon className="mr-2 w-3 h-3 md:w-5 md:h-5" />
                    <p className="text-dark-light text-left capitalize font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
                      {item.name}
                    </p>
                  </div>

                  <p className="text-dark-secondary text-left font-normal text-sm md:text-base lg:text-lg mt-2 lg:mt-4">
                    {item.description}
                  </p>
                  <div className="grow" />
                  <CustomLink href={item.slug} className="mt-2 self-end">
                    know more
                  </CustomLink>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </SlugPageLayout>
    </main>
  );
}

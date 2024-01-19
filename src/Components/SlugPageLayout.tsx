import clsx from "clsx";
import React from "react";
import StarIcon from "../Icons/Star";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "../Atoms/Button";
import Image from "next/image";
import { PAGE_DATA_TYPE } from "@/dataStore/page";

interface Props {
  data: PAGE_DATA_TYPE;
  children?: React.ReactNode;
}

const SlugPageLayout: React.FC<Props> = ({ data, children = null }) => {
  return (
    <>
      {data.image?.isInline ? (
        <div
          className={clsx(
            "w-full flex flex-col md:flex-row items-center justify-between",
            "h-auto md:min-h-[calc(100vh_-_84px)] lg:min-h-[calc(100vh_-_92px)] xl:min-h-[calc(100vh_-_100px)]",
            "mb-6 md:mb-0 gap-6 lg:gap-12"
          )}
        >
          <div
            className={clsx(
              "w-full md:w-[60%] flex flex-col items-start justify-center order-2"
            )}
          >
            {data.pageTitle ? (
              <div className="flex justify-center items-center mb-2 md:mb-4 lg:mb-6">
                <StarIcon className="w-3 h-3 md:w-5 md:h-5 mr-2 [&>*]:fill-theme" />
                <h2 className="text-theme uppercase tracking-wider text-xs md:text-sm lg:text-base">
                  {data.pageTitle}
                </h2>
              </div>
            ) : null}
            <article className="prose max-w-none prose-sm md:prose-md lg:prose-lg text-dark-primary [&_.themed-color]:!text-theme">
              {data.description}
            </article>
            {data.cta?.title && data.cta.slug ? (
              <LinkButton className="mt-4 lg:mt-8" href={data.cta.slug}>
                {data.cta.title}
              </LinkButton>
            ) : null}
          </div>
          <div className={clsx("w-full md:w-[40%] h-auto order-1")}>
            <Image
              src={data.image.src}
              width={data.image.width}
              height={data.image.height}
              alt={data.pageTitle}
              className="max-h-[600px]"
              priority
            />
          </div>
        </div>
      ) : (
        <>
          {data.image ? (
            <div className="w-full h-auto">
              <Image
                src={data.image.src}
                width={data.image.width}
                height={data.image.height}
                alt={data.pageTitle}
                className="max-h-[600px]"
                priority
              />
            </div>
          ) : null}
          {data.pageTitle ? (
            <div className="flex justify-start items-center mb-2 md:mb-4 lg:mb-6">
              <StarIcon className="w-3 h-3 md:w-5 md:h-5 mr-2 [&>*]:fill-theme" />
              <h2 className="text-theme uppercase tracking-wider text-xs md:text-sm lg:text-base">
                {data.pageTitle}
              </h2>
            </div>
          ) : null}
          {data.description ? (
            <article className="prose max-w-none prose-sm md:prose-lg lg:prose-xl text-dark-primary">
              {data.description}
            </article>
          ) : null}
          {data.cta?.title && data.cta.slug ? (
            <LinkButton className="mt-4 lg:mt-8" href={data.cta.slug}>
              {data.cta.title}
            </LinkButton>
          ) : null}
        </>
      )}
      {data.content ? (
        <article className="prose max-w-none prose-sm md:prose-lg lg:prose-xl text-dark-primary">
          <>{data.content}</>
        </article>
      ) : null}
      {children}
    </>
  );
};

export default SlugPageLayout;

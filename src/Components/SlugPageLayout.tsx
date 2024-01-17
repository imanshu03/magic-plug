import { getImageData } from "@studio/image";
import { DynamicPageData } from "@studio/types";
import clsx from "clsx";
import React from "react";
import StarIcon from "../Icons/Star";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { LinkButton } from "../Atoms/Button";
import Image from "next/image";
import Divider from "../Atoms/Divider";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { CustomLink } from "@/Atoms/Links";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  hardBreak: () => <br />,
  marks: {
    highlight: (props) => {
      return (
        <span className="text-theme [&>strong]:!text-theme">
          {props.children}
        </span>
      );
    },
    colouredStrong: (props) => (
      <strong className="text-theme">{props.children}</strong>
    ),
    link: (props) => {
      const {
        value: { href, isInline },
        children,
      } = props;
      return <CustomLink href={href}>{children}</CustomLink>;
    },
  },

  block: {
    h1: ({ children }) => {
      return (
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl leading-tight font-semibold">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      return (
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl leading-tight font-semibold">
          {children}
        </h2>
      );
    },
    h3: (props) => {
      return (
        <h3 className="flex items-center justify-start">
          <StarIcon className="mr-2" />
          {props.children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h4 className="flex items-center justify-start">
          <StarIcon className="mr-2" />
          {children}
        </h4>
      );
    },
  },
  types: {
    image: ({ value, isInline }) => {
      const { width, height } = getImageDimensions(value);
      const src = urlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .quality(100)
        .url();

      return (
        <Image
          src={src}
          alt={value.alt || " "}
          width={width}
          height={height}
          loading="lazy"
          className={clsx(isInline ? "" : "mx-auto max-h-[600px] w-auto")}
          style={{
            display: isInline ? "inline-block" : "block",
            aspectRatio: width / height,
          }}
        />
      );
    },
    break: (props: any) => {
      const { direction = undefined, margin = false } = props.value;
      return <Divider margin={margin} direction={direction} fullWidth />;
    },
  },
};

interface Props {
  data: DynamicPageData;
  slug: string;
  children?: React.ReactNode;
}

const SlugPageLayout: React.FC<Props> = ({ data, slug, children = null }) => {
  const imageData = data.image?.asset ? getImageData(data.image.asset) : null;
  const isImageInline = !!(data.image?.asset && data.image.isInline);
  const isImageAfter = !!(data.image?.asset && data.image.after);

  return (
    <>
      {data.description && imageData && isImageInline ? (
        <div
          className={clsx(
            "w-full flex flex-col md:flex-row items-center justify-between",
            "h-auto md:min-h-[calc(100vh_-_84px)] lg:min-h-[calc(100vh_-_92px)] xl:min-h-[calc(100vh_-_100px)]",
            "mb-6 md:mb-0 gap-6 lg:gap-12"
          )}
        >
          <div
            className={clsx(
              "w-full md:w-[60%] flex flex-col items-start justify-center order-2",
              isImageAfter ? "md:order-1" : ""
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
              <PortableText
                value={data.description}
                components={portableTextComponents}
              />
            </article>
            {data.cta?.title && data.cta.slug ? (
              <LinkButton className="mt-4 lg:mt-8" href={data.cta.slug}>
                {data.cta.title}
              </LinkButton>
            ) : null}
          </div>
          <div
            className={clsx(
              "w-full md:w-[40%] h-auto order-1",
              isImageAfter ? "md:order-2" : ""
            )}
          >
            <Image
              src={imageData.src}
              width={imageData.width}
              height={imageData.height}
              alt={data.image?.alt ?? `${slug} image`}
              className={clsx(data.image?.className)}
              priority
            />
          </div>
        </div>
      ) : (
        <>
          {imageData ? (
            <div className="w-full h-auto">
              <Image
                src={imageData.src}
                width={imageData.width}
                height={imageData.height}
                alt={data.image?.alt ?? `${slug} image`}
                className={clsx(data.image?.className)}
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
              <PortableText
                value={data.description}
                components={portableTextComponents}
              />
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
          <PortableText
            value={data.content}
            components={portableTextComponents}
          />
        </article>
      ) : null}
      {children}
      {data.footer ? (
        <article className="prose max-w-none prose-sm md:prose-lg lg:prose-xl text-dark-primary">
          <PortableText
            value={data.footer}
            components={portableTextComponents}
          />
        </article>
      ) : null}
    </>
  );
};

export default SlugPageLayout;

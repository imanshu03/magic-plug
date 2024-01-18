import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

export const getImageData = (value: any) => {
  if (!value) return null;
  const { width, height } = getImageDimensions(value);
  const src = urlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  })
    .image(value)
    .width(width)
    .fit("max")
    .auto("format")
    .quality(100)
    .url();
  return {
    src,
    width,
    height,
  };
};

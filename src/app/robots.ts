import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://magicplug.tech/sitemap.xml",
    host: "https://magicplug.tech/",
  };
}

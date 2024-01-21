import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MagicPlug Concepts Private Limited",
    short_name: "MagicPlug",
    description:
      "Magic Plug Concepts Private Limited: Your trusted software development company in transforming ideas into cutting-edge digital solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F5",
    theme_color: "#F5F5F5",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

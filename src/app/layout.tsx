/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata, Viewport } from "next";
import { Hurricane, Manrope } from "next/font/google";
import "./globals.css";
import path from "path";
import fs from "fs";
import clsx from "clsx";
import Script from "next/script";
import SmoothScrollWrapper from "../Components/SmoothScrollWrapper";
import { getDynamicPages, getSocialLinks } from "@studio/queries";
import { LinkData } from "@/types";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const hurricane = Hurricane({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hurricane",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MagicPlug",
  description:
    "Your trusted software development company in transforming ideas into cutting-edge digital solutions.",
  icons: [
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "57x57",
      url: "/favicons/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "60x60",
      url: "/favicons/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "72x72",
      url: "/favicons/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "76x76",
      url: "/favicons/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "114x114",
      url: "/favicons/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "120x120",
      url: "/favicons/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "144x144",
      url: "/favicons/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "152x152",
      url: "/favicons/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/favicons/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicons/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicons/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
  ],
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#F5F5F5",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
  },
  keywords: [
    "Software development",
    "IT Services",
    "Staff Augmentation",
    "Web development",
    "Website development",
    "Frontend development",
    "Server development",
    "Backend development",
    "Mobile Application development",
    "Mobile App development",
    "React.js development",
    "Next.js development",
    "React Native development",
    "iOS development",
    "Android development",
    "Hybrid application development",
    "Flutter development",
    "Quality assurance",
    "Manual testing",
    "Automation testing",
    "Web application testing",
    "Mobile application testing",
    "Java development",
    "Springboot development",
    "Python development",
    "Django development",
    "Flask development",
    "Marketing Automation",
    "Hubspot CRM",
    "Salesforce CRM",
    "SEO services",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#F5F5F5",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cssContent: string[] = [];
  const appendScriptsToHead = (pathName: string) => {
    const files = fs.readdirSync(pathName);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.resolve(pathName, file);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const content = fs.readFileSync(filePath, { encoding: "utf-8" });
        cssContent.push(content);
      } else if (stat.isDirectory()) {
        appendScriptsToHead(filePath);
      }
    }
  };

  let paths = ["static"];
  let currentPath;
  while (true) {
    paths.unshift("..");
    currentPath = path.resolve(__dirname, ...paths);
    if (fs.existsSync(currentPath)) break;
  }

  const cssPaths = path.resolve(currentPath, "css");
  appendScriptsToHead(cssPaths);

  const [socialData, dynamicPageData] = await Promise.allSettled([
    getSocialLinks(),
    getDynamicPages(),
  ]);
  const linkData: LinkData["linkData"] = {
    contact:
      socialData.status === "fulfilled"
        ? socialData.value.filter((e) => !e.social)
        : [],
    social:
      socialData.status === "fulfilled"
        ? socialData.value.filter((e) => e.social)
        : [],
    primaryPage:
      dynamicPageData.status === "fulfilled"
        ? dynamicPageData.value.filter((e) => e.mainPage)
        : [],
    secondaryPage:
      dynamicPageData.status === "fulfilled"
        ? dynamicPageData.value.filter((e) => !e.mainPage)
        : [],
  };

  return (
    <html
      lang="en"
      className={clsx(
        "bg-app-bg w-screen h-auto",
        manrope.variable,
        hurricane.variable
      )}
    >
      <head>
        {cssContent.map((content, i) => (
          <style key={i} dangerouslySetInnerHTML={{ __html: content }}></style>
        ))}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-X2L15MZPF3"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-X2L15MZPF3");
          `}
        </Script>
      </head>
      <body className="bg-app-bg w-screen h-auto font-manrope">
        <SmoothScrollWrapper linkData={linkData}>
          {children}
        </SmoothScrollWrapper>
        <div id="menu-portal"></div>
      </body>
    </html>
  );
}

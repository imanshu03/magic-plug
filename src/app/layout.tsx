/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import clsx from "clsx";
import Script from "next/script";
import SmoothScrollWrapper from "../Components/SmoothScrollWrapper";
import { getDynamicPages, getSocialLinks } from "@studio/queries";
import { LinkData } from "@/types";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MagicPlug Concepts | Software Development Company",
  description:
    "Magic Plug Concepts Private Limited: Your trusted software development company in transforming ideas into cutting-edge digital solutions.",
  icons: [
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      url: "/icon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
  ],
  other: {
    "msapplication-TileColor": "#0D0D0D",
    "msapplication-TileImage": "/mstile-150x150.png",
  },
  keywords: [
    "MagicPlug Tech",
    "MagicPlug Concepts Private Limited",
    "Leading company in software development",
    "Leading company in staff augmentation",
    "Leading company in website development",
    "Leading company in frontend development",
    "Leading company in backend development",
    "Leading company in server augmentation",
    "Leading company in mobile application development",
    "Leading company in flutter application development",
    "Leading company in ios application development",
    "Leading company in android application development",
    "Leading company in quality assurance",
    "Leading company in UI UX designs",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "contain",
  },
  themeColor: "#F5F5F5",
  openGraph: {
    type: "website",
    url: "https://magicplug.tech",
    siteName: "MagicPlug Concepts",
    title: "MagicPlug Concepts",
    description:
      "Magic Plug Concepts Private Limited: Your trusted software development company in transforming ideas into cutting-edge digital solutions.",
    images: [
      {
        url: "https://magicplug.tech/card.png",
        type: "image/png",
        width: 2000,
        height: 1046,
      },
    ],
    countryName: "India",
    emails: "hello@magicplug.tech",
  },
  twitter: {
    title: "MagicPlug Concepts",
    description:
      "Magic Plug Concepts Private Limited: Your trusted software development company in transforming ideas into cutting-edge digital solutions.",
    creator: "@magicplug_tech",
    site: "@magicplug_tech",
    card: "summary_large_image",
    images: [
      {
        url: "https://magicplug.tech/card.png",
        type: "image/png",
        width: 2000,
        height: 1046,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      className={clsx("bg-app-bg w-screen h-auto", manrope.variable)}
    >
      {process.env.ENVIRONMENT !== "development" ? (
        <head>
          <style
            id="tailwind-ssr"
            dangerouslySetInnerHTML={{
              __html: require("!raw-loader!./output.css").default,
            }}
          ></style>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-X2L15MZPF3"></Script>
          <Script id="google-analytics">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                window.trackGAEvent = gtag;
                gtag("js", new Date());
    
                gtag("config", "G-X2L15MZPF3");
              `}
          </Script>
        </head>
      ) : null}
      <body className="bg-app-bg w-screen h-auto font-manrope">
        <ToastContainer className="text-dark-primary font-manrope" />
        <SmoothScrollWrapper linkData={linkData}>
          {children}
        </SmoothScrollWrapper>
        <div id="menu-portal"></div>
      </body>
    </html>
  );
}

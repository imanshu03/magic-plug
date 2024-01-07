import type { Metadata } from "next";
import { Hurricane, Manrope } from "next/font/google";
import "./globals.css";
import path from "path";
import fs from "fs";
import clsx from "clsx";
import Script from "next/script";
import SmoothScrollWrapper from "../Components/SmoothScrollWrapper";
import { useSelectedLayoutSegment } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const hurricane = Hurricane({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hurricane",
});

export const metadata: Metadata = {
  title: "MagicPlug",
  description:
    "Your trusted software development company in transforming ideas into cutting-edge digital solutions.",
};

export default function RootLayout({
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

  return (
    <html lang="en" className="bg-app-bg w-screen h-auto">
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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#F5F5F5" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#F5F5F5"></meta>
      </head>
      <body
        className={clsx(
          manrope.variable,
          hurricane.variable,
          "bg-app-bg w-screen h-auto"
        )}
      >
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <div id="menu-portal"></div>
      </body>
    </html>
  );
}

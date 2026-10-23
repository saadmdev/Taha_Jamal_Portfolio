import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F4F4F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tahamalik.dev"),
  title: "Muhammad Taha Jamal Malik — Business Development, Marketing & Design",
  description:
    "Editorial portfolio of Muhammad Taha Jamal Malik. BBA graduate (2026) with experience in business development at Signature Rotana Hotels and e-commerce visual design at Al Fateen E-Commerce.",
  keywords: [
    "Muhammad Taha Jamal Malik",
    "Taha Malik",
    "Business Development",
    "Marketing",
    "Visual Branding",
    "Graphic Design",
    "BBA Graduate",
    "Rawalpindi",
    "Pakistan"
  ],
  authors: [{ name: "Muhammad Taha Jamal Malik" }],
  creator: "Muhammad Taha Jamal Malik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahamalik.dev",
    title: "Muhammad Taha Jamal Malik — Business Development, Marketing & Design",
    description:
      "Bringing people, ideas, and visual storytelling together — from building professional relationships to creating thoughtful brand experiences.",
    siteName: "Muhammad Taha Jamal Malik Portfolio",
    images: [
      {
        url: "/taha-portrait.jpg",
        width: 1024,
        height: 1024,
        alt: "Muhammad Taha Jamal Malik",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F4F4F4] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#F4F4F4]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CG Carbon | Premium Activated Carbon Solutions",
    template: "%s | CG Carbon"
  },
  description: "CG Carbon provides high-quality activated carbon products for water treatment, air purification, industrial applications and more, derived from sustainable sources.",
  keywords: ["activated carbon", "water purification", "air filtration", "carbon solutions", "industrial carbon", "sustainable carbon", "CG Carbon", "granular activated carbon", "powdered activated carbon", "pelletized activated carbon"],
  authors: [{ name: "CG Carbon" }],
  creator: "CG Carbon",
  publisher: "CG Carbon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cgcarbon.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cgcarbon.in",
    siteName: "CG Carbon",
    title: "CG Carbon | Premium Activated Carbon Solutions",
    description: "CG Carbon provides high-quality activated carbon products for water treatment, air purification, industrial applications and more, derived from sustainable sources.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "CG Carbon Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CG Carbon | Premium Activated Carbon Solutions",
    description: "CG Carbon provides high-quality activated carbon products for water treatment, air purification, industrial applications and more.",
    creator: '@cgcarbon',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

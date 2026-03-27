import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title:
    "Cocinas Modernas RD | Diseño y Fabricación de Cocinas de Lujo en República Dominicana",
  description:
    "Diseñamos y fabricamos cocinas modernas a medida en República Dominicana. Cocinas con isla, gabinetes modernos, muebles de cocina y más. Materiales premium en Santo Domingo.",

  authors: [{ name: "Cocinas Modernas RD" }],
  openGraph: {
    title: "Cocinas Modernas RD | Gabinetes, Islas y Muebles de Cocina en RD",
    description:
      "Cocinas modernas con isla, gabinetes modernos y muebles de cocina de lujo en República Dominicana. Solicita tu cotización gratis.",
    url: "https://www.cocinasmodernasrd.com",
    siteName: "Cocinas Modernas RD",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "images/logoFull.png",
        width: 1200,
        height: 630,
        alt: "Cocinas Modernas RD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocinas Modernas RD",
    description:
      "Diseño y fabricación de cocinas modernas en República Dominicana.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.cocinasmodernasrd.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.cocinasmodernasrd.com/#business",
        name: "Cocinas Modernas RD",
        description:
          "Diseño y fabricación de cocinas modernas con isla, gabinetes de cocina modernos y muebles de cocina de lujo en República Dominicana.",
        url: "https://www.cocinasmodernasrd.com",
        telephone: "+18493419890",
        email: "info@cocinasmodernasrd.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santo Domingo",
          addressCountry: "DO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.4861,
          longitude: -69.9312,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cocinas Modernas y Servicios",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas modernas con isla",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas modulares",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas modernas pequeñas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas americanas",
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas modernas vintage",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas elegantes",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas italianas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas modernas con barra desayunadora",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "cocinas modernas rusticas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas europeas",
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gabinetes de cocina modernos",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Muebles de cocina modernos",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cocinas modernas pequeñas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Islas de cocina modernas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Closets y vestidores a medida",
              },
            },
          ],
        },
        sameAs: [
          "https://www.instagram.com/cocinasmodernasrd",
          "https://www.facebook.com/cocinasmodernasrd",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cocinasmodernasrd.com/#website",
        url: "https://www.cocinasmodernasrd.com",
        name: "Cocinas Modernas RD",
        inLanguage: "es",
      },
    ],
  };

  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-cream font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
});

const Title =
  "Cocinas Modernas en Santo Domingo | Diseño e Instalación a Medida";
const Description =
  "Diseñamos y fabricamos cocinas modernas a medida en Santo Domingo y toda la República Dominicana. Cocinas con isla, gabinetes modernos, muebles de cocina y más.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cocinasmodernasrd.com"),
  title: Title,
  description: Description,
  authors: [{ name: "Cocinas Modernas RD" }],
  openGraph: {
    title: Title,
    description: Description,
    url: "https://cocinasmodernasrd.com",
    siteName: "Cocinas Modernas RD",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/images/opengraph-image.jpg", // sube una imagen 1200x630 real de un proyecto
        width: 1200,
        height: 630,
        alt: "Cocinas Modernas RD - Diseño y fabricación en Santo Domingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: Title,
    description: Description,
    images: ["/images/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://cocinasmodernasrd.com",
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
        "@type": "FurnitureStore",
        "@id": "https://cocinasmodernasrd.com/#business",
        name: "Cocinas Modernas RD",
        description:
          "Diseño y fabricación de cocinas modernas con isla, gabinetes de cocina modernos y muebles de cocina de lujo en República Dominicana.",
        url: "https://cocinasmodernasrd.com",
        telephone: "+18493419890",
        email: "info@cocinasmodernasrd.com",
        priceRange: "$$$",
        image: "https://cocinasmodernasrd.com/images/opengraph-image.jpg",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "3",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "María Rodríguez" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody:
              "La cocina superó todas mis expectativas. El equipo es sumamente profesional y el resultado es de revista.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Carlos Méndez" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody:
              "Proceso impecable desde el diseño hasta la instalación. Mi esposa quedó enamorada del resultado.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ana Familia" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody:
              "Calidad comparable a cocinas europeas pero con el servicio y precio adaptado a República Dominicana.",
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
              itemOffered: { "@type": "Service", name: "Cocinas modulares" },
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
              itemOffered: { "@type": "Service", name: "Cocinas americanas" },
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
                name: "Islas de cocina modernas",
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
        "@id": "https://cocinasmodernasrd.com/#website",
        url: "https://cocinasmodernasrd.com",
        name: "Cocinas Modernas RD",
        inLanguage: "es-DO",
      },
    ],
  };

  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LG32135RT9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LG32135RT9');
          `}
        </Script>
        {/* AdSense removido del layout global — un sitio de leads no debe competir
            visualmente con sus propios CTAs. Si quieres monetizar el blog con ads,
            carga este script solo en el layout de /blog. */}
      </head>
      <body className="bg-obsidian text-cream font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}

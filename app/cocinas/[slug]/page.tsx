import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";
import { COCINAS } from "@/lib/data";
import { notFound } from "next/navigation";
import Script from "next/script";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thisTipoCocina = COCINAS.find((c) => c.slug === slug);

  if (!thisTipoCocina) {
    return {};
  }

  const pageURL = `https://cocinasmodernasrd.com/cocinas/${thisTipoCocina.slug}`;

  return {
    title: thisTipoCocina.pageTitle,
    description: thisTipoCocina.pageDescription,
    alternates: {
      canonical: pageURL,
    },

    openGraph: {
      title: thisTipoCocina.pageTitle,
      description: thisTipoCocina.pageDescription,
      url: pageURL,
      type: "website",
      locale: "es_DO",
      images: [
        {
          url: thisTipoCocina.pageImage,
          width: 1200,
          height: 630,
          alt: thisTipoCocina.pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: thisTipoCocina.pageTitle,
      description: thisTipoCocina.pageDescription,
      images: thisTipoCocina.pageImage,
    },
  };
}

export async function generateStaticParams() {
  return COCINAS.map((cocina) => ({
    slug: cocina.slug,
  }));
}
export const dynamicParams = false;
export default async function CocinaTipoPage({ params }: Props) {
  const { slug } = await params;

  const thisTipoCocina = COCINAS.find((c) => c.slug === slug);

  if (!thisTipoCocina) {
    notFound();
  }
  const pageURL = `https://cocinasmodernasrd.com/cocinas/${thisTipoCocina.slug}`;

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://cocinasmodernasrd.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tipos de Cocina",
        item: "https://cocinasmodernasrd.com/tipos-de-cocinas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: thisTipoCocina.label,
        item: pageURL,
      },
    ],
  };
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: thisTipoCocina.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const serviceSchema = {
    "@type": "Service",
    serviceType: `Diseño e instalación de ${thisTipoCocina.label.toLowerCase()}`,
    name: thisTipoCocina.label,
    description: thisTipoCocina.pageDescription,
    url: pageURL,
    areaServed: {
      "@type": "Country",
      name: "República Dominicana",
    },
    provider: {
      "@type": "Organization",
      name: "Cocinas Modernas RD",
      url: "https://cocinasmodernasrd.com",
    },
  };
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, faqSchema, serviceSchema],
  };
  //
  //
  const data: CocinaPageData = {
    heroImage: thisTipoCocina.pageImage,
    heroImageAlt: thisTipoCocina.pageImageAlt,
    badge: thisTipoCocina.label,
    h1: thisTipoCocina.textH1,
    heroDesc: thisTipoCocina.heroDesc,

    introTitle: thisTipoCocina.introTitle,
    introBody: thisTipoCocina.introBody,

    features: thisTipoCocina.features,

    gallery: thisTipoCocina.gallery,
    faqs: thisTipoCocina.faqs,

    waMessage: thisTipoCocina.waMessage,
  };

  // return <CocinaPage data={data} />;

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <CocinaPage data={data} />
    </>
  );
}

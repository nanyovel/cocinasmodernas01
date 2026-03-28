import type { Metadata } from 'next'
import CocinaPage, { type CocinaPageData } from '@/components/CocinaPage'

export const metadata: Metadata = {
  title: 'Cocinas Italianas en República Dominicana | Diseño Italiano de Lujo',
  description:
    'Cocinas estilo italiano en Santo Domingo y toda la República Dominicana. Diseño minimalista italiano, líneas limpias, accesorios europeos y acabados de alta gama. Cotiza gratis.',
  alternates: { canonical: 'https://www.cocinasmodernasrd.com/cocinas/italianas' },
  openGraph: {
    title: 'Cocinas Italianas RD | Minimalismo y Lujo al Estilo Europeo',
    description: 'Cocinas estilo italiano moderno en República Dominicana. Diseño europeo con materiales premium.',
    images: [{ url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80' }],
  },
}

const data: CocinaPageData = {
  slug: 'italianas',
  title: 'Cocinas Italianas',
  metaDescription: 'Cocinas estilo italiano modernas en República Dominicana. Diseño minimalista europeo de lujo.',

  heroImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1800&q=85',
  heroImageAlt: 'Cocina estilo italiano moderna minimalista con acabados premium en República Dominicana',
  badge: 'Cocinas Italianas',
  h1: 'Cocinas estilo italiano: minimalismo europeo en tu hogar dominicano',
  heroDesc:
    'El diseño italiano de cocinas se caracteriza por la simplicidad llevada a la perfección: líneas limpias, materiales nobles, sin ornamentos superfluos. Fabricamos cocinas con estética italiana usando los mejores materiales disponibles en República Dominicana.',

  introTitle: 'La filosofía italiana: menos es más, mejor es mejor',
  introBody: [
    'Las cocinas italianas modernas se distinguen por su rigor en el diseño: frentes sin manijas (push-to-open), superficies continuas sin interrupciones, iluminación integrada invisible y una paleta de materiales muy selecta. La belleza está en la precisión, no en la ornamentación.',
    'En Cocinas Modernas RD recreamos la estética italiana con materiales de alta calidad fabricados localmente y, para proyectos premium, con componentes importados de Europa. El resultado visual es indistinguible de marcas italianas internacionales, con la ventaja del servicio y garantía local.',
    'Los colores más representativos del estilo italiano son el blanco absoluto mate, el gris cemento, el negro grafito y las texturas de mármol o madera de veta limpia. Los acabados en alto brillo y en lacado mate son igualmente emblemáticos de este estilo.',
  ],

  features: [
    { icon: '🇮🇹', title: 'Diseño sin manijas', desc: 'Los sistemas push-to-open crean frentes completamente limpios, el sello del minimalismo italiano.' },
    { icon: '◉', title: 'Superficies continuas', desc: 'Encimeras que se extienden sin cortes, paredes de vidrio o laca sin juntas visibles. Perfección visual.' },
    { icon: '◎', title: 'Iluminación integrada', desc: 'LED integrado en perfiles de aluminio que ilumina sin revelar la fuente de luz. Atmósfera de lujo.' },
    { icon: '◈', title: 'Líneas puras', desc: 'Proporciones perfectas, esquinas en 90°, alineaciones milimétricas. La geometría como arte.' },
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Cocina estilo italiano blanca con líneas puras y sin manijas', label: 'Blanco absoluto italiano' },
    { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Cocina italiana con isla y superficie continua de mármol', label: 'Isla con mármol continuo' },
    { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', alt: 'Cocina italiana oscura en gris grafito con iluminación LED', label: 'Grafito con LED' },
    { src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80', alt: 'Cocina italiana de alto brillo con gabinetes lacados', label: 'Alto brillo italiano' },
    { src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', alt: 'Cocina italiana open concept con frentes sin manija', label: 'Open concept sin manija' },
  ],

  faqs: [
    {
      q: '¿Las cocinas sin manijas son prácticas en el uso diario?',
      a: 'Completamente. Los sistemas push-to-open modernos son muy confiables, con mecanismos de alta precisión que abren los gabinetes con un suave toque. Se acostumbra en pocos días y el resultado visual es incomparable.',
    },
    {
      q: '¿Pueden replicar el estilo de marcas italianas como Boffi o Varenna?',
      a: 'Podemos capturar perfectamente la estética de esas marcas usando materiales locales y europeos seleccionados. La diferencia estará en el precio — obtienes el mismo resultado visual con una inversión significativamente menor.',
    },
    {
      q: '¿Qué materiales se usan en cocinas estilo italiano?',
      a: 'Los más usados son MDF lacado (brillante o mate), vidrio lacado, laminado de alta presión, aluminio cepillado y cuarzo de veta marcada. Las encimeras suelen ser de cuarzo, mármol o cemento pulido.',
    },
    {
      q: '¿El estilo italiano funciona en cocinas pequeñas?',
      a: 'Perfectamente. De hecho, el minimalismo del diseño italiano es especialmente eficaz en espacios reducidos porque elimina el desorden visual y hace los espacios parecer más amplios y ordenados.',
    },
  ],

  relatedSlugs: [
    'tendencias-cocinas-modernas-2025',
    'cuarzo-vs-marmol-cual-elegir',
    'cocinas-modernas-blancas-vs-oscuras',
  ],

  waMessage: 'Hola, me interesa una cocina estilo italiano. ¿Pueden mostrarme proyectos y cotizar el mío?',
}

export default function CocinasItalianasPage() {
  return <CocinaPage data={data} />
}

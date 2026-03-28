import type { Metadata } from 'next'
import CocinaPage, { type CocinaPageData } from '@/components/CocinaPage'

export const metadata: Metadata = {
  title: 'Cocinas con Isla en República Dominicana | Isla Central y Desayunador',
  description:
    'Cocinas modernas con isla central en Santo Domingo y toda la República Dominicana. Islas con desayunador, cuarzo, granito y mármol. Diseño 3D gratis. Cotiza ahora.',
  alternates: { canonical: 'https://www.cocinasmodernasrd.com/cocinas/con-isla' },
  openGraph: {
    title: 'Cocinas con Isla RD | Isla Central, Desayunador y Barra',
    description: 'Diseñamos cocinas con isla central en República Dominicana. Islas con desayunador, granito y cuarzo.',
    images: [{ url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80' }],
  },
}

const data: CocinaPageData = {
  slug: 'con-isla',
  title: 'Cocinas con Isla',
  metaDescription: 'Cocinas con isla central en República Dominicana. Islas con desayunador y encimera premium.',

  heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85',
  heroImageAlt: 'Cocina moderna con isla central y desayunador en Santo Domingo República Dominicana',
  badge: 'Cocinas con Isla',
  h1: 'Cocinas con isla central: el corazón del hogar moderno',
  heroDesc:
    'La isla de cocina no es solo un mueble — es el centro de tu vida en casa. Cocinamos, desayunamos, trabajamos y socializamos alrededor de ella. Diseñamos islas de cocina a medida con desayunador, granito, cuarzo o mármol en toda la República Dominicana.',

  introTitle: 'La isla convierte tu cocina en el lugar favorito de tu familia',
  introBody: [
    'Una cocina con isla central cambia completamente la dinámica del hogar. La isla actúa como zona de preparación, barra de desayuno, espacio de trabajo e incluso punto de reunión social. Es el elemento que más transforma una cocina moderna en República Dominicana.',
    'En Cocinas Modernas RD diseñamos islas de cocina completamente personalizadas: con desayunador integrado, almacenamiento interior, fregadero empotrado, zona para hornillas o simplemente como superficie de trabajo adicional.',
    'Trabajamos con encimeras de cuarzo, granito, mármol y cemento pulido. Las dimensiones mínimas recomendadas para instalar una isla son 90 cm de espacio libre en cada lado, aunque podemos adaptar diseños compactos para espacios más reducidos.',
  ],

  features: [
    { icon: '◈', title: 'Isla con desayunador', desc: 'Integra un desayunador en la isla para tener una zona de comer sin necesitar un comedor separado.' },
    { icon: '◉', title: 'Almacenamiento doble', desc: 'Las islas pueden incluir gabinetes, cajones y repisas en todos los frentes, duplicando el espacio de almacenamiento.' },
    { icon: '◎', title: 'Encimeras premium', desc: 'Cuarzo, granito, mármol o cemento pulido. Te ayudamos a elegir el material según uso y presupuesto.' },
    { icon: '◈', title: 'Diseño personalizado', desc: 'Islas grandes o compactas, con o sin fregadero, con hornillas o sin ellas. Cada diseño es único.' },
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Cocina moderna con isla central de mármol y desayunador en Santo Domingo', label: 'Isla central con mármol' },
    { src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', alt: 'Cocina abierta con isla y barra desayunador integrada', label: 'Isla con desayunador' },
    { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Cocina blanca con isla pequeña en cuarzo blanco', label: 'Isla compacta en cuarzo' },
    { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', alt: 'Isla de cocina moderna con almacenamiento y cajones', label: 'Isla con almacenamiento' },
    { src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80', alt: 'Cocina grande con isla central y gabinetes hasta el techo', label: 'Isla en cocina grande' },
  ],

  faqs: [
    {
      q: '¿Cuánto espacio necesito para poner una isla en mi cocina?',
      a: 'El mínimo recomendado es 90 cm de espacio libre en cada lado de la isla para circular cómodamente. Si el espacio es menor, podemos diseñar una peninsula (isla unida a la pared por un lado) que requiere menos espacio.',
    },
    {
      q: '¿La isla puede tener fregadero o cocina empotrada?',
      a: 'Sí, diseñamos islas con fregadero, hornillas, campana extractora superior y hasta lavavajillas integrado. Requiere conexiones de plomería y electricidad, que coordinamos durante el proceso.',
    },
    {
      q: '¿Qué encimeras recomiendan para la isla de cocina?',
      a: 'Para uso diario intenso recomendamos cuarzo: no poroso, resistente a manchas y golpes. Para espacios de mucho uso, el granito es también excelente. El mármol es la opción más lujosa visualmente pero requiere más mantenimiento.',
    },
    {
      q: '¿Pueden hacer islas de cocina pequeñas para apartamentos?',
      a: 'Sí, diseñamos islas compactas desde 90×60 cm. También hacemos islas móviles con ruedas, ideales para apartamentos donde se necesita flexibilidad de espacio.',
    },
    {
      q: '¿Cuánto cuesta una cocina con isla en República Dominicana?',
      a: 'Una cocina con isla básica en melamina con encimera de granito parte desde RD$200,000. Con isla en cuarzo o mármol y gabinetes de calidad, los proyectos van desde RD$350,000. Solicita tu presupuesto gratuito.',
    },
  ],

  relatedSlugs: [
    'cocinas-modernas-pequenas-con-isla',
    'cuarzo-vs-marmol-cual-elegir',
    'cuanto-cuesta-cocina-moderna-rd',
  ],

  waMessage: 'Hola, me interesa cotizar una cocina con isla central. ¿Pueden enviarme información?',
}

export default function CocinasConIslaPage() {
  return <CocinaPage data={data} />
}

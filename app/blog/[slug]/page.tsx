import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { posts } from "../page";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const post = posts.find((p) => p.slug === params.slug);

  const { slug } = await params; // 👈 también aquí
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Cocinas Modernas RD`,
    description: post.excerpt,
    alternates: {
      canonical: `https://cocinasmodernasrd.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.img }],
    },
  };
}

const articleContent: Record<string, string> = {
  "tendencias-cocinas-modernas-2026": `
Las cocinas modernas de 2026 están redefiniendo el hogar dominicano. Ya no se trata solo de un espacio funcional: la cocina moderna se convirtió en el centro del diseño interior, donde estética y tecnología conviven.

## 1. Materiales naturales en gabinetes modernos

La tendencia más fuerte del año es combinar materiales naturales —madera de teca, cedro, roble— con gabinetes de cocina modernos en melamina o PVC de tonos neutros. Esta fusión entre lo orgánico y lo contemporáneo crea cocinas modernas cálidas y sofisticadas.

En República Dominicana vemos especial demanda por muebles de cocina modernos en madera combinados con cuarzo blanco o gris, perfectos para el clima tropical.

## 2. Cocinas modernas en un solo color (tone-on-tone)

El monocromatismo domina. Cocinas modernas blancas, cocinas modernas grises o cocinas negras modernas donde gabinetes, encimera y paredes comparten la misma gama de color. El resultado es una cocina moderna elegante y lujosa sin esfuerzo visual.

Los tonos más solicitados en Santo Domingo en 2026: verde salvia, gris antracita y blanco cálido mate.

## 3. Islas de cocina modernas con desayunador

Las islas de cocina modernas con desayunador integrado son el elemento más pedido. Cocinas modernas con isla central y desayunador permiten cocinar, comer y socializar en el mismo espacio, lo que se adapta perfectamente al estilo de vida dominicano.

Para espacios más pequeños, las cocinas modernas pequeñas con barra o peninsula son una excelente alternativa a la isla completa.

## 4. Gabinetes de cocina modernos hasta el techo

Los gabinetes de cocina modernos que llegan hasta el techo maximizan el almacenamiento y dan una sensación de altura y lujo. Esta tendencia aplica tanto en cocinas grandes como en cocinas modernas pequeñas donde el espacio vertical es clave.

## 5. Cocinas modernas de madera con toque industrial

La combinación de muebles de cocina modernos en madera con elementos metálicos —herrajes negros, campanas de acero, repisas flotantes de hierro— crea un estilo industrial moderno muy solicitado en departamentos y casas contemporáneas en RD.

---

¿Quieres incorporar estas tendencias en tu hogar? Nuestro equipo de diseño te ayuda a crear la cocina moderna perfecta. Solicita tu cotización gratuita.
  `,

  "cuarzo-vs-marmol-cual-elegir": `
Al diseñar cocinas modernas con isla o cocinas modernas con barra, una de las decisiones más importantes es la encimera. El cuarzo y el mármol son los materiales más elegidos en proyectos de cocinas de lujo modernas, pero tienen diferencias importantes.

## Mármol para cocinas modernas

El mármol es el material más lujoso y visual para cocinas modernas. Las cocinas modernas con mármol blanco o cocinas modernas con mármol negro tienen una presencia incomparable. Sin embargo, el mármol es poroso: absorbe líquidos, mancha con acidez (limón, café) y requiere sellado periódico.

Ideal para: cocinas modernas grandes de lujo, islas decorativas, proyectos de alto presupuesto.

## Cuarzo para cocinas modernas

Los gabinetes de cocina modernos con encimera de cuarzo son la opción más práctica para cocinas en uso diario intenso. El cuarzo es no poroso, no requiere sellado, resiste manchas y golpes mejor que el mármol. Las cocinas modernas con cuarzo blanco replican el look del mármol con mucho menos mantenimiento.

Ideal para: cocinas modernas pequeñas y grandes, islas de cocina modernas, familias con niños.

## Granito para cocinas modernas

El granito para cocinas modernas es la opción intermedia. Las cocinas modernas con granito son muy resistentes al calor, duraderas y únicas (cada pieza es diferente). El precio es generalmente menor que el cuarzo y el mármol.

## Nuestra recomendación para el clima de RD

En República Dominicana, el calor y la humedad hacen que el cuarzo o el granito sean los más recomendados para cocinas modernas en uso diario. Para cocinas de lujo modernas donde la estética prima, el mármol sigue siendo insuperable.

---

¿Necesitas ayuda eligiendo el material para tu cocina moderna? Contáctanos y te asesoramos gratis.
  `,

  "cocinas-modernas-pequenas-con-isla": `
Tener una cocina moderna pequeña no significa renunciar a la isla. Con el diseño correcto, una cocina moderna pequeña con isla puede ser tan funcional y elegante como cualquier cocina grande. Aquí los diseños que mejor funcionan.

## 1. Cocina moderna pequeña con isla lineal

En espacios de 3x3 metros, una isla pequeña paralela a la línea de gabinetes transforma completamente la cocina. Ideal para cocinas modernas en L con isla que no superan los 90cm de ancho.

## 2. Cocinas modernas pequeñas con barra desayunadora

Si la isla no cabe, una barra de cocina moderna empotrada a un lado es la solución perfecta. Las cocinas modernas pequeñas con barra permiten desayunar, trabajar o tomar algo mientras cocinas.

## 3. Isla con ruedas para cocinas modernas pequeñas

Para cocinas modernas en apartamentos pequeños, las islas móviles son tendencia. Se mueven cuando hay espacio y se apartan cuando no. Los muebles de cocina modernos con ruedas son muy prácticos en departamentos de Santo Domingo.

## 4. Cocinas modernas en L pequeñas con peninsula

Una peninsula es una isla unida a la pared por un lado. Es perfecta para cocinas modernas pequeñas en L porque genera el espacio de trabajo extra sin ocupar el centro de la cocina.

## 5. Islas de cocina modernas pequeñas con almacenamiento

Las islas de cocina modernas pequeñas con cajones, puertas o repisas flotantes internas son las más funcionales. Duplican el almacenamiento sin añadir muebles de cocina extra al espacio.

## Medidas mínimas recomendadas

Para instalar una isla en una cocina moderna pequeña necesitas al menos 90cm de espacio libre en cada lado. Menos de eso, usa una barra o peninsula en cambio.

---

¿Tu cocina moderna pequeña tiene espacio para una isla? Nuestro equipo puede analizarlo gratis con un diseño 3D sin compromiso.
  `,

  "gabinetes-de-cocina-modernos-materiales": `
Los gabinetes de cocina modernos son el componente más importante del diseño de cualquier cocina moderna. El material define durabilidad, precio, estética y mantenimiento. Aquí la comparación completa para el mercado dominicano.

## Gabinetes de cocina modernos en madera

Los gabinetes de madera modernos son los más elegantes y duraderos. Madera de cedro, caoba, roble o teca son opciones clásicas para cocinas modernas de lujo. La madera maciza tiene precio alto pero puede refinarse, pintarse y durar décadas.

Los gabinetes de cocina modernos en madera en RD son ideales para cocinas de lujo, cocinas rústicas modernas o cocinas de madera modernas con un toque natural.

## Gabinetes de cocina modernos en PVC

Los gabinetes de cocina en PVC modernos son la opción más resistente a la humedad. Para el clima tropical de República Dominicana, el PVC es ideal: no se hincha, no se pudre, no le afecta el agua. Los gabinetes modernos en PVC son perfectos para cocinas cerca de la playa o zonas húmedas.

## Gabinetes de cocina modernos en melamina

La melamina es la opción más popular en cocinas modernas de precio medio. Los gabinetes de cocina modernos en melamina ofrecen excelente relación precio-calidad, variedad de colores y texturas (incluida imitación madera). Son resistentes a los rasguños y fáciles de limpiar.

## Gabinetes modernos en MDF

El MDF permite los acabados más lisos y precisos, ideal para cocinas modernas minimalistas de líneas perfectas. Los gabinetes modernos en MDF pintados en blanco mate o gris son tendencia en diseños de cocinas modernas contemporáneas.

## ¿Cuál elegir para tu cocina moderna en RD?

Para presupuesto alto: madera maciza o MDF lacado. Para presupuesto medio: melamina de calidad. Para zonas húmedas o cerca del mar: PVC obligatoriamente.

---

¿Quieres ver muestras de gabinetes de cocina modernos en todos los materiales? Visítanos en Santo Domingo o solicita tu asesoría gratuita.
  `,

  "cocinas-modernas-blancas-vs-oscuras": `
En el diseño de cocinas modernas en República Dominicana, la decisión entre cocinas modernas blancas y cocinas oscuras modernas es una de las más frecuentes. Ambas son tendencia en 2026 y cada una tiene ventajas claras.

## Cocinas modernas blancas: ventajas

Las cocinas modernas blancas son el estilo más atemporal y versátil. Amplifican visualmente el espacio —clave en cocinas modernas pequeñas— y combinan con casi cualquier estilo de decoración.

Las cocinas blancas modernas y elegantes con isla de mármol o cuarzo blanco son uno de los diseños más solicitados en Santo Domingo. Las cocinas modernas blancas con encimera negra o con toque en madera natural añaden contraste sin perder la luminosidad.

Mantenimiento: las cocinas modernas blancas muestran más el polvo y los salpicados, pero los gabinetes de cocina modernos en blanco con acabado mate ocultan mejor las manchas que los brillantes.

## Cocinas oscuras modernas: ventajas

Las cocinas negras modernas, cocinas modernas grises oscuras o cocinas modernas con muebles de madera oscura transmiten lujo, sofisticación y carácter. Son perfectas para espacios grandes con buena iluminación.

Las cocinas modernas negras con isla blanca o con repisas de madera crean un contraste muy buscado en proyectos de alto nivel. Las cocinas modernas grises con blanco son la versión más versátil de este estilo.

## ¿Cuál se adapta mejor al hogar dominicano?

En RD, donde la luz natural es abundante, las cocinas oscuras modernas funcionan bien incluso en espacios medianos. Sin embargo, para apartamentos pequeños y cocinas modernas pequeñas, las cocinas modernas blancas siguen siendo la opción más inteligente.

---

Nuestro equipo puede mostrarte ambas opciones en un diseño 3D personalizado. Solicita tu consulta gratuita hoy.
  `,

  "cuanto-cuesta-cocina-moderna-rd": `
Una de las preguntas más frecuentes que recibimos es: ¿cuánto cuesta una cocina moderna en República Dominicana? La respuesta depende del tamaño, los materiales y el nivel de detalle. Aquí los rangos reales del mercado en 2026.

## Cocinas modernas económicas en RD

Cocinas modernas económicas con gabinetes de cocina modernos en melamina básica, encimera de granito nacional y sin isla: desde RD$80,000 hasta RD$150,000 para espacios de 3 a 4 metros.

Este rango incluye muebles de cocina modernos funcionales con buen acabado, aunque con menos opciones de personalización y accesorios.

## Cocinas modernas de precio medio

Cocinas modernas con isla, gabinetes modernos en melamina de alta calidad o PVC, encimera de cuarzo o granito importado: entre RD$150,000 y RD$350,000.

En este rango entran la mayoría de los diseños de cocinas modernas pequeñas con barra, cocinas modernas en L o cocinas americanas modernas para apartamentos de Santo Domingo.

## Cocinas modernas de lujo en RD

Cocinas de lujo modernas con isla central, gabinetes de cocina modernos en madera maciza o MDF lacado, mármol o cuarzo premium, electrodomésticos integrados y accesorios europeos: desde RD$400,000 en adelante.

Las cocinas modernas de lujo grandes con isla y desayunador en residencias de alto standing pueden superar RD$1,000,000 dependiendo del metraje y los materiales.

## ¿Qué factores aumentan el precio?

El tamaño de la cocina, el material de los gabinetes, la encimera elegida (granito, cuarzo, mármol), los accesorios internos, el tipo de iluminación y los electrodomésticos integrados son los principales factores que mueven el precio de una cocina moderna en RD.

---

¿Quieres saber el precio exacto de tu cocina moderna? Solicita una cotización gratuita sin compromiso y recibe un presupuesto detallado.
  `,
};

const defaultContent = `
El diseño de cocinas modernas en República Dominicana ha evolucionado enormemente en los últimos años. Los propietarios de viviendas buscan espacios que no solo sean funcionales, sino que reflejen su personalidad y estilo de vida.

## El papel del diseño a medida

Una de las principales razones por las que las cocinas a medida han ganado tanta popularidad es la capacidad de adaptar cada elemento al espacio disponible. En muchos hogares dominicanos, los planos arquitectónicos presentan desafíos únicos: columnas, desniveles, espacios irregulares. Un diseño a medida resuelve estos problemas de manera elegante.

## Materiales y durabilidad en el clima tropical

El clima caribeño exige materiales que soporten la humedad y las variaciones de temperatura. En Cocinas Modernas RD seleccionamos cuidadosamente cada material pensando en la durabilidad a largo plazo, sin sacrificar un ápice de estética.

## El valor de invertir en una buena cocina

Una cocina bien diseñada puede aumentar el valor de tu propiedad entre un 10% y un 20%. Más allá de la inversión económica, una cocina moderna transforma la experiencia diaria de cocinar y compartir en familia.

---

¿Tienes preguntas sobre tu proyecto? Nuestro equipo está listo para ayudarte.
`;

export default async function BlogPost({ params }: Props) {
  console.log(params);
  // const post = posts.find((p) => p.slug === params.slug);
  // const { slug } = await params;

  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  console.log(posts);
  console.log(post);

  if (!post)
    return (
      <div className="pt-40 text-center text-cream">
        Artículo no encontrado.
      </div>
    );

  const content = articleContent[params.slug] || defaultContent;
  const related = posts.filter((p) => p.slug !== params.slug).slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">
              {post.category}
            </span>
            <span className="font-body text-xs text-cream/50">
              {post.date} · {post.readTime} lectura
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light text-cream">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Article */}
          <article className="lg:col-span-2">
            <p className="font-body text-base text-cream/70 leading-relaxed mb-8 text-lg border-l-2 border-gold pl-6">
              {post.excerpt}
            </p>
            <div className="prose-luxury font-body text-sm text-cream/70 leading-relaxed space-y-6">
              {content
                .trim()
                .split("\n\n")
                .map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-display text-2xl text-cream mt-10 mb-4"
                      >
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (block.startsWith("---")) {
                    return <div key={i} className="gold-line my-8" />;
                  }
                  return (
                    <p key={i} className="leading-relaxed">
                      {block}
                    </p>
                  );
                })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gold/10">
              {[
                ...new Set([
                  "Cocinas Modernas",
                  "Diseño RD",
                  "Tendencias",
                  post.category,
                ]),
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs tracking-wider uppercase border border-gold/20 text-gold/60 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* CTA Form */}
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-4">
                ¿Te interesa este proyecto?
              </p>
              <LeadForm compact />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/18493419890?text=Hola,%20leí%20su%20blog%20y%20me%20interesa%20cotizar%20una%20cocina%20moderna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gold/20 bg-obsidian-soft p-5 hover:border-gold/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.882a.5.5 0 00.611.611l6.046-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.727.909.927-3.619-.234-.372A9.818 9.818 0 1112 21.818z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs text-gold group-hover:text-gold-light transition-colors">
                  Consulta por WhatsApp
                </p>
                <p className="font-body text-xs text-cream/40">
                  Respuesta inmediata
                </p>
              </div>
            </a>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 bg-obsidian-soft border-t border-gold/10 pt-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-3xl text-cream mb-10">
            Artículos relacionados
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="luxury-card group border border-gold/10 bg-obsidian overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-body text-xs text-gold mb-2 tracking-wider uppercase">
                    {p.category}
                  </p>
                  <h4 className="font-display text-xl text-cream group-hover:text-gold transition-colors">
                    {p.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

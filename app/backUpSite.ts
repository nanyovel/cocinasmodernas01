import { MetadataRoute } from "next";
import { posts } from "./blog/page";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const base = 'https://www.cocinasmodernasrd.com'

//   const staticRoutes = ['', '/servicios', '/galeria', '/blog', '/contacto'].map((path) => ({
//     url: `${base}${path}`,
//     lastModified: new Date(),
//     changeFrequency: 'weekly' as const,
//     priority: path === '' ? 1 : 0.8,
//   }))

//   const blogRoutes = posts.map((post) => ({
//     url: `${base}/blog/${post.slug}`,
//     lastModified: new Date(),
//     changeFrequency: 'monthly' as const,
//     priority: 0.6,
//   }))

//   return [...staticRoutes, ...blogRoutes]
// }

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cocinasmodernasrd.com";

  // 1. Rutas principales
  const staticRoutes = ["", "/servicios", "/galeria", "/blog", "/contacto"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  // 2. NUEVAS: Rutas de tipos de cocinas (Landing pages de servicios)
  const cocinaTypes = [
    "/americanas",
    "/con-isla",
    "/madera",
    "/modulares",
    "/pequenas",
  ].map((tipo) => ({
    url: `${base}/cocinas${tipo}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9, // Prioridad alta porque son páginas de venta/transaccionales
  }));

  // 3. Rutas de artículos del blog
  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 4. No olvides las páginas legales para Adsense (con prioridad baja)
  const legalRoutes = [
    "/politica-privacidad",
    "/politica-cookies",
    "/aviso-legal",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...staticRoutes, ...cocinaTypes, ...blogRoutes, ...legalRoutes];
}

import { MetadataRoute } from 'next'
import { posts } from './blog/page'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.cocinasmodernasrd.com'

  const staticRoutes = ['', '/servicios', '/galeria', '/blog', '/contacto'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}

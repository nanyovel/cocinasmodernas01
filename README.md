# Cocinas Modernas RD — Sitio Web Next.js

Sitio web de generación de leads para el nicho de cocinas modernas en República Dominicana.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Tipografías**: Cormorant Garamond + Jost (Google Fonts)
- **Imágenes**: Unsplash (reemplazar con fotos reales)
- **Lenguaje**: TypeScript

## Instalación rápida

```bash
# 1. Entra a la carpeta
cd cocinas-modernas

# 2. Instala dependencias
npm install

# 3. Servidor de desarrollo
npm run dev

# Abre: http://localhost:3000
```

## Build para producción

```bash
npm run build
npm start
```

## Estructura de páginas

```
/                  → Landing principal con formulario de leads
/servicios         → Cocinas, closets y mobiliario
/galeria           → Galería de proyectos realizados
/blog              → Artículos SEO (6 posts incluidos)
/blog/[slug]       → Artículo con sidebar de captura de leads
/contacto          → Formulario completo + datos de contacto
```

## Personalización obligatoria antes de publicar

### 1. Número de WhatsApp
Reemplaza `18091234567` con tu número real (formato internacional sin +) en:
- `components/WhatsAppButton.tsx`
- `components/LeadForm.tsx`
- `app/page.tsx`
- `app/contacto/page.tsx`
- `app/blog/[slug]/page.tsx`

### 2. Dominio del sitio
Reemplaza `cocinasmodernasrd.com` en:
- `app/layout.tsx` (metadata canonical y OG)
- `app/sitemap.ts`
- `app/robots.ts`
- Todas las páginas en `alternates.canonical`

### 3. Email de contacto
En `components/Footer.tsx` → cambia `info@cocinasmodernasrd.com`

### 4. Imágenes reales
Reemplaza las URLs de Unsplash con tus propias fotos.
Puedes usar el folder `public/images/` y referenciarlas como `/images/foto.jpg`

### 5. Conectar el formulario a un backend
En `components/LeadForm.tsx` busca el comentario:
```
// Aquí conectas tu backend / Formspree / Make / etc.
```
Opciones recomendadas:
- **Formspree** (gratis hasta 50/mes): https://formspree.io
- **Make.com**: conecta el form a Google Sheets + WhatsApp
- **API Route de Next.js**: crea `app/api/leads/route.ts`

## Deploy recomendado
- **Vercel** (gratis para proyectos personales): https://vercel.com
- Conecta tu repo de GitHub y hace deploy automático en cada push

## SEO incluido
- Metadatos completos en cada página (title, description, canonical, OG, Twitter)
- Sitemap automático en `/sitemap.xml`
- Robots.txt en `/robots.txt`
- 6 artículos de blog optimizados para "cocinas modernas"
- Schema-ready (puedes agregar JSON-LD en el layout)

## Captura de leads
El formulario captura:
- Nombre completo
- Teléfono / WhatsApp
- Email
- Presupuesto aproximado (califica el lead automáticamente)
- Mensaje / descripción del proyecto

Al enviar, redirige automáticamente a WhatsApp como fallback hasta que conectes un backend.

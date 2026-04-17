/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cocinasmodernasrd.com" }],
        destination: "https://cocinasmodernasrd.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

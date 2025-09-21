import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeon.site",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "theproductpersonbackend-production.up.railway.app",
        pathname: "/api/uploads/**",
      },
    ],
    domains: [
      "localhost",
      "placehold.co",
      "placeon.site",
      "theproductpersonbackend-production.up.railway.app",
    ], // opsiyonel
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;

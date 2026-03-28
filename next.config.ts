import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.w3.org',
        pathname: "/2000/**"
      },
    ],
  },

};

export default nextConfig;

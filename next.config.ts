import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh', // Replace with your image domain
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;

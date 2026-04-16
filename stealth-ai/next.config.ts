import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: { ignoreDuringBuilds: true } ab kaam nahi karega
  
  images: {
    // domains ki jagah remotePatterns use karein (Security ke liye better hai)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Experimental options agar zaroori ho toh
  experimental: {
    // turbopack: true, 
  }
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
   eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['three', 'three-globe'],
};

export default nextConfig;

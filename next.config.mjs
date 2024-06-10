/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', process.env.IMAGE_STORE],
  },

};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
          {
        protocol: "http",
        hostname: "edulightapi.runasp.net",
      },
    ],
  },
};

export default nextConfig;

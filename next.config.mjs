/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.githubassets.com",
      },
    ],
  },
};

export default nextConfig;

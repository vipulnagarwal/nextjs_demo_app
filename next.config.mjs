/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexel.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/users",
        destination: "https://jsonplaceholder.typicode.com/users",
      },
      {
        source: "/users/:slug",
        destination: "https://jsonplaceholder.typicode.com/users/:id", // Matched parameters can be used in the destination
      },
    ];
  },
};

export default nextConfig;

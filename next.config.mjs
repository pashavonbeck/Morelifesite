/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old pages that no longer exist send people to the home page.
  async redirects() {
    return [
      { source: "/the-founders", destination: "/about", permanent: true },
      { source: "/experiences", destination: "/#experiences", permanent: false },
      { source: "/experiences/japan", destination: "/#experiences", permanent: false },
      { source: "/experiences/tropical-punch", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/web-design-accra-ghana",
        destination: "/web-design/accra-ghana",
        permanent: true,
      },
      {
        source: "/web-design-kumasi-ghana",
        destination: "/web-design/kumasi-ghana",
        permanent: true,
      },
      {
        source: "/web-design-tema-ghana",
        destination: "/web-design/tema-ghana",
        permanent: true,
      },
      {
        source: "/web-design-takoradi-ghana",
        destination: "/web-design/takoradi-ghana",
        permanent: true,
      },
      {
        source: "/web-design-cape-coast-ghana",
        destination: "/web-design/cape-coast-ghana",
        permanent: true,
      },
      {
        source: "/web-design-volta-ho-hohoe-ghana",
        destination: "/web-design/volta-ho-hohoe-ghana",
        permanent: true,
      },
      {
        source: "/web-design-ho-ghana",
        destination: "/web-design/volta-ho-hohoe-ghana",
        permanent: true,
      },
      {
        source: "/web-design-hohoe-ghana",
        destination: "/web-design/volta-ho-hohoe-ghana",
        permanent: true,
      },
      {
        source: "/how-much-does-a-website-cost-in-ghana",
        destination: "/website-cost-ghana",
        permanent: true,
      },
      {
        source: "/about-us-best-web-design-ghana",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

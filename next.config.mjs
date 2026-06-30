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
      {
        source: "/service/best-web-development-and-design-in-accra-ghana",
        destination: "/services/best-web-development-design-accra-ghana",
        permanent: true,
      },
      {
        source: "/best-web-development-and-design-in-accra-ghana",
        destination: "/services/best-web-development-design-accra-ghana",
        permanent: true,
      },
      {
        source: "/web-design-tamale-ghana",
        destination: "/web-design/tamale-ghana",
        permanent: true,
      },
      {
        source: "/web-design-sunyani-ghana",
        destination: "/web-design/sunyani-ghana",
        permanent: true,
      },
      {
        source: "/digital-growth-bundle-ghana",
        destination: "/digital-growth-bundle",
        permanent: true,
      },
      {
        source: "/seo-packages",
        destination: "/seo-packages-ghana",
        permanent: true,
      },
      {
        source: "/momo-paystack-ghana",
        destination: "/momo-paystack-integration-ghana",
        permanent: true,
      },
      {
        source: "/church-website-design-ghana",
        destination: "/industry/church-website-design-ghana",
        permanent: true,
      },
      {
        source: "/school-website-design-ghana",
        destination: "/industry/school-website-design-ghana",
        permanent: true,
      },
      {
        source: "/restaurant-website-design-ghana",
        destination: "/industry/restaurant-website-design-ghana",
        permanent: true,
      },
      {
        source: "/real-estate-website-design-ghana",
        destination: "/industry/real-estate-website-design-ghana",
        permanent: true,
      },
      {
        source: "/hotel-website-design-ghana",
        destination: "/industry/hotel-website-design-ghana",
        permanent: true,
      },
      {
        source: "/ngo-website-design-ghana",
        destination: "/industry/ngo-website-design-ghana",
        permanent: true,
      },
      {
        source: "/web-design-east-legon-accra",
        destination: "/web-design/areas/east-legon-ghana",
        permanent: true,
      },
      {
        source: "/web-design-osu-accra",
        destination: "/web-design/areas/osu-accra-ghana",
        permanent: true,
      },
      {
        source: "/web-design-spintex-accra",
        destination: "/web-design/areas/spintex-accra-ghana",
        permanent: true,
      },
      {
        source: "/web-design-adenta-accra",
        destination: "/web-design/areas/adenta-accra-ghana",
        permanent: true,
      },
      {
        source: "/web-design-labone-accra",
        destination: "/web-design/areas/labone-accra-ghana",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

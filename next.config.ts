import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/download-cv",
        destination:
          "https://docs.google.com/document/d/1ieqMlapYTj09eIC8MDSjsRSUG8s6mn8DinPbdBQ-DhQ/export?format=pdf",
        permanent: false,
      },
      {
        source: "/download-1page-cv",
        destination:
          "https://docs.google.com/document/d/1L4PpOQoWMnse04qmdiNJxdu2uU_j7HbYH1ZeZ0SUieE/export?format=pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

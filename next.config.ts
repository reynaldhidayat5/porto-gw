import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // `/id` adalah bahasa default (lihat docs/design.md §4).
    return [{ source: "/", destination: "/id", permanent: false }];
  },
};

export default nextConfig;

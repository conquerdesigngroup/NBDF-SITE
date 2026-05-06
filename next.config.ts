import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project. Without this, Next
  // auto-detects a stray package-lock.json higher up in the home directory
  // and warns about ambiguous workspace root on every build.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

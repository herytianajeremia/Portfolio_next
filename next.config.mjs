/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → portable `out/` folder deployable on any host
  // (Netlify, Vercel, GitHub Pages, o2switch…).
  output: "export",
  // Single build worker: this project is small and the extra workers only
  // add memory pressure on low-RAM machines.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  images: {
    // Required for `output: export` (no on-demand optimizer at runtime).
    unoptimized: true,
  },
};
export default nextConfig;

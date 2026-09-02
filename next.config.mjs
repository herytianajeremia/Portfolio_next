/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → portable `out/` folder deployable on any host
  // (Netlify, Vercel, GitHub Pages, o2switch…).
  output: "export",
  // Local only: a single build worker keeps `next build` inside the memory
  // budget of a low-RAM dev machine. CI runners have room, so let them use
  // every core (Netlify and Vercel both set CI=true).
  ...(process.env.CI ? {} : { experimental: { cpus: 1, workerThreads: false } }),
  images: {
    // Required for `output: export` (no on-demand optimizer at runtime).
    unoptimized: true,
  },
};
export default nextConfig;

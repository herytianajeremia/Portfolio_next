/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → portable `out/` folder deployable on any host
  // (Netlify, Vercel, GitHub Pages, o2switch…).
  output: "export",
  images: {
    // Required for `output: export` (no on-demand optimizer at runtime).
    unoptimized: true,
  },
};

export default nextConfig;

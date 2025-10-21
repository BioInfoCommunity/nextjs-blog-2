/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true, // optional: ensures proper paths for GitHub Pages
};

export default nextConfig;

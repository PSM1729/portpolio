const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  distDir: "out",
  images: {
    unoptimized: true, 
  },
  basePath: isProd ? "/portpolio" : "",
  assetPrefix: isProd ? "/portpolio/" : "",
};

export default nextConfig;
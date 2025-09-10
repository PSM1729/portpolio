const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", 
  images: {
    unoptimized: true, 
  },
  basePath: isProd ? "/portpolio" : "", 
  assetPrefix: isProd ? "/portpolio/" : "",
};

export default nextConfig;
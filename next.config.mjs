// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // tells Next.js to build static HTML
  trailingSlash: true, // optional: adds / at the end of URLs for better static hosting
  basePath: isProd ? "/portfolio" : "", // replace 'portfolio' with your repo name
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true, // disables next/image server optimization
  },
};

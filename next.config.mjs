/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.APP_ENV === "production"
        ? "https://catfact.ninja/"
        : "https://catfact.ninja/",
  },
};

export default nextConfig;

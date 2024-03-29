/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images_unoptimized: true
}

module.exports = { nextConfig, images: {loader: "custom"} }

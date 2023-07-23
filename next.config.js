/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ["robohash.org"]
    }
}
module.exports = nextConfig

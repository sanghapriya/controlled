/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_BASE_PATH;
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd && repo ? `/${repo}` : undefined,
  assetPrefix: isProd && repo ? `/${repo}/` : undefined,
};

export default nextConfig;

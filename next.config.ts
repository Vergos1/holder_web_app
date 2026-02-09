import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@tanstack/react-query', 'zustand'],
	},
};

export default nextConfig;

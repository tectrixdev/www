import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [
			remarkFrontmatter,
			[remarkMdxFrontmatter, { name: "matter" }],
		],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

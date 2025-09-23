/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'new_portifolio';

const nextConfig = {
  // Export as a static site for GitHub Pages
  output: 'export',
  images: { unoptimized: true },
  // Helps GitHub Pages serve nested routes as directories with index.html
  trailingSlash: true,
  // Only set basePath/assetPrefix when deploying to GitHub Pages
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
}

module.exports = nextConfig

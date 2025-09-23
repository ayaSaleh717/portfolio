/* Post-export adjustments for GitHub Pages
 * - Create a .nojekyll file to prevent Jekyll from processing the site
 * - Create a 404.html that mirrors index.html for SPA routing fallback
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found. Did you run `npm run build`?');
  process.exit(1);
}

// 1) Ensure .nojekyll exists
const nojekyllPath = path.join(outDir, '.nojekyll');
try {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created: out/.nojekyll');
} catch (e) {
  console.error('Failed to create .nojekyll:', e);
}

// 2) Ensure 404.html exists for SPA fallback
const indexPath = path.join(outDir, 'index.html');
const notFoundPath = path.join(outDir, '404.html');
try {
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('Created: out/404.html (copied from index.html)');
  } else {
    console.warn('index.html not found in out/. Skipping 404.html creation.');
  }
} catch (e) {
  console.error('Failed to create 404.html:', e);
}

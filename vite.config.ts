import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function saveProductImagePlugin(): Plugin {
  return {
    name: 'save-product-image-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/save-product-image', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { productId, dataUrl } = JSON.parse(body);
              if (productId && typeof dataUrl === 'string') {
                const matches = dataUrl.match(/^data:([A-Za-z0-9-+\/]+);base64,(.+)$/);
                if (matches && matches[2]) {
                  const buffer = Buffer.from(matches[2], 'base64');
                  const imagesDir = path.resolve(__dirname, 'public/images');
                  if (!fs.existsSync(imagesDir)) {
                    fs.mkdirSync(imagesDir, { recursive: true });
                  }
                  const filename = `${productId}.jpg`;
                  fs.writeFileSync(path.join(imagesDir, filename), buffer);

                  // Also write to dist/images if dist directory exists
                  const distImagesDir = path.resolve(__dirname, 'dist/images');
                  if (fs.existsSync(distImagesDir)) {
                    fs.writeFileSync(path.join(distImagesDir, filename), buffer);
                  }

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: `/images/${filename}` }));
                  return;
                }
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Invalid payload' }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err?.message || 'Server error' }));
            }
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), saveProductImagePlugin()],
    define: {
      'process.env.GOOGLE_MAPS_PLATFORM_KEY': JSON.stringify(process.env.GOOGLE_MAPS_PLATFORM_KEY || '')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

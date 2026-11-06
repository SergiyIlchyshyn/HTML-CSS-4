import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Serve public static assets
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Serve root static assets (index.html, styles.css, app.js)
app.use(express.static(__dirname));

// Fallback to index.html for SPA hash routing or any direct hits
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Vanilla JS Static Server running on http://0.0.0.0:${PORT}`);
});

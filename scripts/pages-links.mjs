import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
const base = ('/' + (process.env.PAGES_BASE || '').replace(/^\/+|\/+$/g, '')).replace(/\/$/, '');
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { await walk(file); continue; }
    if (!file.endsWith('.html') || !base) continue;
    const html = await readFile(file, 'utf8');
    const updated = html.replace(/\b(href|src)=(['"])(\/[^'"]*)\2/g, (match, attr, quote, url) => {
      if (url.startsWith('//') || url === base || url.startsWith(base + '/')) return match;
      return `${attr}=${quote}${base}${url}${quote}`;
    });
    await writeFile(file, updated);
  }
}
await walk('dist');

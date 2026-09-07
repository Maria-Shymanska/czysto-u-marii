import { readFile, writeFile, rm } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('Missing HTML marker');
await writeFile(path, template.replace('<!--app-html-->', render()));
await rm(new URL('../.prerender', import.meta.url), { recursive: true, force: true });
console.log('Pre-rendered HTML saved to dist/index.html');

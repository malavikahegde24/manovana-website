/**
 * Post-build SEO + integrity audit over dist/ (see documents/factors.txt):
 *  - every page has a unique, non-overlong <title>
 *  - every page has a unique <meta name="description">
 *  - every <img> has a non-empty alt attribute
 *  - no broken internal links (every local href resolves to a built file/anchor)
 * Exits non-zero if any hard check fails.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const MAX_TITLE = 65;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const routeFor = (file) => {
  let r = '/' + relative(DIST, file).replace(/\\/g, '/');
  r = r.replace(/index\.html$/, '').replace(/\.html$/, '');
  if (r.length > 1 && r.endsWith('/')) r = r.slice(0, -1);
  return r === '' ? '/' : r;
};

const files = await walk(DIST);
const routes = new Set(files.map(routeFor));
const titles = new Map();
const descs = new Map();
const errors = [];
const warnings = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const route = routeFor(file);

  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim();
  if (!title) errors.push(`[title] missing on ${route}`);
  else {
    if (title.length > MAX_TITLE)
      warnings.push(`[title] ${title.length} chars (>${MAX_TITLE}) on ${route}`);
    if (titles.has(title)) errors.push(`[title] duplicate "${title}" on ${route} & ${titles.get(title)}`);
    else titles.set(title, route);
  }

  const desc = html
    .match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]
    ?.trim();
  if (!desc) errors.push(`[desc] missing on ${route}`);
  else if (descs.has(desc)) errors.push(`[desc] duplicate on ${route} & ${descs.get(desc)}`);
  else descs.set(desc, route);

  // Image alt checks (decorative images may use empty alt + aria-hidden)
  for (const img of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = img[0];
    const alt = tag.match(/\balt=["']([^"']*)["']/i);
    const decorative = /aria-hidden=["']true["']/i.test(tag);
    if (!alt) errors.push(`[alt] <img> without alt on ${route}: ${tag.slice(0, 80)}`);
    else if (!alt[1].trim() && !decorative)
      errors.push(`[alt] empty alt on ${route}: ${tag.slice(0, 80)}`);
  }

  // Internal link checks
  for (const a of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    let href = a[1];
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      href.startsWith('data:')
    )
      continue;
    const [pathPart] = href.split('#');
    let target = pathPart.split('?')[0];
    if (!target) continue;
    if (target.length > 1 && target.endsWith('/')) target = target.slice(0, -1);
    if (!routes.has(target)) errors.push(`[link] broken internal link "${href}" on ${route}`);
  }
}

console.log(`\nScanned ${files.length} pages, ${routes.size} routes.`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log('  ' + w));
}
if (errors.length) {
  console.log(`\n✖ ${errors.length} error(s):`);
  errors.forEach((e) => console.log('  ' + e));
  process.exit(1);
}
console.log('\n✓ SEO checks passed: unique titles & descriptions, all images have alt, no broken internal links.\n');

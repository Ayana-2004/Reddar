// Renders every route in src/seo/site.js to static HTML so crawlers and AI answer
// engines that do not run JavaScript still see the full page, meta and JSON-LD.
// Also writes robots.txt, sitemap.xml and llms.txt. Runs after both vite builds.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssr = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

if (!template.includes("<!--seo-head-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html is missing the <!--seo-head--> marker or the empty #root div");
}

for (const route of ssr.routes) {
  const meta = ssr.getRouteMeta(route.path);
  const html = template
    .replace("<!--seo-head-->", ssr.renderHeadTags(meta))
    .replace('<div id="root"></div>', `<div id="root">${ssr.render(route.path)}</div>`);

  // "/" -> index.html, "/radar-room/x" -> radar-room/x.html (served at the clean URL via vercel.json rewrites;
  // cleanUrls is off so exact .html files like Google's verification file are not redirected)
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerendered ${route.path} -> dist/${file}`);
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, "robots.txt"), ssr.buildRobotsTxt());
fs.writeFileSync(path.join(dist, "sitemap.xml"), ssr.buildSitemapXml(today));
fs.writeFileSync(path.join(dist, "llms.txt"), ssr.buildLlmsTxt());
console.log("wrote robots.txt, sitemap.xml, llms.txt");

fs.rmSync(ssrDir, { recursive: true, force: true });

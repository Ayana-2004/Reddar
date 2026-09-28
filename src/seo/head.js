import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMeta, OG_IMAGE, SITE_NAME } from "./site";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Per-route head tags. Every tag carries data-seo so it can be swapped on navigation.
export function renderHeadTags(meta) {
  const m = (attr, key, value) => `<meta ${attr}="${key}" content="${esc(value)}" data-seo />`;
  const jsonLd = JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c");
  return [
    `<title data-seo>${esc(meta.title)}</title>`,
    m("name", "description", meta.description),
    m("name", "robots", meta.noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large"),
    `<link rel="canonical" href="${esc(meta.url)}" data-seo />`,
    m("property", "og:type", meta.ogType),
    m("property", "og:site_name", SITE_NAME),
    m("property", "og:url", meta.url),
    m("property", "og:title", meta.title),
    m("property", "og:description", meta.description),
    m("property", "og:image", OG_IMAGE),
    m("property", "og:locale", "en_IN"),
    m("name", "twitter:card", "summary_large_image"),
    m("name", "twitter:url", meta.url),
    m("name", "twitter:title", meta.title),
    m("name", "twitter:description", meta.description),
    m("name", "twitter:image", OG_IMAGE),
    `<script type="application/ld+json" data-seo>${jsonLd}</script>`,
  ].join("\n    ");
}

// Keeps head tags in sync during client-side navigation.
// On a prerendered page the first run replaces identical tags, so it is a no-op visually.
export function useSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    const tpl = document.createElement("template");
    tpl.innerHTML = renderHeadTags(meta);
    document.head.append(...tpl.content.childNodes);
  }, [pathname]);
}

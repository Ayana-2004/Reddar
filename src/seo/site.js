// ================================================
// SEO / AEO — single source of truth
// Page meta, canonical URLs and schema.org JSON-LD for every route.
// Used by the client (useSeo), the prerender step and the generated
// robots.txt / sitemap.xml / llms.txt, so they never drift apart.
// ================================================
import { faqs } from "../constants/faqs";
import { articles } from "../components/Articles";
import { articleContent } from "../constants/articleContent";

// Change this one value when the production domain goes live.
export const SITE_URL = "https://reddar-ayana-2004s-projects.vercel.app";

export const SITE_NAME = "REDDAR";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.faircode.reddar";
export const APP_STORE_URL = "https://apps.apple.com/in/app/reddar-live-blood-connect/id6789000156";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export const absoluteUrl = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// Articles that have a full body get a page; locked ones are teasers only.
export const publishedArticles = articles.filter((a) => articleContent[a.slug]);

// ---------- Shared entities ----------

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Faircode Infotech",
  url: "https://faircodetech.com/",
  brand: { "@type": "Brand", name: SITE_NAME },
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: absoluteUrl("/"),
  name: SITE_NAME,
  description: "India's real-time blood donor response network.",
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

const mobileApp = {
  "@type": "MobileApplication",
  "@id": APP_ID,
  name: SITE_NAME,
  description:
    "REDDAR connects blood donors, recipients, and hospitals in real time so donors near an emergency can be found and alerted quickly.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Android, iOS",
  url: absoluteUrl("/"),
  image: OG_IMAGE,
  installUrl: [PLAY_STORE_URL, APP_STORE_URL],
  sameAs: [PLAY_STORE_URL, APP_STORE_URL],
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  publisher: { "@id": ORG_ID },
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbs = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absoluteUrl(path),
  })),
});

const webPage = (path, name, description, type = "WebPage") => ({
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: { "@id": SITE_ID },
  inLanguage: "en-IN",
});

const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });

// ---------- Routes ----------

const staticRoutes = [
  {
    path: "/",
    title: "REDDAR - India's Real-Time Blood Donor Network",
    description:
      "REDDAR connects blood donors, recipients, and hospitals in real time. Find donors near you instantly. Download the free app and help save lives.",
    jsonLd: () =>
      graph(
        organization,
        website,
        mobileApp,
        { ...webPage("/", "REDDAR - India's Real-Time Blood Donor Network", "Find blood donors near you, fast."), about: { "@id": APP_ID } },
        faqPage
      ),
  },
  {
    path: "/hospitals",
    title: "Find Hospitals in Kerala | REDDAR",
    description:
      "Search hospitals across Kerala or find the ones nearest to you, with distance from your location.",
    jsonLd: (r) =>
      graph(webPage(r.path, r.title, r.description), breadcrumbs([["Home", "/"], ["Hospitals", r.path]])),
  },
  {
    path: "/radar-room",
    title: "Radar Room - Blood Donation Guides, Myths & Facts | REDDAR",
    description:
      "Articles on blood donation eligibility, blood groups, common myths and recovery after donating, written for the REDDAR community.",
    jsonLd: (r) =>
      graph(
        {
          ...webPage(r.path, r.title, r.description, "CollectionPage"),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: publishedArticles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(`/radar-room/${a.slug}`),
              name: a.title,
            })),
          },
        },
        breadcrumbs([["Home", "/"], ["Radar Room", r.path]])
      ),
  },
  {
    path: "/stories",
    // Placeholder stories: page stays live for visitors but is kept out of search
    // and AI answer engines (noindex, no sitemap, no llms.txt). Remove this flag
    // once the stories are real.
    noindex: true,
    title: "Stories from the REDDAR Community | REDDAR",
    description:
      "Moments when someone needed blood and someone else showed up. Stories from donors, recipients and families in the REDDAR community.",
    jsonLd: (r) =>
      graph(webPage(r.path, r.title, r.description), breadcrumbs([["Home", "/"], ["Stories", r.path]])),
  },
];

const articleRoutes = publishedArticles.map((a) => {
  const path = `/radar-room/${a.slug}`;
  const body = articleContent[a.slug].body;
  return {
    path,
    title: `${a.title} | REDDAR Radar Room`,
    description: a.excerpt,
    ogType: "article",
    jsonLd: () =>
      graph(
        {
          "@type": "Article",
          "@id": `${absoluteUrl(path)}#article`,
          headline: a.title,
          description: a.excerpt,
          articleSection: a.tag,
          url: absoluteUrl(path),
          mainEntityOfPage: absoluteUrl(path),
          image: OG_IMAGE,
          inLanguage: "en-IN",
          wordCount: body
            .flatMap((b) => (b.items ? b.items : [b.text]))
            .join(" ")
            .split(/\s+/).length,
          author: { "@id": ORG_ID },
          publisher: organization,
          isPartOf: { "@id": SITE_ID },
        },
        breadcrumbs([["Home", "/"], ["Radar Room", "/radar-room"], [a.title, path]])
      ),
  };
});

export const routes = [...staticRoutes, ...articleRoutes];

export function getRouteMeta(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const route = routes.find((r) => r.path === clean) || routes[0];
  return {
    ...route,
    url: absoluteUrl(route.path),
    ogType: route.ogType || "website",
    jsonLd: route.jsonLd(route),
  };
}

// ---------- Crawler files ----------

// AI answer-engine crawlers are listed explicitly so the intent is unambiguous.
const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Bingbot",
  "CCBot", "meta-externalagent",
];

export function buildRobotsTxt() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_CRAWLERS.flatMap((ua) => [`User-agent: ${ua}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

export function buildSitemapXml(lastmod) {
  const urls = routes
    .filter((r) => !r.noindex)
    .map(
      (r) =>
        `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

// llms.txt: plain-text summary for LLM tools (https://llmstxt.org).
export function buildLlmsTxt() {
  const lines = [
    "# REDDAR",
    "",
    "> REDDAR is India's real-time blood donor response network. The free mobile app connects blood donors, recipients, hospitals and communities during emergencies, so donors near a request can be found and alerted quickly. REDDAR is a social impact initiative by Faircode Infotech.",
    "",
    "Key facts:",
    "- Free for donors and recipients.",
    "- Available on Android and iOS.",
    "- Donors can be \"Visible on Radar\" (available for matching) or switch to \"Invisible\" (hidden from searches and alerts).",
    "- Recipients create a blood request with blood group, units, hospital and urgency; matching donors nearby are alerted.",
    "",
    "## App",
    "",
    `- [REDDAR on Google Play](${PLAY_STORE_URL}): Android app`,
    `- [REDDAR on the App Store](${APP_STORE_URL}): iOS app`,
    "",
    "## Pages",
    "",
    ...staticRoutes.filter((r) => !r.noindex).map((r) => `- [${r.title}](${absoluteUrl(r.path)}): ${r.description}`),
    "",
    "## Radar Room articles",
    "",
    ...articleRoutes.map((r) => `- [${r.title}](${absoluteUrl(r.path)}): ${r.description}`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
  ];
  return lines.join("\n");
}

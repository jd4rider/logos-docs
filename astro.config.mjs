// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.logos-ai.online",
  integrations: [
    starlight({
      title: "Logos AI Docs",
      description: "Install, configure, and ship Logos AI across desktop, CLI, web, and local AI workflows.",
      tagline: "Install, configure, and ship Logos AI across desktop, CLI, web, and local AI workflows.",
      logo: {
        src: "./src/assets/logos-logo.png",
        alt: "Logos AI",
      },
      favicon: "/favicon.png",
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl: "https://github.com/jd4rider/logos-docs/edit/main/",
      },
      head: [
        { tag: "meta", attrs: { name: "theme-color", content: "#08111b" } },
        { tag: "meta", attrs: { name: "robots", content: "index,follow" } },
        { tag: "meta", attrs: { property: "og:site_name", content: "Logos AI Docs" } },
        { tag: "meta", attrs: { property: "og:image", content: "https://docs.logos-ai.online/logos-logo.png" } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
      ],
      lastUpdated: true,
      components: {
        Footer: "./src/components/Footer.astro",
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/jd4rider/logos" }],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", slug: "" },
            { label: "Install Logos AI", slug: "getting-started/desktop-install" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
            { label: "Updating", slug: "getting-started/updating" },
          ],
        },
        {
          label: "Setup",
          items: [
            { label: "API.Bible Key", slug: "setup/api-bible" },
            { label: "Ollama", slug: "setup/ollama" },
            { label: "Bring Your Own Key", slug: "setup/byok" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Web Reader", slug: "reference/web-reader" },
            { label: "Release Packaging", slug: "reference/release-packaging" },
            { label: "FAQ", slug: "reference/faq" },
          ],
        },
      ],
    }),
    sitemap(),
  ],
});

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.logos-ai.online",
  integrations: [
    starlight({
      title: "Logos AI Docs",
      description: "Setup, BYOK, web demo, and release documentation for Logos AI.",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/jd4rider/logos" }],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", slug: "" },
            { label: "Desktop Install", slug: "getting-started/desktop-install" },
            { label: "Bring Your Own Key", slug: "getting-started/byok" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Web Demo Backend", slug: "reference/web-demo-backend" },
            { label: "Release Packaging", slug: "reference/release-packaging" },
          ],
        },
      ],
    }),
  ],
});

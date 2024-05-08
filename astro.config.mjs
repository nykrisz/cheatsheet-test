import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { createSidebarGroups } from "./src/scripts/createSidebarGroups";

const sidebarGroups = await createSidebarGroups();

// https://astro.build/config
export default defineConfig({
  integrations: [

    starlight({
      title: "My Docs",
      editLink: {
        baseUrl: "https://github.com/withastro/starlight/edit/main/docs/",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Contribution",
          link: "/contribution",
        },
        ...sidebarGroups,
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});

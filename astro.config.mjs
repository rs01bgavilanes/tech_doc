import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Revolution Supply",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Power BI",
					autogenerate: { directory: "power_bi" },
				},
				{
					label: "CI/CD Pipeline",
					autogenerate: { directory: "devops" },
				},
				{
					label: "Adobe Commerce",
					autogenerate: { directory: "adobe_commerce" },
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});

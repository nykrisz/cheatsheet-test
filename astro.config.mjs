import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs/promises'

const path = './src/content/docs';
const dirs = await fs.readdir(path)
const subDirectories = [];

for (const file of dirs) {
	const stat = await fs.stat(path + '/' + file);
	if (stat.isDirectory()) {
		subDirectories.push(file);
	}
}

const myobj = subDirectories.map((directory) => {
	return {
		label: directory,
		collapsed: true,
		autogenerate: {
			directory
		}
	}
})

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'My Docs',
		editLink: {
			baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/'
		},
		social: {
			github: 'https://github.com/withastro/starlight'
		},
		sidebar: [{
			label: 'Home',
			link: '/'
		},
		...myobj
		]
	})],
});

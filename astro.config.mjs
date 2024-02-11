import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Openions',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Life',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/guides/started/' },
						{ label: 'Hard work | Luck | Success', link: '/guides/hardwork/' },
						{ label: 'Money', link: '/guides/money/' },
						{ label: 'People', link: '/guides/people/' },
						{ label: 'Little Things', link: '/guides/little/' },
						{ label: 'Mental Health', link: '/guides/mental-health/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

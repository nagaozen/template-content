import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import topics from 'starlight-sidebar-topics'
import sitemap from '@astrojs/sitemap'

export const defaultLocale = 'pt-br'
export const locales = {
	'pt-br': { label: 'Português (BR)', lang: 'pt-BR' },
	ja: { label: '日本語', lang: 'ja' },
	en: { label: 'English', lang: 'en' }
}

export default defineConfig({
	site: 'https://docs.evolved.com.br',
	redirects: {
		'/': '/pt-br/'
	},
	integrations: [
		sitemap(),
		starlight({
			plugins: [
				topics([
					{
						id: 'technical',
						label: {
							en: 'Technical',
							'pt-BR': 'Técnico'
						},
						link: '/technical/',
						icon: 'open-book',
						items: ['technical/listed'],
					},
				])
			],
			title: 'Evolved Docs',
			logo: {
				src: './src/assets/logo.lr.web.png',
				replacesTitle: true
			},
			customCss: ['./src/styles/custom.css'],
			social: {
				// azureDevOps: '',
				// backstage: '',
				// bitbucket: '',
				// blueSky: '',
				// codeberg: '',
				codePen: 'https://codepen.io/nagaozen',
				// discord: '',
				// discourse: '',
				// email: '',
				// facebook: '',
				github: 'https://github.com/nagaozen',
				// gitlab: '',
				// gitter: '',
				// hackerOne: '',
				instagram: 'https://www.instagram.com/nagaozen/',
				linkedin: 'https://www.linkedin.com/in/nagaozen/',
				// mastodon: '',
				// matrix: '',
				// microsoftTeams: '',
				// nostr: '',
				// openCollective: '',
				// patreon: '',
				// pinterest: '',
				// reddit: '',
				// rss: '',
				// signal: '',
				// slack: '',
				// stackOverflow: '',
				// telegram: '',
				// threads: '',
				// tiktok: '',
				// twitch: '',
				twitter: 'https://x.com/nagaozen',
				'x.com': 'https://x.com/nagaozen',
				// youtube: '',
				// zulip: '',
			},
			defaultLocale,
			locales
		})
	]
})

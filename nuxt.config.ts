import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',

	devtools: { enabled: true },

	modules: ['@nuxt/eslint', '@nuxt/fonts', '@primevue/nuxt-module'],

	primevue: {
		options: {
			theme: {
				preset: Aura,

				options: {
					darkModeSelector: '.dark-mode',
				},
			},
		},
	},

	ssr: true, // SSR global habilitado

	app: {
		head: {
			title: 'Nuxt SSR POC',
			meta: [
				{ name: 'description', content: 'Prova de conceito de SSR com Nuxt' },
			],
		},
	},

	routeRules: {
		'/about': { ssr: false }, // SPA-only
		'/blog': { prerender: true }, // SSG
	},
});
// '/contact': { isr: 60 }, // ISR (revalida a cada 60 segundos)

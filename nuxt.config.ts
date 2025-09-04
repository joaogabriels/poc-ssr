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

	app: {
		head: {
			title: 'Nuxt SSR POC',
			meta: [
				{ name: 'description', content: 'Prova de conceito de SSR com Nuxt' },
			],
		},
	},

	routeRules: {
		// é atualizado a cada 120 segundos
		'/**': { isr: 120 },

		// sempre atualizado
		'/dynamic': { isr: false },

		// cacheado no acesso
		'/static': { isr: true },

		// cacheado na construção
		'/prerendered': { prerender: true },

		// apenas no cliente
		'/spa': { ssr: false },
	},

	runtimeConfig: {
		nitro: { envPrefix: 'VERCEL_' },
	},
});

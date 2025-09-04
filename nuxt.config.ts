export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',

	devtools: { enabled: true },

	modules: ['@nuxt/eslint', '@nuxt/fonts'],

	app: {
		head: {
			title: 'Nuxt SSR POC',
			meta: [
				{ name: 'description', content: 'Prova de conceito de SSR com Nuxt' },
			],
		},
	},

	routeRules: {
		// É atualizado a cada 120 segundos
		'/**': { isr: 120 },

		// Sempre atualizado
		'/dynamic': { isr: false },

		// Cacheado no acesso (sem rebuild)
		'/static': { isr: true },

		// Cacheado no deploy
		'/prerendered': { prerender: true },

		// Apenas client-side
		'/spa': { ssr: false },
	},

	runtimeConfig: {
		nitro: { envPrefix: 'VERCEL_' },
	},
});

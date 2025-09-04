export default defineEventHandler(() => {
	return {
		serverTime: new Date().toISOString(),
		message: 'Horário fornecido pela API do Nuxt (server/api)',
	};
});

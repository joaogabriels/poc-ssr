export default defineEventHandler(() => {
	return {
		message: `Dados do servidor, obtidos em ${new Date().toLocaleString()}`,
	};
});

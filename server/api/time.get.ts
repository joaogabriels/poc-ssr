import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default defineEventHandler(() => {
	return {
		message: format(new Date(), "dd 'de' MMMM 'de' yyyy', às' HH:mm:ss", {
			locale: ptBR,
		}),
	};
});

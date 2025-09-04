<template>
	<main>
		<Navbar />

		<h1>POC SSR - Nuxt 3 + PrimeVue</h1>

		<p>
			Gerado em:

			{{ relativeDate }}
		</p>

		<p>
			Mensagem da API:

			{{ data?.message }}
		</p>
	</main>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const generatedAt = useState(() => new Date());
const relativeDate = ref('');

const { data } = await useFetch('/api/time');

onMounted(() => {
	relativeDate.value = format(
		generatedAt.value,
		"dd 'de' MMMM 'de' yyyy', às' HH:mm:ss",
		{ locale: ptBR }
	);
});
</script>

<style lang="scss">
@use '~/assets/scss/main.scss';
</style>

<template>
	<main class="main">
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

const route = useRoute();

const generatedAt = useState(`${route.path}-generated_at`,() => new Date());
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

.main {
	padding: 24px 80px;
}
</style>

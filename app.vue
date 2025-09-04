<template>
	<main class="poc">
		<div class="poc__card">
			<h1 class="poc__title">POC SSR – Nuxt</h1>

			<p v-if="generatedAt" class="poc__timestamp">
				Gerado em:
				{{
					format(generatedAt, "dd 'de' MMMM 'de' yyyy', às' HH:mm:ss", {
						locale: ptBR,
					})
				}}
			</p>

			<hr class="poc__divider" />

			<h2 class="poc__message">
				Mensagem da API, obtida em:

				<span class="poc__message-text">{{ data?.message }}</span>
			</h2>
		</div>
	</main>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const route = useRoute();
const generatedAt = useState(`${route.path}-generated_at`, () => new Date());

const { data } = await useFetch('/api/time');
</script>

<style lang="scss">
@use '~/assets/scss/main.scss';

.poc {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background: #0563c1;
	background: radial-gradient(
		circle,
		rgba(5, 99, 193, 1) 0%,
		rgba(0, 135, 218, 1) 50%,
		rgba(0, 158, 251, 1) 100%
	);
}

.poc__card {
	width: 100%;
	max-width: 500px;
	padding: 32px;
	margin: 16px;
	text-align: center;

	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(25px);
	-webkit-backdrop-filter: blur(25px);
	border-radius: 20px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.08),
		inset 0 -1px 0 rgba(255, 255, 255, 0.02);

	position: relative;
	overflow: hidden;
}

.poc__card::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 1px;
	background: linear-gradient(
		90deg,
		transparent,
		rgba(255, 255, 255, 0.3),
		transparent
	);
}

.poc__card::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 1px;
	height: 100%;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.2),
		transparent,
		rgba(255, 255, 255, 0.05)
	);
}

.poc__title {
	font-size: 1.75rem;
	margin-bottom: 16px;
	line-height: 100%;
	font-weight: 500;
}

.poc__timestamp {
	font-size: 1.25rem;
	color: #e9e9e9;
	margin-bottom: 1.5rem;
}

.poc__divider {
	border: none;
	height: 1px;
	background-color: #e9e9e9;
	margin: 1.5rem 0;
}

.poc__message {
	font-size: 1.25rem;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 16px;
}

.poc__message-text {
	font-size: 1rem;
}
</style>

<template>
  <div>
    <h1>🏠 Página inicial (SSR)</h1>

    <p>Este conteúdo foi renderizado no servidor.</p>

    <p>Horário vindo da API: {{ data?.serverTime }}</p>

    <p>{{ data?.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';

const { data } = await useFetch<{ serverTime: string; message: string }>('/api/time')
</script>

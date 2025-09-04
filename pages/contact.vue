<template>
  <div>
    <NavBar />
    <h1>📬 Contato (ISR)</h1>
    <p>Esta página é estática, mas se atualiza a cada 60s no servidor.</p>
    <p>Horário vindo da API: {{ data?.serverTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';

const { data } = await useFetch<{ serverTime: string; message: string }>('/api/time')
</script>

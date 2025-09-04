<template>
  <div>
    <NavBar />
    <h1>ℹ️ About (SPA-only)</h1>
    <p>Esta página é renderizada apenas no cliente (SSR desabilitado).</p>
    <p>Horário vindo da API: {{ data?.serverTime }}</p>
    <p>{{ data?.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';

const { data } = await useFetch<{ serverTime: string; message: string }>('/api/time')
</script>

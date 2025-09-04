<template>
  <div>
    <NavBar />
    <h1>📰 Blog (SSG)</h1>
    <p>Esta página foi pré-renderizada no build.</p>
    <p>Horário fixado no momento do build: {{ buildTime }}</p>
  </div>
</template>

<script setup lang="ts">
const buildTime = new Date().toISOString()
</script>

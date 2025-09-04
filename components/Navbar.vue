<template>
  <Menubar
    class="navbar"
    :model="ROUTES"
  >
    <template #item="{item }">
					<NuxtLink as-child :to="item.path">
						<Button :severity="activeRoute?.path === item.path ? 'info' : 'text'" variant="outlined">
              {{ item.label }}
						</Button>
					</NuxtLink>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const route = useRoute();

const ROUTES = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/dynamic",
    label: "Dinâmica",
  },
  {
    path: "/static",
    label: "Estático",
  },
  {
    path: "/prerendered",
    label: "Pré-renderizado",
  },
  {
    path: "/spa",
    label: "SPA",
  },
];

const activeRoute = computed(() => {
  return ROUTES.find((r) => r.path === route.path);
});
</script>

<style scoped lang="scss">
.navbar {
  justify-content: center;
}
</style>

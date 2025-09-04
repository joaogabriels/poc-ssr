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
    path: "/about",
    label: "Sobre",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contato",
  },
];

const activeRoute = computed(() => {
  return ROUTES.find((r) => r.path === route.path);
});
</script>

<style scoped lang="scss">
.navbar {
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
  justify-content: center;
}
</style>

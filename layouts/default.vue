<template>
  <div class="default">
    <Navbar />

    <div class="default__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.default {
  display: flex;
	flex-direction: column;
  min-height: 100vh;

  &__content {
    flex: 1;
    padding: 0 80px 16px;
  }
}
</style>

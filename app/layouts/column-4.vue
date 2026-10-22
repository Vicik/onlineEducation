<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
});
</script>

<template>
  <NuxtLayout name="default">
    <NavMenu :title="title"></NavMenu>
    <main class="grid-4 mt-20px">
      <slot></slot>
    </main>
    <div class="py-20px">
      <pagination></pagination>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
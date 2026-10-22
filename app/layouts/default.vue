<template>
  <div class="my-blog-layout flex flex-col min-h-screen">
    <NavBar></NavBar>
    <main class="container flex-1">
      <slot></slot>
    </main>
    <PageFooter></PageFooter>
  </div>
</template>
<script lang="ts" setup>
</script>

<style scoped>
.my-blog-layout {
  min-width: 1000px;
  @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
<template>
  <div class="course-container">
    <course v-for="item in 8" :key="item"></course>
  </div>
</template>
<script lang="ts" setup>

</script>

<style scoped>
.course-container {
  @apply grid grid-cols-4 gap-20px;
}
</style>
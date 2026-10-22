<script lang="ts" setup>
</script>

<template>
  <div class="recommend">
    <div class="recommend-title">精品推荐</div>
    <div class="recommend-body">
      <course v-for="item in 3" :key="item"></course>
    </div>
  </div>
</template>

<style scoped>
.recommend {
  @apply bg-white border-2 border-[#eee] rounded-5px;

  .recommend-title {
    @apply text-18px p-15px border-b-1 border-[#eee];
  }

  .recommend-body {
    @apply p-15px;

    >div {
      @apply mt-20px;

      &:first-of-type {
        @apply mt-0px;
      }
    }
  }
}
</style>
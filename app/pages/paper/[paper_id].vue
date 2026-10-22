<script lang="ts" setup>
definePageMeta({
  layout: {
    name: 'column-2',
    props: {
      title: '考试',
    },
  }
});
</script>
<template>
  <div class="exam-page">
    <div class="exam-container">
      <div class="exam" :class="{ 'mt-20px': item > 1 }" v-for="item in 3" :key="item">
        <div class="exam-title">
          <span class="exam-title_text">kdf</span>
          <span class="exam-title_time">时长：60分钟</span>
        </div>
        <div class="exam-summary">
          <span class="mr-15px">题目总数：5</span>
          <span class="mr-15px">总分数：100</span>
          <span class="mr-15px">及格分：60</span>
        </div>
        <div class="exam-status">
          <a-button type="primary" disabled>已参加</a-button>
          <a-button type="primary">立即考试</a-button>
        </div>
      </div>
    </div>
    <div class="aside">
      <recommend></recommend>
    </div>
  </div>
</template>

<style scoped>
.exam-page {
  @apply grid gap-20px grid-cols-[1fr_300px];

  .exam {
    @apply bg-white border-2 border-[#eee] rounded-5px p-20px;

    .exam-title {
      @apply flex justify-between text-16px;

      .exam-title_time {
        @apply text-red-500 text-14px;
      }
    }

    .exam-summary {
      @apply mt-20px text-16px text-gray-500;
    }

    .exam-status {
      @apply mt-20px text-right;

      :deep(.ant-btn-primary) {
        @apply bg-[#0d9056];
      }

      :deep(.ant-btn-primary:disabled) {
        @apply bg-[#87c9ac] text-white;
      }
    }
  }
}
</style>
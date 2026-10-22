<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
});
</script>

<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>{{ title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<style scoped>
:deep(.ant-breadcrumb-link),
:deep(.ant-breadcrumb-separator) {
  font-size: 18px;
}
</style>
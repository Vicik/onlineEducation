<script lang="ts" setup>
const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 50,
  },
  hideOnSinglePage: {
    type: Boolean,
    default: false,
  },
  defaultPageSize: {
    type: Number,
    default: 10,
  },
});
const page = ref(props.current);
const size = ref(props.defaultPageSize);
</script>

<template>
  <div class="flex justify-center">
    <a-pagination v-model:current="page" v-model:pageSize="size" :defaultPageSize="size" :total="total" show-less-items
      :hideOnSinglePage="hideOnSinglePage" />
  </div>
</template>

<style scoped></style>
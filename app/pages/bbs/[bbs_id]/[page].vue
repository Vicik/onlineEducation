<script lang="ts" setup>
import type { MenuProps } from 'ant-design-vue';
import { LikeFilled } from '@ant-design/icons-vue';
const current = ref<string[]>(['all']);
const items = ref<MenuProps['items']>([
  {
    key: 'all',
    label: '全部',
    title: '全部',
  },
  {
    key: 'fashion',
    label: '时尚',
    title: '时尚',
  }
]);
</script>
<template>
  <div class="bbs">
    <div class="bbs-header mb-20px">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
    </div>
    <div class="bbs-body">
      <div class="bbs-content">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
        <div class="bbs-item" v-for="item in 3" :key="item">
          <div class="bbs-content">
            <a-tag color="#87d068">置顶</a-tag>{{ item }}
          </div>
          <div class="bbs-img">
            <img src="/img/电子书.png" alt="">
            <img src="/img/电子书.png" alt="">
          </div>
          <dib class="bbs-footer">
            <div class="bbs-footer_item">
              <div class="btn" :class="{ 'active': item % 2 == 0 }">
                <LikeFilled />&nbsp;&nbsp;点赞&nbsp;&nbsp;1
              </div>
            </div>
            <div class="bbs-footer_item">
              <div class="btn">
                <MessageOutlined />&nbsp;&nbsp;评论&nbsp;&nbsp;1
              </div>
            </div>
            <div class="bbs-footer_item">
              作者：CC
            </div>
          </dib>
        </div>
      </div>
      <div class="bbs-aside">
        <div class="mb-20px">
          <a-button type="primary">发布帖子</a-button>
        </div>
        <recommend></recommend>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bbs {

  .bbs-body {
    @apply grid grid-cols-[1fr_300px] gap-20px;

    :deep(.ant-btn-primary) {
      @apply bg-[#0d9056] w-full h-40px;
    }

    .bbs-item {
      @apply border-b-1 p-20px bg-white;

      .bbs-content {
        @apply text-gray-500 text-16px;
      }

      .bbs-img {
        @apply flex mt-10px mb-20px;

        img {
          @apply w-100px h-80px rounded-5px cursor-pointer;

          &+img {
            @apply ml-10px;
          }
        }
      }
    }
  }

  .bbs-footer {
    @apply flex items-center;

    .btn {
      @apply bg-[#f5f6f8] py-5px px-8px rounded-3px cursor-pointer;

      &.active {
        @apply bg-[#cdebd7] text-[#0b8e5c];
      }
    }

    .bbs-footer_item {
      @apply mr-10px text-14px text-gray-500;
    }
  }
}
</style>
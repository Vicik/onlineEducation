<script lang="ts" setup>
import type { CourseInfo } from '~/assets/types'
interface Props {
  courseInfo?: CourseInfo
}
const prop = withDefaults(defineProps<Props>(), {
  courseInfo: () => {  // 数组/对象类型的默认值必须用工厂函数返回
    return {
      pic: '/img/电子书.png',
      name: '默认',
      originPrice: 20,
      salePrice: 18.51,
      type: 1
    }
  }
})
const { format } = useNumberFormat()
const emit = defineEmits(['handleClick'])
const handleClick = () => {
  emit('handleClick', prop.courseInfo)
}
</script>

<template>
  <div class="course" @click="handleClick">
    <div class="course-img">
      <img :src="courseInfo.pic" alt="">
    </div>
    <div>
      <div class="course-title">{{ courseInfo.name }}</div>
      <div class="course-price">
        <span class="sale-price">{{ format(courseInfo.salePrice) }}</span>
        <span class="origin-price">{{ format(courseInfo.originPrice) }}</span>
      </div>
    </div>
    <div class="course-footer" v-if="courseInfo.type == 1 || courseInfo.type == 2">
      <span>{{ courseInfo.type == 1 ? '拼团中' : '秒杀' }}</span>
      <div class="course-footer_time">
        <span>倒计时</span>
        <span class="course-time_item">731</span>
        <span>天</span>
        <span class="course-time_item">00</span>
        <span>:</span>
        <span class="course-time_item">14</span>
        <span>:</span>
        <span class="course-time_item">20</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 课程、拼团、秒杀的基础样式 */
.course {
  @apply flex flex-col justify-between shadow-md rounded-5px bg-white overflow-hidden cursor-pointer;

  .course-img {
    @apply w-full h-120px;

    img {
      @apply w-full h-full;
    }
  }

  .course-title {
    @apply font-bold px-20px my-10px text-gray-700 truncate text-14px;
  }

  .course-price {
    @apply px-20px my-10px;

    .sale-price {
      @apply text-red-500 font-bold text-14px;
    }

    .origin-price {
      @apply text-gray-400 line-through pl-5px text-14px inline-block transform translate-y-1;
    }
  }

  .course-footer {
    @apply text-14px bg-[#fe9f03] h-50px flex items-center justify-between px-20px text-white;

    .course-footer_time {
      >span {
        @apply mx-2px;
      }
    }

    .course-time_item {
      @apply inline-block p-3px rounded-3px bg-white text-[#fe9f03] leading-none;
    }
  }
}
</style>
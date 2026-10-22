<template>
  <div>
    <a-carousel arrows :dots="false" autoplay>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div>
        <img src="/img/电子书.png" alt="">
      </div>
      <div>
        <img src="/img/考试.png" alt="">
      </div>
      <div>
        <img src="/img/社区.png" alt="">
      </div>
      <div>
        <img src="/img/课程.png" alt="">
      </div>
    </a-carousel>
    <div class="nav-part latest">
      <div class="nav-part_title">
        <div>拼团</div>
      </div>
      <div class="nav-part_body">
        <course v-for="item in 9" :key="item" @handle-click="toDetail"></course>
      </div>
    </div>
    <div class="nav-part latest">
      <div class="nav-part_title">
        <div>最新列表</div>
        <div class="cursor-pointer">查看更多</div>
      </div>
      <div class="nav-part_body">
        <course v-for="item in 9" :key="item" @handle-click="toDetail"></course>
      </div>
    </div>
    <div class="nav-part recommend">
      <div class="nav-part_title">
        <div>推荐列表</div>
        <div class="cursor-pointer">查看更多</div>
      </div>
      <div class="nav-part_body">
        <course v-for="item in 8" :key="item"></course>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { CourseInfo } from '~/assets/types'
const toDetail = (courseInfo: CourseInfo) => {
  console.log(courseInfo)
}
</script>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 400px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  /* opacity: 0.5; */
}

:deep(.slick-slide img) {
  width: 100%;
  height: 100%;
}

.nav-part_title {
  @apply flex justify-between pt-30px pb-20px text-20px;
}

.nav-part_body {
  @apply grid grid-cols-4 gap-20px;
}
</style>

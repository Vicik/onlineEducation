<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <a-button type="text" class="!text-xl !font-bold !px-0 !py-0">编程网站</a-button>
      <div class="navbar-menu">
        <div class="navbar-menu-item" v-for="item in menus" :key="item.path"
          :class="{ 'navbar-item-active': route.path === item.path }" @click="handleOpen(item.path)">
          {{ item.name }}
        </div>
      </div>

      <a-button shape="circle" class="ml-auto mr-5" :icon="h(SearchOutlined)" />
      <!-- <a-button type="text" class="!bg-gray-100" @click="$router.push('/login')">登录</a-button> -->
      <a-dropdown placement="bottom">
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">用户中心</a-menu-item>
            <a-menu-item key="2">退出</a-menu-item>
          </a-menu>
        </template>
        <a-avatar style="background-color: #87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-dropdown>
    </div>
  </div>
  <div class="w-[100%] h-[80px]"></div>
</template>
<script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue';
const menus = [{
  name: '首页',
  path: '/'
}, {
  name: '考试',
  path: '/paper/1'
}, {
  name: '拼团',
  path: '/list/group/1'
}, {
  name: '秒杀',
  path: '/list/flashsale/1'
}, {
  name: '专栏',
  path: '/list/column/1'
}, {
  name: '社区',
  path: '/bbs/0/1'
}, {
  name: '课程',
  path: '/list/course/1'
}]
const route = useRoute()
const handleMenuClick = (e: any) => {
  if (e.key === '2') {
    console.log('退出登录')
  } else if (e.key === '1') {
    console.log('用户中心')
  }
}
const handleOpen = (path: string) => {
  if (route.path !== path) {
    navigateTo(path)
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}

.navbar-menu {
  @apply flex items-center px-4;
}

.navbar-menu-item {
  transition: all 0.2s;
  @apply px-2 py-1 mx-1 rounded hover:(bg-blue-50 text-blue-700) active:( !bg-blue-100) cursor-pointer;
}

.navbar-item-active {
  @apply !bg-blue-100 !text-blue-600;
}
</style>
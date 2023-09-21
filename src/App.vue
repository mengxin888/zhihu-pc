<template>
 <!-- 路由组件 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
body{
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  overflow: -moz-scrollbars-none; /* Firefox */
  background-color: #f6f6f6;
}
/* 隐藏滚动条并保持滚动功能 */
/* 隐藏滚动条并保持滚动功能 - Webkit (Chrome, Safari) */
::-webkit-scrollbar {
  display: none;
}
</style>



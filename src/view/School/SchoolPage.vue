<template>
    <Header :isschool="isschool"/>
    <SlideshowPageVue/>
    <SchoolListPage/>
</template>
<script setup>
import SchoolListPage from "./SchoolListPage.vue";
import Header from "@/components/HeaderPage.vue";
import SlideshowPageVue from "./SlideshowPage.vue";
import { onMounted,ref} from 'vue';
// 是否滚动
// 给body绑定滚动事件
let isschool = ref(true);
onMounted(() => {
    document.addEventListener("scroll", function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        if (scrollTop > 50) {
            isschool.value = false
            
        } else {
            isschool.value= true
        }
    });
})
</script>
<style scoped></style>
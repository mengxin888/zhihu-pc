<template>
   <div class="box">
      <div class="left">
         <div class="recommended">
            <SchoolBusinessCard maskcolor="#c6c6c6">
               <template v-slot:portraits>
                  <img src="../images/v2-db7bea67b6ac6eb59dcf0ed1bece0e21.png" alt="">
               </template>
               <template v-slot:mask>
                  <img src="../images/v2-33547f8379f7cc7f8186ba1db43b6e13.png" alt="">
               </template>
               <template v-slot:header-background>
                  <img src="../images/v2-4f2ef6feaa1f4f49ba372d43a4fbd2b4.png" alt="">
               </template>
               <template v-slot:texttitle>
                  名师全科讲解 百分尽在掌握
               </template>
               <template v-slot:textinfo>
                  报名免费赠模考
               </template>
            </SchoolBusinessCard>
            <SchoolBusinessCard maskcolor="#b6b9d1">
               <template v-slot:portraits>
                  <img src="../images/v2-2c2c3371633d48551a3547cf12d7fde6.png" alt="">
               </template>
               <template v-slot:mask>
                  <img src="../images/v2-962daac6c5c94e7b0d56ddddd594631a.jpg" alt="">
               </template>
               <template v-slot:header-background>
                  <img src="../images/v2-7473049d86428a001e9edc70853face9.png" alt="">
               </template>
               <template v-slot:texttitle>
                  北极光创投邓锋讲创业
               </template>
               <template v-slot:textinfo>
                  北极光X创业邦联合出品
               </template>
            </SchoolBusinessCard>
         </div>
         <div>
            <SchoolCoursePageVue :data="lists[0]"/>
            <SchoolCoursePageVue :data="lists[1]"  color="#ff5c01" background="linear-gradient(90deg,rgba(255,92,1,.1) .93%,rgba(255,92,1,.02))" />
         </div>
      </div>
      <div class="right">
         <SchoolRightPage/>
         <SchoolRightPage/>
         <SchoolRightListPage/>
         </div>
      </div>
</template>
<script  setup>
import SchoolRightPage from "../Components/SchoolRightPage.vue"
import lists from "@/DataFile/schoolcourse.json"
import SchoolBusinessCard from "../Components/SchoolBusinessCardPage.vue"
import SchoolCoursePageVue from "../Components/SchoolCoursePage.vue"
import SchoolRightListPage from "../Components/SchoolRightListPage.vue"
//import { ref,reactive,onMounted,computed,watch} from 'vue';
</script>
<style scoped lang="scss">
.box {
   display: flex;
   justify-content: space-between;
   
   .left {
      width: 844px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      .recommended{
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
   }
   .right{
      width: 285px;
   }
}</style>
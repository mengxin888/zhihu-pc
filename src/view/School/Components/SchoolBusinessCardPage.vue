<template>
   <div class=" f-school-box">
      <div class="portraits">
         <slot name="portraits">
         </slot>
      </div>
      <div class="mask" ref="mask">
         <slot name="mask">
         </slot>
      </div>
      <slot name="header-background">
      </slot>
      <div class="box-text">
         <div>
            <span class="text-title">
               <slot name="texttitle"></slot>
            </span>
            <span class="text-info">
               <slot name="textinfo">
               </slot>
            </span>
         </div>
      </div>
   </div>
</template>
<script setup>
import { defineProps,ref,onMounted } from 'vue';
const props = defineProps({
   maskcolor: {
      type: String,
      default: "rgb(255,255,255)"
   },
})
let mask = ref(null)
onMounted(() => {
   mask.value.style.background= props.maskcolor
})
//import { ref,reactive,onMounted,computed,watch} from 'vue';
</script>
<style lang="scss">
.f-school-box {
   margin-right:10px;
  margin-bottom: 20px;
   width: 410px;
   height: 215px;
   overflow: hidden;
   border-radius: 10px;
   position: relative;

   .portraits {
      width: 112px;
      height: 132px;
      position: absolute;
      bottom: 0;
      right: 20px;

      img {
         width: 100%;
         height: 100%;
         border-radius: 5px;
      }
   }

   .mask {
      height: 108px;
      width: 162px;
      position: absolute;
      top: 25px;
      left: 60px;
      border-radius: 5px;
      img {
         border-radius: 5px;
         width: 186px;
         height: 124px;
         position: absolute;
         top: -8px;
         left: -35px;
         &:hover{
            overflow: hidden;
            transform: scale(1.1);
            transition: all 0.5s;
         }
         
      }
   }

   img {
      width: 100%;
      height: 115px;
   }

   .box-text {
      width: 100%;
      height: 100px;
      background-color: #fff;

      // padding: 10px;
      div {
         position: absolute;
         bottom: 10px;
         left: 20px;

         .text-title {
            font-size: 16px;
            color: #333;
            font-weight: bold;
            display: block;
            margin-bottom: 10px;
         }

         .text-info {
            font-size: 14px;
            color: #999;
            display: block;
         }
      }

   }
}
</style>
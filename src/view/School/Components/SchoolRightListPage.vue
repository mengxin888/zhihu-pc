<template>
<div class="box">
    <ul>
        <li v-for="item in datas.list" :key="item.id">
            <img :src="require(`../../../../public/images/course/${item.img}`)" alt="">
            <div>
                <span class="title">{{ item.title }}</span>
                <span class="info">{{ item.username}} · {{ item.info }}</span>
            </div>
        </li>
    </ul>
</div>
</template>
<script setup>
import data from "../../../DataFile/schoolcourse.json"
import { onMounted,reactive } from "vue";
let datas = reactive(data[0])
//import { ref,reactive,onMounted,computed,watch} from 'vue';
onMounted(()=>{
    console.log(datas)
})
</script>
<style scoped lang='scss'>
.box{
    margin-top:20px;
    width: 100%;
    ul{
        list-style: none;
        li{
            height:60px;
            margin: 15px 0;
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img{
                width: 100px;
                height: 67px;
                border-radius:10px;
            }
            div{
                margin-left:8px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                .info{
                    font-size: 12px;
                    color: #999;
                }
                .title{
                    font-size: 14px;
                    color: #333;
                    // 2行后显示省略号
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                 &:hover{
                    color: #0062ff;
                    cursor: pointer;
                 }
                }
            }
        }
    }
}
</style>
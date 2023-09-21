<template>
    <div class="tabs">
        <div class="tabs-tab">
            <img src="./images/v2-2944f8969e76808256fa361721c726b7.png" alt="">
            <ul>
                <li @click="getsmalllisttab(0)"><router-link class="toroute"  to="/school/selected">精选</router-link></li>
                <li @click="getsmalllisttab(1)"><router-link  class="toroute" to="/school/examination">考试考证</router-link></li>
                <li @click="getsmalllisttab(2)"><router-link class="toroute"  to="/school/programming">编程</router-link></li>
                <li @click="getsmalllisttab(3)">职场办公</li>
                <li @click="getsmalllisttab(4)">语言学习</li>
                <li @click="getsmalllisttab(5)">兴趣技能</li>
                <li @click="getsmalllisttab(6)">通识</li>
            </ul>
            <span><el-icon>
                    <Iphone />
                </el-icon>下载知学堂App</span>
            <span><el-icon>
                    <OfficeBuilding />
                </el-icon>了解企业版</span>
        </div>
        <div class="color">
            <div class="tabs-small">
                <ul>
                    <li v-for="(item, index) in listarr.value" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="context">
        <router-view></router-view>
    </div>
</template>
<script setup>
import { getlist } from "@/unttion/scroll.js";
//import { ref,reactive,onMounted,computed,watch} from 'vue';
import { onMounted, reactive } from "vue";
let listarr = reactive([])
onMounted(() => {
    // getlist(1);
});
const getsmalllisttab = (index) => {
    listarr.value = [...listarr, ...getlist(index)];
};
</script>
<style scoped lang="scss">
.tabs {
    // 方向
    flex-direction: column;
    display: flex;
    // justify-content: center;
    align-items: center;

    .tabs-tab {
        //居中
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        line-height: 50px;
        background: #ffffff;

        img {
            width: 120px;
            height: 30px;
            margin-right: 10px;
        }

        ul {
            display: flex;
            justify-content: center;
            list-style: none;

            li {
                box-sizing: border-box;
                margin: 0 10px;
                height: 40px;
                width: 80px;
                list-style-type: none;
                display: flex;
                justify-content: center;
                align-items: center;

                border: 1px solid #ebebeb;
                background: #f6f6f6;
                // 小手
                cursor: pointer;

                &:hover {
                    color: #0062ff;
                    font-weight: 500;
                }
            }
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
        }
    }

    .color {

        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content:center ;

        .tabs-small {
            margin: 10px 0;
            width: 1100px;

            font-size: 14px;
            color: grey;

            ul {
                display: flex;
                justify-content:flex-start;
                list-style: none;

                li {
                    box-sizing: border-box;
                    list-style-type: none;
                    border: 1px solid #d3d3d3;
                    border-radius: 15px;
                    padding: 5px 15px;
                    margin: 0 10px;
                    // 小手
                    cursor: pointer;

                    &:hover {
                        color: #0062ff;
                        font-weight: 500;
                    }

                }
            }
        }
    }
}

.context {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
}

.router-link-active {
    // 去除abiaoqian默认样式
    text-decoration: none;
    color: inherit;
}
</style>
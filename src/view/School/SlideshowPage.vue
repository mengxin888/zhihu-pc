<template>
    <div class="demonstration">
        <div class="block text-center" m="t-4">
            <el-carousel trigger="click" height="438px">
                <el-carousel-item v-for="item in images" :key="item" ref="showbox" class="show-box">
                    <img class="show-img" :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="learn-info">
            <div class="info-header">
                <div><span>已学课程</span><span><span class="info-quantity">1</span>门</span></div>
                <div><span>已读内容</span><span><span class="info-quantity">2</span>篇</span></div>
            </div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="已购" name="1">
                    <div class="tabs-context">
                        <span>你还没有购买课程哦~</span>
                    <img src="../../../public/images/empty.sULYEYWK.png" alt="">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="最近学习" name="2">
                    <div class="tabs-context1">
                        <ul>
                            <li>
                                <img src="../../../public/images/media.46EU2RY4.png" alt="">
                                <div>
                                    <span class="title">人人 AI</span>
                                    <span class="results">公开课.已学一节.共35节</span>
                                </div>
                            </li>
                            <li>
                                <img src="../../../public/images/article.aU19wEcG.png" alt="">
                                <div>
                                    <span class="title">作为一个初级前端，面试的时候要</span>
                                    <span class="results">回答.已阅读</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <button class="info-btn">前往学习中心</button>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue"
let showbox = ref(null)
const activeName = ref('1')
const handleClick = (tab, event) => {
    console.log(tab, event)
}
let images = reactive([
    {
        url: require('../../../public/images/l1.jpg')
    },
    {
        url: require('../../../public/images/l2.jpg')
    },
    {
        url: require('../../../public/images/l3.jpg')
    },
    {
        url:require('../../../public/images/l4.jpg')
    },
    {
        url:require('../../../public/images/l5.jpg')
    }
])
onMounted(() => {

})
</script>
<style scoped lang="scss">
.demonstration {
    height: 438px;
    color: var(--el-text-color-secondary);
    position: relative;

    .text-center {
        width: 100%;
    }

    .learn-info {
        width: 280px;
        height: 312px;
        background: #fff;
        position: absolute;
        left: 1250px;
        top: 82px;
        z-index: 5;
        border-radius: 5px;
        padding: 12px;
        box-sizing: border-box;

        .info-header {
            display: flex;
            justify-content: space-between;
            height: 20%;

            div {
                border-radius: 5px;
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 5px;
                padding: 5px;
                background: #f9f9f9;

                span {
                    font-size: 12px;
                    color: #999;

                    &:last-child {
                        font-size: 18px;
                        color: #999;
                        font-weight: bold;
                    }
                }
            }

        }
        .info-btn{
            // 去除按钮默认样式
            border: none;
            outline: none;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 30px;
            border-radius:10px;
            color: #0062ff;
            background: rgba(0,98,255,.08);
        }
    }
}
.show-img {
    margin-top: 52px;
    width: 1440px;
    height: 386px;
}
.tabs-context{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:10px;

    span{
        font-size: 14px;
        color: #999;
    }
    img{
        width: 100px;
        height: 100px;
        margin-top: 20px;
    }
}
.tabs-context1{
ul{
    li{
        display: flex;
        align-items: center;
        width: 100%;
        height: 70px;
        img{
            width: 15px;
            height: 15px;
           
        }
        div{
            position: relative;
            top: 5px;
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            .title{
                font-size: 15px;
                color: #333;
            }
            .results{
                font-size: 12px;
                color: #999;
            }
            span{
                margin-top: 10px;
            }
        }
    }

}
}
.show-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    // 背景渐变方向
    $bcolor: (rgb(0, 79, 177),
        linear-gradient(to right, rgb(63, 95, 174) 20%, rgb(15, 34, 83) 80%, ),
        rgb(232, 237, 247),
        linear-gradient(to right, rgb(105, 146, 200) 20%, rgb(164, 192, 239) 80%, ),
        rgb(104, 203, 161));
    $i: 3;

    @each $color in $bcolor {
        &:nth-child(#{$i}) {
            background: $color;
        }

        $i: $i + 1;
    }
}
</style>
<style>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-tabs__item {
    padding: 0 5px;
}
.el-tabs__header{
    margin: 0;
}
</style>
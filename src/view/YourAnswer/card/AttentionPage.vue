<template>
    <div class="card-box">
        <div class="card-header">
            <span class="card-header-left"><el-icon>
                    <UserFilled />
                </el-icon><span>推荐关注</span></span>
        </div>
        <div class="card-list">
            <ul>
                <li v-for="(item,index) in 4 " :key="index">
                    <img src="./images/card-img-1.png" alt="" />
                    <div>
                        <span class="name">三月的北回归线</span>
                        <span class="tab">[综艺节目]领域答主</span>
                    </div>
                    <button class="btn">
                        <el-icon>
                            <Plus />
                        </el-icon>关注
                    </button>
                </li>
            </ul>
        </div>
        <div class="card-paging"><el-icon @click="reduce" class="el-icon"><ArrowLeftBold /></el-icon><span>{{count}}/3</span><el-icon @click="add" class="el-icon"><ArrowRightBold /></el-icon></div>
    </div>
</template>
<script setup>
//import { ref,reactive,onMounted,computed,watch} from 'vue';
import { ref} from 'vue';
let count = ref(1);
const add = () => {
    if(count.value < 3){
        count.value++;
    }
};
const reduce = () => {
    if(count.value > 1){
        count.value--;
    }
};
</script>
<style scoped lang="less">
.card-box {
    width: 100%;
    height: 300px;
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;

    .card-header {
        height: 30px;
        width: 100%;
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        .card-header-left {
            display: flex;
            align-items: center;
        }
    }
    .card-list{
        width: 100%;
        height: 200px;
        ul{
            width: 100%;
            height: 100%;
            li{
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                margin: 5px 0;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                div{
                    position: absolute;
                    left: 50px;
                    width: 150px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .name{
                        font-size: 14px;
                        // font-weight: bold;
                    }
                    .tab{
                        font-size: 12px;
                        color: #999;
                        margin-left:5px;
                    }
                }
                .btn{
                    width: 80px;
                    height: 30px;
                    border: none;
                    border-radius: 4px;
                    color: #0084ff;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    position: absolute;
                    right: 0;
                }
            }
        }
    }
    .card-paging{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span{
            margin: 0 10px;
        }
    .el-icon{
       &:hover{
        color: #0084ff;
       }
    }
    }
}
</style>

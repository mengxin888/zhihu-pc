<template>
    <div class="coursepagebox">
        <div>
            <div class="title"><span class="title-name"><el-icon size="17"><Monitor /></el-icon> <div>
                Python
            </div></span> <span class="title-open"><span>全部</span><el-icon size="13"><ArrowRight /></el-icon></span></div>
                <ul>
                    <li><span class="li-title">基础入门</span> <span class="li-info">8 门课程 · 55 篇内容</span></li>
                    <li><span class="li-title">进阶编程</span> <span class="li-info">2 门课程 · 37 篇内容</span></li>
                    <li><span class="li-title">高级编程</span> <span class="li-info">18 门课程 · 150 篇内容</span></li>
                </ul>
        </div>
    </div>
</template>
<script>
//import { ref,reactive,onMounted,computed,watch} from 'vue';
export default {
    setup() {
    }
}
</script>
<style scoped lang="scss">
.coursepagebox {
    width: 100%;
  background: linear-gradient(to right bottom, rgb(224, 233, 250), rgb(244, 247, 254));
  margin-top:20px;
  border-radius:10px;
  padding: 10px;
  box-sizing: border-box;
    .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 40px;
        align-items: center;
        font-size:14px;
        .title-name{
            display: flex;
            align-items: center;
            div{
                font-weight: 600;
                font-size: 17px;
                margin-left:5px;
            }
        }
        .title-open{
            display: flex;
            align-items: center;
        }
    }
    ul{
        width: 100%;
        border-radius: 10px;
        background-color: #ffffff;
        list-style: none;
        box-sizing: border-box;
        li{
            box-sizing: border-box;
            width: 100%;
            padding: 10px;
            border-radius:10px;
            list-style-type: none;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:hover{
                // 小手
                cursor: pointer;
                color:#0062ff ;
            }
            .li-title{
                font-size:14px;
            }
            .li-info{
                font-size:12px;
            }
        }
    }
}
</style>
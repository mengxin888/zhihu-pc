<template>
  <div class="card-box">
    <div class="card-header">
      <span class="card-header-left"
        ><el-icon><UserFilled /></el-icon>创作中心</span
      >
      <span class="card-header-right">草稿箱(0)</span>
    </div>
    <ul class="card-tabs">
      <li class="card-tabs-item">
        <el-icon class="card-tabs-item-icon"><DocumentRemove /></el-icon
        ><span>回答问题</span>
      </li>
      <li class="card-tabs-item">
        <el-icon class="card-tabs-item-icon"><VideoPlay /></el-icon
        ><span>发视频</span>
      </li>
      <li class="card-tabs-item">
        <el-icon class="card-tabs-item-icon"><DocumentCopy /></el-icon
        ><span>写文章</span>
      </li>
      <li class="card-tabs-item">
        <el-icon class="card-tabs-item-icon"><SetUp /></el-icon
        ><span>写想法</span>
      </li>
    </ul>
    <div class="card-content">
      <div class="card-content-box">
        <span>开启你的知乎创作之旅</span>
      <p>发布首篇内容,开通创作中心快来成为知乎创作者吧~</p>
      </div>
      <img src="./images/card-img-1.png" alt="">
    </div>
    <button class="card-btn">
      <el-icon><Plus /></el-icon>开始创作
    </button>
  </div>
</template> 
<script>
//import { ref,reactive,onMounted,computed,watch} from 'vue';
export default {
  setup() {},
};
</script>
<style scoped lang="scss">
.card-box {
  height: 310px;
  width: 100%;
  background-color: #fff;
  padding: 15px;
  // 转换为盒模型
  box-sizing: border-box;
  margin-bottom: 10px;
  .card-header {
    height: 30px;
    width: 100%;
    // 行高
    line-height: 30px;
    display: flex;
    // 两端对齐
    justify-content: space-between;
    .card-header-left {
      display: flex;
      align-items: center;
    }
    .card-header-right {
      color: #0084ff;
      font-size: 14px;
    }
  }
  .card-tabs {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .card-tabs-item {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @for $i from 1 through 4 {
          &:nth-child(#{$i}) {
            .card-tabs-item-icon {
        $random-color:random-color();
        font-size: 25px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba($random-color, 0.2);
        color: $random-color;
      }
          }
        }
      span {
        margin-top: 10px;
        font-size: 14px;
      }
      
      // 函数
    }
  }
  .card-content{
    width: 100%;
    height: 100px;
    padding: 15px;
    // 转换为盒模型
    box-sizing: border-box;
    background-color:#f9f9f9 ;
    border-radius:5px;
    display: flex;
    justify-content: space-between;
    img{
      width: 50px;
      height: 50px;
      position: relative;
      top: 10px;
      left: -10px;
    }
    .card-content-box{
    width: 65%;
    height: 100%;
    span{
      margin: 5px 0;
      display: block;
      // 粗细
      font-weight: 500;
      font-size: 15px;
    }
    p{
      font-size: 13px;
      color: #999;
    }
    }
    }
    .card-btn{
      width: 100%;
      height: 40px;
      margin-top: 10px;
      border: 1px solid #0084ff;
      outline: none;
      background-color: #fff;
      color: #0084ff;
      border-radius: 5px;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      el-icon{
        margin-right: 5px;
      }
    }
  }
</style>
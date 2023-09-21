<template>
  <div class="view">
    <div class="content">
      <div class="tabs">
        <ul>
          <li id="selected">
            <el-icon class="icon" size="14" color="#8590a6"
              ><StarFilled
            /></el-icon>
            为你推荐
          </li>
          <li>
            <el-icon class="icon" size="14" color="#8590a6"><Avatar /></el-icon>
            邀请回答
          </li>
          <li>
            <svg
              class="icon"
              width="14px"
              height="14px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M537.3 954.2c-7.8 3.9-15.6 5.8-25.3 5.8-9.7 0-17.5-1.9-25.3-5.8-91.5-44.8-364.2-206.5-364.2-399.3V188.7c0-25.3 15.6-46.8 37-54.5C272.4 89.3 379.5 64 512 64s239.6 25.3 352.6 70.1c21.4 7.8 37 29.2 37 54.5v366.2c0 192.9-272.7 354.6-364.3 399.4z"
              />
            </svg>
            最新问题
          </li>
          <li>
            <svg
              class="icon"
              width="14px"
              height="14px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M926.994934 588.255319a411.6231 411.6231 0 0 0-29.049645-134.095238 365.195542 365.195542 0 0 1-18.674772-39.165147 410.326241 410.326241 0 0 1-18.674772-250.29382c1.556231-6.224924 3.112462-12.190476 4.928065-18.4154-6.224924 4.928065-11.931104 10.115502-17.377913 15.302938a259.371834 259.371834 0 0 0-72.364742 126.054712 270.524823 270.524823 0 0 0-4.409321 30.605876 118.532928 118.532928 0 0 1-1.296859 13.487335 285.309017 285.309017 0 0 1-186.228977 233.434651A389.057751 389.057751 0 0 0 667.6231 323.696049a395.801418 395.801418 0 0 0-14.524822-103.748734 417.069909 417.069909 0 0 0-13.746708-40.721378 389.057751 389.057751 0 0 0-84.814589-129.685917A419.144883 419.144883 0 0 0 512 13.746707c-5.187437-4.668693-11.152989-9.337386-17.637285-13.746707 0 4.149949 2.074975 8.559271 3.371834 12.968592a399.173252 399.173252 0 0 1 11.931104 61.211752A373.236069 373.236069 0 0 1 512 116.198582a406.695035 406.695035 0 0 1-7.781155 77.81155 392.429585 392.429585 0 0 1-49.54002 124.49848c-4.928065 7.781155-9.85613 15.302938-15.043567 22.824721a392.170213 392.170213 0 0 1-106.861195 102.192503A376.607903 376.607903 0 0 1 330.439716 401.507599a385.426545 385.426545 0 0 0-29.827761-149.138805 391.392097 391.392097 0 0 0-59.914893-99.598784c-5.187437-5.965552-10.634245-11.671733-15.821682-17.377913 1.815603 12.449848 1.815603 25.159068 1.815603 37.868288v6.743668a379.720365 379.720365 0 0 1-25.937184 129.685917 379.979737 379.979737 0 0 1-29.309017 61.211752 266.115502 266.115502 0 0 1-15.821682 24.640325A422.516717 422.516717 0 0 0 97.005066 609.005066a429.260385 429.260385 0 0 0 4.928065 60.952381A414.994934 414.994934 0 0 0 512 1024a414.994934 414.994934 0 0 0 414.994934-414.994934v-20.749747z"
              />
            </svg>
            人气问题
          </li>
        </ul>
      </div>
      <div class="content-lists">
        <div class="list" v-for="(item,index) in list" :key="index">
          <div class="list-tips">
            <span>试试帮他/她解答吧</span>
            <button><el-icon size="20"><Close /></el-icon></button>
          </div>
          <div class="list-context">
            <p>有蛀牙，但没有钱补，想赚钱补却没有成年，怎么办？</p>
            <button>
              <el-icon><EditPen /></el-icon>写回答
            </button>
          </div>
          <div class="list-info">
            2,704 浏览 · 7 回答 · 10 关注 · 25 天前的提问
          </div>
        </div>
      </div>
    </div>
    <div class="card" ref="card">
      <CreativeCentreCard />
      <AttentionPage />
      <TabsPage />
      <CentrePage />
    </div>
  </div>
</template>
<script setup>
import CentrePage from "./card/CentrePage.vue";
import TabsPage from "./card/TabsPage.vue";
import AttentionPage from "./card/AttentionPage.vue";
import CreativeCentreCard from "./card/CreativeCentreCard.vue";
// 引入计算属性
import { setupCardScroll } from "@/unttion/scroll.js";
import { ref, onMounted } from "vue";
// 引入数据 getUserInfoById根据id获取用户信息 getUserInfos获取所有用户信息 getFullTextById根据id获取全文
let list = ref(20);
let card = ref(null);
// 添加动态数据

// 展开收起方法 type为true展开 type为false收起

// 第二个参数是字数，默认5000字
// 第一个是要操作的dom的父元素（默认第一个节点）
onMounted(() => {
  // 滚动联动
  setupCardScroll(card);
});
</script>
<style scoped lang="scss">
// 加权重
#selected {
  color: #056de8;
  background: rgba(5, 109, 232, 0.08);
}
.view {
  position: relative;
  top: 50px;
  margin: 0 auto;
  display: flex;
  // justify-content: center;
  width: 54%;
  height: 100%;
  min-width: 710px;
  background-color: #f6f6f6;
}

.content {
  margin: 10px 0;
  width: 69%;
  background-color: #ffffff;
  margin-bottom: 50px;

  .tabs {
    // 去除ul默认样式
    color: black;
    border-bottom: 1px solid #f0f2f7;

    ul {
      list-style: none;
      width: 100%;
      height: 60px;
      display: flex;
      li {
        margin: auto 20px;
        background: #f0f2f4;
        padding: 5px 10px;
        border-radius: 16px;
        display: inline-flex;
        align-items: center;
        // 方向
        flex-direction: row;
        font-size: 15px;
        color: #8590a6;
        .icon {
          color: inherit;
          fill: currentColor;
        }
        &:hover {
          color: #056de8;
          background: rgba(5, 109, 232, 0.08);
        }
      }
    }
  }
}

.card {
  position: fixed;
  top: 50px;
  left: 60.1%;
  height: calc($height - 50px);
  margin-left: 10px;
  margin-top: 10px;
  width: 16.2%;
  min-width: 300px;
  overflow: hidden;
}

.content-lists {
  width: 100%;
  display: inline-block;
  padding:0 20px;
  box-sizing: border-box;
  .list {
   padding: 20px 0;
   border-bottom:1px solid #f0f2f7 ;
   &:hover{
    .list-tips>button{
      display: block;
    }
   }
    .list-tips {
      display: flex;
      justify-content: space-between;
      height: 20px;
      span {
        color: #8590a6;
        font-size: 14px;
      }
      button {
        // 去除默认样式
        border: none;
        background: none;
        color: #8590a6;
        font-size: 14px;
        display: none;
      }
    }
    .list-context {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      p {
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
      }
      button {
        border: none;
        background: #056de8;
        color: #ffffff;
        font-size: 14px;
        border-radius:3px;
        padding: 5px 10px;
      }
    }
    .list-info{
      color: #8590a6;
      font-size: 14px;
    }
  }
}
</style>























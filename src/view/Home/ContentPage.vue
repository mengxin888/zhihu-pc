<template>
  <div class="view">
    <div class="content">
      <div class="tabs">
        <ul>
          <li>关注</li>
          <li>推荐</li>
          <li>热榜</li>
          <li>视频</li>
        </ul>
      </div>
      <div class="content-lists">
        <div class="list" v-for="item in user" :key="item.id">
          <h3>{{ item.title }}</h3>
          <div class="user">
            <div class="avatar">
              <img :src="item.img" alt="头像" />
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="tab">{{ item.tab }}</div>
          </div>
          <div class="text">
            <p>
              {{ item.text }}
              <span class="read-more-btn" @click="readmore(item.id, 1)" v-show="item.isdisplay">阅读全文</span>
            </p>
            <span class="read-more-btn" @click="readmore(item.id, 0)" v-show="!item.isdisplay">收起</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card" ref="card">
      <CreativeCentreCard/>
      <AttentionPage/>
      <TabsPage/>
      <CentrePage/>
      </div>
    </div>
</template>
<script setup>
import CentrePage from "./card/CentrePage.vue";
import TabsPage from "./card/TabsPage.vue";
import AttentionPage from "./card/AttentionPage.vue"
import CreativeCentreCard from './card/CreativeCentreCard.vue';
// 引入计算属性
import { setupCardScroll, curtext } from "@/unttion/scroll.js";
import { ref, onMounted, reactive } from "vue";
// 引入数据 getUserInfoById根据id获取用户信息 getUserInfos获取所有用户信息 getFullTextById根据id获取全文
const { getUserInfoById, getUserInfos, getFullTextById } = curtext();
let card = ref(null);
// 添加动态数据
let user = reactive(getUserInfos());
// 展开收起方法 type为true展开 type为false收起
const readmore = (id, type) => {
  if (type) {
    Array.from(user).forEach((item) => {
      if (item.id == id) {
        item.text = getFullTextById(id);
        item.isdisplay = false;
      }
    });
  } else {
    Array.from(user).forEach((item) => {
      if (item.id == id) {
        item.text = getUserInfoById(id);
        item.isdisplay = true;
      }
    });
  }
};
// 第二个参数是字数，默认5000字
// 第一个是要操作的dom的父元素（默认第一个节点）
onMounted(() => {
  // 滚动联动
  setupCardScroll(card);
});
</script>
<style scoped lang="scss">
.view {
  position: relative;
  top: 50px;
  margin: 0 auto;
  display: flex;
  // justify-content: center;
  width: 54%;
  height: 100%;
  min-width:710px;
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
    border-bottom: 1px solid #ccc;

    ul {
      list-style: none;
      width: 100%;
      height: 60px;

      li {
        height: 100%;
        display: inline-flex;
        margin: 0 20px;
        align-items: center;
        // 方向
        flex-direction: row;
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

  .list {
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;

    .user {
      display: flex;
      align-items: center;
      margin: 3px 0;

      .avatar {
        width: 20px;
        height: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        margin-left: 15px;
      }

      .tab {
        margin-left: 3px;
        padding: 2px 5px;
        font-size: 14px;
        // 灰色
        color: #999;
      }
    }

    .text {
      // 行高
      line-height: 1.5;
      // 字间距
      letter-spacing: 1px;
      // 字体大小
      font-size: 14px;

      .read-more-btn {
        display: inline-block;
        width: 100px;
        //蓝色
        color: #00a1d6;
      }
    }
  }
}
</style>























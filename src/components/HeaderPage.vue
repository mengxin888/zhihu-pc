<template>
    <div  class="top" :class="{school:isschool}">
      <div class="header">
        <icon class="icon" :isschool="props.isschool"/>
        <ul ref="tabs">
          <li><router-link to="/home" exact-active-class="underline">首页</router-link></li>
          <li><router-link to="/school" exact-active-class="underline">知学堂</router-link></li>
          <li><router-link to="/found" exact-active-class="underline">发现</router-link></li>
          <li>
            <router-link to="/youranswer" exact-active-class="underline">等你来答</router-link></li>
        </ul>
        <div class="search">
          <input type="text" class="input" ref="input" v-model="message"  placeholder="等你来问答！"/>
          <el-icon size="15  " color="bleak" class="Searchicon"
            ><Search
          /></el-icon>
        </div>
        <el-button type="primary" round v-show="isbtn">提问</el-button>
        <div class="user">
          <div class="user-message">
            <el-icon :size="isschool?30:20" class="user-icon"><Bell /></el-icon><span>消息</span>
          </div>
          <div class="user-message">
            <el-icon :size="isschool?30:20" class="user-icon"><Comment /></el-icon><span>私信</span>
          </div>
          <img src="../../public/images/v2-c7af17dc7f4ae9f17528a3316765fdb2_l.jpg" alt="" />
        </div>
      </div>
    </div>
  </template>
  <script setup >
   import { ref, onMounted,defineProps} from "vue";
  import icon from "@/components/iconPage.vue";
  const props=defineProps({
    isschool:{
      type:Boolean,
      default:false,
      require:false
    }
  })
  let isbtn = ref(true);
  let input = ref(null);
  let message = ref("");
  
  const inputwidth = (e) => {
    e.value.addEventListener("focus", function () {
      let parent = e.value.parentNode;
      parent.style.width = 45 + "%";
      isbtn.value = false;
      // 获取兄弟元素
      e.value.nextElementSibling.style.color = "#247feb";
    });
    e.value.addEventListener("blur", function () {
      if (message.value == "") {
        let parent = e.value.parentNode;
        parent.style.width = 40 + "%";
        isbtn.value = true;
        e.value.nextElementSibling.style.color = "#a2aaba";
      }
    });
  };
  onMounted(() => {
    if(!props.isschool){
      inputwidth(input);
    }
  });
  </script>
  <style scoped lang="scss">
  .top {
    
    // 超出隐藏
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 50px;
    width: 100%;
    // background-color:red;
    border: 1px solid #ccc;
    background-color: #ffffff;
    .header {
      height: 100%;
      width: 50%;
      min-width: 1000px;
      position: relative;
      margin: 0 auto;
      .icon {
        
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
      }
      ul {
        // 去除默认样式
        list-style: none;
        display: inline-block;
        margin: 0 30px;
        color: #8590a6;
        li {
          height: 50px;
          display: inline-block;
          line-height: 50px;
          margin: 0 10px;
          &:hover {
            color: black;
          }
          a {
            // 去除默认样式
            text-decoration: none;
            color: inherit;
          }
        }
      }
      .search {
        width: 40%;
        height: 35px;
        margin: 0 10px;
        display: inline-block;
        position: relative;
        .input {
          font-size: 15px;
          caret-color: red;
          display: inline-block;
          width: calc(100% - 30px);
          padding: 0 15px;
          height: 100%;
          border: none;
          background-color: #f6f6f6;
          border-radius: 20px;
          &:focus {
            outline: none;
            border: 1px solid #abb3c2;
            background-color: #ffffff;
          }
        }
        .Searchicon {
          display: inline;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
      .user {
        display: inline-flex;
        margin-left: 50px;
        width: 130px;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        .user-message {
          font-size: 12px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin: 0 10px;
        }
        img {
          width: 30px;
          height: 30px;
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
  .underline {
    padding-bottom:10px;
    border-bottom: 5px solid #0084ff;
    // 边框计算到盒子内
    box-sizing: border-box;
    color: black;
  }
  .school{
   color: #ffffff;
   border: none;
   background: none;
   .header{
    ul{
      color: #ffffff;
      li{
        &:hover{
        color: #ffffff;
      }
      }
    }
    .user{
      .user-message{
        
        span{
          display:none;
        }
      }
    }
   }
  }
  </style>
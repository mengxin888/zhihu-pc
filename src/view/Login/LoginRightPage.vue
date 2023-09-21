<template>
  <div class="box-right-centext">
    <div class="centext-top">
      <div :class="{ switch: switch1 }" @click="switchfrom">验证码登录</div>
      <div :class="{ switch: !switch1 }" @click="switchfrom">密码登录</div>
    </div>
    <div class="centext-form">
      <div class="form-1" :class="{'switch-form':!switch1}">
        <form action="">
          <div class="phone">
            <select v-model="userphone" class="phone-areacode">
              <option
                :value="item.enUs"
                v-for="(item, index) in phone"
                :key="index"
              >
                {{ item.zhCn }} {{ item.phoneCode }}
              </option>
            </select>
            <input
              type="text"
              class="phone-cellphonenumber"
              placeholder="电话号码"
              maxlength="11"
            />
          </div>
          <div class="verificationcode">
            <input type="text" placeholder="验证码" maxlength="6"/>
            <span>获取短信验证码</span>
          </div>
          <span class="voice-verificationcode">获取语音验证码</span>
          <button type="button" @click="login">登录/注册</button>
        </form>
      </div>
      <div class="form-2" :class="{'switch-form':switch1}">
        <form action="">
          <input type="text" placeholder="手机号或邮箱" maxlength="20"/>
          <div class="form-2-password">
            <input type="password" placeholder="密码" maxlength="20" />
            <el-icon class="form-2-icon" size="20" v-show="isviwe" @click="setisviwe"><View /></el-icon>
            <el-icon class="form-2-icon" size="20" v-show="!isviwe" @click="setisviwe"><Hide /></el-icon>
          </div>
          <div class="form-2-other">
            <span class="form-2-overseas">海外手机号登陆</span>
            <span class="form-2-forget">忘记密码</span>
          </div>
          <button type="button" @click="login">登录</button>
        </form>
      </div>
    </div>
   <div class="otherlogins">
    <div class="otherlogins-title">其他方式登录</div>
      <ul>
        <li>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ZDI ZDI--Wechat24"><path fill="#07C160" d="M20.314 18.59c1.333-.968 2.186-2.397 2.186-3.986 0-2.91-2.833-5.27-6.325-5.27-3.494 0-6.325 2.36-6.325 5.27 0 2.911 2.831 5.271 6.325 5.271.698.001 1.393-.096 2.064-.288l.186-.029c.122 0 .232.038.336.097l1.386.8.12.04a.21.21 0 0 0 .212-.211l-.034-.154-.285-1.063-.023-.135a.42.42 0 0 1 .177-.343ZM9.09 3.513C4.9 3.514 1.5 6.346 1.5 9.84c0 1.905 1.022 3.622 2.622 4.781a.505.505 0 0 1 .213.412l-.026.16-.343 1.276-.04.185c0 .14.113.254.252.254l.146-.047 1.663-.96a.793.793 0 0 1 .403-.116l.222.032c.806.231 1.64.348 2.478.348l.417-.01a4.888 4.888 0 0 1-.255-1.55c0-3.186 3.1-5.77 6.923-5.77l.411.011c-.57-3.02-3.71-5.332-7.494-5.332Zm4.976 10.248a.843.843 0 1 1 0-1.685.843.843 0 0 1 0 1.684v.001Zm4.217 0a.843.843 0 1 1 0-1.685.843.843 0 0 1 0 1.684v.001ZM6.561 8.827a1.012 1.012 0 1 1 0-2.023 1.012 1.012 0 0 1 0 2.023Zm5.061 0a1.012 1.012 0 1 1 0-2.023 1.012 1.012 0 0 1 0 2.023Z" clip-rule="evenodd"></path></svg>
        </li>
        <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#50C8FD" class="ZDI ZDI--Qq24"><path fill-rule="evenodd" d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.483 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.288.687 6.288 0 0-.688-1.77-1.182-1.77-1.182 2.086-1.77 1.906-3.967 1.906-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.165-6.954-2.165-6.954V9.325C18.29 3.364 14.268 2 12.003 2Z" clip-rule="evenodd"></path></svg>
        </li>
        <li>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ZDI ZDI--Weibo24"><path fill="#FB6622" d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.44-1.673.31-1.673.31.596-7.52-5.692-6.33-5.692-6.33-.898-1.067-.03-1.71-.03-1.71Zm4.13 6.985c-.66 1.01-1.376.126-1.375.126.205-3.179-2.396-2.598-2.396-2.598-.72-.765-.091-1.346-.091-1.346 4.882-.55 3.863 3.818 3.863 3.818ZM5.318 7.52s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.16 0 0 .848 1.094-.191 2.648 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33Zm10.448 7.792s.232-4.41-5.71-4.207c-6.652.231-6.58 4.654-6.58 4.654.022.39.098 3.713 5.843 3.713 5.98 0 6.447-4.16 6.447-4.16Zm-9.882.86s-.06-3.632 3.804-3.56c3.412.06 3.206 3.164 3.206 3.164s-.026 2.98-3.684 2.98c-3.288 0-3.326-2.584-3.326-2.584Zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.55-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998Z" clip-rule="evenodd"></path></svg>
        </li>
      </ul>
   </div>
    <span class="context-tips">
      未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》
    </span>
  </div>
</template>
<script setup>
import phonedata from "@/DataFile/phone.json";
import { useRouter} from "vue-router";
import { ref, onMounted, reactive } from "vue";
let phone = reactive(phonedata);
let switch1 = ref(true);
let userphone = ref("China");
let isviwe = ref(false);
const switchfrom = () => {
  switch1.value = !switch1.value;
};
const setisviwe = () => {
  isviwe.value = !isviwe.value;
  if(isviwe.value){
    document.querySelector(".form-2-password input").type="text"
    }else{
      document.querySelector(".form-2-password input").type="password"
    }
};
// 初始化userRouter  用于跳转 
const router=useRouter()
const login = () => {
  router.push('/home');
};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.box-right-centext {
    padding: 0px 20px;
  font-size: 14px;
  .centext-top {
    display: flex;
    div {
      margin: 15px 20px 15px 0;
      text-align: center;
      padding: 10px 0;
      font-weight: 500;
      cursor: pointer;
      color: #444;
    }
  }
  .centext-form {
    height:220px;
    font-size: 12px;
    .form-1 {
      form {
        display: flex;
        flex-direction: column;
        .phone {
          border-bottom: 1px solid #ccc;
          display: flex;
          .phone-areacode {
            width: 100px;
            height: 25px;
            border: none;
            margin:10px 0 5px 0;
            color: #444;
            &:focus {
              outline: none;
              border: none;
            }
          }
          .phone-cellphonenumber {
            margin: 10px 0 10px 10px;
            width: calc(100% - 100px);
            padding: 0 0 0 10px;
            border-left: 1px solid #ccc;
          }
        }
        .verificationcode {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          input {
            margin: 10px 0 10px 0;
            padding: 0 0 0 10px;
          }
          span {
            margin: 10px 0 10px 0;
            color: #056de8;
            cursor: pointer;
            &:hover {
              color: #76839b;
            }
          }
        }
        .voice-verificationcode {
          cursor: pointer;
          margin: 5px 0;
          display: flex;
          // 靠右
          justify-content: flex-end;
          &:hover {
            color: #808080;
        }
        }
      }
    }
    .form-2 {
      form{
        display: flex;
        flex-direction: column;
        input {
        width: 100%;
        padding: 10px 0 5px 0;
        border-bottom: 1px solid #ccc;
      }
      .form-2-password {
        position: relative;
        .form-2-icon {
        
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
          cursor: pointer;
          color: #999999;
        }
      }
      .form-2-other {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        .form-2-overseas {
          color: #056de8;
          cursor: pointer;
          &:hover {
            color: #a283b5;
          }
        }
        .form-2-forget {
          color: #999999;
          cursor: pointer;
          &:hover {
            color: #a283b5;
          }
        }
      }
      }
    }
  }
  .otherlogins{
        display: flex;
        flex-direction: column;
        align-items: center;
        .otherlogins-title{
            color: #999999;
            margin: 15px 0;
            width: 100%;
            &::before{
                content: "";
                display: inline-block;
                width:calc((100% - 110px)/2);
                height: 1px;
                background-color: #ebebeb;
                margin-right: 10px;
                vertical-align: middle;
            }
            &::after{
                content: "";
                display: inline-block;
                width: calc((100% - 110px)/2);
                height: 1px;
                background-color: #ebebeb;
                margin-left: 10px;
                vertical-align: middle;
            }
        }
        ul{
            display: flex;
            list-style: none;
            justify-content: center;
            li{
                list-style-type: none;
                margin:20px;
            }
        }
    }
    .context-tips{
        display: block;
        margin: 10px 0;
        font-size: 12px;
        color: #999999;
    }
}
input {
  height: 25px;
  border: none;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border: none;
  }
}
button {
  margin: 30px auto;
  width:100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #056de8;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0461cf;
  }
}
.switch {
  font-weight: 700 !important;
  border-bottom: 3px solid #056de8;
}
.switch-form{
    display: none;
}
</style>
<template>
  <div class="box">
    <div class="center-box">
      <img
        class="box-logo"
        src="./images/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png"
        alt=""
      />
      <div class="login-box">
        <div class="box-left">
          <h4>打开知乎App</h4>
          <p>在「我的页」左上角打开扫一扫</p>
          <div id="QRcode" ref="QRcode1"></div>
          <span>其他扫码方式：微信</span>
          <ul>
            <li>下载知乎App</li>
            <li>开通机构号</li>
            <li>无障碍模式</li>
          </ul>
        </div>
        <div class="box-right">
          <LoginRight/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginRight from "./LoginRightPage.vue";
import QRCode from 'qrcode-generator';
import { reactive ,onMounted,ref} from "vue";
let QRCode1=ref();
let data = reactive({
  qrText: "https://www.zhihu.com",
  qrWidth: 128,
  qrHeight: 128,
  qrElementId: "QRcode", // 这是要显示QR码的HTML元素的ID
});
const generateQRCode=()=>{
      const qr = QRCode(0, 'M'); // 创建QRCode实例，0表示自动检测版本，'M'表示错误纠正级别
      qr.addData(data.qrText);
      qr.make();

      // 获取QR码的SVG字符串
      const svgString = qr.createSvgTag({
        cellSize: data.qrWidth / qr.getModuleCount(),
        margin: 0,
        scalable: true,
      });

      // 将SVG字符串插入到指定的HTML元素中
      document.getElementById(data.qrElementId).innerHTML = svgString;
    }
onMounted(()=>{
  console.log(QRCode1);
  generateQRCode();
  
console.log(document.getElementById("QRcode").children[0].children[0]);
})
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-image: url("./images/sign_bg.47eec442.png");
  background-color: #b8e5f8;
  display: flex;
  //   方向
  flex-direction: column;
  .center-box {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box-logo {
      margin-top: 90px;
      width: 128px;
      height: 81px;
    }
    .login-box {
      margin: 20px 0;
      display: flex;
      background: #ffffff;
      .box-left {
        position: relative;
        width: 332px;
        height: 500px;
        border-right: 1px solid #ebebeb;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h4 {
          margin: 10px 0;
        }
        p {
          font-size: 14px;
          font-weight: 400;
        }
        #QRcode {
          width: 130px;
          height: 130px;
          margin: 30px 0;
        }
        span {
          font-size: 14px;
          font-weight: 550;
        }
        ul {
          position: absolute;
          bottom: 20px;
          display: flex;
          list-style: none;
          li {
            margin: 0 10px;
            list-style-type: none;
            font-size: 13px;
            border: 1px solid #ececec;
            border-radius: 20px;
            padding: 5px 8px;
          }
        }
      }
      .box-right {
        width: 400px;
        height: 500px;
      }
    }
  }
}
#QRcode>svg{
  fill: #FF0000; /* 修改填充颜色，这里使用红色 (#FF0000) 作为示例 */
        stroke: none; /* 去除边框颜色 */
  }
</style>
<template>
  <div class="card2-box">
    <img src="../images/v2-71f844d658df1e8cfb5c32796968d0b9_hd.png" alt="" />
    <div class="context">
      <div class="left">
        <h2>2023 年「云上读书季」网络阅读活动</h2>
        <span>6 小时前更新25,852,745 浏览</span>
      </div>
      <div class="right">
        <button>关注问题</button>
      </div>
    </div>
    <div class="floot">
      <ul>
        <li>
          
          <p><span>探索未知世界</span>世界十大科幻小说</p>
        </li>
        <li>
          
          <p><span>感悟人生智慧</span>为什么说四大名著是中国人一生必读的经典？</p>
        </li>
        <li>
          
          <p><span>持续自我成长</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.card2-box {
    margin-bottom:20px;
  width: 490px;
  height: auto;
  background: #fff;
  img {
    height: 200px;
    width: 100%;
  }
  .context {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    background: #fff;
    padding: 20px;
    position: relative;
    border-bottom:1px solid #f6f6f6;
    .left {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 18px;
        font-weight: 500;
        color: #1a1a1a;
      }
      span {
        font-size: 12px;
        color: #8590a6;
      }
    }
    button {
        position: absolute;
        right: 20px;
        bottom: 20px;

      width: 100px;
      height: 30px;
      background: #fff;
      border: 1px solid #8590a6;
      border-radius: 3px;
      color: #8590a6;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      outline: none;
    }
    
  }
  .floot {
    padding: 20px;
      width: 100%;
      height: 100px;
      ul {
        list-style: none;
        width: 100%;
        height: 100%;
        li {
            list-style-type: none;
            margin: 15px 0;
          p {
            font-size: 14px;
            color: #1a1a1a;
            span {
            font-size: 12px;
            color: #8590a6;
            border-radius:3px;
            background:rgb(246, 246, 246) ;
            padding: 3px 5px;
            margin-right:10px;
          }
          }
        }
      }
    }
}
</style>
<template>
  <div class="found-card4">
    <div class="top">
      <div class="top-title">
        <h3>01-个人成长</h3>
        <button>关注收藏夹</button>
      </div>
      <div class="top-user">
        <img src="../images/b746b6bede4e35cf54f21c77a95ee409_l.jpg" alt="" />
        <span>1983创建 | 22,756 人关注</span>
      </div>
    </div>
    <div class="constext-list">
      <ul>
        <li>
          <div class="problem">光刻厂是绕开了光刻机什么难点？</div>
          <div class="answer">最值得称道的，是天朝永不服输的探索精神。欧美的汽油车很牛是吧？老子搞电动汽车，直接超越你。欧美的光刻机很牛是吧？老子建个光刻厂，直接骑你脸。这种弯道超车的全面发散思维，加上不甘人后的钻劲干劲，是西方最惧怕的。
          </div>
          <div class="info">
            <span>回答</span>581 赞同28 评论
          </div>
        </li>
        <li>
            <div class="problem">如何把团队带散？</div>
          <div class="answer">1938年10月14日，毛泽东谈了如何把团队带好。你反着来，肯定能把团队带散。

          </div>
          <div class="info">
            <span>回答</span>17,000 赞同 451 评论
          </div>
        </li>
      </ul>
      <button>已收藏2，159条内容 ></button>
    </div>
  </div>
</template>

<script setup>
</script>


<style scoped lang="scss">
.found-card4{
  margin-bottom:20px;
    width:490px;
    height: auto;
    padding: 20px;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
    border-radius:5px;
    .top{
        height: 80px;
        border-bottom:1px solid #ebebeb ;
        .top-title{
            display: flex;
            justify-content: space-between;
            h3{
                height: 35px;
                line-height: 35px;
            }
            button{
                // 去除默认样式
                background: #ebf4fd;
                border: none;
                color:#056de8;
                padding: 8px 15px;
                border-radius:3px;
            }
        }
        .top-user{
            display: flex;
            align-items: center;
            height: 25px;
            margin:5px 0 ;
            img{
               height: 100%;
                width: 25px;
            }
            span{
                height: 100%;
                line-height: 25px;
                font-size: 14px;
                color:#999;
                font-weight: 400;
                margin-left:4px;
            }
        }
    }
    .constext-list{
        ul{
            list-style: none;
            li{
                list-style-type: none;     
                margin: 20px 0;     
                .problem{
                    font-weight:600;
                    font-size:15px;
                } 
                .answer{
                    // 只显示一行
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color:#333;
                    margin: 5px 0;
                    font-weight: 200px;
                }
                .info{
                  color:#999;
                  font-size:12px;
                  span{
                   
                    margin-right: 10px;
                    background: #f6f6f6;
                    border-radius:3px;
                    padding:2px;
                  }
                }
            
            }
        }
        button{
            border: none;
            color:#999;
            background: inherit;
            font-size: 15px;
            font-weight:600;
        }
    }
}
</style>
<template>
    <div class="context">
            <h3>近期热点</h3>
            <ul>
              <li>
                <span class="text"
                  ><i>1</i
                  >李佳琪怼网友买不起花西子眉笔是因为不好好工作，工资不涨，是自己的原因。你怎么看？</span
                >
                <span class="tabs">768万浏览·3126关注·2078回答</span>
              </li>
              <li>
                <span class="text"
                  ><i>2</i>如何看待2023年9月8日，周淑怡确认与 PG One
                  正在交往中？</span
                >
                <span class="tabs">1810 万浏览 · 2083 关注 · 1307 回答</span>
              </li>
              <li>
                <span class="text"
                  ><i>3</i>如何看待 Lisa 受邀出席法国疯马秀表演 ?</span
                >
                <span class="tabs">3043 万浏览 · 3366 关注 · 1836 回答</span>
              </li>
              <li>
                <span class="text"><i>4</i>如何看待Lisa疯马秀?</span>
                <span class="tabs">760 万浏览 · 476 关注 · 286 回答</span>
              </li>
            </ul>
            <span class="openmore">查看全部热点新闻 ></span>
          </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
        .context {
          width: 480px;
          height: 300px;
          background: #ffffff;
          padding: 20px;
          box-sizing: border-box;
          h3 {
            font-size: 16px;
            font-weight: 700;
            color: #333;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
          }
          ul {
            li {
              display: flex;
              flex-direction: column;
              margin: 5px 0;
              // 遍历添加i标签背景色
              @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                  .text {
                    i {
                      background: random-backcolor(50 * $i);
                    }
                  }
                }
              }
              .text {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 15px;
                color: #333;
                margin: 5px 10px 5px 0;
                i {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  color: #ffffff;
                  border-radius: 50%;
                  margin-right: 3px;
                  text-align: center;
                  // 去除斜体
                  font-style: normal;
                }
              }
              .tabs {
                font-size: 12px;
                color: #999;
              }
            }
          }
          .openmore {
            color: #8590a6;
            font-size: 14px;
            font-weight: 500;
          }
        }
</style>

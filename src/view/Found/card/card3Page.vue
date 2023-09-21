<template>
    <div class="found-card3">
       <div class="top">
         <div class="first-floor">
            <div class="left"></div>
            <div class="right">
                <div class="img-mask1"></div>
                <div class="img-mask2"></div>
            </div>
         </div>
        <div class="upper-deck">
           <div class="upper-deck-text">
            <h3>职人回血攻略|与失眠和解</h3>
            <div>职场青年失眠或成最大困扰，有人熬夜不睡觉，有人想睡却睡不着，你失眠的主要因素是什么？有什么睡个好觉的妙招吗？9 月 12 日-10 月 10 日</div>
            <span>0位嘉宾参与 | 117人关注</span>
           </div>
           <button>关注圆桌</button>
        </div>
       </div>
       <div class="bottom">
        <ul>
            <li>
                <p>为什么起床时会莫名的情绪低落？</p>
                <span>12个回答</span>
            </li>
            <li>
                <p>脑子总是胡思乱想，晚上总是睡不着，脑子里就像放电影一样，各种没有见过的场景混乱无章念头纷乱怎么办？</p>
                <span>61个回答</span>
            </li>
            <li>
                <p>熬夜跟变胖有关系吗？</p>
                <span>6个回答</span>
            </li>
        </ul>
       </div>
    </div>
</template>

<script setup>

 
</script>

<style lang="scss" scoped>
.found-card3{
    margin:20px 0;
    .top{
        height: 240px;
        width: 480px;
        position: relative;
        border-radius:3px 3px 0 0;
        // 溢出隐藏
        overflow: hidden;
        .first-floor{
            height: 100%;
            width: 100%;
            display: flex;
            .left{
                width: 50%;
                height: 100%;
                background:rgb(58, 27, 31) ;
            }
            .right{
                width: 50%;
                height: 100%;
                background: url(../images/v2-16933ec526e50c5fe210ecc435c682e9_hd.jpg);
                background-position:center center;
                position: relative;
                .img-mask1{
                    width: 100%;
                    height: 100%;
                    background:linear-gradient(to right, rgb(58, 27, 31) 0%, rgba(58, 27, 31, 0) 100%);;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;

                }
                .img-mask2{
                    width: 100%;
                    height:100%;
                    background: linear-gradient(to right, rgba(58, 27, 31, 0.5) 0%, rgba(58, 27, 31, 0) 100%);
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
            }
        }
        .upper-deck{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        .upper-deck-text{
            margin-top:50px;
           h3{
            color: #fff;
           }
           div{
            width: 300px;
            height: auto;
            color: #fff;
            // 3行超出隐藏
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size:14px;
           }
           span{
            margin-top:19px;
            color: hsla(0,0%,100%,.6);
            align-items: center;
            display: block;
            font-size:12px;
           }
        }
        button{
            // 去除默认样式
            border: none;
            outline: none;
            background: #ffffff;
            color: rgb(58, 27, 31);
            font-size: 14px;
            font-weight: 600;
            width: 100px;
            height: 30px;
            border-radius: 3px;
            position: absolute;
            cursor: pointer;
            bottom: 20px;
            right: 20px;
        }
    }
    }
   .bottom{
    width: 480px;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    border-radius:0 0 3px 3px;
    // 边框带阴影效果
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    ul{
        list-style: none;
        li{
            margin: 20px 0;
            list-style-type: none;
            p{
            display: block;
            height: 21px;
            line-height: 21px;
            font-size: 15px;
            // 超出隐藏
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            }
            span{
             display: block;
             font-size:12px;
             color: #999;
             height: 17px;
            }
        }
    }
   }
}
</style>
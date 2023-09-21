<template>
    <div class="found-card5">
        <img src="../images/v2-948d45f54a0c68635c15b6cb0f118b5e_xl.jpg" alt="">
        <div class="title">
            <div class="titile-name">TD北美留学进化论</div>
            <span class="title-info">4,157 关注2,187 文章</span>
        </div>
        <div class="sign">
            有干货，有陪伴，有进步。
        </div>
        <button>进入专栏</button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.found-card5{
    width: calc((100% - 60px)/4);
    height: auto;
    display: flex;
    // 方向
    flex-direction: column;
    background: #ffffff;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px;
    border-radius:5px;

    img{
        width: 75px;
        height: 75px;
        border-radius:50%;
        margin: 20px auto;
    }
    .title{
        margin: 0 auto;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .titile-name{
            font-size: 16px;
            font-weight: bold;
            color: #000000;
        }
        .title-info{
            font-size: 12px;
            color: #999999;
        }
    }
    .sign{
        margin: 25px auto;
        font-size:15px;
    }
    button{
        margin: 0 auto;
        width: 100px;
        height: 30px;
        background: #ebf4fd;
        border-radius: 3px;
        border: none;
        color: #056de8;
    }

}

</style>
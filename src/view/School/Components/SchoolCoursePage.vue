<template>
    <div>
        <div class="box" >
            <h3 ><el-icon>
                    <VideoCameraFilled />
                </el-icon> {{ props.data.name }} <span ref="titletab">{{ props.data.tabs }}</span></h3>
            <ul>
                <li v-for="item in props.data.list" :key="item.id">
                    <img :src="require(`../../../../public/images/course/${item.img}`)" alt="">
                    <span class="title">{{ item.title }}</span>
                    <div class="user"> <img :src="require(`../../../../public/images/${item.useravatar}`)" alt=""> {{
                        item.username }}</div>
                    <div class="price-info" ref="priceinfo"><span class="info">{{ item.info }}</span><span class="price">{{ item.price
                    }}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { onMounted,defineProps,ref} from 'vue';
let titletab=ref(null);
let priceinfo=ref(null);
const props=defineProps({
    data:{
        type:Object,
        define:{list:[]},
        require:true
    },
    background:{
        type:String,
        define:"red",
        require:false
    },
    color:{
        type:String,
        define:"#999",
        require:false
    }
})
const init=()=>{
    titletab.value.style.background=props.background;
    titletab.value.style.color=props.color;
    Array.from(priceinfo.value).forEach((item)=>{
        item.style.color=props.color;
    })
    // priceinfo.value.style.color=props.color
}
onMounted(() => {
   init()
})
</script>
<style scoped lang="scss">
.box {
    h3 {
        margin: 20px 0;

        span {
            line-height: 20px;
            padding: 4px 8px;
            margin-left: 16px;
            font-size: 15px;
            color: #0062ff;
            font-weight: 400;
            border-radius: 6px;
            background: linear-gradient(90deg, rgba(0, 102, 255, .1) .93%, rgba(0, 102, 255, .02));
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li {
            list-style-type: none;
            width: 268px;
            display: flex;
            flex-direction: column;
            margin: 5px ;
            img {
                width: 100%;
                height: 178px;
            }
            .title {
                font-size: 16px;
                font-weight: 500;
                color: #333;
                margin: 5px 0;
            }
            .user {
                margin: 5px 0;
                display: flex;
                align-items: center;
                img {
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: #eee;
                    margin-right: 8px;
                }
            }
            .price-info {
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .price {
                    font-size: 15px;
                }
                .info {
                    font-size: 12px;
                }
            }
        }
    }
}</style>
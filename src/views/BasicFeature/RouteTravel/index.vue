<template>
    <van-nav-bar
    title="路径漫游"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    fixed
    />
    <div class="options" >
        <router-link class="optionItem" to="/routeTravel/addRoute" >
            <img src="../../../assets/images/icons/huabi.png" alt="">
            <span >绘制</span>
        </router-link>
        <router-link class="optionItem" to="/routeTravel/routeList">
            <img src="../../..//assets/images/icons/list.png" alt="">
            <span>列表</span>
        </router-link>
    </div>

    <div class="MovingControl" >
        <van-button round type="primary" @click="MoveNPause" :disabled="!store.state.isFlying">移动/暂停</van-button>
        <van-button round type="danger" @click="exitFlying" :disabled="!store.state.isFlying">退出飞行</van-button>
    </div>
    <router-view></router-view>
</template>

<script>
import {useRoute,useRouter,} from 'vue-router'
import { onBeforeUnmount, reactive,ref } from 'vue'
import hideNavBtn from '@/hooks/hideNavBtn'
import { useStore } from "vuex";

export default {
    name:'RouteTravel',
    setup(){
        hideNavBtn()//隐藏主导航按钮
        const store=useStore()
        const router=useRouter()
        const route=useRoute()
        const state=reactive({
        })
        //移动/暂停
        function MoveNPause() {
            store.dispatch("MoveNPause")
        }
        //退出飞行
        function exitFlying() {
            store.dispatch('exitFlying')
        }
        onBeforeUnmount(()=>{
            store.dispatch('clearArrAll')
        })
        const onClickLeft = () => history.back();
        return {
            state,store,MoveNPause,exitFlying,onClickLeft,
        }
    }
}
</script>

<style lang='less' scoped>
    .options{
        border-radius: 10px;
        position: absolute;
        right: 0;
        bottom: 20vh;
        background-color: #fff;
        font-size: 10px;
        .optionItem{
            display: flex;
            flex-direction: column;
            align-content: center;
            padding: 10px;
            img{
                width: 30px
            };
            span{
                text-align: center;
            }
        }
        .optionItem:first-child{
            border-bottom: 1px solid rgba(0, 0, 0, .2);
        }
    }
    .MovingControl{
        position: absolute;
        display: flex;
        justify-content: space-around;
        bottom: 20px;
        width: 100vw;
    }
</style>
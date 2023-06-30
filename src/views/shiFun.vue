<template>
  <div class="main">
    <div class="main_heard">
      <el-row :gutter="24" style="margin: 0 !important;">
        <el-col :span="3"></el-col>
        <el-col :span="3" class="flex-center"><div class="logo"></div></el-col>
        <el-col :span="2"></el-col>
        <el-col :span="2"></el-col>
        <el-col :span="2" class="flex-center"><div @click="mainHeardHandle(1)" :class="activeMenu==1?'main_heard_active flex-center pointer':'pointer'">品牌介绍</div></el-col>
        <el-col :span="2" class="flex-center"><div @click="mainHeardHandle(2)" :class="activeMenu==2?'main_heard_active flex-center pointer':'pointer'">场地选择</div></el-col>
        <el-col :span="2" class="flex-center"><div @click="mainHeardHandle(3)" :class="activeMenu==3?'main_heard_active flex-center pointer':'pointer'">项目多样化</div></el-col>
        <el-col :span="2" class="flex-center"><div @click="mainHeardHandle(4)" :class="activeMenu==4?'main_heard_active flex-center pointer':'pointer'">服务保障</div></el-col>
        <el-col :span="2" class="flex-center"><div @click="mainHeardHandle(5)" :class="activeMenu==5?'main_heard_active flex-center pointer':'pointer'">精彩瞬间</div></el-col>
        <el-col :span="2" class="flex-center"><div @click="mainHeardHandle(6)" :class="activeMenu==6?'main_heard_active flex-center pointer':'pointer'">方案定制</div></el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
    <div class="container">
      <div class="affix">
      </div>
      <div class="container_img1">
        <div class="container_img2">
        </div>
      </div>
      <div class="container_img3">
        <div class="container_img4">
        </div>
        <div class="container_img5">
          <Map class="map_1" v-on:mouseover="handleMouseOver(1)" :flag="handleMouse.handleMouseFlag1" title="嘉定-萌哒庄园"/>
          <Map class="map_2" v-on:mouseover="handleMouseOver(2)" :flag="handleMouse.handleMouseFlag2" title="自然回想度假村"/>
        </div>
        <p class="container_p1">另：上海周边至江浙沪范围内也有超过二十个合作场地，根据您的具体需求，供您选择！</p>
      </div>
      </div>
  </div>
</template>

<script>
import VueMixin from "../VueMixin/vuemixin";
import { reactive, toRefs,onMounted } from "vue";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Map from "../components/map.vue"; 

export default {
  name: "shi_fun",
  components: {
    Map
  },
  setup() {
    const { _Adaptation } = VueMixin(); //解构
    _Adaptation(); //rem   root fontSize 适配设计稿 1920

    const state = reactive({
      show:false,
      activeMenu:1,
      handleMouse:{
        handleMouseFlag1:false,
        handleMouseFlag2:false,
      }
    })

    let speed = 100;

    gsap.registerPlugin(ScrollTrigger);

   //   let scene1 = gsap.timeline();
   //    ScrollTrigger.create({
   //       animation: scene1,
   //       trigger: ".qingliang_summer",
   //       start: "top top",
   //       end: "45% 100%",
   //       scrub: 3,
   //    });

   //  // hills animation 
   //  scene1.to("#qingliang_1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
    
   const mainHeardHandle = (item)=>{
      state.activeMenu = item;
   }

   const handleMouseOver = (Number)=>{
    for (const key in state.handleMouse) {
        state.handleMouse[key] = false;
    };
    if(Number==1)
      state.handleMouse.handleMouseFlag1 = true;
    else if(Number==2)
      state.handleMouse.handleMouseFlag2 = true;
   }


   onMounted(()=>{
      gsap.from(".qingliang_summer",{
         scrollTrigger:{
            trigger:'.qingliang_summer',
            toggleActions: 'restart pause reverse none'
         },
         y:400,
         rotation:360,
         duration:3
      });
   })

    return {
      ...toRefs(state),
      mainHeardHandle,
      handleMouseOver
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height:100vh;
  width:100vw;
}
.main_heard{
  height:1rem;
}
.el-row {
  height: 1rem;
}
.el-col {
  border-radius: 4px;
  font-size:0.2rem;
}

.logo{
  background:url(../assets/static/logo.png) no-repeat center; 
  width: 1.65rem;
  height: 0.5rem;
  background-size: 100%;
  background-position:0px;
}
.flex-center{
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}
.main_heard_active{
  width:1.08rem;
  height:0.47rem;
  border-radius:0.06rem;
  padding:0.1rem, 0.14rem, 0.1rem, 0.14rem;
  background:#F4F3F3;
  color:#3581F0;
  font-weight:600;
}
.main_heard_active::after{
    content: '';
    position: absolute;
    left: -14px;
    top: 28px;
    border-style: solid;
    border-width: 10px 14px 10px 0;
    border-color: rgba(0, 0, 0, 0) #F3F3F3 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
}
.pointer{
  cursor:pointer
}
.affix{
  background:url(../assets/static/affix.png) no-repeat center; 
  width: 0.52rem;
  height: 1.93rem;
  position: fixed;
  bottom: 20%;
  right: 0;
}
.container_img1{
  background:url(../assets/static/Rectangle 71.png) no-repeat center; 
  width: 19.2rem;
  height: 7.91rem;
  background-size: 100%;
}
.container_img2{
  background:url(../assets/static/Group 65.png) no-repeat center; 
  width: 7.02rem;
  height: 2.13rem;
  background-size: 100%;
  position: relative;
  top: 1.6rem;
  margin: 0 auto;
}
.container_img3{
  background:url(../assets/static/Mask group.png) no-repeat center; 
  width: 19.2rem;
  height: 9.78rem;
  background-size: 100%;
  position:relative;
}
.container_img4{
  background:url(../assets/static/container_img4.png) no-repeat center; 
  width: 1.76rem;
  height: 0.75rem;
  background-size: 100%;
  position: relative;
  top: 0.4rem;
  left: 1.6rem;
}
.container_img5{
  background:url(../assets/static/container_img5.png) no-repeat center; 
  width: 8.5rem;
  height: 8.67rem;
  background-size: 100%;
  position: absolute;
  top: 0.36rem;
  left: 50%;
  transform: translateX(-50%);
}
.container_p1{
  weight:400;
  font-size:0.22rem;
  line-height:0.3rem;
  color:#FFFFFF;
  position: absolute;
  bottom: 0.2rem;
  width: 100%;
  text-align: center;
}
.map_1{
  position: absolute;
  top: 2.6rem;
  left: 1.68rem;
}
.map_2{
  position: absolute;
  top: 0.2rem;
  left: 3rem;
}
</style>

<template>
  <div class="main">
    <div  class="bg_sun">
      <div class="sun"></div>
      <div class="bg_cloud"></div>
    </div>
    <div class="bubble">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bubble movebig1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bubble1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bubble1 move1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bubble1 move2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import VueMixin from "../VueMixin/vuemixin";

export default {
  name: "H5_Summer",
  setup() {
    // const { _H5Adaptation } = VueMixin(); //解构
    // _H5Adaptation(); //rem   root fontSize 适配设计稿 750

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  background: #61CCFF;
  width:100vw;
}
.bg_sun{
  background-image: linear-gradient(#f5fcff 0%, #459ad3 40%, #3d9edf 70%, #61CCFF 92%);
  width:100vw;
  height:60vh;
}
.sun{
  position:absolute;
  background:url(../assets/static/sun.png) no-repeat center; 
  width: 100%;
  height: 100%;
  background-size: 40%;
  background-position: 270px -38px;
}
.bg_cloud{
  background:url(../assets/static/bg-clouds.png) no-repeat center; 
  width: 100%;
  height: 100%;
  background-size: 100% 48%;
  background-position: 0px 100px;
}
.bubble {
   position: fixed;
   width: 100px;
   height: 100px;
   top:300px;
   left:50px;
   border-radius: 50%;
   box-shadow: inset 0 0 25px rgba(255, 255, 255, .3);
   filter: blur(2px);
   animation: animate 8s ease-in-out infinite;
}
.bubble1 {
   position: fixed;
   width: 50px;
   height: 50px;
   top:400px;
   border-radius: 50%;
   box-shadow: inset 0 0 25px rgba(255, 255, 255, .3);
   filter: blur(1px);
   animation: animate1 8s ease-in-out infinite;
}
.movebig1{
  top:500px;
  left:250px;
}
.move1{
  top:400px;
  left:200px;
}

.move2{
  top:600px;
  left:150px;
}
 
@keyframes animate {
   0%,
   100% {
      transform: translateY(-20px);
   }
   50% {
      transform: translateY(20px);
   }
}
@keyframes animate1 {
   0%,
   100% {
      transform: translateY(-20px) translateX(-20px);
   }
   50% {
      transform: translateY(20px) translateX(20px);
   }
}
.bubble span {
   position: absolute;
   border-radius: 50%;
   filter: blur(2px);
}

.bubble1 span {
   position: absolute;
   border-radius: 50%;
   filter: blur(1px);
}
.bubble span:nth-child(1) {
   inset: 2px;
   border-left: 2px solid #05eaf6;
}
.bubble span:nth-child(2) {
   inset: 2px;
   border-top: 2px solid #f9ffa7;
}
.bubble span:nth-child(3) {
   inset: 2px;
   border-right: 2px solid #fa6f6f;
}
.bubble span:nth-child(4) {
   inset: 2px;
   border-left: 2px solid #fa6f6f;
}
.bubble span:nth-child(5) {
   inset: 2px;
   border-bottom: 2px solid #47d1ff;
   transform: rotate(-20deg);
}
.bubble span:nth-child(6) {
   inset: 2px;
   border-bottom: 2px solid #fff;
   transform: rotate(-20deg);
}

.bubble1 span:nth-child(1) {
   inset: 1px;
   border-left: 1px solid #05eaf6;
}
.bubble1 span:nth-child(2) {
   inset: 1px;
   border-top: 1px solid #b8edff;
}
.bubble1 span:nth-child(3) {
   inset: 1px;
   border-right: 1px solid #4eebff;
}
.bubble1 span:nth-child(4) {
   inset: 1px;
   border-left: 1px solid #4f97d9;
}
.bubble1 span:nth-child(5) {
   inset: 2px;
   border-bottom: 2px solid #60e5fc;
   transform: rotate(-20deg);
}
.bubble1 span:nth-child(6) {
   inset: 2px;
   border-bottom: 2px solid #fff;
   transform: rotate(-20deg);
}


.bubble::before {
   content: '';
   position: absolute;
   top: 20px;
   left: 28px;
   width: 15px;
   height: 15px;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, .8);
   filter: blur(2px);
   z-index: 10;
}
.bubble::after {
   content: '';
   position: absolute;
   top: 35px;
   left: 40px;
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, .9);
   filter: blur(2px);
   z-index: 10;
}

.bubble1::before {
   content: '';
   position: absolute;
   top: 10px;
   left: 14px;
   width: 7px;
   height: 7px;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, .8);
   filter: blur(1px);
   z-index: 10;
}
.bubble1::after {
   content: '';
   position: absolute;
   top: 18px;
   left: 20px;
   width: 5px;
   height: 5px;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, .9);
   filter: blur(1px);
   z-index: 10;
}
</style>

<template>
  <div class="main">
    
  </div>
</template>

<script>
import VueMixin from "../VueMixin/vuemixin";
import { reactive, toRefs,onMounted } from "vue";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default {
  name: "shi_fun",
  setup() {
    const { _H5Adaptation } = VueMixin(); //解构
    _H5Adaptation(); //rem   root fontSize 适配设计稿 750

    const state = reactive({
      show:false
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
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  background: #61CCFF;
  width:100vw;
}
</style>

<template>
    <div style="position:position">
        <div :style="{visibility: flag?'visible':'hidden'}" class="tooltip"><span class="tooltip_span">{{title}}</span></div>
        <svg t="1688108317962" class="icon map" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3400" width="0.28rem" height="0.28rem"><path d="M528 32c-202.944 0-368 164.8-368 367.36 0 75.2 22.656 147.584 65.024 208.48 2.112 3.648 4.256 7.168 6.784 10.592l268.608 353.472C507.712 980 517.504 984.48 528 984.48c10.368 0 20.224-4.512 28.768-14.08l267.36-352c2.624-3.52 4.896-7.36 6.112-9.6A364.864 364.864 0 0 0 896 399.36C896 196.8 730.912 32 528 32z m0 498.72a131.52 131.52 0 0 1-131.456-131.232 131.488 131.488 0 0 1 262.88 0A131.52 131.52 0 0 1 528 530.688z" p-id="3401" class="custom-cursor-on-hover" :fill="flag?'#F98419':'#ffffff'"></path></svg>
    </div>
</template>
<script setup>
const props = defineProps({
  flag:Boolean,
  title:String,
})
</script>
<style scoped>
.tooltip{
    height:0.47rem;
    border-radius:0.06rem;
    padding:0.1rem, 0.14rem, 0.1rem, 0.14rem;
    font-size:0.22rem;
    color:white;
    line-height:0.47rem;
    padding:0.04rem;
}
.tooltip::after{
    content:'';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0.5rem;
    border-style: solid;
    border-width: 14px 10px 0px 10px;
    border-color: #F98419 rgb(255 255 255 / 0%) rgb(255 255 255 / 0%) rgb(255 255 255 / 0%);
}
.tooltip_span{
    margin: 0;
    padding: 0.1rem;
    background: #f98419;
    border-radius: 0.08rem;
}
.map{
    position: absolute;
    top: 0.66rem;
    left: 50%;
    transform: translateX(-50%);
}
</style>
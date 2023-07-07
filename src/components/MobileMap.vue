<template>
    <div style="position:relative">
        <Map
            :class="'map_' + item.index"
            v-for="item in MapArray"
            @click="mouseAndClickHandle(item.index)"
            :flag="item.flag"
            :title="item.name"
          />
    </div>
</template>
<script>
import VueMixin from "../VueMixin/vuemixin";
import { reactive, toRefs, onMounted } from "vue";
import Map from "../components/map.vue";

export default {
  name: "shi_fun",
  emits:['handleMouseOver'],
  props:{
    MapArray:{
        type:Array,
        default:[]
    }
  },
  components: {
    Map,
  },
  setup(props,content) {
    const { _H5Adaptation } = VueMixin(); //解构
    _H5Adaptation(); //rem   root fontSize 适配设计稿 375

    let setIntervalObj = null;
    let setInterValNumber = 0;
    const state = reactive({
    });

    const mouseAndClickHandle = (lable)=>{
        clearInterval(setIntervalObj)
        content.emit('handleMouseOver',lable)
    }

    onMounted(() => {
        setIntervalObj = setInterval(()=>{
            content.emit('handleMouseOver',(setInterValNumber++)%12+1)
        },500)
    });

    return {
      ...toRefs(state),
      mouseAndClickHandle
    };
  },
};
</script>
<style scoped>
.map_1 {
  position: absolute;
  top: 2.6rem;
  left: 1.68rem;
}
.map_2 {
  position: absolute;
  top: 0.3rem;
  left: 3rem;
}
.map_3 {
  position: absolute;
  top: 1.4rem;
  left: 4.6rem;
}
.map_4 {
  position: absolute;
  top: 2.15rem;
  left: 4rem;
}
.map_5 {
  position: absolute;
  top: 2.3rem;
  left: 4.6rem;
}
.map_6 {
  position: absolute;
  top: 2.2rem;
  left: 2.5rem;
}
.map_7 {
  position: absolute;
  top: 3.9rem;
  left: 1.4rem;
}
.map_8 {
  position: absolute;
  top: 5.5rem;
  left: 2rem;
}
.map_9 {
  position: absolute;
  top: 5.2rem;
  left: 5rem;
}
.map_10 {
  position: absolute;
  top: 5.7rem;
  left: 5.7rem;
}
.map_11 {
  position: absolute;
  top: 6.3rem;
  left: 3.2rem;
}
.map_12 {
  position: absolute;
  top: 7.1rem;
  left: 2.4rem;
}
</style>
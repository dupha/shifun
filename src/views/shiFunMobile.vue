<template>
  <div class="main">
    <div id="main_heard" class="main_heard">
      <el-row :gutter="24" style="margin: 0 !important">
        <el-col :span="8" class="flex-center"><div class="logo"></div></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8" class="flex-center"
          ><el-button round @click="openDrawerHandle"
            >全部服务</el-button
          ></el-col
        >
      </el-row>
    </div>
    <div class="container">
      <a id="section0" style="display:block;height:0.48rem;margin-top:-0.48rem;"></a>
      <div id="section0_0" class="container_img1">
        <div class="container_img2"></div>
      </div>
      <a id="section1" style="display:block;height:0.48rem;margin-top:-0.48rem;"></a>
      <div id="section1_1" class="container_img3">
        <div class="container_img4"></div>
        <div class="container_img5">
          <MobileMap
            :MapArray="handleMouse"
            @handleMouseOver="handleMouseOver"
          />
        </div>
        <p class="container_p1">
          另：上海周边至江浙沪范围内也有超过二十个合作场地，根据您的具体需求，供您选择！
        </p>
      </div>
      <div class="">
        <a id="section2" style="display:block;height:0.48rem;margin-top:-0.48rem;"></a>
        <div id="section2_2" class="container_img6 container_panel"></div>
        <div class="container_img7 container_panel"></div>
        <div class="container_img8 container_panel"></div>
      </div>
    </div>
    <a id="section3" style="display:block;height:0.48rem;margin-top:-0.48rem;"></a>
    <div id="section3_3" class="container_footer1">
      <div class="section3_banner">
        <el-carousel :interval="2000" height="2.08rem" arrow="always">
          <el-carousel-item v-for="item in 2" :key="item">
            <div :class="'section3_banner_img' + item"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <a id="section4" style="display:block;height:0.48rem;margin-top:-0.48rem;"></a>
    <div id="section4_4" class="container_footer2"></div>
    <a id="section5" style="display:block;height:0.48rem;margin-top:-0.48rem;"></a>
    <div id="section5_5" class="footer1"></div>

    <div class="affix flex-center">
      <el-button
        type="primary"
        @click="clickMenuHandle({ section: 'main_heard' })"
        plain
        style="height: 0.4rem;font-size: 0.18rem;"
        >返回顶部</el-button
      >
      <el-button @click="dialogHandle" type="primary" style="width: 2rem;height: 0.4rem;font-size: 0.18rem;"
        >方案定制</el-button
      >
    </div>

    <el-drawer v-model="drawer" size="80%" title="">
      <div class="menu_box">
        <div
          v-for="item in menuArray"
          :key="item.index"
          @click="clickMenuHandle(item)"
          class="menu_text"
        >
          {{ item.name }}
        </div>
      </div>
    </el-drawer>
    <el-drawer v-model="drawerForm" direction="ltr" size="100%" title="方案定制">
      <el-form :model="form" label-width="1.2rem">
        <el-form-item label="团建人数">
          <el-select v-model="form.num" placeholder="请选择团建人数">
            <el-option label="20人以下" value="20人以下" />
            <el-option label="21-50人" value="21-50人" />
            <el-option label="51-70人" value="51-70人" />
            <el-option label="71-100人" value="71-100人" />
            <el-option label="100人以上" value="100人以上" />
          </el-select>
        </el-form-item>
        <el-form-item label="人均预算">
          <el-select v-model="form.budget" placeholder="请选择人均预算">
            <el-option label="200-299元" value="200-299元" />
            <el-option label="300-499元" value="300-499元" />
            <el-option label="500-699元" value="500-699元" />
            <el-option label="700-999元" value="700-999元" />
            <el-option label="1000元以上" value="1000元以上" />
          </el-select>
        </el-form-item>
        <el-form-item label="团建天数">
          <el-select v-model="form.days" placeholder="请选择团建天数">
            <el-option label="半日" value="半日" />
            <el-option label="一日" value="一日" />
            <el-option label="二-三日" value="二-三日" />
            <el-option label="三日以上" value="三日以上" />
          </el-select>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.contactName" placeholder="请填写联系人"/>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.contactPhone" placeholder="请填写联系电话"/>
        </el-form-item>
      </el-form>
      <div class="flex-center"><el-button type="primary" @click="submitForm">提交团建信息</el-button></div>
    </el-drawer>
  </div>
</template>

<script>
import VueMixin from "../VueMixin/vuemixin";
import { reactive, toRefs, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileMap from "../components/MobileMap.vue";
import { ElMessage, ElMessageBox, ElLoading } from "element-plus";
import request from "../utils/request.js";

export default {
  name: "shi_fun",
  components: {
    MobileMap,
  },
  setup() {
    const { _H5Adaptation } = VueMixin(); //解构
    _H5Adaptation(); //rem   root fontSize 适配设计稿 375    
    const state = reactive({
      show: false,
      drawer: false,
      drawerForm: false,
      activeMenu: 1,
      menuArray: [
        {
          index: 1,
          name: "品牌介绍",
          section: "section0", //锚点定位
        },
        {
          index: 2,
          name: "场地选择",
          section: "section1",
        },
        {
          index: 3,
          name: "项目多样化",
          section: "section2",
        },
        {
          index: 4,
          name: "服务保障",
          section: "section3",
        },
        {
          index: 5,
          name: "精彩瞬间",
          section: "section4",
        },
        {
          index: 6,
          name: "方案定制",
          section: "",
        },
      ],
      handleMouse: [
        {
          index: 1,
          flag: false,
          name: "嘉定-萌哒庄园",
        },
        {
          index: 2,
          flag: false,
          name: "自然回想度假村",
        },
        {
          index: 3,
          flag: false,
          name: "顾伯伯农家乐园",
        },
        {
          index: 4,
          flag: false,
          name: "前小橘创意农场",
        },
        {
          index: 5,
          flag: false,
          name: "桔园农庄",
        },
        {
          index: 6,
          flag: false,
          name: "闻道园-柚子营地",
        },
        {
          index: 7,
          flag: false,
          name: "牵然生态农场",
        },
        {
          index: 8,
          flag: false,
          name: "乐乐农庄生态园",
        },
        {
          index: 9,
          flag: false,
          name: "鹤丰农庄",
        },
        {
          index: 10,
          flag: false,
          name: "鲜花港",
        },
        {
          index: 11,
          flag: false,
          name: "乐活户外大本营",
        },
        {
          index: 12,
          flag: false,
          name: "山阳农庄",
        },
      ],
      form:{
        num:"",
        budget:"",
        days:"",
        contactName:"",
        contactPhone:""
      }
    });

    let speed = 100;

    gsap.registerPlugin(ScrollTrigger);

    const mainHeardHandle = (item) => {
      state.activeMenu = item;
    };

    const handleMouseOver = (Number) => {
      state.handleMouse.map((item) => {
        item.flag = false;
      });
      state.handleMouse[Number - 1].flag = true;
    };

    //锚点跳转  vue和<a>标签冲突使用此方法解决
    const goAnchor = (selector) => {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      });
    };
    const clickMenuHandle = (item) => {
      //抽屉字段设置为false
      state.drawer = false;

      mainHeardHandle(item.index);
      if (!!item.section) {
        goAnchor("#" + item.section);
      } else {
        //定制方案弹窗
        dialogHandle();
      }
    };

    const dialogHandle = () => {
      state.drawerForm = true;
    };
    // 正则表达式用于匹配手机号码  
    const isValidPhoneNumber = (phoneNumber)=>{  
        var regex = /^[1-9]\d{9,11}$/;  
        return regex.test(phoneNumber);  
    }
    const isValidObject= (obj)=>{  
      for (let prop in obj) {  
          if(obj[prop].trim().length == 0){
            return false;
          }
      }  
      return true;  
    }

    const submitForm = ()=>{
      if(!isValidObject(state.form)){
        ElMessage({
              message: '信息不完善.',
              type: 'error',
            })
        return ;
      }
      if(!isValidPhoneNumber(state.form.contactPhone)){
            ElMessage({
              message: '手机信息不完善.',
              type: 'error',
            })
        return ;
      }

      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      request.post("/tuanjian/shifun/teamBuilding/record", state.form).then(response => {
        if(response.data.code){
          ElMessage({
            message: '提交成功!',
            type: 'success',
          })
        }else{
          ElMessage({
            message: '提交失败.',
            type: 'warning',
          })
        }
        loading.close()
      }).catch(err=>{
        console.error(err);
        loading.close();
        ElMessage({
          message: '提交失败.',
          type: 'warning',
        })
      });
    }

    const openDrawerHandle = () => {
      state.drawer = true;
    };

    onMounted(() => {
      let scene1 = gsap.timeline();
      gsap.utils.toArray(".container_panel").forEach((panel, i) => {
        ScrollTrigger.create({
          animation: scene1,
          trigger: panel,
          start: "top top",
          end: "+=300",
          pin: true,
          pinSpacing: false,
        });
      });

      gsap.from(".container_img6", {
        scale:0,
        ease: "none",
        scrollTrigger: {
          trigger: ".container_img6",
          toggleActions: 'restart pause reverse pause',
          scrub:true,
          start:"top 80%",
          end: "+=300",
        },
      });

      gsap.from(".container_img7", {
        scale:0,
        ease: "none",
        scrollTrigger: {
          trigger: ".container_img7",
          toggleActions: 'restart pause reverse pause',
          scrub:true,
          start:"top 80%",
          end: "+=300",
        },
      });

      gsap.from(".container_img8", {
        scale:0,
        ease: "none",
        scrollTrigger: {
          trigger: ".container_img8",
          toggleActions: 'restart pause reverse pause',
          scrub:true,
          start:"top 80%",
          end: "+=300",
        },
      });
    });

    return {
      ...toRefs(state),
      mainHeardHandle,
      handleMouseOver,
      clickMenuHandle,
      goAnchor,
      dialogHandle,
      openDrawerHandle,
      submitForm
    };
  },
};
</script>
<style scoped>
.main {
  width: 100vw;
  overflow-y: scroll;
}
.main_heard {
  height: 0.48rem;
  position: fixed;
  top:0;
  left:0;
  background: white;
  width: 100vw;
  z-index: 9;
}
.el-row {
  height: 0.48rem;
}
.el-col {
  border-radius: 4px;
  font-size: 0.2rem;
}

.logo {
  background: url(../assets/static/logo.png) no-repeat center;
  width: 0.9rem;
  height: 0.3rem;
  background-size: 100%;
  background-position: 0px;
}
.flex-center {
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}
.main_heard_active {
  width: 1.08rem;
  height: 0.47rem;
  border-radius: 0.06rem;
  padding: 0.1rem, 0.14rem, 0.1rem, 0.14rem;
  background: #f4f3f3;
  color: #3581f0;
  font-weight: 600;
}
.main_heard_active::after {
  content: "";
  position: absolute;
  left: -14px;
  top: 28px;
  border-style: solid;
  border-width: 10px 14px 10px 0;
  border-color: rgba(0, 0, 0, 0) #f3f3f3 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
}
.pointer {
  cursor: pointer;
}
.container {
  margin-top:0.45rem;
  overflow-x: hidden;
}
.container_img1 {
  background: url(../assets/static/Rectangle 71.png) no-repeat center;
  width: 3.75rem;
  height: 1.545rem;
  background-size: 100% 100%;
}
.container_img2 {
  background: url(../assets/static/Group 65.png) no-repeat center;
  width: 1.8rem;
  height: 1.13rem;
  background-size: 100%;
  position: relative;
  top: 0rem;
  margin: 0 auto;
}
.container_img3 {
  background: url(../assets/static/Mask group.png) no-repeat center;
  width: 10.66rem;
  height: 5.43rem;
  background-size: 100%;

  position: relative;
}
.container_img4 {
  background: url(../assets/static/container_img4.png) no-repeat center;
  width: 1.37rem;
  height: 1rem;
  background-size: 80%;
  position: relative;
  top: 0;
  left: 50vw;
  transform: translateX(-50%);
}
.container_img5 {
  background: url(../assets/static/container_img5.png) no-repeat center;
  width: 8.5rem;
  height: 8.67rem;
  background-size: 100%;
  position: absolute;
  top: -1.5rem;
  left: -2.2rem;
  transform: scale(0.45);
}
.container_img6 {
  background: url(../assets/static/Group 70.png) no-repeat center;
  width: 3.75rem;
  height: 3.31rem;
  background-size: 100%;
  position: relative;
}
.container_img7 {
  background: url(../assets/static/Group 71.png) no-repeat center;
  width: 3.75rem;
  height: 3.31rem;
  background-size: 100%;
  position: relative;
}
.container_img8 {
  background: url(../assets/static/Group 72.png) no-repeat center;
  width: 3.75rem;
  height: 3.31rem;
  background-size: 100%;
  position: relative;
}
.container_p1 {
  font-size: 0.12rem;
  line-height: 0.14rem;
  color: #ffffff;
  position: absolute;
  bottom: 0.2rem;
  width: 3.11rem;
  text-align: center;
  left: calc(100vw / 2);
  transform: translateX(-50%);
}
.container_footer1 {
  background: url(../assets/static/Group 74.png) no-repeat center;
  width: 3.75rem;
  height: 3.8rem;
  background-size: 100%;
  position: relative;
}
.container_footer2 {
  background: url(../assets/static/Group 75.png) no-repeat center;
  width: 3.75rem;
  height: 3.8rem;
  background-size: 100%;
  position: relative;
}
.footer1 {
  background: url(../assets/static/Group 76.png) no-repeat center;
  width: 3.75rem;
  height: 2.21rem;
  background-size: 100%;
  position: relative;
}
a {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 继承父元素文本颜色 */
  cursor: pointer; /* 将鼠标指针改为手指形状，以表示可点击 */
}
.container_section2 {
  overscroll-behavior: none;
  width: 300%;
  height: 3.31rem;
  display: flex;
  flex-wrap: nowrap;
}

.content_text {
  overflow: hidden; /* 隐藏超出宽度的内容 */
  text-overflow: ellipsis; /* 在超出宽度时显示省略号以指示被截断的内容 */
}
.section3_banner {
  width: 3.75rem;
  height: 2.08rem;
  background: white;
  position: absolute;
  top: 1.4rem;
}
.section3_banner_img1 {
  width: 3.75rem;
  height: 2.08rem;
  background: url(../assets/static/Group 81.png) no-repeat center;
  background-size: 100%;
}
.section3_banner_img2 {
  width: 3.75rem;
  height: 2.08rem;
  background: url(../assets/static/Group 82.png) no-repeat center;
  background-size: 100%;
}
.affix {
  width: 3.75rem;
  height: 0.66rem;
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 9;
}
.menu_box{
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: space-between;
}
.menu_text {
  font-size: 0.2rem;
  line-height: 0.48rem;
  weight: 500;
}
/deep/ .el-drawer__title{
  font-size: 0.26rem !important;
}
</style>

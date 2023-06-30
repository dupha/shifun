<template>
  <router-view/>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: 'App',
  components: {
  },
  setup() {
    const router = useRouter();

    const info = [
      { name: "时间", fileExtension: "2023/06/30" },
      { name: "作者", fileExtension: "dupha" },
      { name: "框架", fileExtension: "vue" },
      { name: "框架版本", fileExtension: "3.2.13" },
    ];

    console.table(info);

    var os = function () {
        var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid &&       !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
        
        return {
              isTablet: isTablet,
              isPhone: isPhone,
              isAndroid: isAndroid,
              isPc: isPc
        };
    }();

    // pc时加载一套页面
    if(os.isPc){
      
    }
        
    // 移动端时加载另外一套页面 
    if (os.isAndroid || os.isPhone) { 
      router.push({
          path: '/mobile'
      })
    } else if (os.isTablet) {
      router.push({
          path: '/mobile'
      })
    }
  }
}
</script>

<style>
</style>

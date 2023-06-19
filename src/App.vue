<template>
  <H5SUMMER/>
</template>

<script>
import H5SUMMER from './components/H5_Summer.vue'

export default {
  name: 'App',
  components: {
    H5SUMMER
  },
  setup() {
    const info = [
      { name: "时间", fileExtension: "2023/06/19" },
      { name: "作者", fileExtension: "dupha" },
      { name: "框架", fileExtension: "vue" },
      { name: "框架版本", fileExtension: "3.2.13" },
    ];

    console.table(info);
  }
}
</script>

<style>
</style>

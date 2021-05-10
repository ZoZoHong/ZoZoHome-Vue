<template>
  <div>
    <!-- 首页 -->
    <tapmihome></tapmihome>
    <slot></slot>
  </div>
</template>

<style lang="" src="./home.css">
</style>

<script>
import tapmihome from "../components/tapmihome";



export default {
  data() {
    return {
     
    };
  },
  components: {
    // 这里的话是局部组件
    tapmihome,
  },
  computed: {
    
  },
  methods: {
    
  },
};
</script>
<template>
  <div>
    <!-- 首页 -->
    <MihomeMain></MihomeMain>
    <slot></slot>
  </div>
</template>

<style lang="" src="./home.css">
</style>

<script>
import MihomeMain from "../components/mihome/MihomeMain";



export default {
  data () {
    return {

    };
  },
  components: {
    // 这里的话是局部组件
    MihomeMain,
  },
  computed: {

  },
  methods: {

  },
};
</script>
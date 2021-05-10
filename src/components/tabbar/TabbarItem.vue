<template>
  <div class="tabbarItem" @click="goto" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-name"></slot>
    <!-- <div class="tabbarIcon"><span class="iconfont icon-tixing"></span></div>
    <div class="tabbarName"><span>首页</span></div> -->
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '/home'
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    isActive () {
      // 如果是当前路由就true
      return this.$route.path === this.path
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    goto () {
      if (this.path !== this.$route.path)
        this.$router.push(this.path);
    }
  },
}
</script>

<style>
.tabbarItem {
  flex: 1;
  text-align: center;
}

.tabbarIcon {
  display: inline-block;
  margin: 0;
  padding: 0;
  vertical-align: middle;
}
.tabbarName {
  margin: 0;
  padding: 0;
}
</style>
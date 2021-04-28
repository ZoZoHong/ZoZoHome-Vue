<template>
  <div>
    <!-- 首页 -->
    <keep-alive>
      <component :is="curenttapbar"> </component>
    </keep-alive>
    <div class="tapbar">
      <div
        v-for="(item, index) in tapbars"
        @click="switchTabbar(index)"
        :key="item"
      >
        <h3>{{ item }}</h3>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="" src="./home.css">
</style>

<script>
import tapmihome from "../components/tapmihome";
import tapuser from "../components/tapuser";
import tapsmart from "../components/tapsmart";

export default {
  data() {
    return {
      curtapbar: "MiHome",
      tapbars: ["MiHome", "Smart", "User"],
      isDisplay: true,
    };
  },
  components: {
    // 这里的话是局部组件
    tapuser,
    tapmihome,
    tapsmart,
  },
  computed: {
    curenttapbar: function () {
      return "tap" + this.curtapbar.toLowerCase();
    },
  },
  methods: {
    switchTabbar(index) {
      this.curtapbar = this.tapbars[index];
    },
  },
};
</script>
<template>
  <div>
    <!-- 首页 -->
    <div class="mihome">
      <div class="nav">
        <div class="user">
          <span class="userhome">ZoZo的家 </span>
          <span class="tixing iconfont icon-tixing"></span>
          <span class="add iconfont icon-icon-test"></span>
        </div>
        <!-- 导航栏 -->
        <div class="navbutton">
          <div class="switchButton">
            <span
              v-for="tab in tabs"
              v-bind:class="['tab-button', { active: currentTab === tab }]"
              @click="currentTab = tab"
              :key="tab"
            >
              {{ tab }}
            </span>
          </div>
          <div class="menu" @click="showSmartFunction"></div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <mihome-smart v-show="isDisplay" />
      </transition>
      <mihome-eqm :currentTab="currentTab" />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="" src="../../less/home.css">
</style>

<script>
import MihomeEqm from './MihomeEqm.vue';
import MihomeSmart from './MihomeSmart.vue';



export default {
  components: { MihomeSmart, MihomeEqm },
  data () {
    return {
      isActive: true,
      currentTab: "常用",
      curtapbar: "miHome",
      tabs: ["常用", "卧室"],
      isDisplay: true,
    };
  },
  computed: {

  },
  methods: {
    showSmartFunction () {
      this.isDisplay = !this.isDisplay;
    },
  },
};
</script>
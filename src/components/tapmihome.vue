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
              @click="switchEquip(tab)"
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
      <div class="equipment">
        <!-- <transition-group name="list" tag="p"> -->
        <div
          class="son"
          v-for="(equipment, index) in equipments"
          @click="showDetail(index)"
          v-show="equipment.isDisplay"
          :key="equipment.name"
        >
          <span class="iconfont icon-taideng"></span>
          <p>{{ equipment.name }}</p>
          <p>{{ equipment.from }}</p>
        </div>
        <!-- </transition-group> -->
      </div>
      <!-- 点击设备 弹出详细信息 -->
      <transition name="fade" mode="out-in">
        <div class="detail" v-show="equipments[currentIndex].isDetailDisplay">
          <div class="mask" @click="quitDetail"></div>
          <div class="eqm">
            <div class="img"></div>
            <div class="tool">
              <input
                type="button"
                class="SwitchOfEqm"
                v-model="equipments[currentIndex].statu"
                @click="SwitchStatu"
              />
              <div class="ValueOfEqm">
                <input
                  type="range"
                  v-model="equipments[currentIndex].value"
                  class="range"
                  :disabled="equipments[currentIndex].statu === 'Off'"
                />
                <input
                  type="text"
                  v-model="equipments[currentIndex].value"
                  class="text"
                  :disabled="equipments[currentIndex].statu === 'Off'"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="" src="../less/home.css">
</style>

<script>
import MihomeSmart from './mihome/MihomeSmart.vue';



export default {
  components: { MihomeSmart },
  data () {
    return {
      isActive: true,
      currentTab: "常用",
      currentIndex: 0,
      curtapbar: "miHome",
      tabs: ["常用", "卧室"],
      equipments: [
        {
          id: 1,
          name: "卧室的台灯",
          from: "卧室",
          statu: "On",
          value: "0",
          topic: "ZoZo/LedControlTopicOut",
          isDisplay: true,
          isDetailDisplay: false,
        },
        {
          id: 2,
          name: "台灯",
          from: "撤硕",
          isDisplay: true,
          isDetailDisplay: false,
          statu: "On",
          value: "0",
        },
        {
          id: 3,
          name: "空调",
          from: "卧室",
          isDisplay: true,
          isDetailDisplay: false,
          statu: "On",
          value: "0",
        },
        {
          id: 4,
          name: "夜灯",
          from: "床",
          isDisplay: true,
          isDetailDisplay: false,
          statu: "On",
          value: "0",
        },
        {
          id: 5,
          name: "小爱音箱",
          from: "卧室",
          isDisplay: true,
          isDetailDisplay: false,
          statu: "On",
          value: "0",
        },
        {
          id: 6,
          name: "扫地机",
          from: "卧室",
          statu: "On",
          value: "0",
          topic: "ZoZo/LedControlTopicOut",
          isDisplay: true,
          isDetailDisplay: false,
        },
      ],
      isDisplay: true,
      // 以下是临时设置，要删的
    };
  },
  computed: {
    currentEqmId: function () {
      return this.currentIndex + 1;
    },
  },
  methods: {
    showDetail (index) {
      console.log(
        this.equipments[index].name + "from" + this.equipments[index].from
      );
      // 修改该设备里面的值
      this.equipments[index].isDetailDisplay = true;
      this.currentIndex = index;
    },
    quitDetail () {
      this.equipments[this.currentIndex].isDetailDisplay = false;
    },
    showSmartFunction () {
      this.isDisplay = !this.isDisplay;
    },
    switchEquip (tab) {
      this.currentTab = tab;
      // 修改eqm的isDisplay
      for (let i of this.equipments) {
        if (tab === "常用") {
          i.isDisplay = true;
        } else if (i.from !== tab) {
          i.isDisplay = false;
        } else {
          i.isDisplay = true;
        }
      }
    },
    SwitchStatu () {
      if (this.equipments[this.currentIndex].statu === "On") {
        this.equipments[this.currentIndex].statu = "Off";
      } else {
        this.equipments[this.currentIndex].statu = "On";
      }
    },
  },
};
</script>
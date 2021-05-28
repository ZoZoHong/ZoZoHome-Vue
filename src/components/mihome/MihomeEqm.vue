<template>
  <div>
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
</template>

<script>

import { connect } from 'mqtt'
const client = connect('wss://mqttx.cn:8883/mqtt');


export default {
  props: {
    currentTab: {
      type: String,
      default: '常用'
    }
  },
  data () {
    return {
      // equipments <=> this.$store.state.eqm.equipments
      currentIndex: 0,
    }
  },
  watch: {
    //   侦听器
    currentTab: function (currentTab) {
      // 修改eqm的isDisplay
      for (let i of this.equipments) {
        if (currentTab === "常用") {
          i.isDisplay = true;
        } else if (i.from !== currentTab) {
          i.isDisplay = false;
        } else {
          i.isDisplay = true;
        }
      }
    },
  },
  computed: {
    currentEqmId: function () {
      return this.currentIndex + 1;
    },
    equipments () {
      return this.$store.state.eqm.equipments
    }
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
    SwitchStatu () {
      // 描述一下当前
      client.publish('ZoZo/test',)
      if (this.equipments[this.currentIndex].statu === "On") {
        this.equipments[this.currentIndex].statu = "Off";
        // 发送Mqtt指令
      } else {
        this.equipments[this.currentIndex].statu = "On";
      }
      this.$store.dispatch({
        type: 'UpdateEqmInfo',
        eqm: {
          statu: this.equipments[this.currentIndex].statu,
          id: this.currentIndex
        }
      });
    },
  },
}
</script>

<style >
.mihome .equipment {
  display: flex;
  margin: 0px 10px;
  flex-flow: row wrap;
  justify-content: space-between;
}

.mihome .equipment div[class^="son"] {
  box-sizing: border-box;
  width: 170px;
  height: 100px;
  margin-top: 10px;
  border-radius: 15px;
  box-shadow: 0px 2px 3px 1px darkgray;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.mihome .equipment div[class^="son"] span {
  flex: 4;
  font-size: 36px;
}

.mihome .equipment div[class^="son"] p {
  flex: 1;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  margin: 1px 15px;
}

.mihome .equipment div[class^="son"] p:last-child {
  color: #9e9e9e;
}

.mihome .detail .mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.mihome .detail .eqm {
  position: absolute;
  z-index: 2;
  top: 200px;
  width: 355px;
  height: 540px;
  background-color: #fff;
  margin: 5px 10px;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mihome .detail .eqm .img {
  flex: 2;
  background-color: purple;
  height: 216px;
  width: 80%;
  margin: 36px 0px;
}

.mihome .detail .eqm .tool {
  flex: 3;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 80%;
}

.mihome .detail .eqm .tool .SwitchOfEqm {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #000;
}

.mihome .detail .eqm .tool .SwitchOfEqm:active {
  background-color: #888888;
}

.mihome .detail .eqm .tool .ValueOfEqm {
  display: flex;
  height: 40px;
}

.mihome .detail .eqm .tool .ValueOfEqm .range {
  flex: 5;
  width: 180px;
}

.mihome .detail .eqm .tool .ValueOfEqm .text {
  flex: 1;
  box-sizing: border-box;
  width: 40px;
}
</style>
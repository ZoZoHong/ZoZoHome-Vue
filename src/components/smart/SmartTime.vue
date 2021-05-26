<template>
  <div>
    <h1>自动</h1>
    <div class="autoWrap">
      <div class="autoTitle">定时通知我</div>
      <div class="autoContent">查询时间 发送 通知</div>
    </div>
    <input type="number" name="Hours" v-model="Hours" min="0" max="24" /> :
    <input type="number" name="Minutes" v-model="Minutes" min="0" max="59" />
    <input type="button" name="setClock" value="设置" @click="setClock" />
    <div>
      {{ nowTime }},{{ setTime }},{{ statu }}
      <span>需要一个检查时间函数,来实现定时</span>
    </div>
    <base-switch></base-switch>
  </div>
</template>

<script>
import BaseSwitch from '../base/BaseSwitch.vue'
export default {
  components: { BaseSwitch },
  data () {
    return {
      Hours: 0,
      Minutes: 0,
      statu: '等待中...'
    }
  },
  computed: {
    nowTime () {
      let date = new Date();
      return date.getHours() + ':' + date.getMinutes();
    },
    setTime () {
      return this.Hours + ':' + this.Minutes
    }
  },
  methods: {
    setClock () {
      if (this.Hours < 24 && this.Hours > 0 && this.Minutes < 60 && this.Minutes > 0) {
        console.log("设置成功");
        this.statu = '等待中...'
        setInterval(() => {
          let date = new Date();
          if (this.Hours == date.getHours() && this.Minutes == date.getMinutes()) {
            this.statu = '到点了...';
          }
          console.log(this.statu);
        }, 30000)
      } else {
        console.log("请输入正确的时间");
      }
    }
  }
}
</script>

<style lang="less">
.autoWrap {
  display: flex;
}
</style>
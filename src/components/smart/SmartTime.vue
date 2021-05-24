<template>
  <div>
    <h1>自动</h1>
    <div class="autoWrap">
      <div class="autoTitle">定时通知我</div>
      <div class="autoContent">查询时间 发送 通知</div>
    </div>
    <div>
      {{ nowTime }},{{ setTime }}
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
      setTime: '',
    }
  },
  computed: {
    nowTime () {
      let date = new Date();
      return date.getHours() + ':' + date.getMinutes();
    }
  }
}
</script>

<style lang="less">
.autoWrap {
  display: flex;
  .autotitle {
  }
}
</style>
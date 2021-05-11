<template>
  <div>
    <h1>自动</h1>
    <div class="autoWrap">
      <div class="autoTitle">定时通知我</div>
      <div class="autoContent">查询时间 发送 通知</div>
    </div>
    <base-switch></base-switch>
  </div>
</template>

<script>
import BaseSwitch from '../base/BaseSwitch.vue'
export default {
  components: { BaseSwitch },

}
</script>

<style lang="less">
.autoWrap {
  display: flex;
  .autotitle {
  }
}
</style>
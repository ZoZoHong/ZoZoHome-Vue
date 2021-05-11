<template>
  <!-- 椭圆按钮开关 -->
  <div class="border">
    <div class="switch-dot"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.border {
  height: 30px;
  width: 60px;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  background-color: gray;
  border: 1px solid gray;
  position: relative;
  .switch-dot {
    height: 24px;
    width: 24px;
    border-radius: 12px;
    position: absolute;
    background-color: #fff;
    left: 3px;
    top: 3px;
    transition: 0.5s;
  }
}
.border:hover {
  background-color: #3868ff;
  .switch-dot {
    left: calc(100% - 24px - 3px);
  }
}
</style>
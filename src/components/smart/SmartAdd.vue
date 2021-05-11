<template>
  <div>
    <slot> </slot>
    <div class="bigbox"></div>
  </div>
</template>

<script>
// 利用props向子组件传递信息
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css">
.bigbox {
  height: 100px;
  width: 100px;
  background-color: pink;
}
</style>
<template>
  <div class="smart">
    <div
      class="son"
      v-for="(smart, index) in $store.state.smarts"
      :key="smart.function"
      @click="smartControl(index)"
    >
      <span class="smart-tool iconfont icon-huabanfuben"></span>
      <p>{{ smart.function }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    smartControl (index) {
      console.log(this.$store.state.smarts[index].function);
    }
  }
}
</script>

<style>
.smart {
  margin: 10px 10px;
  height: 140px;
  border-radius: 19px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 5px 1px darkgray;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.smart .son {
  width: 100px;
  height: 100px;
  text-align: center;
  color: #4a4a4a;
  border: 1px solid transparent;
}

.smart .son span {
  display: inline-block;
  height: 60px;
  width: 60px;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 30px;
  font-size: 16px;
  background-color: #f7f7f7;
}
</style>
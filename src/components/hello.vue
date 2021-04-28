<template>
  <h2 class="red">test...{{ msg }}</h2>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "test msg",
    },
  },
  mounted() {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style lang="">
</style>

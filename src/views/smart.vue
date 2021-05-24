<template>
  <div>
    <mihome-smart />
    <smart-add />
    <smart-time />
    <router-link to=""></router-link>
  </div>
</template>

<script>
import MihomeSmart from '../components/mihome/MihomeSmart.vue';
import SmartAdd from '../components/smart/SmartAdd.vue';
import SmartTime from '../components/smart/SmartTime.vue';

export default {
  components: {
    MihomeSmart,
    SmartAdd,
    SmartTime
  },
  mounted () { },
  methods: {},
  data () {
    return {};
  },
};
</script>

<style lang="">
</style>

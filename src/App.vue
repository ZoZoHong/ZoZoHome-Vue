<template>
  <div id="app">
    <tabbar-main></tabbar-main>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import TabbarMain from './components/tabbar/TabbarMain'
export default {
  components: {
    TabbarMain
  }
}
</script>

<style>
</style>

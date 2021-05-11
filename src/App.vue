<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/smart">Smart</router-link>|
      <router-link to="/user">User</router-link>
    </div> -->
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

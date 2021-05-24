<template>
  <tabbar>
    <tabbar-item path="/home">
      <span slot="item-icon" class="iconfont icon-sousuo"></span>
      <div slot="item-name">首页</div>
    </tabbar-item>
    <tabbar-item path="/smart">
      <div slot="item-icon" class="iconfont icon-icon-test"></div>
      <div slot="item-name">智能</div>
    </tabbar-item>
    <tabbar-item path="/user">
      <div slot="item-icon" class="iconfont icon-wode"></div>
      <div slot="item-name">我的</div>
    </tabbar-item>
    <tabbar-item path="/mqtt">
      <div slot="item-icon" class="iconfont icon-wode"></div>
      <div slot="item-name">测试</div>
    </tabbar-item>
  </tabbar>
</template>

<script>

import Tabbar from './Tabbar'
import TabbarItem from './TabbarItem'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
</style>
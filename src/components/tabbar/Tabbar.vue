<template>
  <div class="tabbarWrap">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tabbarWrap {
  height: 49px;
  display: flex;
  background-color: #f7f7f7;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 5px 5px gray;
}
</style>
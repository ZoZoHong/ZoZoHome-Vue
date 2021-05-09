<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/smart">Smart</router-link>|
      <router-link to="/user">User</router-link>
    </div>
    <keep-alive>
    
    <router-view/>
    </keep-alive>
  </div>
</template>

<style>
 #nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 62.5px;
      border-top: 1px solid #e8e8e8;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  #nav div h3 {
      font-weight: normal;
  }

</style>

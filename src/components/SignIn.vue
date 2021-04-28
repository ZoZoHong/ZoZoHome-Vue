// 登录页面
<template>
  <div>
    <!-- 登录输入 -->
    <div class="signIn" v-if="ShowSighIn">
      <div class="signInBackground"></div>
      <div class="signInForm">
        <div class="left"></div>
        <div class="center">
          <img :src="MyIcon" alt="" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="请输入邮箱"
            v-model="inputEmail"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="请输入密码"
            v-model="inputPassword"
            @keydown.enter="submit"
          />
          <div class="signInSelect">
            <div>
              <input type="checkbox" name="auto" id="" /><span>自动登录</span>
            </div>
            <div>
              <input type="checkbox" name="auto" id="" /><span>记住密码</span>
            </div>
            <div>
              <a href="#"> 找回密码 </a>
            </div>
          </div>
          <input type="submit" value="登录" @click="submit" />
        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="user" v-else>
      <header>
        <div>
          <a href=""><img :src="MyIcon" alt="" /></a>
          <p class="userName">用户名</p>
        </div>
      </header>
      <body>
        <ul class="userFirst">
          <li>
            <span class="iconfont icon-sousuo"></span>
            <span class="userInfo">个人信息</span>
            <span class="iconfont icon-yousanjiao"></span>
          </li>
          <li><span>智能网关</span></li>
          <li><span>主题</span></li>
        </ul>
      </body>
      <footer>
        <span @click="quit()">退出</span>
      </footer>
    </div>
  </div>
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
  methods: {
    submit() {
      new Promise((resolve) => {
        console.log("处理信息");
        resolve();
      })
        .then(() => {
          if (
            this.inputEmail === this.MyEmail &&
            this.inputPassword === this.MyPassword
          ) {
            alert("密码正确");
          } else {
            throw new Error("密码或邮箱错误！");
          }
        })
        .then(() => {
          this.ShowSighIn = false;
        })
        .catch(() => {
          alert("密码或邮箱错误！");
        });
    },
    quit() {
      new Promise((resolve) => {
        alert("确定？");
        resolve();
      }).then(() => {
        this.ShowSighIn = !this.ShowSighIn;
      });
    },
  },
  data() {
    return {
      ShowSighIn: true,
      inputEmail: "",
      inputPassword: "",
      MyEmail: "1161113466@qq.com",
      MyPassword: "123456",
      MyIcon: require("../assets/莫娜.jpg"),
    };
  },
};
</script>

<style >
@import "../less/SignIn.css";
</style>

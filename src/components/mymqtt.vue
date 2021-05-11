<template>
  <h2 class="red">test...{{ msg }}</h2>
</template>



<script>
import mqtt from "mqtt";
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "test msg",
    },
  },
  methods: {},
  mounted() {
    this.client = mqtt.connect("mqtt://mqttx.cn");

    // 订阅test/topic主题
    this.client.subscribe("test/topic");
    // 收到消息的回调函数，这里直接打印到控制台
    this.client.on("message", function (topic, payload) {
      console.log([topic, payload].join(": "));
    });
    // 每隔3秒发送随机数字到test/topic主题
    setInterval(function () {
      this.client.publish("test/topic", Math.random().toString());
    }, 3000);
  },
  data() {
    return {
      host: "mqtt://mqttx.cn",
      client: {
        connected: false,
      },
    };
  },
};
</script>

<style lang="">
</style>

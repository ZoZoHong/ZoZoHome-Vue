<template>
  <div>
    <h2 id="msg">{{ msg }} {{ host }}</h2>
    <input type="text" @keydown.enter="subscribe(topic)" v-model="topic" />
    <button @click="subscribe(topic)">subscribe</button><br />
    <input type="text" v-model="topic" />
    <br />
    <input
      type="text"
      @keydown.enter="publish(topic, content)"
      v-model="content"
    />
    <button @click="publish(topic, content)">publish</button>
    <br />
    <input type="text" @keydown.enter="unsubscribe(topic)" v-model="topic" />
    <button @click="unsubscribe(topic)">unsubscribe</button>
    <button @click="listTopic()">查看</button>
    <h1>已订阅的主题</h1>
    <div>
      {{ subscribed }}
    </div>
    <ul>
      <h1>message</h1>
      <li v-for="content in $store.getters.messageUpper" :key="content.index">
        {{ content }}
      </li>
    </ul>
    <ul>
      <h1>JSONmessageObj</h1>
      <li v-for="content in contentObj" :key="content.id">
        {{ JSON.stringify(content) }}
      </li>
    </ul>
  </div>
</template>


<script>
import { connect } from 'mqtt'
const client = connect('wss://mqttx.cn:8883/mqtt');
export default {
  data () {
    return {
      host: 'wss://mqttx.cn:8883/mqtt',
      msg: '我在这',
      cnt: 0,
      topic: 'json/test',
      subscribed: [],
      content: '',
      Time: '',
    }
  },
  mounted () {
    // 连接成功的回调方法
    this.subscribed = client._resubscribeTopics;
    client.on('connect', (connack) => {
      console.log(connack);
      console.log('connected');
      this.msg = '连接成功';
      // 订阅主题
      client.subscribe('test/topic', {
        qos: 1
      });
      client.subscribe('test/testhello', {
        qos: 1
      });
      client.subscribe('test/mqttfx', {
        qos: 1
      });
    });
    client.on('message', (topic, payload) => {
      let payloadtoString = payload.toString('utf-8');
      if (topic.substring(0, 4) === 'json') {
        this.$store.commit({
          type: 'getMessageObj',
          json: JSON.parse(payloadtoString),
        });
      } else {
        this.$store.commit({
          type: 'getMessage',
          message: payloadtoString,
          topic: topic
        });
      }
      if (payloadtoString.substring(0, 3) === 'SET') {
        console.log('设置....');
      } else if (payloadtoString.substring(0, 3) === 'GET') {
        let getTime = new Date();
        client.publish(topic, getTime.toLocaleString());
      }
    });
  },
  computed: {
    contentObj () {
      return this.$store.state.messageObj;
    }
  },
  watch: {
  },
  methods: {
    listTopic () {
      console.log(client._resubscribeTopics.valueOf());
      this.subscribed = client._resubscribeTopics;
    },
    subscribe (topic) {
      client.subscribe(topic, {
        qos: 1
      },
        () => {
          this.subscribed = client._resubscribeTopics;
          this.topic = '';
          console.log('subscribe:' + topic);

        });
    },
    unsubscribe (topic) {
      client.unsubscribe(topic,
        () => {

          this.subscribed = client._resubscribeTopics;
          this.topic = '';
          console.log(`unsubscribe: ${topic}`)

        });
    },
    publish (topic, content) {
      // 发布消息
      client.publish(topic, content, {
        qos: 1
      }, () => {
        console.log('publish / ' + topic + ':' + content);
      });
    },
  }
}

</script>

<style>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
</style>

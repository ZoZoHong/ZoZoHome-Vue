var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqttx.cn')

// 订阅test/topic主题
client.subscribe('test/topic');
// 收到消息的回调函数，这里直接打印到控制台
client.on('message', function (topic, payload) {
    console.log([topic, payload].join(': '));
});
// 每隔3秒发送随机数字到test/topic主题
setInterval(function () {
    client.publish('test/topic', Math.random().toString());
}, 3000);

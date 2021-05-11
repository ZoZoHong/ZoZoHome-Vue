<template>
  <div>
    <SmartAdd>
      <button>+</button>
    </SmartAdd>

    <div class="smartAdd">
      <input
        type="text"
        v-model="willAdd"
        name="add"
        placeholder="请输入想添加的任务"
      />
      <button @click="add(willAdd)">+</button>
    </div>

    <ul>
      <!--  @click="showDetail" -->
      <li v-for="(item, index) in todo" :key="item.index">
        {{ item.content }}
        <button @click="remove(index)">x</button>
        <!-- v-bind 绑定 才能自定义属性 -->
        <smartDetail v-show="isShowDetail" :title="item.detail"></smartDetail>
      </li>
    </ul>
  </div>
</template>

<script>
import SmartDetail from "./SmartDetail";
import SmartAdd from "./SmartAdd";
export default {
  name: "SmartTodo",
  components: {
    SmartDetail,
    SmartAdd,
  },
  props: {
    msg: {
      type: String,
      default: "test msg",
    },
  },
  data () {
    return {
      todo: [
        {
          id: 1,
          content: "我",
          detail: "哦哦哦哦哦",
        },
        {
          id: 2,
          content: "是",
        },
        {
          id: 3,
          content: "谁",
        },
      ],
      cnt: 3,
      isShowDetail: false,
      willAdd: "",
    };
  },
  mounted () { },
  methods: {
    add (temp) {
      let a = {
        content: temp,
        id: this.cnt++,
      };
      this.todo.push(a);
    },
    pop () {
      this.cnt--;
      this.todo.pop();
    },
    remove (index) {
      this.todo.splice(index, 1);
    },
    showDetail () {
      this.isShowDetail = !this.isShowDetail;
    },
  },
};
</script>

<style lang="">
</style>

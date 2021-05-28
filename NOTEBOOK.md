# 或许是一个笔记

## 一些坑 

### 修改Vuex的数据后,页面没有响应式渲染

需要等到下一个生命周期才会解决

- 如何解决:
    - 1.如何去触发,比如我修改了页面里面的一个v-model,其他的未渲染的数据,也会紧接着渲染
    - 2.如何在 Vue 组件中展示状态呢？由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性 (computed))中返回某个状态,但这样就太繁琐了没一个组件都需要
    - 3.使用mapState

    ```javascript
    computed: {
        count () {
        return store.state.count
        }
    } 
    ``` 

### 响应式

-   由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。深入响应式原理中有相关的讨论。
-   变更方法 列表渲染中的数组更新检测
-   push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
-   直接用 = 是不能响应式渲染的
-   需要 .set
-   使用sort将信息进去排序,完成响应式开发, 最后去理解一下响应式的原理,使用sort是因为vue刚好把响应式弄到他们身上


## mutation 
    只能放同步操作

## actions 
    可以包含任意异步操作,然后提交给mutation

## 明天修改一下排版哦

Everything up-to-date


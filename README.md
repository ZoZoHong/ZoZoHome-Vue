# readmd

- this is a learning notebook , 顺便写了一个项目,技术力可能有点低,但是都是真材实料
- 使用插件
  - vue-router 管理路由
  - vuex 管理状态
- 将来可能加入的功能
  - 调用摄像头整点活
  - 人脸识别
  - **mqtt** [github](https://github.com/ZoZoHong)

## 为了方便开发,这里使用git来管理版本

当要开发新功能,添加分支, 在分支中完成开发,然后在合并会master 然后删除分支
git checkout -b <分支名>
-b 创建并切换

git branch 检查分支

git merge <分支名> 到当前分支

git branch -d <分支名>

## 项目相关操作

### 一.起别名

    1. 目的解决路径相关的问题
    2. vuecli 脚手架解决路径问题

### 二. Vuex

    1. store -> 仓库 
    2. 核心概念
       1. state
       2. getter 
          1. 相当于computed 
       3. mutation 状态更新
          1. 事件类型 回调函数
          2. payload
          3. 要求是同步函数
       4. action 弥补mutation不能监听异步操作

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

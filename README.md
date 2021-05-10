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

## Project setup

```javascript
npm install
```

### Compiles and hot-reloads for development

```javascript
npm run serve
```

### Compiles and minifies for production

```javascript
npm run build
```

### Lints and fixes files

```linux
npm run lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

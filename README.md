# 基于rollup打包的vue组件仓库样例

这个是记录学习如何使用rollup打包项目的仓库，在工作中遇到的问题将会持续在这个仓库提交更新，如果你一样遇到此类问题希望能在issues见到你的反馈，PR更是欢迎👏

包含功能：

- 打包代码（支持Vue文件）
- 单元测试
- 测试覆盖报告

## 如何使用

```sh
git clone https://github.com/lpreterite/vue-component-rollup-example.git
```

下载到本地使用进入到目录下

```sh
npm install
```

等待安装完成后就能使用以下命令看效果了👍

### 包含命令

- `build`: 打包构建项目
- `watch`: 监听文件变化，基于rollup
- `test`: 测试并显示测试覆盖情况，基于nyc和mocha
- `pretest`: 测试前调用，构建代码
- `prepublish`: 发布前调用, 测试代码

#### 如何使用命令

```sh
// 打包构建项目
npm run build

// 监听文件变化
npm run watch

// 测试并显示测试覆盖情况
npm run test
```

### gulp命令

在写rollup配置的过程中遇到了一些问题，想用gulp的某些插件解决问题。要说意义嘛！我可以很肯定的说：没有任何意义😒！既然都写了就写完它，之后就有了gulp这部分的样例了🔨，看不下去的欢迎PR补充。

- `gulp` or `gulp:build`: 打包构建项目
- `watch`: 监听文件变化，基于gulp（目前有bug未解决，欢迎PR）
- `test`: 测试并显示测试覆盖情况，用`gulp-shell`调起`nyc mocha`

## 各插件功能及分工

- `rollup`：简单易用的打包工具，用在组件（或独立功能模块）的打包上是挺方便的。
- `mocha`：单元测试工具，你可以使用其他工具来替换他，不过这个仓库暂时没有其他测试工具的例子。
- `chai`：断言库，一般和测试工具一并使用。
- `nyc`：生成测试代码的覆盖报告工具，一般和测试工具一并使用。
- `reify`：能让你放心使用ES2015的库，在执行前引入就可以了，这个仓mocha测试运行时会预先加载所以测试代码也能安心使用ES2015代码。
- `jsdom`：模拟浏览器环境的工具，在测试vue组件时会用到。
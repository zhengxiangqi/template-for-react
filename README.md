# 基于React的网页开发模板，集成自动构建发布等功能


**项目结构**
1. app：用于存放具体项目代码
    1. libs：用于存放自己引入的一些js库，例如在npm找不到的库
    2. static：静态资源
        1. assets：其余类型资源，例如json文件
        2. fonts：用户字体
        3. images：网页中用到的图片资源
        4. favicon.ico：网页图标
        5. index.html：网页基础文件，用来引入各个样式文件与脚本文件
    3. styles：样式代码
        1. bootstrap.sass：自定义Bootstrap样式代码
        2. custom.sass：自定义的样式代码
        3. index.sass：样式文件入口，用来引入各个样式文件
    4. webpage：网页代码
        1. components：组件代码
        2. screens：各个界面的代码
2. build：编译系统代码
3. docs：文档系统代码
4. tmp：编译后生成，用于构建开发项目
5. dist：编译后生成，用于构建正式项目


**工程采用以下框架进行开发**
1. React：用于构建页面功能逻辑
2. ReactRouter：用于组织页面路由
3. Bootstrap4：用于加速UI组件开发
3. Lodash：用于加速js功能逻辑编写
4. Sass: Css结合Bootstrap开发语言Sass进行样式编写
5. Ddocsify: 使用Markdown格式编写项目文档


**工程采用以下框架进行编译发布**
1. gulp：用于流式任务执行
2. gulp相关的插件若干：用于辅助工程检查、编译及发布
3. webpack：用于打包js文件
4. babel：用于编译jsx格式文件
5. uglify：用于压缩js文件
6. sourcemap：用于生成js的map文件
7. jshint：用于js代码检查
8. csslint: 用于css代码检查


**gulp指令**
```bash
# 编译工程
gulp

# 启动本地服务来运行工程，并在文件改动时进行实时编译
gulp watch --dev

# 发布工程，需要先配置 build/release.js 文件的 host、user、remotePath 参数
# host: 服务器地址
# user: 服务器用户名
# remotePath: 服务器工程路径
gulp release
```


**npm指令**
```bash
# 首次启动工程时，需要执行此指令来安装依赖库
npm install

# 查看npm可执行指令
npm run

# 编译工程
npm run build

# 启动本地服务来运行工程
npm start

# 启动本地服务来运行工程，并在文件改动时进行实时编译
npm test

# 发布工程，需要先配置 build/release.js 文件的 host、user、remotePath 参数
# host: 服务器地址
# user: 服务器用户名
# remotePath: 服务器工程路径
npm run release
```

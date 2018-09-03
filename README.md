# 基于React的网页开发模板，集成自动构建发布等功能


**项目结构**
* app：用于存放具体项目代码
    * libs：用于存放自己引入的一些js库，例如在npm找不到的库
    * static：静态资源
        * assets：其余类型资源，例如json文件
        * fonts：用户字体
        * images：网页中用到的图片资源
        * favicon.ico：网页图标
        * index.html：网页基础文件，用来引入各个样式文件与脚本文件
    * styles：样式代码，目前采用sacc和css双模式开发，可提升编译效率及样式代码灵活性
        * bootstrap/index.scss：scss样式文件入口，用于引入sass样式代码
        * bootstrap/bootstrap.scss：用于自定义bootstrap样式
        * custom/index.css：自定义样式文件
        * custom/style.css：自定义样式文件
    * webpage：网页代码
        * components：组件代码
        * screens：各个界面的代码
* build：编译系统代码
* docs：文档系统代码
* tmp：编译后生成，用于构建开发项目
* dist：编译后生成，用于构建正式项目


**工程采用以下框架进行开发**
* React：用于构建页面功能逻辑
* ReactRouter：用于组织页面路由
* Bootstrap4：用于加速UI组件开发，目前采用sass和css双模式开发
* Lodash：用于加速js功能逻辑编写
* Sass: Css结合Bootstrap开发语言Sass进行样式编写
* Ddocsify: 使用Markdown格式编写项目文档


**工程采用以下框架进行编译发布**
* gulp：用于流式任务执行
* gulp相关的插件若干：用于辅助工程检查、编译及发布
* webpack：用于打包js文件
* rev：用于对文件进行md5命名，解决缓存问题
* rev-collector：用于对文件进行md5文件替换，解决缓存问题
* babel：用于编译jsx格式文件
* uglify：用于压缩js文件
* uglifycss：用于压缩css文件
* sourcemap：用于生成js的map文件
* csslint: 用于css代码检查
* jshint：用于js代码检查
* inject：用于动态注入css和js文件
* happypack：用于对gulp进行多线程编译
* inject-version：用于对文档注入package.json中的版本号


**gulp指令**
```bash
# 编译工程
gulp

# 启动本地服务来运行工程，并在文件改动时进行实时编译，首次运行工程需要先编译一次工程后再启动
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

# 启动本地服务来运行工程，首次运行工程需要先编译一次工程后再启动
npm start

# 启动本地服务来运行工程，并在文件改动时进行实时编译，首次运行工程需要先编译一次工程后再启动
npm test

# 发布工程，需要先配置 build/release.js 文件的 host、user、remotePath 参数
# host: 服务器地址
# user: 服务器用户名
# remotePath: 服务器工程路径
npm run release
```

/*
webpack是一个前端打包工具
    1: 安装
        要使用npm 就必须先安装 nodejs
        ①: npm install webpack -g
            webpack -v 查看版本号
    使用:
        1: npm init
        2: npm install webpack -D 安装webpack依赖
        3: 一次打包多个文件,需要配置一个文件 webpack.config.js(根目录)
        4: webpack 输出即可
            每次使用cmd，除了可以webpack回车打包以外，

            还可以在`package.json`里的`scripts`下，添加一个属性`start`值为`webpack`

            这样以后使用就可以在cmd里输入：`npm start`，跟前面输入webpack一样的效果

            **ps**:`start`是一个关键字，如果需要自定义如：`fy`

            那么使用的就不能`npm fy`，而是需要`npm run fy`
        5: loaders
            Loaders是webpack中最核心的功能，通过使用不同的loader，webpack通过调用外部的脚本或工具,
            可以对各种文件进行处理，比如说：分析json文件并把它转为JavaScript文件,
            或者把es6的代码转为es5，还可以把react的JSX转为js文件等等

            Loaders需要单独安装并在`webpack.config.js`下的`module`下进行配置，配置包括以下几方面：
                1. test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
                2. use：一个数组，里面是对象，对象里是`loader：css-loader`这种类型
                    ag: 使用json的loader
                        npm install json-loader -D
                        json-loader不需要需要配置文件
                        webpack提供两个工具处理样式表，`css-loader`和`style-loader`：`
                            css-loader使你能够使用类似@import和url(...)的方式实现require()的功能
                            style-loader将所有的样式计算后，加入页面。两者组合在一起使你能够把样式表嵌入webpack打包的文件里
                npm install --save-dev style-loader css-loader
                 module:{
                    rules:[
                        {
                            test:/\.css$/,
                            use:[
                                {loader:"style-loader"},
                                {loader:"css-loader"}
                            ]
                        }
                    ]
                 }

 */
//webpack.config.js
module.exports = {
    //__dirname是 nodejs里的一个全局变量，它指向的是项目的根目录
    entry:__dirname + "/app/main.js", //入口文件路径，例如入口文件是：根目录下的app文件夹里的main.js
    output:{
        //设置出口文件（打包后的文件）位置
        path:__dirname+"/public/",
        //出口文件名
        filename:"index.js"
    }
}
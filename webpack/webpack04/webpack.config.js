const path=require('path')
module.exports = {
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            // css-loader只负责css文件进行加载
            // style-loader负责将样式添加到loader中
            // 使用多个loader时会从右向左编译
            use: ['style-loader','css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    //当加载的图片小于limit时，会将图片编译成
                    //base64字串形式
                  limit: 20000,
                  name:'img/[name].[hash:8].[ext]' 
                },

              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              } 
            }
          },
        ]
      },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      }
    }
}
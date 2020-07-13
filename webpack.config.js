const path = require('path')
module.exports = {
  mode: "development",
  entry : {
    main : "./src/app.js"
  },
  output : {
    path : path.resolve("./dist"),
    filename: "[name].js"
  },
  module: {
    rules: [{      
      // 로더가 처리 할 패턴(정규 표현식)
      // test: /\.js$/,
      // 사용 할 loader를 명시함
      // use: [
      //   path.resolve('./my-webpack-loader.js')
      // ]
      test: /\.css$/,
      // css를 모듈로 바꿔 주는 loader
      // css를 style로 바꿔 주는 로더
      use: [
        'style-loader',
        'css-loader'
      ],
    },
    {
      // 이미지 혹은 파일을 파싱하는 로더
      // 이미지 파일명은 헤쉬 값으로 바꿈
      test: /\.(jpg|png|svg|gif)$/,
      loader: 'url-loader',
      options: {
        // 경로 앞에 추가하는 이름
        publicPath: './dist/',
        name: '[name].[ext]?[hash]',
        limit: 2000000,
      },
    }]
  }
}
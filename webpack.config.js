const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // publicPath: './dist/',
        name: '[name].[ext]?[hash]',
        limit: 2000000,
      },
    }]
  },
  // 번들 파일에 대해서 1번 실행 
  plugins: [
    // 주석으로 정보를 넣을 수 있는 플러그인
    new webpack.BannerPlugin({
      banner: () => `빌드 날짜: ${new Date().toLocaleString()}`,
    }),
    // 환경 변수를 주입 할 때 사용하는 플러그인
    new webpack.DefinePlugin({
      TWO: JSON.stringify('1+1'),
      'api.domain': JSON.stringify('aaa'),
    }),
    // index.html도 웹팩에서 관리 하겠다는 뜻의 플러그인
    new HtmlWebpackPlugin({
      template: './index.html', // 템플릿 경로를 지정
      templateParameters: { // 템플릿에 주입할 파라매터 변수 지정
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '', 
      },
    })
  ]
} 
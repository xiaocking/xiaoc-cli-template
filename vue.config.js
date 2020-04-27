const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  lintOnSave: true, //eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 不生成map文件
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
    config.plugin("html").tap((args) => {
      args[0].title = "{{name}}";
      args[0].favicon = path.resolve("./public/favicon.ico");
      return args;
    });
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/lib/css/_variables.scss";`, // 所有页面文件引入scss公共变量
  //     },
  //   },
  // },
  devServer: {
    port: 8080,
    // historyApiFallback: true,
    // proxy: {
    //   "/api": {
    //     target: "http://xxxx:8088/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       //重写路径
    //       "^/api": "/"
    //     }
    //   }
    // }
  },
};

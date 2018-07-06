// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    //"autoprefixer": {}
    "postcss-aspect-ratio-mini": {//主要用来处理元素容器宽高比，在实际使用的时候具有一个默认的结构
    },
    "postcss-write-svg": {//主要用来处理移动端1px的解决方案，该插件主要使用的是border-image和background来做1px的相关处理
      utf8: false
    },
    //由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {//主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一。
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
    "postcss-viewport-units":{//主要是给css的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin、和vmax做适配的操作。这是实现vw布局必不可少的一个插件
    },
    "cssnano": {//主要用来压缩和清理CSS代码
      preset: "advanced", //需另外安装cssnano-preset-advanced
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}

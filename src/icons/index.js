import SvgIcon from '@/components/SvgIcon/index.vue'
// 1. 导入所有的 svg

/*
返回svgRequire函数 可以接收 request 的参数 用于require导入
该函数 有三个属性 可以通过其中的 svgRequire.keys（） 获取所有的 svg 图标
// 遍历图标 把图标作为 request参数 传入svgRequire 导入函数中 完成本地图标注册
*/
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => {
  svgRequire(svgIcon)
})
// 2.完成 SvgIcon的全局注册

export default (app) => {
  app.component('svg-icon', SvgIcon)
}

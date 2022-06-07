// 通过 router.getRouters()获取全部的路由信息是有些问题的
// 需要将数据进一步的 进行一些调整
// import path from 'path'
const path = require('path')

// 子级路由
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

// 脱离层级的路由
export const filterRouters = (routes) => {
  // 查询所有的子级路由
  const childrenRoute = getChildrenRoutes(routes)

  // 根据子级路由进行查询操作 过滤
  return routes.filter((route) => {
    // 通过find 进行查重操作
    return !childrenRoute.find((cRoute) => {
      // 根据一级路由 路径判定是否为重复路由
      return cRoute.path === route.path
    })
  })
}

/**
 * 判断数据是否为空值
 */
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

// 根据 routes数据 返回对应的 menu 规则数据
export const generateMenus = (routes, basePath = '') => {
  const result = []
  // 遍历路由表
  routes.forEach((item) => {
    // 不存在 children && 不存在 meta 直接 return
    if (isNull(item.meta) && isNull(item.children)) return
    // 存在 children 不存在 meta，进入迭代
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 合并 path 作为跳转路径
    const routePath = path.resolve(basePath, item.path)
    // 路由分离之后，存在同名父路由的情况，需要单独处理
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      // icon 与 title 必须全部存在
      if (route.meta.icon && route.meta.title) {
        // meta 存在生成 route 对象，放入 arr
        result.push(route)
      }
    }

    // 存在 children 进入迭代到children
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}

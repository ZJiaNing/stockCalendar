import Index from '../components/Index.vue'   // 每日特别提醒
import Announcement from '../components/Announcement.vue' // 公告信息

// 我们晚点在讨论嵌套路由。
// 这次进行嵌套路由比较清楚，，增加一个children就可以了
const routes = [{
  path: '/index',
  component: Index
}, {
  path: '/announcement',
  component: Announcement
},{
  path: '*',
  redirect: '/index'
}]

export default routes

// 或者这么写 export {routes}

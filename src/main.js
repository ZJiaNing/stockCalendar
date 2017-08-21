import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import App from './components/App.vue';

// 这边之后不可以这么把整个都打包进去，这样无疑会导致速度的下降的！！！
import ElementUI from 'element-ui'

// 注册插件，注册完之后才可以使用的
Vue.use(VueRouter);
Vue.use(ElementUI);

// 引入路由
const router = new VueRouter({
  routes
});


// Vue.config.keyCodes = {
//   enter: 13
// }


new Vue({
  router,
  // ES6新语法，箭头函数
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import App from './components/App.vue';

import ElementUI from 'element-ui'


// 注册插件，注册完之后才可以使用的
Vue.use(VueRouter);
Vue.use(ElementUI);

// 引入路由
const router = new VueRouter({
  routes
});

// new Vue({
//   el: '#app',
//   render: h => h(App),
// });
new Vue({
  router,
  // ES6新语法，箭头函数
  render: h => h(App)
}).$mount('#app')

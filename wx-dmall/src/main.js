// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import CommonLayout from './layout/common'
import IndexLayout from './layout/index'

import home from './pages/home'

// import router from './router'

// Vue.config.productionTip = false
Vue.use(Router)


let router = new Router({
  routes: [
    // {
    //   path: '/index/*',
    //   name: 'index',
    //   component: IndexLayout
    // },
    {
      path: '/*',
      name: 'common',
      component: CommonLayout
    }
  ]
});

let pageMap = {
  home:home
};



router.beforeEach(function(to,from,next){
  let pathArr = to.path.split('/');
  switch(pathArr.length>0){
    case pathArr[1] === 'index':
      var pageComponent = pageMap[pathArr[1]];
  console.log(to,from,next,pathArr,333);
      router.addRoutes([
        {
          path:to.path,
          name:'abcderf',
          component:IndexLayout
        }
      ]);
      break;
  }
  console.log(router);
  next();
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

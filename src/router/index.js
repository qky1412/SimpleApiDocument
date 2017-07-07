import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout.vue'
import ZZMJApi from '../views/zzmj/Api.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Layout,
      children: [
        {name: 'zzmjapi', path: 'zzmj/api', component: ZZMJApi}
      ]
    },
    { path: '/', redirect: 'admin/zzmj/api' }
  ]
})

import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Marke from './views/Marke'
import Main from './views/Main'
import Website from './views/Website'
import Person from './views/Person'
import Shop from './views/Shop'

import Portrait from './views/chart/portrait'
import Effective from './views/chart/effective'
import Volume from './views/chart/volume'
import Deal from './views/chart/deal'
import Cycle from './views/chart/cycle'
import Fail from './views/chart/fail'
import Overall from './views/chart/overall'

import Notice from './views/marke/notice'
import Words from './views/marke/words'
import Source from './views/marke/source'

import Delivery from './views/website/delivery'
import Monitor from './views/website/monitor'

import Department from './views/person/department'
import PersonStaff from './views/person/staff'

import Manager from './views/shop/manager'
import ShopStaff from './views/shop/staff'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '登录',
    component: Login,
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    children: [
      {
        path: '/main',
        component: Main,
        name: '统计报表',
        children: [
          {
            path: '/main/portrait',
            name: '群体画像',
            component: Portrait
          },
          {
            path: '/main/effective',
            name: '有效集客率',
            component: Effective
          },
          {
            path: '/main/volume',
            name: '车型销量',
            component: Volume
          },
          {
            path: '/main/deal',
            name: '成交量统计',
            component: Deal
          },
          {
            path: '/main/cycle',
            name: '客户成交周期',
            component: Cycle
          },
          {
            path: '/main/fail',
            name: '战败原因',
            component: Fail
          },
          {
            path: '/main/overall',
            name: '线索全局统计',
            component: Overall
          }
        ]
      }, {
        path: '/marke',
        component: Marke,
        name: '营销管理',
        children: [
          {
            path: '/marke/words',
            name: '话术管理',
            component: Words
          },
          {
            path: '/marke/source',
            name: '素材管理',
            component: Source
          },
          {
            path: '/marke/notice',
            name: '通知管理',
            component: Notice
          }
        ]
      }, {
        path: '/website',
        component: Website,
        name: '网站管理',
        children: [
          {
            path: '/website/monitor',
            name: '网站监测',
            component: Monitor
          },
          {
            path: '/website/delivery',
            name: '投放助手',
            component: Delivery
          }
        ]
      }, {
        path: '/person',
        component: Person,
        name: '人员管理',
        children: [
          {
            path: '/person/department',
            name: '部门管理',
            component: Department
          }, {
            path: '/person/staff',
            name: '员工管理',
            component: PersonStaff
          }
        ]
      }, {
        path: '/shop',
        component: Shop,
        name: '门店管理',
        children: [
          {
            path: '/shop/manager',
            name: '门店管理',
            component: Manager
          }, {
            path: '/shop/staff',
            name: '店员管理',
            component: ShopStaff
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({ routes: routes });

router.beforeEach((to, from, next) => {
  next();
})
router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router;

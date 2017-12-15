import app from './app.vue'
import router from './router'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import './index.less'

window.onload = function(){
  new Vue({
    router,
    el: 'app',
    components: {
      app
    }
  });
}


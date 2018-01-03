import app from './app.vue'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import './index.less'

Vue.prototype.$echarts = echarts

window.onload = function(){
  new Vue({
    router,
    el: 'app',
    components: {
      app
    }
  });
}


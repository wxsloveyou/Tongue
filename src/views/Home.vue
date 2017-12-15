<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- <img class="logo" src="../assets/logo.png" alt="logo"> -->
      </el-header>
      <el-container>
        <el-aside width="230px" :style="{ height: menuHeight + 'px' }">
          <el-menu class="el-menu-vertical-demo" router unique-opened>
            <el-submenu index="form">
              <template slot="title">统计报表</template>
              <el-menu-item-group>
                <el-menu-item index="/main/portrait">群体画像</el-menu-item>
                <el-menu-item index="/main/effective">有效集客率</el-menu-item>
                <el-menu-item index="/main/volume">车型销量</el-menu-item>
                <el-menu-item index="/main/deal">成交量统计</el-menu-item>
                <el-menu-item index="/main/cycle">客户成交周期</el-menu-item>
                <el-menu-item index="/main/fail">战败原因</el-menu-item>
                <el-menu-item index="/main/overall">线索全局统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="marke">
              <template slot="title">营销管理</template>
              <el-menu-item-group>
                <el-menu-item index="/marke/words">话术管理</el-menu-item>
                <el-menu-item index="/marke/source">素材管理</el-menu-item>
                <el-menu-item index="/marke/notice">通知管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="website">
              <template slot="title">网站管理</template>
              <el-menu-item-group>
                <el-menu-item index="/website/monitor">网站监测</el-menu-item>
                <el-menu-item index="/website/delivery">投放助手</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="person">
              <template slot="title">人员管理</template>
              <el-menu-item-group>
                <el-menu-item index="/person/department">部门管理</el-menu-item>
                <el-menu-item index="/person/staff">员工管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="shop">
              <template slot="title">门店管理</template>
              <el-menu-item-group>
                <el-menu-item index="/shop/manager">门店管理</el-menu-item>
                <el-menu-item index="/shop/staff">店员管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="system">
              <template slot="title">系统管理</template>
              <el-menu-item-group>
                <el-menu-item index="/personal">个人信息</el-menu-item>
                <el-menu-item index="/login">退出登录</el-menu-item>
                <el-menu-item index="/reset">重置密码</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main :style="{ height: menuHeight + 'px' }">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaPath: [],
      menuHeight: 500,
      msg_num: 3
    }
  },
  mounted() {
    this.menuHeight = window.innerHeight - 60
  },
};
</script>

<style lang="scss">
.logo {
  height: 50px;
  padding-top: 5px;
  display: block;
  margin: 0 auto;
}
.el-header {
  background-color: #409EFF;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #FFF;
  color: #333;
  padding: 0;
}
</style>

<template>
  <div class='marke'>
    <el-row :gutter="10">
      <el-col :span="24">
      <el-card class="box-card">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
      </el-col>
    </el-row>
    <router-view/>
    <!-- <notice-marke v-if="pagePath == 'notice'" ></notice-marke>
    <words-marke v-if="pagePath == 'words'" ></words-marke>
    <source-marke v-if="pagePath == 'source'" ></source-marke> -->
  </div>
</template>

<script>
export default {
  name: 'marke',
  data() {
    return {
      pagePath: '',
    };
  },
  mounted() {
    // this.pagePath = this.$route.params.username;
  },
  methods: {
    init(username) {}
  },
  watch: {
    $route(to, from) {
      console.log('This is Marke.vue page')
    }
  }
};
</script>

<style lang='scss' scoped>
.media-el-col {
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  padding: 10px;
}
</style>

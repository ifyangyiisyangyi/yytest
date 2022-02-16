<template>
  <el-container>
    <el-header>
      <!-- 导航菜单 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/tools">工具</el-menu-item>
        <el-menu-item index="/home">轮播图</el-menu-item>
        <el-menu-item index="/echarts">echarts</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/index",
    };
  },
  methods: {
    handleSelect(key) {
      // console.log(key);
      this.$router.push(key);
    },
  },

  components: {},
};
</script>

<style>
</style>

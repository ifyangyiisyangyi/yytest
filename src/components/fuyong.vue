<template>
<div>
   <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="vertical"
        :collapse="isCollapse"
        @select="handleSelect"
      >
        <el-menu-item index="/index">
          <i class="el-icon-s-home"></i>
          <router-link to="/home">首页</router-link>
        </el-menu-item>
        <el-submenu >
            <template slot="title">
          <i class="el-icon-setting"></i>
          <span>工具</span>
            </template>
              <el-menu-item index="/tools">工具一</el-menu-item>
              <el-menu-item index="/">工具二</el-menu-item>
              <el-menu-item index="/">工具三</el-menu-item>
              <el-menu-item index="/">工具四</el-menu-item>
        </el-submenu>

        <el-menu-item>
          <i class="el-icon-document"></i>
          <router-link to="/qaReport">测试报告</router-link>
        </el-menu-item>
        <el-menu-item index="/home">
          <i class="el-icon-picture"></i>
          <span>轮播图</span>
        </el-menu-item>
        <el-menu-item>
          <i class="el-icon-s-data"></i>
          <router-link to="/echarts">echarts</router-link>
        </el-menu-item>
        <!-- <el-menu-item index="/login">登录</el-menu-item> -->
      </el-menu>
    </el-submenu>
</div>

  
</template>
<script>
export default {
  name: "fuyong",
};
</script>
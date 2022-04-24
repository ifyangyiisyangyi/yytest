<template>
  <el-container>
    <el-aside width="200px">
      <!-- 导航菜单 -->
      <navigation></navigation>
    </el-aside>

    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24" style="text-align: right; padding-right: 30px">
            <el-button
              plain
              size="medium"
              @click="login"
              v-if="isLogin"
              >退出登录</el-button
            >
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import navigation from "./Navigation.vue";
export default {
  components: { navigation },
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log("token:" + localStorage.getItem("token"));
      if (localStorage.getItem("token") === "") {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
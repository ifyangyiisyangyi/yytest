<template>
  <!-- 登录 -->

  <el-container>
    <div class="login_box">
      <el-form
        :model="user"
        :rules="rules"
        ref="user"
        label-width="100px"
        class="loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 20 个字符", trigger: "blur" },
        ],
      },
      user: {
        username: "",
        password: "",
      },
      userToken: "", // 用于存储从后台获取的token
    };
  },
  methods: {
    login() {
      // 登录接口
      this.$http({
        method: "POST",
        url: "http://yycode.com.cn:8030/login",
        data: {
          username: this.user.username,
          password: this.user.password,
        },
        headers: {
          token: sessionStorage.getItem("token"),
        },
      })
        .then((res) => {
          // 将token存到userToken中
          this.userToken = res.data.data.token;
          // 将token本地存储到回话中
          localStorage.setItem("token", this.userToken);
          // 如果code为200则跳转到NewReport页面
          if (res.data.code === 200) {
            this.$router.push('/home');
            this.$message({
              message: "恭喜你，登录成功",
              type: "success",
            });
          } else {
            this.$message.error(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!--加上scoped是将样式应用于此组件，不加是全局-->
<style lang="sss" scoped>
.login_box {
  width: 450px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  /* 容器内居中 */
  position: absolute;
}
.loginForm {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>>
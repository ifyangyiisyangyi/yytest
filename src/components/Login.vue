<template>
  <el-form
    :model="ruleForm"
    status-icon

    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input
        type="username"
        v-model="ruleForm.username"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
    this.$http(
        {
            method:"POST",
            url:"http://yycode.com.cn:8030/login",
            data:{
                username:this.ruleForm.username,
                password:this.ruleForm.password
            }
        }
    ).then((res) => {
        console.log("hello")
        sessionStorage.setItem('token', res.data.data.token);
    })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
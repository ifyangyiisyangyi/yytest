<template>
  <div>
    <el-row>
      <el-col :span="8">
        <i class="el-icon-s-fold"></i>
      </el-col>
      <el-col :span="16" style="text-align: right; padding-right: 30px">
        <el-button plain size="medium" @click="login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>
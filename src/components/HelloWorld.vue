<template>
  <div class="hello">
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  name: "HelloWorld",
  components: {
    Footer,
  },
};
</script>

<style scoped>
</style>

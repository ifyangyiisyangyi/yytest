<template>
  <el-table :data="links" style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="link" label="链接" width="300"> </el-table-column>
    <el-table-column prop="describe" label="描述" width="180"></el-table-column>
    <el-table-column label="操作" width="180">
      <el-button type="success" plain size="mini">复制</el-button>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  data() {
    return {
      links: [
        
      ],
    };
  },
  created() {
    this.$http
      .get("http://rap2api.taobao.org/app/mock/data/2146859")
      .then((res) => {
        this.links = res.data.result;
        console.log(this.links);
        console.log(res.data.result);
      });
  },
};
</script>
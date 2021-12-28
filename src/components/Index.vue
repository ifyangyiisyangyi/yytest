<template>
  <el-table :data="links" style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="link" label="链接" width="300"> </el-table-column>
    <el-table-column prop="describe" label="描述" width="180"></el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button type="success" plain size="mini">复制</el-button>
        <el-button @click="del(scope.row.id)" type="danger" plain size="mini"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  // 不要在created中执行初始化方法,尽量用mounted()
  mounted() {
    this.$http.get("http://yycode.com.cn:8030/linkage/list").then((res) => {
      this.links = res.data;
    });
  },
  methods: {
    del(id) {
      this.$http
        .get("http://localhost:8030/linkage/del?id=" + id)
        .then((res) => {
          this.res = res.data;
          if (res.data == true) {
            alert("删除成功");
          }
          this.$http
            .get("http://yycode.com.cn:8030/linkage/list")
            .then((res) => {
              this.links = res.data;
            });
        });
    },
  },
};
</script>
<template>
  <el-table :data="links" style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="link" label="链接" width="300"> </el-table-column>
    <el-table-column prop="describe" label="描述" width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: "1",
          name: "百度",
          link: "https://www.baidu.com",
          describe: "百度链接",
        },
        {
          id: "2",
          name: "谷歌",
          link: "https://www.google.com",
          describe: "谷歌链接",
        }
      ],
    };
  },
  created() {
    this.$http
      .get("http://rap2api.taobao.org/app/mock/data/2146859")
      .then((res) => {
        this.links = [
        {
          id: "1",
          name: "百度",
          link: "https://www.baidu.com",
          describe: "百度链接",
        },
        {
          id: "2",
          name: "谷歌",
          link: "https://www.google.com",
          describe: "谷歌链接",
        }
      ];
        console.log(this.links);
        console.log(res.data.result);
      });
  },
};
</script>
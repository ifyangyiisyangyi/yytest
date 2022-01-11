<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="50"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagesize=val;
      this.currentPage=1;
    },
  },
  data() {
    return {
      currentPage: 1,
      totalCount: 1,
      pageSizes: [10, 20, 50, 100],
      pagesize: 1,
    };
  },
};
</script>
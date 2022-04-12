<template>
  <div>
    <div>
      <el-table :data="records" style="width: 100%" height="580" border>
        <el-table-column prop="id" label="id" width="180" align="center">
        </el-table-column>
        <el-table-column
          prop="prdAddr"
          label="prd地址"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="devAddr"
          label="开发文档地址"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="qa" label="QA" width="180" align="center">
        </el-table-column>
        <el-table-column prop="dev" label="开发人员" width="180" align="center">
        </el-table-column>
        <el-table-column
          prop="bugAddr"
          label="bug地址"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="openBug"
          label="open bug"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="closeBug"
          label="close bug"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="totalBug"
          label="total bug"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="summary" label="总结" width="180" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      records: [],
      form: {
        id: "",
        prdAddr: "",
        devAddr: "",
        qa: "",
        dev: "",
        bugAddr: "",
        openBug: "",
        closeBug: "",
        totalBug: "",
        summary: "",
      },
      currentPage: 1,
      totalCount: 1,
      pageSizes: [10, 30, 50, 100],
      pageSize: 10,
    };
  },
  mounted() {
    this.list(this.currentPage, this.pageSize);
  },
  methods: {
    list(pageNum, pageSize) {
      this.$http
        .post("http://yycode.com.cn:8030/qa/report/list", {
          pageNum: pageNum,
          pageSize: pageSize,
        })
        .then((res) => {
          this.records = res.data.data.records;
          console.log(this.records);
          this.totalCount = res.data.data.total;
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.list(this.currentPage, this.pageSize);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.list(this.currentPage, this.pageSize);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <el-button @click="add" type="primary" plain size="mini">新增</el-button>
      <el-table :data="links" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column label="链接" width="300">
          <template slot-scope="scope">
            <a :href="scope.row.link" target="_blank">{{ scope.row.link }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="describe"
          label="描述"
          width="180"
        ></el-table-column>
        <el-table-column label="操作" width="240">
          <template slot-scope="scope">
            <el-button
              @click="edit(scope.$index, scope.row)"
              type="primary"
              plain
              size="mini"
              >编辑</el-button
            >
            <el-button
              @click="copy(scope.row.link)"
              type="success"
              plain
              size="mini"
              >复制</el-button
            >
            <el-button
              @click="del(scope.row.id)"
              type="danger"
              plain
              size="mini"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <el-form :model="form">
          <el-form-item label="名称" label-width="50px">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="链接" label-width="50px">
            <el-input v-model="form.link"></el-input>
          </el-form-item>
          <el-form-item label="描述" label-width="50px">
            <el-input v-model="form.describe"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="createData()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [],
      dialogVisible: false,
      title: null,
      form: {
        id: "",
        name: "",
        link: "",
        describe: "",
      },
    };
  },
  // 不要在created中执行初始化方法,尽量用mounted()
  mounted() {
    this.$http.get("http://yycode.com.cn:8030/linkage/list").then((res) => {
      this.links = res.data;
    });
  },
  methods: {
    add() {
      this.title = "新增";
      this.form = {
        name: "",
        link: "",
        describe: "",
      };
      this.dialogVisible = true;
    },
    edit(index, row) {
      this.title = "编辑";
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.link = row.link;
      this.form.describe = row.describe;
      console.log(index, row.id);

      this.dialogVisible = true;
    },
    createData() {
      let form = null;
      form = this.form;
      const params = {
        id: form.id,
        name: form.name,
        link: form.link,
        describe: form.describe,
      };
      // 用id是否为空判断调用add还是update
      if (!form.id) {
        console.log("添加时的id是:" + form.id);
        this.$http
          .post("http://yycode.com.cn:8030/linkage/add", params)
          .then((res) => {
            this.res = res.data;
            alert("添加成功"); // alert 是异步的， mark：可以把接口调用的返回结果再赋值给data里的数据
            this.$http
              .get("http://yycode.com.cn:8030/linkage/list")
              .then((res) => {
                this.links = res.data;
              });
          });
      } else {
        console.log("编辑时的id是" + form.id);
        this.$http
          .post("http://yycode.com.cn:8030/linkage/update", params)
          .then((res) => {
            this.res = res.data;
            alert("更新成功");
            this.$http
              .get("http://yycode.com.cn:8030/linkage/list")
              .then((res) => {
                this.links = res.data;
              });
          });
      }

      this.dialogVisible = false;
    },
    del(id) {
      this.$http
        .get("http://yycode.com.cn:8030/linkage/del?id=" + id)
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
    copy(link) {
      console.log(link); // 打印链接
      var input = document.createElement("input"); //构建input
      input.value = link;
      document.body.appendChild(input); //添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      alert("复制链接成功");
      document.body.removeChild(input); // 删除临时实例
    },
    handleClose(done) {
      this.$confirm("确认关闭?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
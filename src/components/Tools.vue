<template>
  <el-row>
    <el-col :span="5" v-for="(o, index) in data" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ index }}</span>
        </div>
        <div v-for="(value, name) in o" class="text item">
          {{ name }} : {{ value }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.$http
      .get("http://rap2api.taobao.org/app/mock/data/2158617")
      .then((res) => {
        this.data = res.data;
      });
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 200px;
}
</style>
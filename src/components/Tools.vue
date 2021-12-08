<template>
  <el-row>
    <el-col
      :span="2"
      v-for="(o, index) in 2"
      :key="o"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>订单</span>
        </div>
        <div v-for="(value, name) in data" class="text item">
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
      data: {
        UnknowStatus: 0,
        Unpaid: 1,
        Cancelled: 2,
        Paid: 3,
        Expired: 4,
        Shipped: 5,
        Received: 6,
        Complete: 7,
      },
    };
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
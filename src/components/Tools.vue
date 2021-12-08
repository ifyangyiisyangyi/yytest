<template>
  <el-row>
    <el-col
      :span="5"
      v-for="(o, index) in data"
      :key="o"
    >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{index}}</span>
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
      data: {
        order: {
          UnknowStatus: 0,
          Unpaid: 1,
          Cancelled: 2,
          Paid: 3,
          Expired: 4,
          Shipped: 5,
          Received: 6,
          Complete: 7,
        },
        refundOrder: {
          UnknowState: 0,
          ToBeReviewed: 1,
          ToBeRefounded: 2,
          Refounded: 3,
          Failed: 4,
        },
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
<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in imgs" :key="item">
          <el-image
      :src="item"
      style="height:500px "
      fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
export default {
  name: "Home",
  data() {
    return {
      imgs: [img1, img2],
    };
  },
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
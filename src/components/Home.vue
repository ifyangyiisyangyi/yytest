<template>
  <table border="3">
    <tr>
      <td>id</td>
      <td>姓名</td>
      <td>密码</td>
      <td>操作</td>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.password }}</td>
      <td><a href="">删除</a></td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {},
  components: {},
  created() {
    this.$http
      .get("http://rap2api.taobao.org/app/mock/data/2146726")
      .then((res) => {
        this.users = res.data.result;
        console.log(this.users);
      });
  },
};
</script>

<style>
</style>
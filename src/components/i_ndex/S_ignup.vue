<template>
  <div class="container-fluid">
  <div class="row suss_h">
  <div class="col-xs-3">
    <span>成功报名</span>
      <p>12,450,732</p>
  </div>
  <div class="col-xs-3">
    <span>累计报名</span>
      <p>12,450,732</p>
  </div>
  <div class="col-xs-6 ">
    <form action="">
    <input type="text" class="col-6" value="请输入手机号码">
    <button type="submit" class="signup" >立即报名</button>
</form>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.suss_h {
 margin-top: 10px;
  background-color: bisque;
  text-align: center;
}
.suss_h  span{
  font-size: 14px;
  line-height: 35px;
}

.col-6{
  margin: 5px;
  border-radius: 4px;
  border-color: #ffaa00;
  width: 80%;
  text-align: center;
}
.signup{
  border-radius: 4px;
  background-color: #ffaa00;
  text-align: center;
  border: 1px;
  width: 80%;
  height: 25px;
  font-size: 16px;
  line-height: 1px;
}
input{
  height: 25px;
  font-size: 16px;
}
</style>

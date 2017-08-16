<template>
  <div class="">
    <ul class="nav">
      <li><router-link active-class="active" to="/index"><i class="el-icon-star-off"></i>每日特别提醒</router-link></li>
      <li><router-link active-class="active" to="/announcement"><i class="el-icon-star-off"></i>公告信息</router-link></li>
      <!-- <li><i class="el-icon-star-off"></i><a href="#">每日特别提醒</a></li>
      <li><i class="el-icon-star-off"></i><a href="#">公告信息</a></li> -->
    </ul>
  </div>
</template>


<script type="text/javascript">
  export default{}
</script>

<style media="screen">
  .nav li{
    position: relative;
  }
  .nav li a{
    font-size: 14px;
    color: #323437;
    text-decoration: none;
    text-indent: 10px;
    display: inline-block;
    width: 100%;
    height: 46px;
    line-height: 46px;
  }
  .nav li:hover a, .nav li a.active{
    color: #4288fa;
    background-color: #f3f4f4;
  }
  .nav li a>i{
    padding-right: 5px;
  }
</style>

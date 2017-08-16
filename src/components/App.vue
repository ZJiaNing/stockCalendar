<template>
  <div class="main">
    <nav>
      <VSidebar />
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sidebar from './Sidebar.vue'
  import 'element-ui/lib/theme-default/index.css'
  export default {
    components: {
      VSidebar: Sidebar
    }
  }
</script>

<style media="screen">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main{
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
  .main nav{
    min-height: 100vh;
    position: fixed;
    left: 0;
    width: 179px;
    background-color: #fbfbfb;
  }
  .container{
    width: calc(100% - 179px);
    margin-left: 179px;
    height: auto;
    background-color: #ececec;
  }
</style>

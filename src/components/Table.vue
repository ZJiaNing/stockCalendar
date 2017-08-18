<template>
  <div class="table">
    <p class="table-title">当前有N家公司入驻</p>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default{
    data() {
      return {
        msg: 'This is Table Component.'
      }
    },
    methods: {

    }
  }
</script>

<style media="screen" scoped>
  .table{
    margin: 0 10px;
  }
  .table table{
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
  }

  .table table thead th, .table table tbody td{
    text-align: left;
    font-weight: normal;
    font-size: 13px;
    line-height: 35px;
    height: 35px;
    border: 1px solid #e1e3e4;
    padding-left: 10px;
  }
  .table table tbody tr:hover{
    background-color: lightyellow;
  }
  .table .table-title{
    background-color: #f5f5f5;
    height: 64px;
    line-height: 64px;
    color: #323437;
    border: 1px solid #e1e3e4;
    border-bottom: none;
    padding-left: 23px;
    font-size: 14px;
  }
</style>

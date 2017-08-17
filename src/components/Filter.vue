<template>
  <div class="filter">
    <div class="filter-content">
      <!-- 检索条件 starts -->
      <div class="filter-citem">
        <ul>
          <li v-for="item in option.stocktype"><a href="javascript:void(0)" :class="{selected: type === item.type}" @click="type = item.type">{{item.name}}</a></li>
        </ul>
      </div>
      <!-- 检索条件 ends -->
      <!-- 日期选择控件 starts -->
      <div class="filter-date" v-if="option.datepicker">
        <el-date-picker
          v-model="date"
          type="date"
          :editable="false"
          format="yyyy-MM-dd"
          placeholder="日期查询">
        </el-date-picker>
      </div>
      <!-- 日期选择控件 ends -->
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props: {
      option: Object
    },
    data() {
      return {
        date: '2017-08-17',
        type: '0'
      }
    },
    watch: {
      date: function (val, oldValue){
        console.log('you have changed the date into ' + val);
      },
      type: function (val, oldValue){
        console.log('you have changed the type into: ' + val);
      }
    }
  }
</script>

<style media="screen">
  .filter{
    height: 50px;
    width: 100%;
  }
  .filter-content {
    width: 100%;
    height: 50px;
    position: fixed;
    background-color: white;
    border: 1px solid #e1e3e4;
    padding: 5px;
  }
  .filter-content>div{
    display: inline-block;
    margin-left:10px;
  }
  .filter .filter-citem li{
    display: inline-block;
  }
  .filter .filter-citem li:first-child>a, .filter .filter-citem li:last-child>a{
    border-left: 1px solid #e1e3e4;
    border-right: 1px solid #e1e3e4;
  }
  .filter .filter-citem li>a{
    display: inline-block;
    padding: 0 12px;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    border-top: 1px solid #e1e3e4;
    border-bottom: 1px solid #e1e3e4;
    color: #323437;
    vertical-align: middle;
    cursor: pointer;
  }
  .filter .filter-citem li a.selected, .filter .filter-citem li a:hover{
    background-color: #4288fa;
    color: #fff;
  }
</style>

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
      <!-- 文本输入框 starts -->
      <div class="filter-input" v-if="option.searchinput">
        <!-- <input type="text" name="" v-model="fake" value="" v-on:input="handleInput" /> -->
        <el-input
          size="small"
          placeholder="请输入查询条件"
          icon="search"
          v-model="word"
          v-on:input="handleInput"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
      <!-- 文本输入框 ends -->
      <div class="">
        <button type="button" name="button" v-on:click="subClick">Click me</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  // 使用了一下lodash的延时函数 ，主要想用于自动补全功能的
  import debounce from 'lodash/debounce.js'

  export default{
    props: {
      option: Object
    },
    data() {
      return {
        date: '2017-08-17',
        type: '0',
        word: ''
      }
    },
    methods: {
      subClick() {
        console.log('you click sub');
        this.$emit('funfun');
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      handleInput: debounce(function (ev){
        // 这边可以做个AutoComplete的组件——have a try
        // QQ：为什么这个ev的值，是当前输入的值呢？？ 这个ev不应该是event吗？？
        // AA：因为element-ui对这个input做了处理，使得这个ev变成了用户输入的文本内容，如果你自己写input的话，那么这个ev就还是event的表示
        console.log(ev);
      }, 1000)
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

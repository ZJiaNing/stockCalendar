<template>
  <VContent :option="INDEX_FILTER" :isNoInfo="data && data.length > 0" v-on:funfun="fetchData" :fetchData="fetchData">
    <VTable>
      <!--下面的是简单的测试了一下computed方法的  -->
      <!-- <h1>{{reverseMs}}</h1>
      <button type="button" name="button" v-on:click="changeMsg">button</button> -->
      <!-- 下面的代码测试一下事件总线bus -->
      <button type="button" name="button" v-on:click="sendBus">start bus</button>
      <table>
        <thead>
          <th>序号</th>
          <th>债券代码</th>
          <th>债券简称</th>
        </thead>
        <tbody>
          <tr v-for="item in data">
            <td>{{item.id}}</td>
            <td>{{item.thscode | add}}</td>
            <!-- 注意下，怎么给那个 函数传递参数的 -->
            <td><a href="javascript:void(0);" @click="jumpToBasic(`${item.zqjc}`)">{{item.zqjc}}</a></td>
          </tr>
        </tbody>
      </table>
    </VTable>
  </VContent>
</template>

<script type="text/javascript">
  import Content from './Content.vue'
  import Table from './Table.vue'

  import { INDEX_FILTER } from '../config.js'
  import { fetchIndexData, bus } from '../utils.js'

  export default{
    data () {
      return {
        data: {},
        date: '',
        type: '',
        msg: 'Hello, world',
        INDEX_FILTER
      }
    },
    computed:{
      // 如下的这个属性，具备了getter和setter方法
      reverseMs: {
        get() {
          // getter
          return this.msg.split('').reverse().join('');
        },
        set() {
          // setter
        }
      }
    },
    created() {
      console.log('this is created');
      this.fetchData('', '');
    },
    mouted() {
        console.log('this is mouted');
    },
    components: {
      VContent: Content,
      VTable: Table
    },
    methods: {
      // 但是这种情况要怎么去处理Loading效果呢？肯定还是在哪个通用的fetch函数里做文章吧？？
      // 为什么这边是无法直接输出this的，但是是可以访问this，并且对其属性进行赋值的？？——我漏掉了哪一点？？
      // reactiveGetter——这个需要查阅更多的资料才能懂得
      fetchData: function (params) {
        this.type = params.type;
        this.date = params.date;

        let param = {
          type: this.type,
          date: this.date
        }

        fetchIndexData(param)
          .then(res => {
              this.data = res.data;
              console.log('the index result is: ' + (res.data && res.data.length));
          })
          .catch(error => {
              console.log(error)
          });
      },
      changeMsg() {
        this.msg = "SEA, NICE";
      },
      sendBus() {
        console.log('youa sended a message to ANNOUNCEMENT');
        bus.$emit('busbus', this.msg);
      },
      jumpToBasic(param) {
        console.log(param);
        console.log('you click me');
      }
    },
    filters: {
      // 自定义过滤器，注意这个的使用方法
      // 处此之外还可以注册全局的过滤器
      add(value, sta1, sta2) {
        console.log(value);
        return value + 1;
      }
    }
  }
</script>

<style media="screen">

</style>

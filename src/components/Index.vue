<template>
  <VContent :option="INDEX_FILTER" :isNoInfo="data && data.length > 0">
    <VTable>
      <table>
        <thead>
          <th>序号</th>
          <th>债券代码</th>
          <th>债券简称</th>
        </thead>
        <tbody>
          <tr v-for="item in data">
            <td>{{item.id}}</td>
            <td>{{item.thscode}}</td>
            <td>{{item.zqjc}}</td>
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
  import { fetchIndexData } from '../utils.js'

  export default{
    data () {
      return {
        data: {},
        date: '',
        type: '',
        INDEX_FILTER
      }
    },
    created() {
      this.fetchData();
    },
    components: {
      VContent: Content,
      VTable: Table
    },
    methods: {
      // 但是这种情况要怎么去处理Loading效果呢？肯定还是在哪个通用的fetch函数里做文章吧？？
      // 为什么这边是无法直接输出this的，但是是可以访问this，并且对其属性进行赋值的？？——我漏掉了哪一点？？
      // reactiveGetter——这个需要查阅更多的资料才能懂得
      fetchData: function () {

        let params = {
          type: this.type,
          date: this.date
        }

        fetchIndexData(params)
          .then(res => {
              this.data = res.data;
              console.log('the index result is: ' + (res.data && res.data.length));
          })
          .catch(error => {
              console.log(error)
          });
      }
    }
  }
</script>

<style media="screen">

</style>

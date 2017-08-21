<template>
  <VContent :option="ANNOUNCEMENT_FILTER" :isNoInfo="data && data.length > 0" :fetchData="fetchData">
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

  import { ANNOUNCEMENT_FILTER } from '../config.js'
  import { fetchAnnouncementData } from '../utils.js'

  export default{
    data() {
      return {
        data: {},
        type: '',
        word: '',
        ANNOUNCEMENT_FILTER
      }
    },
    created() {
      this.fetchData('', '');
    },
    components: {
      VContent: Content,
      VTable: Table
    },
    methods: {
      fetchData: function (params){
        this.type = params.type;
        this.word = params.word;

        let param = {
          type: this.type,
          word: this.word
        }

        fetchAnnouncementData(param)
          .then(res => {
              this.data = res.data;
              console.log('the announcement result is: ' + (res.data && res.data.length));
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

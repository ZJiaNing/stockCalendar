<template>
  <VContent :option="INDEX_FILTER">
    <VTable>
      <table>
        <thead>
          <th>序号</th>
          <th>债券代码</th>
          <th>债券简称</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>S1132072.IB</td>
            <td>17浦信1A1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>S1132073.IB</td>
            <td>17浦信1A2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>S1132074.IB</td>
            <td>17浦信1A3</td>
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

  export default{
    data () {
      return {
        INDEX_FILTER,
      }
    },
    components: {
      VContent: Content,
      VTable: Table
    }
  }
</script>

<style media="screen">

</style>

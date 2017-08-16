<template>
  <div class="content-box">
    <VFilter />
    <div class="content">
      <!-- 其余table内容的替换  -->
      <slot></slot>
      <!-- 而这边需要控制“暂无数据”的显示和隐藏 -->
      <VNoInfo />
    </div>
  </div>
</template>

<script type="text/javascript">
  import NoInfo from './NoInfo.vue'
  import Filter from './Filter.vue'

  export default {
    components: {
      VNoInfo: NoInfo,
      VFilter: Filter
    }
  }
</script>

<style media="screen">

</style>

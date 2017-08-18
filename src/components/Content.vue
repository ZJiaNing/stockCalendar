<template>
  <div class="content-box">
    <VFilter :option="option" v-on:funfun="parantClick" />
    <div class="content">
      <!-- 其余table内容的替换  -->
      <slot v-if="isNoInfo"></slot>
      <!-- 而这边需要控制“暂无数据”的显示和隐藏 -->
      <VNoInfo v-if="!isNoInfo" />
    </div>
  </div>
</template>

<script type="text/javascript">
  import NoInfo from './NoInfo.vue'
  import Filter from './Filter.vue'

  export default {
    props: {
      option: Object,
      isNoInfo: {
        type: Boolean,
        default: false
      }
    },
    components: {
      VNoInfo: NoInfo,
      VFilter: Filter
    },
    methods: {
      parantClick() {
        console.log('parent ouput!!!');
      }
    }
  }
</script>

<style media="screen" scoped>
  .content{
    margin-top: 22px;
  }
</style>

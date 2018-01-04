<template>
  <div class="layout">
    <customHeader></customHeader>
    <slot></slot>
    <customFooter></customFooter>
  </div>
</template>
<script>
import CustomHeader from './header.vue';
import CustomFooter from './footer.vue';

export default {
  name: 'Layout',
  provide: {
    eventBus: null
  },
  components: {
    CustomHeader,
    CustomFooter
  },
  props: {},
  data() {
    return {};
  }
};
</script>
<style lang="less">
@main_color1: #2c3e50;
::-webkit-scrollbar {
  width: 1px;
}
::-webkit-scrollbar-thumb {
  background: @main_color1;
}
</style>

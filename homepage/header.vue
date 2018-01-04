<template>
  <header>
    <Ribbon
      v-bind="ribbon"
    ></Ribbon>
  </header>
</template>
<script>
import pkg from '../package';

export default {
  name: 'customHeader',
  data() {
    return {
      pkg,
      ribbon: {
        text: 'Fork me on GitHub',
        linkUrl: pkg.repository.url,
        fixed: true,
        flat: true,
        classPrefix: pkg.name
      }
    };
  }
};
</script>
<style lang="less">
@media only screen and (max-width: 500px) {
  .wordle-ribbon {
    display: none;
  }
  .github-btn {
    position: fixed!important;
    top: 15px!important;
    right: 0px!important;
  }
}
</style>

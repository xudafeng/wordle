<template>
  <layout>
    <article class="container">
      <wordcloud
        :data="words"
        nameKey="name"
        valueKey="value">
      </wordcloud>
      <button @click="onClick">refresh</button>
    </article>
  </layout>
</template>
<script>
import wordcloud from 'vue-wordcloud';

import _ from './utils';
import words from './words';
import Layout from './layout.vue';

export default {
  name: 'app',
  components: {
    layout: Layout,
    wordcloud
  },
  computed: {
    words() {
      return this.generateWords();
    }
  },
  methods: {
    generateWords() {
      return words.split(/\s+/g).filter(item => {
        return item;
      }).map(item => {
        return {
          name: item,
          value: _.getRandom(5, 10)
        };
      })
    },
    onClick() {
      location.reload();
    }
  }
};
</script>
<style lang="less">
@import '../assets/base.less';
</style>

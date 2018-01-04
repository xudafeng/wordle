<template>
  <layout>
    <article class="container">
      <div id="container"></div>
      <wordcloud
        :data="words"
        nameKey="name"
        valueKey="value">
      </wordcloud>
    </article>
  </layout>
</template>
<script>
import wordcloud from 'vue-wordcloud';

import _ from './utils';
import words from './words';
import render from './3d/render';
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
  mounted() {
    render();
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
    }
  }
};
</script>
<style lang="less">
@import '../assets/base.less';
.wordCloud {
  visibility: hidden;
}
</style>

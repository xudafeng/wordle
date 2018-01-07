<template>
  <layout>
    <article class="container">
      <wordcloud
        :data="generateWords(words)"
        nameKey="name"
        valueKey="value">
      </wordcloud>
      <textarea
        v-model="words"
      >
      </textarea>
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
  data() {
    return {
      words: words.trim()
    }
  },
  methods: {
    generateWords(words) {
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

.container {
  text-align: center;

  textarea {
    width: 100%;
    min-height: 240px;
    border: 1px solid #eee;
    color: #111;
    margin-bottom: 10px;
  }
}
</style>

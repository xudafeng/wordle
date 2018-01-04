<template>
  <layout>
    <article class="container">
      <div id="container"></div>
      <canvas id="canvas" width="375" height="667"></canvas>
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
    setTimeout(() => {
      render();
    }, 1000);
  },
  methods: {
    generateWords() {
      return [{
        'name': 'Cat',
        'value': 26
      },
      {
        'name': 'fish',
        'value': 19
      },
      {
        'name': 'things',
        'value': 18
      },
      {
        'name': 'look',
        'value': 16
      },
      {
        'name': 'two',
        'value': 15
      },
      {
        'name': 'fun',
        'value': 9
      },
      {
        'name': 'know',
        'value': 9
      },
      {
        'name': 'good',
        'value': 9
      },
      {
        'name': 'play',
        'value': 6
      }
      ];
    }
  }
};
</script>
<style lang="less">
@import '../assets/base.less';
</style>


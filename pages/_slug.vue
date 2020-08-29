<template>
  <div v-html="mkbody" />
</template>
<script>
import marked from 'marked';
import hljs from 'highlight.js';

export default {
  computed: {
    mkbody() {
      return marked(this.post.fields.body);
    }
  },
  created() {
    marked.setOptions({
      langPrefix: '',
      highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })
  }
}
</script>
<style src='highlight.js/styles/tomorrow-night.css'></style>
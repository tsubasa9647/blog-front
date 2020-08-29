require('dotenv').config()

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  },

  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - サイト名',
    meta: [
      { hid: 'description', name: 'description', content: '共通ディスクリプション' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TsubasaBLOG' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://example.com' },
      { hid: 'og:title', property: 'og:title', content: 'サイト名' },
      { hid: 'og:description', property: 'og:description', content: '共通ディスクリプション' },
      { hid: 'og:image', property: 'og:image', content: 'https://example.com/img/ogp/common.jpg' },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: process.env.GAID
    }]
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

<template>
  <div>
    <!-- render data of the person -->
    <h1>{{ person.fields.name }}</h1>
    <!-- render blog posts -->
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/posts/${post.sys.id}`">
          {{
          post.fields.title
          }}
        </nuxt-link>
      </li>
      <v-col cols="12">
        <v-row justify="space-around">
          <v-icon>fas fa-lock</v-icon>
          <v-icon>fas fa-search</v-icon>
          <v-icon>fas fa-list</v-icon>
          <v-icon>fas fa-edit</v-icon>
          <v-icon>fas fa-tachometer-alt</v-icon>
          <v-icon>fas fa-circle-notch fa-spin</v-icon>
        </v-row>
      </v-col>
    </ul>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID,
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt",
      }),
    ])
      .then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items,
        };
      })
      .catch(console.error);
  },
};
</script>
<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="10" xl="8">
        <v-row v-if="posts.length">
          <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="6" lg="4" xl="3">
            <v-card max-width="400" class="mx-auto">
              <v-img
                :src="setEyeCatch(post).url"
                :alt="setEyeCatch(post).title"
                :aspect-ratio="16/9"
                max-height="200"
                class="white--text"
              >
                <v-card-title class="align-end fill-height font-weight-bold">{{ post.fields.title }}</v-card-title>
              </v-img>

              <v-card-text>{{ post.fields.publishDate }}</v-card-text>

              <v-list-item three-line style="min-height: unset;">
                <v-list-item-subtitle>{{ post.fields.body }}</v-list-item-subtitle>
              </v-list-item>
              <v-card-actions>
                <v-spacer />
                <v-btn text color="primary" :to="linkTo(post)">この記事をみる</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div v-else class="text-center">投稿された記事はありません。</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { mapGetters } from "vuex";

const client = createClient();

export default {
  computed: {
    linkTo: () => (obj) => {
      return { name: "posts-slug", params: { slug: obj.fields.slug } };
    },
    ...mapGetters(["setEyeCatch"]),
  },
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
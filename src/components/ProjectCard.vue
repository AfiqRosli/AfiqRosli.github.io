<template>
  <v-card min-width="300" max-width="400" class="mx-5 mb-10">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require(`@/assets/projects/${src}`)"
    >
      <v-card-title class="text-shadow">{{ title }}</v-card-title>
    </v-img>

    <v-card-subtitle v-if="subtitle" class="pb-0">
      {{ subtitle }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <p><slot></slot></p>

      <p class="mb-n5">
        <slot name="note"> </slot>
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn v-if="link_play" color="primary" text>
        <a class="text-decoration-none" :href="link_play" target="_blank"
          >Play</a
        >
      </v-btn>

      <v-btn v-if="link_itch_io" color="primary" text>
        <a class="text-decoration-none" :href="link_itch_io" target="_blank"
          >Itch.io</a
        >
      </v-btn>

      <v-btn v-if="link_website" color="primary" text>
        <a class="text-decoration-none" :href="link_website" target="_blank"
          >Website</a
        >
      </v-btn>

      <v-btn v-if="link_github" color="primary" text>
        <a class="text-decoration-none" :href="link_github" target="_blank"
          >GitHub Repo</a
        >
      </v-btn>

      <v-btn v-if="link_ig_post" color="primary" text>
        <a class="text-decoration-none" :href="link_ig_post" target="_blank"
          >IG Post</a
        >
      </v-btn>

      <v-btn v-if="link_ig" color="primary" text>
        <a class="text-decoration-none" :href="link_ig" target="_blank"
          >Instagram</a
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    src: {
      type: String,
      required: true
    },
    link_website: {
      type: String
    },
    link_github: {
      type: String
    },
    link_ig: {
      type: String
    },
    link_ig_post: {
      type: String
    },
    link_play: {
      type: String
    },
    link_itch_io: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 0px 0px 5px rgba(50, 50, 50, 1);
}
</style>

<template>
  <v-app class="bg_grey">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Afiq Rosli | Portfolio",
    titleTemplate: "Afiq Rosli | Portfolio | %s",
    meta: [
      {
        name: "description",
        content:
          "Afiq Rosli portfolio website. I do web development using the JAMstack approach. Check out the projects I've built or involved in the making."
      }
    ]
  },
  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.bg_grey {
  background-color: #e5e5e5 !important;
}

.h-100 {
  height: 100%;
}
</style>

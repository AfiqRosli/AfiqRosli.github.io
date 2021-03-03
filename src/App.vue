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

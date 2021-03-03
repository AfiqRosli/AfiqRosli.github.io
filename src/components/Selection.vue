<template>
  <v-card class="text-right py-3 selection">
    <v-container>
      <v-row>
        <v-col offset="1" cols="10">
          <v-btn class="mr-3">CV</v-btn>
          <v-btn class="mr-3">About</v-btn>
          <v-btn class="mr-10">Projects</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.selection {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

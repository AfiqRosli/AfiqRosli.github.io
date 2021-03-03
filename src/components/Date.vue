<template>
  <v-card class="mx-auto my-10" max-width="150" rounded="lg">
    <v-card-title class="justify-center pa-1">{{ date }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>

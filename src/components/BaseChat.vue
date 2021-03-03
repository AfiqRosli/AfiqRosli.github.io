<template>
  <div class="d-flex" :class="'justify-' + justify">
    <v-card class="mb-10" min-width="250" max-width="500">
      <v-card-title>
        <slot></slot>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        {{ msg }}
      </v-card-text>

      <v-card-subtitle class="text-right pa-0 pr-4 pb-2">
        {{ date }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    justify: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>

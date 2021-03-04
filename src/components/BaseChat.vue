<template>
  <div class="d-flex" :class="'justify-' + justify">
    <v-card class="mb-10" min-width="200" max-width="500">
      <v-card-title>
        <slot></slot>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        {{ msg }}
      </v-card-text>

      <v-card-subtitle class="text-right pa-0 pr-4 pb-2">
        {{ dayjs(date).format("H:mm A") }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import dayjs from "dayjs";

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
  },
  data() {
    return {
      dayjs
    };
  }
};
</script>

<style lang="scss" scoped></style>

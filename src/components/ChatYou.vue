<template>
  <BaseChat justify="end" :msg="msg" :date="date">
    <v-avatar class="mr-4" color="indigo">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    <p class="ma-0">You</p>
  </BaseChat>
</template>

<script>
import BaseChat from "@/components/BaseChat";

export default {
  components: { BaseChat },
  props: {
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

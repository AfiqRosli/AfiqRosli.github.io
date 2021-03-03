<template>
  <v-card class="mx-auto my-10" max-width="250" rounded="lg">
    <v-card-title class="justify-center pa-1">{{ computedDate }}</v-card-title>
  </v-card>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dayjs
    };
  },
  computed: {
    computedDate() {
      let dateNow = dayjs(Date());
      let dateProp = dayjs(this.date);

      if (dateNow.diff(dateProp, "day") == 0) {
        return "Today";
      }

      if (dateNow.diff(dateProp, "day") == 1) {
        return "Yesterday";
      }

      return dateProp.format("MMMM D, YYYY");
    }
  }
};
</script>

<style lang="scss" scoped></style>

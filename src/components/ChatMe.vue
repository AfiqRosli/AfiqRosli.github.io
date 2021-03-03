<template>
  <BaseChat justify="start" :msg="msg" :date="date">
    <v-avatar class="mr-4">
      <v-img alt="Afiq Rosli" src="../assets/afiq_rosli.jpg"></v-img>
    </v-avatar>
    <div>
      <p class="ma-0">Afiq Rosli</p>
      <v-btn icon class="ml-n2">
        <a
          class="text-decoration-none"
          href="https://www.linkedin.com/in/afiq-rosli-3a5837180/"
          target="_blank"
        >
          <v-icon color="#000">
            mdi-linkedin
          </v-icon>
        </a>
      </v-btn>
      <v-btn icon class="ml-n2">
        <a
          class="text-decoration-none"
          href="https://www.instagram.com/afiq_rosli.97/"
          target="_blank"
        >
          <v-icon color="#000">
            mdi-instagram
          </v-icon>
        </a>
      </v-btn>
    </div>
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

<template>
  <v-card class="text-right py-3 selection">
    <v-container>
      <v-row>
        <v-col offset="1" cols="10">
          <v-btn class="mr-5">CV</v-btn>
          <v-btn class="mr-5">About</v-btn>
          <v-btn class="mr-5">Projects</v-btn>
          <v-btn class="mr-10">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              class="text-decoration-none"
              style="color: inherit"
              >Mystery Gift 🎁</a
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Chat from "@/enums/Chat";
import Person from "@/enums/Person";
import ChatFactory from "@/factories/ChatFactory";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addChat", "replaceLoading"]),
  }
};
</script>

<style lang="scss" scoped>
.selection {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

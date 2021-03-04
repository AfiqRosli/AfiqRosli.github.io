<template>
  <v-card class="text-right py-3 selection">
    <v-container>
      <v-row>
        <v-col offset="1" cols="10">
          <v-btn class="mr-5" @click="talkOnCV">CV</v-btn>
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
    async talkOnCV() {
      await this.addChat(
        new ChatFactory(Chat.TEXT, {
          person: Person.YOU,
          msg: "CV"
        })
      );

      this.$vuetify.goTo(9999, {
        duration: 700,
        easing: "easeInCubic"
      });

      await this.addChat(new ChatFactory(Chat.LOADING));

      setTimeout(async () => {
        await this.replaceLoading(
          new ChatFactory(Chat.TEXT, {
            person: Person.ME,
            msg:
              "<a href='/files/afiq_rosli_software_engineer_cv_2021-03-03.pdf' target='_blank' download>Here you go</a>"
          })
        );

        this.$vuetify.goTo(9999, {
          duration: 700,
          easing: "easeInCubic"
        });
      }, 750);
    },
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

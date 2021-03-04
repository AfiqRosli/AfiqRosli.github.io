<template>
  <v-card class="text-right py-3 selection">
    <v-container>
      <v-row>
        <v-col offset="1" cols="10">
          <v-btn class="mr-5" @click="talkOnCV">CV</v-btn>
          <v-btn class="mr-5" @click="talkOnAbout">About</v-btn>
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
    async talkOnAbout() {
      await this.addChat(
        new ChatFactory(Chat.TEXT, {
          person: Person.YOU,
          msg: "About"
        })
      );

      this.$vuetify.goTo(9999, {
        duration: 700,
        easing: "easeInCubic"
      });

      let count = 0;
      let chatContent = [
        "Hmm, where do I begin?",
        "I recently finished my degree",
        "Achieved Upper Second-Class Honours (2:1) in Computer Science",
        "I see programming as my hobby and profession",
        "(very thankful for that)",
        "In technical 'about'",
        "This website is done using Vue.js 2 & Vuetify",
        "P.S. my response is fixed and do treat yourself with the Mystery Gift 🎁"
      ];
      await this.addChat(new ChatFactory(Chat.LOADING));

      // repeat with the interval of 2.3 seconds
      let chatTimer = setInterval(async () => {
        await this.replaceLoading(
          new ChatFactory(Chat.TEXT, {
            person: Person.ME,
            msg: chatContent[count++]
          })
        );

        if (count < chatContent.length) {
          await this.addChat(new ChatFactory(Chat.LOADING));
        }

        this.$vuetify.goTo(9999, {
          duration: 700,
          easing: "easeInCubic"
        });
      }, 2300);

      // after 18.5 seconds stop; 2.3 * 8 + 100 = 18.5
      // 2.3 * 8 is 8 chat content
      // Add 100 millisecond to give time for the 9th chat appear
      setTimeout(() => {
        clearInterval(chatTimer);
      }, 18500);
    }
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

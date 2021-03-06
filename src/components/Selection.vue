<template>
  <v-card class="text-center text-md-right py-3 selection">
    <v-container>
      <v-row>
        <v-col offset="0" offset-md="1" cols="12" md="10">
          <div v-if="!this.$vuetify.breakpoint.xs">
            <v-btn class="mr-5" :disabled="isTyping" @click="talkOnCV"
              >CV</v-btn
            >
            <v-btn class="mr-5" :disabled="isTyping" @click="talkOnAbout"
              >About</v-btn
            >
            <v-btn class="mr-5" :disabled="isTyping" @click="talkOnProject"
              >Projects</v-btn
            >
            <v-btn
              class="mr-0 mr-md-10"
              :disabled="isTyping"
              @click="sendMysteryGift"
              >Mystery Gift 🎁</v-btn
            >
          </div>

          <v-menu v-else top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :disabled="isTyping"
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                Reply
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title @click="talkOnCV">CV</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title @click="talkOnAbout"
                  >About</v-list-item-title
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-title @click="talkOnProject"
                  >Projects</v-list-item-title
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-title @click="sendMysteryGift"
                  >Mystery Gift 🎁</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Chat from "@/enums/Chat";
import Person from "@/enums/Person";
import ChatFactory from "@/factories/ChatFactory";
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    isTyping: state => state.isTyping
  }),
  methods: {
    ...mapActions(["addChat", "replaceLoading", "updateIsTyping"]),
    async talkOnCV() {
      this.updateIsTyping(true);

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
        this.updateIsTyping(false);

        await this.replaceLoading(
          new ChatFactory(Chat.TEXT, {
            person: Person.ME,
            msg:
              "Here you go <a class='text-decoration-none' href='/files/afiq_rosli_software_engineer_cv_2021-03-03.pdf' target='_blank'>Download CV</a>"
          })
        );

        this.$vuetify.goTo(9999, {
          duration: 700,
          easing: "easeInCubic"
        });
      }, 750);
    },
    async talkOnAbout() {
      this.updateIsTyping(true);

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
        "Recently finished my degree",
        "Got 2:1 in Computer Science",
        "See programming as my hobby and career",
        "What else...",
        "In technical 'about'",
        "This website is done using Vue.js 2 & Vuetify",
        "P.S. my response is fixed and do treat yourself with the Mystery Gift 🎁"
      ];
      await this.addChat(new ChatFactory(Chat.LOADING));

      // repeat with the interval of 2 seconds
      let chatTimer = setInterval(async () => {
        // All text content are delivered
        if (count >= chatContent.length) {
          this.updateIsTyping(false);
          clearInterval(chatTimer);
        }

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
      }, 2000);
    },
    async talkOnProject() {
      this.updateIsTyping(true);

      await this.addChat(
        new ChatFactory(Chat.TEXT, {
          person: Person.YOU,
          msg: "Projects"
        })
      );

      this.$vuetify.goTo(9999, {
        duration: 700,
        easing: "easeInCubic"
      });

      let count = 0;
      let chatContent = [
        "I've done (and involved) in various projects",
        "From fun little projects to industry level website used by thousands",
        "Worked on multiple frameworks, e.g. Vue, Vuetify, Laravel, Bootstrap & ASP.NET",
        "<a onClick=\"{ let vue =document.querySelector('#app').__vue__; vue.$router.push({path: '/project'}) }\">View projects</a>"
      ];
      await this.addChat(new ChatFactory(Chat.LOADING));

      // repeat with the interval of 2.1 seconds
      let chatTimer = setInterval(async () => {
        // All text content are delivered
        if (count >= chatContent.length) {
          this.updateIsTyping(false);
          clearInterval(chatTimer);
        }

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
      }, 2100);
    },
    async sendMysteryGift() {
      this.updateIsTyping(true);

      await this.addChat(
        new ChatFactory(Chat.TEXT, {
          person: Person.YOU,
          msg: "Mystery Gift 🎁"
        })
      );

      this.$vuetify.goTo(9999, {
        duration: 700,
        easing: "easeInCubic"
      });

      let count = 0;
      let chatContent = ["Incoming Gift in", "3", "2", "1"];
      await this.addChat(new ChatFactory(Chat.LOADING));

      // repeat with the interval of 1 seconds
      let chatTimer = setInterval(async () => {
        // All text content are delivered
        if (count >= chatContent.length) {
          clearInterval(chatTimer);

          let mysteryLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          window.open(mysteryLink, "_blank") ||
            (() => {
              window.location.href = mysteryLink;
            })();

          await this.addChat(
            new ChatFactory(Chat.TEXT, {
              person: Person.ME,
              msg: "It be like that sometimes"
            })
          );

          this.updateIsTyping(false);
        }

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
      }, 1000);
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

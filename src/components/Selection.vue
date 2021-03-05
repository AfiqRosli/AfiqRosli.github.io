<template>
  <v-card class="text-center text-md-right py-3 selection">
    <v-container>
      <v-row>
        <v-col offset="0" offset-md="1" cols="12" md="10">
          <div v-if="!this.$vuetify.breakpoint.xs">
            <v-btn class="mr-5" @click="talkOnCV">CV</v-btn>
            <v-btn class="mr-5" @click="talkOnAbout">About</v-btn>
            <v-btn class="mr-5" @click="talkOnProject">Projects</v-btn>
            <v-btn class="mr-0 mr-md-10" @click="sendMysteryGift"
              >Mystery Gift 🎁</v-btn
            >
          </div>

          <v-menu v-else top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
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
              "<a class='text-decoration-none' href='/files/afiq_rosli_software_engineer_cv_2021-03-03.pdf' target='_blank' download>Here you go</a>"
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
        "Got 2:1 in Computer Science",
        "I consider programming as my hobby and career",
        "What else",
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

      // after 20.7 seconds stop
      // 2.3 * 9 as in 9 chat content at 2.3s interval
      setTimeout(() => {
        clearInterval(chatTimer);
      }, 20700);
    },
    async talkOnProject() {
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
        "I've done various projects",
        "For my own use and clients",
        "Frameworks ranging from Vue, Laravel, ASP.NET, etc.",
        "<a onClick=\"{ let vue =document.querySelector('#app').__vue__; vue.$router.push({path: '/project'}) }\">More info here</a>"
      ];
      await this.addChat(new ChatFactory(Chat.LOADING));

      // repeat with the interval of 1.3 seconds
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
      }, 1300);

      // after 5.2 seconds stop
      // 1.3 * 4 as in 4 chat content at 1.3s interval
      setTimeout(async () => {
        clearInterval(chatTimer);
      }, 5200);
    },
    async sendMysteryGift() {
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

      // after 4 seconds stop
      // 1 * 4 as in 4 chat content at 1s interval
      setTimeout(async () => {
        clearInterval(chatTimer);

        await this.addChat(
          new ChatFactory(Chat.TEXT, {
            person: Person.ME,
            msg: "It be like that sometimes"
          })
        );

        let mysteryLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        window.open(mysteryLink, "_blank") ||
          (() => {
            window.location.href = mysteryLink;
          })();
      }, 4000);
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

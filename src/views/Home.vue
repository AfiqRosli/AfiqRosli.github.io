<template>
  <div class="h-100">
    <v-container class="h-100">
      <v-row class="h-100">
        <v-col class="h-100" offset="1" cols="10">
          <div class="d-flex flex-column justify-end px-0 px-sm-10 pb-14 h-100">
            <div>
              <div v-for="(chat, index) in chats" :key="index">
                <template v-if="chat.type == enums.Chat.DATE">
                  <When :date="chat.date" />
                </template>

                <template v-if="chat.type == enums.Chat.TEXT">
                  <template v-if="chat.person == enums.Person.ME">
                    <ChatMe :msg="chat.msg" :date="chat.date" />
                  </template>

                  <template v-if="chat.person == enums.Person.YOU">
                    <ChatYou :msg="chat.msg" :date="chat.date" />
                  </template>
                </template>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Selection />
  </div>
</template>

<script>
import ChatMe from "@/components/ChatMe";
import ChatYou from "@/components/ChatYou";
import When from "@/components/When";
import Selection from "@/components/Selection";
import Chat from "@/enums/Chat";
import Person from "@/enums/Person";
import ChatFactory from "@/factories/ChatFactory";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: { ChatMe, ChatYou, When, Selection },
  data() {
    return {
      enums: {
        Chat,
        Person
      }
    };
  },
  computed: mapState({
    chats: state => state.chats
  }),
  methods: {
    ...mapActions(["addChat", "replaceLoading"])
  },
  mounted() {
    this.$nextTick(async () => {
      if (this.chats.length == 0) {
        await this.addChat(new ChatFactory(Chat.DATE));
        await this.addChat(
          new ChatFactory(Chat.TEXT, {
            person: Person.ME,
            msg: "Hello!"
          })
        );
        await this.addChat(new ChatFactory(Chat.LOADING));

        setTimeout(async () => {
          await this.replaceLoading(
            new ChatFactory(Chat.TEXT, {
              person: Person.ME,
              msg: "What would you like to know?"
            })
          );
        }, 1500);
      }
    });
  }
};
</script>

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

export default {
  name: "Home",
  components: { ChatMe, ChatYou, When, Selection },
  data() {
    return {
      chats: [
        {
          type: Chat.DATE,
          date: new Date().toISOString()
        },
        {
          type: Chat.TEXT,
          person: Person.ME,
          date: new Date().toISOString(),
          msg: "Hello!"
        },
        {
          type: Chat.TEXT,
          person: Person.YOU,
          date: new Date().toISOString(),
          msg: "CV"
        }
      ],
      enums: {
        Chat,
        Person
      }
    };
  }
};
</script>

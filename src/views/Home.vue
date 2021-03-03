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
import Date from "@/components/Date";
import Selection from "@/components/Selection";

export default {
  name: "Home",
  components: { ChatMe, ChatYou, Date, Selection }
};
</script>

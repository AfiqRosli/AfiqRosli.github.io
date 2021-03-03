<template>
  <div class="h-100">
    <v-container class="h-100">
      <v-row class="h-100">
        <v-col class="h-100" offset="1" cols="10">
          <div class="d-flex flex-column justify-end px-0 px-sm-10 pb-14 h-100">
            <div>
              <Date date="20210303" />
              <ChatMe msg="Hello!" date="20210303" />
              <ChatYou msg="Hi!" date="20210303" />
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

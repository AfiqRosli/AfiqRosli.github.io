import Chat from "@/enums/Chat";

export default class ChatFactory {
  constructor(type, props) {
    if (type == Chat.DATE) {
      return {
        type,
        date: new Date().toISOString()
      };
    }

    if (type == Chat.TEXT) {
      return {
        type,
        person: props.person,
        date: new Date().toISOString(),
        msg: props.msg
      };
    }

    if (type == Chat.LOADING) {
      return {
        type
      };
    }
  }
}

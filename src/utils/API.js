import axios from "axios";

export default {

  saveBook: function(messageData) {
    return axios.post("/api/messages", messageData);
  }
};
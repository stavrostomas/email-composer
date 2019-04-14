import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emailData:{
      to: "",
      cc: "",
      bcc: "",
      subject: "",
      message: "",
      attachments: []
    }
  },
  getters: {
    getEmailData: state => {
      // Return all the email attachments currently stored in the state
      return state.emailData;
    },
  },
  mutations: {
    // Removes an attachment from the email state
    deleteAttachment: (state, index) => {
      state.emailData.attachments.splice(index, 1);
    }
  },
  actions: {
    deleteAttachment: (context, index) => {
      context.commit('deleteAttachment', index);
    }
  }
});

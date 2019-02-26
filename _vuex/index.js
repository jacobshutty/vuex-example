const store = new Vuex.Store({
  state: {
    message: "Vuex is...",
  },
  actions: {
    duplicateMessage({ commit }, message) {
      const newMessage = message + " " + message;
      commit("setMessage", newMessage);
    },
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
  },
  getters: {
    upperCaseMessage(state) {
      return state.message.toUpperCase();
    },
  },
});

const vm = new Vue({
  el: "#app",
  store,
  data: function() {
    return {};
  },
  methods: {},
  components: { btn, message },
  template: `
    <div class="message-generator">
      <div class="wrapper">
        <message></message>
        <btn></btn>
      </div>
    </div>
  `,
});

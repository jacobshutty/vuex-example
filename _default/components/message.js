const message = {
  name: "Message",
  data: function() {
    return {
      message: "Vuex is...",
    };
  },
  template: `
    <h1 class="message">
      {{message}}
    </h1>
  `,
};

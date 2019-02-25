const message = {
  name: "Message",
  data: function() {
    return {
      text: "Vuex is...",
    };
  },
  template: `
    <h1 class="message">
      {{text}}
    </h1>
  `,
};

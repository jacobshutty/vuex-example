const message = {
  name: "Message",
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  template: `
    <h1 class="message">
      {{message}}
    </h1>
  `,
};

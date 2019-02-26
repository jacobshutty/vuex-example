const vm = new Vue({
  el: "#app",
  components: { btn, message },
  data: function() {
    return {
      message: "Vuex is...",
    };
  },
  methods: {
    handleClick() {
      this.message = "Amazing!";
    },
  },
  template: `
    <div class="message-generator">
      <div class="wrapper">
        <message v-bind:text="message"></message>
        <btn v-on:btnClicked="handleClick"></btn>
      </div>
    </div>
  `,
});

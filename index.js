const vm = new Vue({
  el: "#app",
  data: function() {
    return {};
  },
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

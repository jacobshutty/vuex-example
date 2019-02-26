const vm = new Vue({
  el: "#app",
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

const vm = new Vue({
  el: '#app',
  components: { btn, message },
  template: `
    <div class="message-generator">
      <div class="message-box">
        <div class="message-box-wrap">
          <message></message>
          <btn></btn>
        </div>
      </div>
    </div>
  `,
});

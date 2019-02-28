const vm = new Vue({
  el: '#app',
  components: { btn, message, colorBtn },
  data: function() {
    return {
      message: 'Vuex is...',
      textColor: '#000',
    };
  },
  methods: {
    changeText() {
      this.message = 'Amazing!';
    },
    changeColor() {
      this.textColor = '#14ae46';
    },
  },
  template: `
    <div class="message-generator">
      <div class="message-box">
        <div class="message-box-wrap">
          <message v-bind:text="message" v-bind:messageColor="textColor"></message>
          <btn v-on:btnClicked="changeText"></btn>
        </div>
      </div>
      <div class="message-box">
        <div class="message-box-wrap">
          <color-btn v-on:btnClicked="changeColor"></color-btn>
        </div>
      </div>
    </div>
  `,
});

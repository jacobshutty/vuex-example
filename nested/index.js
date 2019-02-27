const vm = new Vue({
  el: '#app',
  components: { topNav, popup },
  template: `
    <div class="message-generator">
      <div class="wrapper">
        <topNav></topNav>
        <popup></popup>
      </div>
    </div>
  `,
});

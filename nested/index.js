const vm = new Vue({
  el: '#app',
  components: { topNav, popup },
  template: `
    <div class="message-generator">
      <div class="message-box">
      Index
        <topNav></topNav>
        <popup></popup>
      </div>
    </div>
  `,
});

const btn = {
  name: 'Btn',
  methods: {
    handleClick() {
      this.$store.commit('setMessage', 'Amazing!');
    },
  },
  template: `
    <button v-on:click="handleClick">CHANGE TEXT</button>
  `,
};

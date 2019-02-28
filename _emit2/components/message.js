const message = {
  name: 'Message',
  props: ['text', 'messageColor'],
  template: `
    <h1 class="message" v-bind:style="{color: messageColor}">
      {{text}}
    </h1>
  `,
};

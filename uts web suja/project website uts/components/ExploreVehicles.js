const app = Vue.createApp({
  data() {
    return {
      buy: 'Buy',
      remove: 'Cancel',
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
  },
});

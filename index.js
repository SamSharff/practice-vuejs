/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Sam",
      showInfo: false,
      sweets: ["ice cream", "ice cream sandwiches", "ice cream cake, yo"],
      newSweet: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
    changeName: function () {
      this.name = "Evelyn!";
    },
    addSweet: function () {
      this.sweets.push(this.newSweet);
      this.newSweet = "";
    },
  },
};

Vue.createApp(App).mount("#app");

// Store an array in Vue.js and display it in the HTML using v-for.
// Make an input and button to add new items to your array in HTML.
// Bonus: Show your items in an ordered list

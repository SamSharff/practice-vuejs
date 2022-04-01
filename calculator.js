/* global Vue */

var App = {
  data: function () {
    return {
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Calculator";
    }
    calculateSum: function 
    },
};

Vue.createApp(App).mount("#app");

// // Write the Vue.js code to make this calculator work!
// Make other buttons to perform different kinds of calculations!
// // Bonus: Get rid of the "Compute sum" button, and instead have the sum automatically update any time the user changes any of the three numbers

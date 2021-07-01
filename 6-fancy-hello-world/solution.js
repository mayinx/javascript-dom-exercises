// The "change" event is fired after the input element loses focus:
// document
//   .querySelector(".controls__input")
//   .addEventListener("change", (event) => {
//     document.querySelector(".header__text").innerHTML =
//       "Hello World " + event.target.value;
//   });

// Whereas "input" is fired on every input:
document
  .querySelector(".controls__input")
  .addEventListener("input", (event) => {
    document.querySelector(".header__text").innerHTML =
      "Hello World " + event.target.value;
  });

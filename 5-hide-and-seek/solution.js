document
  .querySelector(".show-hide-button")
  .addEventListener("click", (event) => {
    document.querySelector(".box").classList.toggle("hidden") // bro: toggle returns a boolean ;-) !
      ? (event.target.textContent = "Show")
      : (event.target.textContent = "Hide");
  });

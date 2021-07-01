const listItems = document.querySelectorAll(".list__item");
document.querySelector(".shine-button").addEventListener("click", (event) => {
  listItems.forEach((li) => {
    li.style.color = li.textContent;
  });
});

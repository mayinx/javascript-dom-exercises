const data = [];
const inputs = document.querySelectorAll("input, textarea");
const form = document.querySelector(".super-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formDataObj = {};
  inputs.forEach((input) => {
    formDataObj[input.name] =
      input.type === "checkbox" ? input.checked : input.value;
  });

  data.push(formDataObj);
  console.log(data);
  form.reset();
});

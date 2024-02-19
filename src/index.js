const form = document.querySelector("#submitForm");
const input = document.querySelector("#list-input");
const list = document.querySelector("#newUL");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const choreName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = choreName;
  list.append(newLI);
  input.value = "";
});

list.addEventListener("click", function (event) {
  event.target.nodeName === "LI" && event.target.remove();
});

window.addEventListener("load", start);

function start() {
  console.log("Totalmente Carregada!");

  var input = document.querySelector("#nameInput");
  input.addEventListener("keyup", countName);

  var form = document.querySelector("form");
  form.addEventListener("submit", preventSubmit);
}

function countName(event) {
  var count = event.target.value;
  var span = document.querySelector("#nameLength");
  span.textContent = count.length;
}

function preventSubmit(event) {
  event.preventDefault();
  var nameInpunt = document.querySelector("#nameInput");
  alert(nameInput.value + " cadastrado com sucesso");
}

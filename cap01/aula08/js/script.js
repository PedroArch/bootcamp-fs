var title = document.querySelector("h1");
console.log(title);
title.textContent = "Pedro Arch";

var personalDataArray = document.querySelectorAll(" .personal-data");
personalDataArray = Array.from(personalDataArray); // Mutabilidade
console.log(personalDataArray);

for (i = 0; i < personalDataArray.length; i++) {
  var currentElement = personalDataArray[i];
  //currentElement.style.color = "darkred"; HARD CODE
  currentElement.classList.add("emphasys");
}

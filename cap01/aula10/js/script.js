window.addEventListener("load", start);

nameList = ["Paulo", "Liana", "Ana", "Pedro", "Zoe", "Dinah"];

function start() {
  var form = document.querySelector("form");
  form.addEventListener("submit", preventSubmit);

  var textName = document.querySelector("#textName");
  textNameHandle(textName);
  render();
}

function preventSubmit(event) {
  event.preventDefault();
}

function textNameHandle(textName) {
  function typedName(event) {
    if (event.key === "Enter") {
      var nameTyped = event.target.value;
      nameList.push(nameTyped);
      render();
    }
  }

  textName.focus();
  textName.addEventListener("keyup", typedName);
}

function render() {
  var names = document.querySelector("#names");
  names.textContent = "";
  var ul = document.createElement("ul");
  names.appendChild(ul);
  for (i = 0; i < nameList.length; i++) {
    var currentName = nameList[i];
    var li = document.createElement("li");
    li.textContent = currentName;
    li.classList.add("clickable");
    ul.appendChild(li);
  }
}

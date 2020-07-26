// State Variables

nameList = ["Paulo", "Liana", "Ana", "Pedro", "Zoe", "Dinah"];
editingMode = false;
currentIndex = null;

window.addEventListener("load", () => {
  var form = document.querySelector("form");
  form.addEventListener("submit", preventSubmit);

  var textName = document.querySelector("#textName");
  textNameHandle(textName);
  render();
});

//function start(){}

function preventSubmit(event) {
  event.preventDefault();
}

function updateName(newName) {
  nameList[currentIndex] = newName;
  render();
}

function textNameHandle(textName) {
  function typedName(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      if (editingMode) {
        updateName(event.target.value);
      } else {
        var nameTyped = event.target.value;
        // nameList.push(nameTyped);
        nameList = [...nameList, nameTyped];
        render();
      }
      editingMode = false;
    }
  }
  textName.addEventListener("keyup", typedName);
}

function createButton(index) {
  function deleteName() {
    //nameList.splice(index, 1);

    nameList = nameList.filter((_, i) => {
      if (i === index) {
        return false;
      }
      return true;

      // mais elegante uma linha de código return i !== index;
    });

    render();
  }
  var button = document.createElement("button");
  button.textContent = "x";
  button.classList.add("deleteButton", "clickable");

  button.addEventListener("click", deleteName);

  return button;
}

function createSpan(currentName, index) {
  function spanEdit() {
    editingMode = true;
    textName = document.querySelector("#textName");
    textName.value = currentName;
    textName.focus();
    currentIndex = index;
  }

  var span = document.createElement("span");
  span.textContent = currentName;
  span.classList.add("clickable");

  span.addEventListener("click", spanEdit);

  return span;
}

function render() {
  var names = document.querySelector("#names");
  names.textContent = "";
  var ul = document.createElement("ul");
  names.appendChild(ul);

  for (i = 0; i < nameList.length; i++) {
    var currentName = nameList[i];

    var li = document.createElement("li");
    var span = createSpan(currentName, i);
    var button = createButton(i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);

    var textName = document.querySelector("#textName");
    textName.value = "";
    textName.focus();
  }
}

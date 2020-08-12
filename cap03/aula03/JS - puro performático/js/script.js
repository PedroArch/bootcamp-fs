window.addEventListener("load", start);

let liList = [];

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButton);
}

function handleButton() {
  const item = dateFormat();
  console.log(item);
  liList.push(item);

  render(item);
}

function render(item) {
  const ulList = document.querySelector("#clickList");
  const li = document.createElement("li");
  li.textContent = item;
  ulList.appendChild(li);
  document.title = liList.length;
}

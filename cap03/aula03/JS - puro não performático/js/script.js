window.addEventListener("load", start);

let liList = [];

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButton);
}

function handleButton() {
  liList.push(dateFormat());
  render();
}

function render() {
  const ulList = document.querySelector("#clickList");
  ulList.innerHTML = "";
  let lis = "";
  liList.map((item) => {
    lis += `<li>${item}</li>`;
  });

  ulList.innerHTML = lis;

  document.title = liList.length;
}

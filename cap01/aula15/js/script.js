window.addEventListener("load", () => {
  const div = document.querySelector("#timer");
  div.setAttribute("style", "font-size: 60px;");

  let count = 0;

  const interval = setInterval(() => {
    div.textContent = ++count;
    if (count === 10) {
      this.clearInterval(interval);
      return;
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        div.textContent = count + ",5";
      }, 500);
    }
  }, 1000);
});

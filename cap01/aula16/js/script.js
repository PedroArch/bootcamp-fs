window.addEventListener("load", () => {
  fetch("https://api.github.com/users/PedroArch")
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log("Houve um erro!");
    });

  divisionPromises(12, 5)
    .then((result) => {
      console.log(result);
    })
    .catch((errorMessage) => {
      console.log("Falha na divisão. " + errorMessage);
    });

  executeDivisionPromise();
});

function showData(data) {
  const user = document.querySelector(".user");
  user.textContent = data.login + " " + data.name;
}

function divisionPromises(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Não é possivel dividir por 0");
    }

    resolve(a / b);
  });
}

async function executeDivisionPromise() {
  const division = await divisionPromises(15, 3);
  console.log(division);
}

window.addEventListener("load", start);

let resultsTab = null;
let statsTab = null;

let allUsers = [];
let searchedUsers = [];

let countResults = 0;

let totalMaleGender = 0;
let totalFemaleGender = 0;
let totalCountAge = 0;
let totalAvarageAge = 0;

let numberFormat = null;

async function start() {
  resultsTab = document.querySelector("#resultsTab");
  statsTab = document.querySelector("#statsTab");

  countResults = document.querySelector("#countResults");
  maleGender = document.querySelector("#maleGender");
  femaleGender = document.querySelector("#femaleGender");
  countAge = document.querySelector("#countAge");
  avarageAge = document.querySelector("#avarageAge");

  numberFormat = Intl.NumberFormat("pt-BR");

  await fetchUsers();
  render();
  hideSpinner();
  configSearch();
}

function render() {
  resultsTab.innerHTML = `
   <div class='row' id='container-results'>
   ${searchedUsers
     .map(({ firstName, lastName, age, pic }) => {
       return `
      <div class="col s12 m12 l12" id="user-tab">
        <img class="avatar" src="${pic}">
        <div class="user-name">${firstName} ${lastName}, ${age} anos</div>
      </div>
     `;
     })
     .join("")}
   </div> 
  `;
  renderCountStats(maleGender, femaleGender, countAge, avarageAge);
  renderCountResults(countResults);
}
async function fetchUsers() {
  const resource = await fetch("http://localhost:3001/users");
  const json = await resource.json();

  allUsers = json.map(({ name, gender, dob, picture }) => {
    return {
      firstName: name.first,
      lastName: name.last,
      gender: gender,
      age: dob.age,
      pic: picture.large,
      completeName: name.first + " " + name.last,
    };
  });
}

function renderCountResults(countResults) {
  if (searchedUsers.length !== 0) {
    const resultsTitle = document.querySelector("#results-title");
    resultsTitle.textContent = `${searchedUsers.length} usuário(s) encontrado(s)`;
  } else {
    const resultsTitle = document.querySelector("#results-title");
    resultsTitle.textContent = "Nenhum resultado encontrado";
    countResults.textContent = "";
  }
}

function renderCountStats(maleGender, femaleGender, countAge, avarageAge) {
  if (searchedUsers.length !== 0) {
    const statsTitle = document.querySelector("#stats-title");
    statsTitle.textContent = "Estatísticas";
    const data = document.querySelectorAll(".data");
    data.forEach((item) => {
      item.classList.remove("hide");
    });

    const totalMaleGender = searchedUsers.filter((item) => {
      return item.gender === "male";
    });
    maleGender.textContent = " " + totalMaleGender.length;

    const totalfemaleGender = searchedUsers.filter((item) => {
      return item.gender === "female";
    });
    femaleGender.textContent = " " + totalfemaleGender.length;

    const totalCountAge = searchedUsers.reduce((acc, current) => {
      return acc + current.age;
    }, 0);
    const formattedTotalCountAge = formatNumber(totalCountAge);
    countAge.textContent = " " + formattedTotalCountAge;

    const totalAvarageAge = totalCountAge / searchedUsers.length;
    const formattedTotalAvarageAge = formatNumber(totalAvarageAge.toFixed(2));
    avarageAge.textContent = " " + formattedTotalAvarageAge;
  } else {
    const statsTitle = document.querySelector("#stats-title");
    statsTitle.textContent = "Nada a ser exibido";
    const data = document.querySelectorAll(".data");
    data.forEach((item) => {
      item.classList.add("hide");
    });
  }
}

function hideSpinner() {
  const spinner = document.querySelector("#spinner");
  spinner.classList.add("hide");
}

function configSearch() {
  const inputButton = document.querySelector("#buttonSearch");
  const inputSearch = document.querySelector("#inputSearch");

  inputSearch.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      const searchValue = inputSearch.value.toLowerCase().trim();
      searchedUsers = allUsers.filter((item) => {
        if (searchValue.trim() !== "") {
          return item.firstName.toLowerCase().includes(searchValue);
        } else {
          inputSearch.focus();
          inputSearch.value = "";
        }
      });
      render();
    }
  });

  inputButton.addEventListener("click", () => {
    const searchValue = inputSearch.value.toLowerCase().trim();

    searchedUsers = allUsers.filter((item) => {
      if (searchValue.trim() !== "") {
        return item.completeName.toLowerCase().includes(searchValue);
      } else {
        inputSearch.focus();
        inputSearch.value = "";
      }
    });
    render();
  });
}

function formatNumber(number) {
  return numberFormat.format(number);
}

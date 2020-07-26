// State
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener("load", start());

async function start() {
  tabCountries = document.querySelector("#tabCountries");
  tabFavorites = document.querySelector("#tabFavorites");
  countCountries = document.querySelector("#countCountries");
  countFavorites = document.querySelector("#countFavorites");

  totalPopulationList = document.querySelector("#totalPopulationList");
  // prettier-ignore
  totalPopulationFavorites = document.querySelector("#totalPopulationFavorites");

  numberFormat = Intl.NumberFormat("pt-BR");

  await fetchCountries();
  render();
}

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  allCountries = countries.map(
    ({ numericCode, translations, population, flag }) => {
      return {
        id: numericCode,
        name: translations.br,
        population: population,
        formattedPopulation: formatNumber(population),
        flag: flag,
      };
    }
  );
}

function render() {
  renderCountriesList();
  renderFavoritesList();
  renderSummary();
  handleCountriesButtons();
}

function renderCountriesList() {
  let countriesHTML = '<div class="countries">';
  allCountries.forEach((country) => {
    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${country.id}" class="wavews-effect waves light btn">+</a>
        </div>
        <div>
          <img src='${country.flag}' alt="${country.name}">
        </div>
        <div>
          <ul>
            <li>${country.name}</li>
            <li>${country.formattedPopulation}</li>
          </ul>
        </div>
      </div>
    `;
    countriesHTML += countryHTML;
  });
  countriesHTML += "</div>";
  tabCountries.innerHTML = countriesHTML;
}

function renderFavoritesList() {
  let countriesHTML = '<div class="countries">';
  favoritesCountries.forEach((favorite) => {
    const countryHTML = `
    <div class='country'>
      <div>
        <a id="${favorite.id}" class="wavews-effect waves red light btn">+</a>
      </div>
      <div>
        <img src='${favorite.flag}' alt="${favorite.name}">
      </div>
      <div>
        <ul>
          <li>${favorite.name}</li>
          <li>${favorite.formattedPopulation}</li>
        </ul>
      </div>
    </div>
  `;
    countriesHTML += countryHTML;
  });
  countriesHTML += "</div>";
  tabFavorites.innerHTML = countriesHTML;
}
function renderSummary() {
  countCountries.textContent = "(" + allCountries.length + ")";
  countFavorites.textContent = "(" + favoritesCountries.length + ")";

  const totalPopulation = allCountries.reduce((acc, curr) => {
    return acc + curr.population;
  }, 0);
  totalPopulationList.textContent = formatNumber(totalPopulation);

  const totalFavorites = favoritesCountries.reduce((acc, curr) => {
    return acc + curr.population;
  }, 0);
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function handleCountriesButtons() {
  const countriesButtons = Array.from(tabCountries.querySelectorAll(".btn"));
  const FavoritesButtons = Array.from(tabFavorites.querySelectorAll(".btn"));

  countriesButtons.forEach((button) => {
    button.addEventListener("click", () => addToFavorites(button.id));
  });

  FavoritesButtons.forEach((button) => {
    button.addEventListener("click", () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find((country) => country.id === id);
  console.log(favoritesCountries);
  favoritesCountries = [...favoritesCountries, countryToAdd];
  favoritesCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  allCountries = allCountries.filter((country) => country.id !== id);
  render();
}

function removeFromFavorites(id) {
  const countryToRemove = favoritesCountries.find(
    (country) => country.id === id
  );

  allCountries = [...allCountries, countryToRemove];
  allCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  favoritesCountries = favoritesCountries.filter(
    (country) => country.id !== id
  );
  render();
}

function formatNumber(number) {
  return numberFormat.format(number);
}

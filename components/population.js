import { countries_data } from "../data/countries_data.js";
import { getTopTenCountries } from "../utils/utils.js";

export function tenMostPopulatedCountries() {
  const container = document.createElement("div");
  container.classList.add("box");
  const countriesListContainer = document.createElement("div");
  countriesListContainer.classList.add("items-container");
  const topTenCountries = getTopTenCountries(countries_data);
  const worldPopulation = 8072797220;
  const worldPopulationElement = document.createElement("div");
  worldPopulationElement.classList.add("language-item");

  const worldProgressBar = document.createElement("progress");
  worldProgressBar.value = worldPopulation;
  worldProgressBar.max = 100;

  worldPopulationElement.textContent = "World";
  const worldPopulationNumber = document.createTextNode(
    worldPopulation.toLocaleString("en-US")
  );

  container.appendChild(countriesListContainer);
  countriesListContainer.appendChild(worldPopulationElement);
  worldPopulationElement.appendChild(worldProgressBar);
  worldPopulationElement.appendChild(worldPopulationNumber);

  for (const country of topTenCountries) {
    let countryName = country.name;
    let countryPopulation = country.population;

    if (countryName.includes("United States of America")) {
      countryName = "USA";
    }
    if (countryName.includes("Russian Federation")) {
      countryName = "Russia";
    }

    const topTenCountriesPopulation = document.createElement("div");
    topTenCountriesPopulation.classList.add("language-item");

    const progressBar = document.createElement("progress");
    const normalizedPopulation = countryPopulation / 100000000;
    progressBar.value = normalizedPopulation;
    progressBar.max = 100;

    topTenCountriesPopulation.textContent = countryName;
    const populationNumber = document.createTextNode(
      countryPopulation.toLocaleString("en-US")
    );
    container.appendChild(countriesListContainer);
    countriesListContainer.appendChild(topTenCountriesPopulation);
    topTenCountriesPopulation.appendChild(progressBar);
    topTenCountriesPopulation.appendChild(populationNumber);
  }
  return container;
}

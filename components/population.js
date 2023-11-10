import { countries_data } from "../data/countries_data.js";

export function tenMostPopulatedCountries() {
  const container = document.createElement("div");
  container.classList.add("box");
  const sortedPopulatedCountries = countries_data.sort(
    (a, b) => b.population - a.population
  );
  const topTenCountries = sortedPopulatedCountries.slice(0, 10);

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
    topTenCountriesPopulation.textContent = ` ${countryName} ${countryPopulation.toLocaleString(
      "en-US"
    )} `;
    container.appendChild(topTenCountriesPopulation);
  }
  return container;
}

import { countriesData } from '../data/countriesData.js';
import { getTopTenCountries } from '../utils/utils.js';

export default function tenMostPopulatedCountries() {
  const container = document.createElement('div');
  container.classList.add('box');

  const worldPopulation = 8072797220;

  const worldProgressBar = document.createElement('progress');
  worldProgressBar.value = (worldPopulation / worldPopulation) * 100;
  worldProgressBar.max = 100;

  const worldPopulationElement = document.createElement('div');
  worldPopulationElement.classList.add('language-item');
  worldPopulationElement.textContent = 'World';
  const worldPopulationNumber = document.createTextNode(worldPopulation.toLocaleString('en-US'));
  worldPopulationElement.appendChild(worldProgressBar);
  worldPopulationElement.appendChild(worldPopulationNumber);

  const countriesListContainer = document.createElement('div');
  countriesListContainer.classList.add('items-container');
  container.appendChild(countriesListContainer);
  countriesListContainer.appendChild(worldPopulationElement);

  const topTenCountries = getTopTenCountries(countriesData);

  topTenCountries.forEach((country) => {
    let countryName = country.name;
    const countryPopulation = country.population;

    const normalizedPopulation = (countryPopulation / worldPopulation) * 100;

    if (countryName.includes('United States of America')) {
      countryName = 'USA';
    }
    if (countryName.includes('Russian Federation')) {
      countryName = 'Russia';
    }

    const topTenCountriesPopulation = document.createElement('div');
    topTenCountriesPopulation.classList.add('language-item');

    const progressBar = document.createElement('progress');
    progressBar.value = normalizedPopulation;
    progressBar.max = 100;

    topTenCountriesPopulation.textContent = countryName;
    const populationNumber = document.createTextNode(countryPopulation.toLocaleString('en-US'));

    topTenCountriesPopulation.appendChild(progressBar);
    topTenCountriesPopulation.appendChild(populationNumber);
    countriesListContainer.appendChild(topTenCountriesPopulation);
  });

  return container;
}

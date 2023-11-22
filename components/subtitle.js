import { countriesData } from '../data/countriesData';

export default function subtitle() {
  const numberOfCountries = countriesData.length;
  const subtitlePart = document.querySelector('.subtitle');
  subtitlePart.textContent = `Currently, we have ${numberOfCountries} countries`;
}

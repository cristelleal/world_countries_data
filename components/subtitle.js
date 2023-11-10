import { countries_data } from "../data/countries_data.js";

export function subtitle() {
  const numberOfCountries = countries_data.length;
  const subtitle = document.querySelector(".subtitle");
  subtitle.textContent = `Currently, we have ${numberOfCountries} countries`;
  return subtitle;
}

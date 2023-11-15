import { countries_data } from "../data/countries_data.js";
import { getLangagesCount, getTenMostSpokenLanguages } from "../utils/utils.js";

export function tenMostSpokenLanguages() {
  const container = document.createElement("div");
  container.classList.add("box");
  const languageCounts = getLangagesCount(countries_data);

  const topTenLanguages = document.createElement("div");
  topTenLanguages.classList.add("items-container");
  const sortedTenLanguages = getTenMostSpokenLanguages(languageCounts);

  for (const element of sortedTenLanguages) {
    const languageElement = document.createElement("div");
    languageElement.classList.add("language-item");

    const progressBar = document.createElement("progress");
    progressBar.value = element[1];
    progressBar.max = 100;

    const language = element[0];
    languageElement.textContent = `${language} `;
    languageElement.style.margin = "0";
    languageElement.appendChild(progressBar);
    const useNumber = document.createTextNode(` ${element[1]}`);
    languageElement.appendChild(useNumber);
    topTenLanguages.appendChild(languageElement);
  }
  container.appendChild(topTenLanguages);

  return container;
}

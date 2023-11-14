import { countries_data } from "../data/countries_data.js";

export function tenMostSpokenLanguages() {
  const container = document.createElement("div");
  container.classList.add("box");
  const allLanguages = countries_data
    .map((country) => country.languages)
    .flat();

  const languageCounts = allLanguages.reduce((acc, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  const topTenLanguages = document.createElement("div");
  const languageArray = Object.entries(languageCounts);
  const sortedLanguages = languageArray.sort((a, b) => b[1] - a[1]);
  const sortedTenLanguages = sortedLanguages.slice(0, 10);

  for (const element of sortedTenLanguages) {
    const languageElement = document.createElement("div");
    languageElement.classList.add("language-item");

    const progressBar = document.createElement("progress");
    progressBar.value = element[1];
    progressBar.max = 100;

    languageElement.textContent = `${element[0]} `;
    languageElement.style.margin = '0';
    languageElement.appendChild(progressBar);
    const useNumber = document.createTextNode(` ${element[1]}`);
    languageElement.appendChild(useNumber);
    topTenLanguages.appendChild(languageElement);
  }
  container.appendChild(topTenLanguages);

  return container;
}

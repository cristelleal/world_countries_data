import { countriesData } from '../data/countriesData';
import { getLangagesCount, getTenMostSpokenLanguages } from '../utils/utils';

export default function tenMostSpokenLanguages() {
  const container = document.createElement('div');
  container.classList.add('box');
  const languageCounts = getLangagesCount(countriesData);

  const topTenLanguages = document.createElement('div');
  topTenLanguages.classList.add('items-container');
  const sortedTenLanguages = getTenMostSpokenLanguages(languageCounts);

  sortedTenLanguages.forEach(([language, count]) => {
    const languageElement = document.createElement('div');
    languageElement.classList.add('language-item');

    const progressBar = document.createElement('progress');
    progressBar.value = count;
    progressBar.max = 100;

    languageElement.textContent = `${language} `;
    languageElement.style.margin = '0';
    languageElement.appendChild(progressBar);
    const useNumber = document.createTextNode(` ${count}`);
    languageElement.appendChild(useNumber);
    topTenLanguages.appendChild(languageElement);
  });

  container.appendChild(topTenLanguages);

  return container;
}

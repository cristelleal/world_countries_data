import tenMostPopulatedCountries from './population.js';
import selectButton from './button.js';

export default function populationButton() {
  const textContent = 'Population'.toUpperCase();
  selectButton({
    selector: '.population',
    textContent,
    onClick() {
      const title = document.querySelector('.graph-title');
      title.textContent = '10 Most populated countries in the world';
      const graph = document.querySelector('.graphs');
      graph.innerHTML = '';
      graph.appendChild(tenMostPopulatedCountries());
    },
  });
}

import tenMostSpokenLanguages from './languages';
import selectButton from './button';

export default function languagesButton() {
  const textContent = 'Languages'.toUpperCase();
  selectButton({
    selector: '.languages',
    textContent,
    onClick() {
      const title = document.querySelector('.graph-title');
      title.textContent = '10 Most spoken languages in the world';
      const graph = document.querySelector('.graphs');
      graph.innerHTML = '';
      graph.appendChild(tenMostSpokenLanguages());
    },
  });
}

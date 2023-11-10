import { tenMostPopulatedCountries } from "../components/population.js";

export function populationButton() {
  const button = document.querySelector(".population");
  button.textContent = "Population".toUpperCase();

  button.addEventListener("click", function() {
    const title = document.querySelector(".graph-title");
    title.textContent = "10 Most populated countries in the world";
    const graph = document.querySelector(".graphs");
    graph.innerHTML = "";
    graph.appendChild(tenMostPopulatedCountries());
  });
  return button;
}

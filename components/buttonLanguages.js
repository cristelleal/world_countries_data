import { tenMostSpokenLanguages } from "../components/languages.js";

export function languagesButton() {
  const button = document.querySelector(".languages");
  button.textContent = "Languages".toUpperCase();

  button.addEventListener("click", function() {
    const title = document.querySelector(".graph-title");
    title.textContent = "10 Most spoken languages in the world";
    const graph = document.querySelector(".graphs");
    graph.innerHTML = "";
    graph.appendChild(tenMostSpokenLanguages());
  });

  return button;
}

import { tenMostSpokenLanguages } from "../components/languages.js";
import { selectButton } from "./button.js";

export function languagesButton() {
  const textContent = "Languages".toUpperCase();
  selectButton({
    selector: ".languages",
    textContent,
    onClick: function() {
      const title = document.querySelector(".graph-title");
      title.textContent = "10 Most spoken languages in the world";
      const graph = document.querySelector(".graphs");
      graph.innerHTML = "";
      graph.appendChild(tenMostSpokenLanguages());
    },
  });
}

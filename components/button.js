export function selectButton({
    selector,
    textContent,
    onClick,
}) {
  const button = document.querySelector(selector);
  button.textContent = textContent;
  button.addEventListener("click", onClick);

  return button;
}

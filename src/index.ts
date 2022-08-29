import "./index.css";

function init(rootElement: HTMLElement) {
  rootElement.innerText = "app";
}

const rootElement = document.getElementById("root");
if (rootElement) {
  init(rootElement);
}

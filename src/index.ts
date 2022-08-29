import "./index.css";

const worker = new Worker(new URL("./web-worker.ts", import.meta.url));

worker.onmessage = (e) => {
  console.log(e.data);
  worker.postMessage("Hello from the client side app!");
};

function init(rootElement: HTMLElement) {
  rootElement.innerText = "app";
}

const rootElement = document.getElementById("root");
if (rootElement) {
  init(rootElement);
}

setInterval(() => {
  self.postMessage("Hello from a web worker!");
}, 1000);

self.onmessage = (e) => {
  console.log(e.data);
};

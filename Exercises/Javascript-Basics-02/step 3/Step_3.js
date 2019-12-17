document.querySelector("#name").addEventListener("keyup", e => {
  document.querySelector("div").innerHTML = e.target.value;
});

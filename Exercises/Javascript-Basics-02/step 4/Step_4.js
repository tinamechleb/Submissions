document.querySelector("button").addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#city").value = "";
  }
});

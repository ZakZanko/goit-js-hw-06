const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (ev) => {
  output.textContent = ev.currentTarget.value;
  if (ev.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  }
});

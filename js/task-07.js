const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
refs.textEl.style.fontSize = `55px`;
refs.inputEl.addEventListener("input", Size);

function Size(ev) {
  refs.textEl.style.fontSize = `${ev.target.value}px`;
}

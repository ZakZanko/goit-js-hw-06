const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", Size);

function Size(ev) {
  refs.textEl.style.fontSize = `${ev.target.value}px`;
}

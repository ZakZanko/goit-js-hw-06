const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("change", (ev) => {
  refs.textEl.style.fontSize = `${ev.target.value}px`;
});

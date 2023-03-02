const inputRef = document.querySelector("input#validation-input");

const symbolLength = Number(inputRef.dataset.length);

const onInputBlurAdd = (ev) => {
  if (ev.currentTarget.value.length === symbolLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onInputBlurAdd);
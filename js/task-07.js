const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
  };
  
  refs.inputEl.addEventListener('input', changeFontSize);
  function changeFontSize(ev) {
    refs.textEl.style.fontSize = refs.inputEl.value * (16 / 56) + 'px';
  }
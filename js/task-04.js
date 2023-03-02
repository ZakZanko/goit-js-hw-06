const refs = {
    valueEl: document.querySelector('#value'),
    decrementBtn: document.querySelector('button[data-action ="decrement"]'),
    incrementBtn: document.querySelector('button[data-action ="increment"]'),
  };
  
  const clickFunction = {
    value: 0,
    incMethod() {
      this.value += 1;
      return (refs.valueEl.textContent = this.value);
    },
    decMethod() {
      this.value -= 1;
      return (refs.valueEl.textContent = this.value);
    },
  };
  
  refs.incrementBtn.addEventListener(
    'click',
    clickFunction.incMethod.bind(clickFunction)
  );
  refs.decrementBtn.addEventListener(
    'click',
    clickFunction.decMethod.bind(clickFunction)
  );
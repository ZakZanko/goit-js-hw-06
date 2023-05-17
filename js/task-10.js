document.body.style.backgroundColor = "#abbbc4";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");
const step = document.querySelector("input[step]");
divBoxesEl.style.display = "flex";
divBoxesEl.style.flexWrap = "wrap";
divBoxesEl.style.alignItems = "center";
divBoxesEl.style.marginTop = "30px";

// inputNumberEl.addEventListener("input", toogleValue);
// createBtnEl.addEventListener("click", () => {
//   createBoxes(Number(inputNumberEl.value));
// });
// destroyBtnEl.addEventListener("click", destroyBoxesMarkup);

// let inputValue = 0;
// function toogleValue(event) {
//   inputValue = event.currentTarget.value;
//   console.log(inputValue);
// }

const createBoxes = () => {
  let divArray = [];
  let sizeDefault = 20;
  const error = `enter number from ${inputNumberEl.min} to ${inputNumberEl.max}`;
  if (
    Number(inputNumberEl.value) >= Number(inputNumberEl.min) &&
    Number(inputNumberEl.value) <= Number(inputNumberEl.max)
  ) {
    for (let i = 0; i < inputNumberEl.value; i += 1) {
      sizeDefault += 10;
      divArray.push(
        `<div class ='elem' style='height: ${sizeDefault}px; background-color: ${getRandomHexColor()}; width: ${sizeDefault}px'></div>`
      );
    }
    divBoxesEl.insertAdjacentHTML("beforebegin", divArray.join(""));
  } else {
    divBoxesEl.insertAdjacentHTML("beforebegin", error);
  }
};
// const divElement = document.createElement("div");
// divElement.classList = "item";
// divElement.style.height = `${sizeDefault}px`;
// divElement.style.width = `${sizeDefault}px`;
// divElement.style.marginRight = `${sizeDefault}px`;
// divElement.style.marginBottom = `${sizeDefault}px`;
// divElement.style.backgroundColor = getRandomHexColor();
// divArray.push(divElement);
//divBoxesEl.appendChild(divElement);
//   }
//   return divBoxesEl.append(...divArray);
// }

const destroyBoxes = () => {
  location.reload();
};
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

// function destroyBoxesMarkup() {
//   inputNumberEl.value = "";
//   divBoxesEl.innerHTML = "";
// }

// destroyBtnEl.addEventListener("click", () => {
//   destroyBoxesMarkup.call();
// });

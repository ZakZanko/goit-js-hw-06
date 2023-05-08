function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const randomColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", (ev) => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  randomColor.textContent = newColor;
});

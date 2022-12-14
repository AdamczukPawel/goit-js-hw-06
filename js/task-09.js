function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.body;

button.addEventListener("click", () => {
  let backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;
  color.textContent = backgroundColor;
})
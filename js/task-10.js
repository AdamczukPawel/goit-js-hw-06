const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls>input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const allBoxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30+10*i}px`;
    box.style.height = `${30+10*i}px`;
    box.style.backgroundColor = getRandomHexColor();
    allBoxes.push(box);
  }
  boxes.append(...allBoxes);
}

const destroyBoxes = () => boxes.innerHTML = '';

create.addEventListener("click", () => createBoxes(input.value));
destroy.addEventListener("click", destroyBoxes);


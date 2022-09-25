const inputBar = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.log(text.style.fontSize);

inputBar.addEventListener("input", () => {
    text.style.fontSize = `${inputBar.value}px`;
})


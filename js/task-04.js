const value = document.querySelector(`#value`);

const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);

let currentValue = 0;

decrement.addEventListener("click", () => {
    currentValue = currentValue - 1;
    value.innerHTML = currentValue;});
    
increment.addEventListener("click", () => {
    currentValue = currentValue + 1;
    value.innerHTML = currentValue;});
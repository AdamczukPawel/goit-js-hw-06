const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
console.log(input.value);

// if (input.value !== null) {
//     input.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;
//     })
// } else {
//     output.textContent = "Anonymous";
// };
input.addEventListener("input", (event) => {
    if (input.textContent !== null) {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = "Anonymous";
    }
});

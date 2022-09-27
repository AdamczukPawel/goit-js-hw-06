const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value !== "" && password.value !== "") {
        console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
        form.reset();
    } else {
        window.alert("All fields must be filled");
    }
    console.log(event);
})

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value !== "" && password.value !== "") {
        const formValues = {
            email: email.value,
            password: password.value
        }
        console.log(formValues);
        form.reset();
    } else {
        window.alert("All fields must be filled");
    }
})

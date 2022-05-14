const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "doctor" && password === "222") {
        alert("successfully logged in.");

        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


var customerName = prompt("Please enter your name", "");
if (customerName!= null) {
    document.getElementById("username").value = customerName;
}

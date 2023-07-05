const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

// Retrieve form input values
  // const email = document.getElementById("email").value;
  // const password = document.getElementById("password").value;

// format.addEventListener("submit", () => {
    const register = {         
        email: email.value,
        password: password.value
    };
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        /*.then(data => {
            if (data.status == "error") {
                success.style.display = "none";
                error.style.display = "block";
                error.innerText = data.error;
            } else {
                error.style.display = "none";
                success.style.display = "block";
                success.innerText = data.success;
            }
        }); */
});

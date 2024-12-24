// Login Form Validation
document.getElementById("login-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    const errorMessage = document.getElementById("error-message");

    // Simple validation logic (for demo purposes)
    if (email === "test@example.com" && password === "12345") {
        alert("Login Successful!");
        
        // Save to local storage if "Remember Me" is checked
        if (rememberMe) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        // Optionally redirect to another page
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid credentials, please try again.";
    }
});

// Populate email field if "Remember Me" was previously checked
document.addEventListener("DOMContentLoaded", function () {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        document.getElementById("email").value = rememberedEmail;
        document.getElementById("remember-me").checked = true;
    }
});

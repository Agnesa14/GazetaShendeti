document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        
        clearErrors();

        let isValid = true;

        
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Ju lutem shkruani emrin tuaj.");
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, "Emri duhet të ketë të paktën 3 karaktere.");
            isValid = false;
        }

        
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Ju lutem shkruani email-in tuaj.");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Ju lutem shkruani një email të vlefshëm.");
            isValid = false;
        }

        
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Ju lutem shkruani mesazhin tuaj.");
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, "Mesazhi duhet të ketë të paktën 10 karaktere.");
            isValid = false;
        }

        
        if (isValid) {
            alert("Mesazhi juaj u dërgua me sukses!");
            form.reset();
        }
    });

    
    function showError(input, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message text-danger mt-1";
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        input.classList.add("is-invalid");
    }

    
    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((error) => error.remove());

        const invalidInputs = document.querySelectorAll(".is-invalid");
        invalidInputs.forEach((input) => input.classList.remove("is-invalid"));
    }

    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

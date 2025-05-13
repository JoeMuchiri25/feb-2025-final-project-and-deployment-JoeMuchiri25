
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let formValid = true;

    document.querySelectorAll("input, textarea").forEach(field => {
        if (!field.value.trim()) {  // Check if the field is empty
            formValid = false;
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
        }
    });

    if (formValid) {
        // Show the success message
        document.getElementById("successMessage").style.display = "block";

        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById("myForm").reset();
            document.getElementById("successMessage").style.display = "none";
        }, 3000);
    }
});

// Real-time validation while typing
document.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", () => {
        field.classList.toggle("is-invalid", !field.value.trim());
        field.classList.toggle("is-valid", field.value.trim());
    });
});



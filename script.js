// Get the input element
    const inputField = document.getElementById("fname");

    // Add event listener for when the field loses focus
    inputField.addEventListener("blur", function () {
      this.value = this.value.toUpperCase();
    });
document.getElementById("signupform").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const errorMessage = document.getElementById("error-message");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "rgb(255, 99, 71)";
    emailInput.style.color = "rgb(255, 99, 71)";
    emailInput.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
  } else {
    errorMessage.style.display = "none";
    emailInput.style.borderColor = "";
    emailInput.style.color = "";
    emailInput.style.backgroundColor = "";

    // Redirect to success page with email in query string
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});


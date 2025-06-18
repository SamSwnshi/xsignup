document.getElementById("subscribe").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const errorMessage = document.querySelector(".error-message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorMessage.style.display = "block";
    emailInput.classList.add("error");
    emailInput.focus();
    return;
  } else {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
  }

  localStorage.setItem("SubscribeEmail", email);
  window.location.href = "success.html";
});

// Remove error state on input
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", function () {
  const errorMessage = document.querySelector(".error-message");
  errorMessage.style.display = "none";
  emailInput.classList.remove("error");
});
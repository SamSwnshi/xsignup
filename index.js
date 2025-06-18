document.getElementById("subscribe").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
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
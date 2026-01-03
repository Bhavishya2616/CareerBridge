const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

function showMessage(event) {
  event.preventDefault();
  document.getElementById("successMsg").innerText =
    "✅ Message sent successfully! You will receive a response within 24 hours.";
}

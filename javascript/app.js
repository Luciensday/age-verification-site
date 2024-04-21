const form = document.getElementById("ageForm");
const submit = document.getElementById("submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchQuery = document.getElementById("birthdayInput").value;

 // Redirect to the success page

  window.location.href = "success"

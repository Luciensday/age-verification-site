const form = document.getElementById("ageForm");
const submit = document.getElementById("submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const birthday = new Date(document.getElementById("birthdayInput").value);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  if (age >= 18) {
    window.location.href = "success.html";
  } else {
    window.location.href = "unsuccessful.html";
  }
});

function goBack() {
  window.history.back();
}

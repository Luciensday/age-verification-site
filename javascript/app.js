//form submission and age verification
const form = document.getElementById("ageForm");
//The pages without #ageForm will cause error as all html link to this javascript file .  Check if the form exists before attaching the event listener
if (form) {
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
}

//go back button function
function goBack() {
  window.history.back();
}

//dark mode function
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // Store the current mode in local storage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}
// Check if dark mode preference is stored in local storage
const storedMode = localStorage.getItem("darkMode");
if (storedMode === "enabled") {
  // Apply dark mode if it was enabled
  toggleDarkMode();
}
// Event listener for dark mode toggle button on each page
const darkModeToggle1 = document.getElementById("darkModeToggle1");
if (darkModeToggle1) {
  darkModeToggle1.addEventListener("click", toggleDarkMode);
}

const darkModeToggle2 = document.getElementById("darkModeToggle2");
if (darkModeToggle2) {
  darkModeToggle2.addEventListener("click", toggleDarkMode);
}

const darkModeToggle3 = document.getElementById("darkModeToggle3");
if (darkModeToggle3) {
  darkModeToggle3.addEventListener("click", toggleDarkMode);
}

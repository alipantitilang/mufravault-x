// ===============================
// ===== THEME SYSTEM =====
// ===============================

const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

const THEME_KEY = "mufraVaultTheme";

// ===== LOAD SAVED THEME =====
function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeToggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    themeToggleBtn.textContent = "🌙";
  }
}

// ===== TOGGLE THEME =====
function toggleTheme() {

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem(THEME_KEY, "light");
    themeToggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem(THEME_KEY, "dark");
    themeToggleBtn.textContent = "🌙";
  }
}

// ===== EVENT LISTENER =====
themeToggleBtn.addEventListener("click", toggleTheme);

// ===== INIT =====
document.addEventListener("DOMContentLoaded", loadTheme);

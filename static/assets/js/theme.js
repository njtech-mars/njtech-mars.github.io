const darkMode = localStorage.getItem("theme") === "dark";
document.body.classList.toggle("dark", darkMode);
document.body.style.colorScheme = darkMode ? "dark" : "light";

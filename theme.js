// icon change

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode"); // toggles dark mode

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.textContent = "🌙"; // moon for dark mode
  } else {
    themeIcon.textContent = "⭐"; // star for light mode
  }
});

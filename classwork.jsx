const hamburger = document.getElementById("hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("display");
});
// color changing asignment

const btn = document.getElementById("colorBtn")
const resetBtn = document.getElementById("resetBtn");

function getRandomColor () {
  const letters = "0123456789ABCDEF"
  let color ="#";
   
for (let i=0; i<6; i++) {
  color += letters[Math.floor(Math.random() *16)];
}
return color;
}

function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

let colorInterval = setInterval(() => {
  document.body.style.background = getRandomGradient();
}, 5000);

btn.addEventListener("click", function() {
  document.body.style.background = getRandomGradient();
});

resetBtn.addEventListener("click", function () {
  clearInterval(colorInterval);
  document.body.style.background = "black"; 
});

// counter
let count = 0;

const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetCounterBtn = document.getElementById("resetCounterBtn");
const autoCountBtn = document.getElementById("autoCountBtn");

// Create a display for the count
const counterContainer = document.querySelector(".counter-container");
const counterDisplay = document.createElement("p");
counterDisplay.id = "counterDisplay";
counterDisplay.textContent = count;
counterContainer.insertBefore(counterDisplay, decrementBtn);

decrementBtn.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetCounterBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

let autoInterval = null;
autoCountBtn.addEventListener("click", () => {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    autoCountBtn.textContent = "Auto Count";
  } else {
    autoInterval = setInterval(() => {
      count++;
      counterDisplay.textContent = count;
    }, 500);
    autoCountBtn.textContent = "Stop Auto";
  }
});

// eligibility checker
document.getElementById("checkEligibilityBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const age = parseInt(document.getElementById("ageInput").value);
  const eligibilityMessage = document.getElementById("eligibilityMessage");

  if (age >= 18) {
    eligibilityMessage.textContent = `${name}, you are eligible to vote.`;
  } else {
    eligibilityMessage.textContent = `${name}, you are not eligible to vote.`;
  }
});

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
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
  return `linear-gradient(${angle}90deg, ${color1}, ${color2})`;
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

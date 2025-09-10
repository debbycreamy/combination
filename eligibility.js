//  eligibility checker

 document.getElementById("checkEligibilityBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
   const age = parseInt(document.getElementById("ageInput").value);
  const eligibilityMessage = document.getElementById("eligibilityMessage");

  if (!name || isNaN(age)) {
    alert ("please enter avalid inpute");
    return;
  }
  if (age >= 18) {
    eligibilityMessage.textContent =`${name}, you are eligible to vote.`;
   } else {
   eligibilityMessage.textContent =`${name}, you are not eligible to vote.`;
   }
 });
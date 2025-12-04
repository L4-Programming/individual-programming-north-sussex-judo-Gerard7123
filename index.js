import { calculateCosts } from "./calculateCosts.js";
import { validateFormData } from "./validateForms.js";
import { displayResults } from "./displayResults.js";

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
const maxHoursPerLevel = {
  "Beginner( 2 sessions/week)": 2,
  "Intermediate( 3 sessions/week)": 3,
  "Elite( 5 sessions/week)": 5,
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userName = document.querySelector("#athlete-name").value;
  const userLevel = document.querySelector(
    'input[name="training-plan"]:checked"
  ).value;
  let userCompetitionHours = document.querySelector("#competition-entered").value;

  const result = validateFormData({
    userName,
    userLevel,
    userTutoring,
    userCompetitionFee: userCompetitionHours,
  });

  if (result.length === 0) {
    const costs = calculateCosts(data);
    displayResults(costs);
  } else {
    console.log("Validation errors:", result);
  }

  console.log({
    userName,
    userLevel,
    userCompetitionFee: userCompetitionHours,
  });
}); /* Refer to the README.md for instructions on what you need to do in this project */
//Import the calculateCosts function from calculateCosts.js

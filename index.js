import { calculateCosts } from "./calculateCosts.js";
import { validateForm } from "./validateForm.js/";
import { displayResults } from "./displayResults.js";

let form = document.querySelector("form");

Event.preventDefault();
const maxHoursPerLevel = {
  "Beginner( 2 sessions/week)": 2,
  "Intermediate( 3 sessions/week)": 3,
  "Elite( 5 sessions/week)": 5,
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
}); /* Refer to the README.md for instructions on what you need to do in this project */
//Import the calculateCosts function from calculateCosts.js
import "./calculateCosts.js";
console.log("Calculating costs");
console.log({ data });
displayResults(calculateCosts);
//Import the validateForm function from validateForm.js
import "./validateForm.js";
console.log("Validating form");
console.log({ data });
validateForm(data);

const result = validateForm([
  userName,
  userEmail,
  userLevel,
  userHours,
  userTutoring,
  userCompetitionFee,
]);
if (result.length === 0) {
  const costs = calculateCosts(data);
  displayResults(costs);
} else {
  console.log("Validation errors:", result);
}

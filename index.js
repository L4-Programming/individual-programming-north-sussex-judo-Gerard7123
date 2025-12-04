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
import { calculateCosts } from "./calculateCosts.js";
export function calculateCosts(data) {
  console.log("Calculating costs");
  console.log({ data });
  return 0;
}

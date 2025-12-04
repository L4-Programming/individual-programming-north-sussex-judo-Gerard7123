//Captures the form submission and prevents the default action
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
}); /* Refer to the README.md for instructions on what you need to do in this project */
//Import the calculateCosts function from calculateCosts.js
import { calculateCosts } from "./calculateCosts.js";
export function calculateCosts(data) {
  console.log("Calculating costs");
  console.log({ data });

  const costPerHour = {
    "Beginner( 2 sessions/week)": 15,
    "Intermediate( 3 sessions/week)": 30,
    "Elite( 5 sessions/week)": 35,
    "private Tuition (1 session/hour)": 9.5,
    "Competition fee": 22.0,
  };
  let totalCost = 0;

  if (data.costPerHour) {
  }
  return totalCost;
}

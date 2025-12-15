import { calculateCosts } from "./calculateCosts.js";
import { validateFormData } from "./validateForms.js";
import { displayResults } from "./displayResults.js";

const form = document.querySelector("form");

const maxHoursPerLevel = {
  beginner: 2,
  intermediate: 3,
  advanced: 4,
  elite: 5,
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.querySelector("#athlete-name").value.trim();

  // get the checked radio (returns null if none)
  const selected = document.querySelector(
    'input[name="training-plan"]:checked'
  );

  const userLevel = selected ? selected.value : "";
  // lookup hours using the normalized keys (beginner/intermediate/advanced/elite)
  const userHours =
    Number(document.querySelector("#private-coaching-hours").value) || 0;
  const userTutoringHours =
    Number(document.querySelector("#private-coaching-hours").value) || 0;
  // Number of competitions entered this month
  const userCompetitionHours =
    Number(document.querySelector("#competitions-entered").value) || 0;
  const userWeight =
    Number(document.querySelector("#current-weight").value) || 0;

  const validationErrors = validateFormData({
    userName,
    userLevel,
    userCompetitionHours,
    userWeight,
    userHours,
  });

  if (validationErrors.length > 0) {
    alert(validationErrors.join("\n"));

    return;
  }

  if (validationErrors.length === 0) {
    const data = {
      userName,
      userLevel,
      userHours,
      userTutoring: userTutoringHours,
      userCompetitionFee: userCompetitionHours,
    };

    const costs = calculateCosts(data);
    displayResults(costs);
  } else {
    console.log("Validation errors:", validationErrors);
  }

  // helpful debug info in the console
  console.log({
    userName,
    userLevel,
    userHours,
    userTutoringHours,
    userCompetitionHours,
    validationErrors,
  });
});

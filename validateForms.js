let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
export function validateFormData(data = {}) {
  const {
    userName = "",
    userLevel = "",
    userHours = 0,
    userWeight = 0,
    userCompetitionsEntered = 0,
  } = data;

  const errors = [];
  function addError(message) {
    errors.push(message);
  }

  if (!userName) addError("Athlete Name is required");
  if (!userLevel) addError("Please select your progress level");

  const hoursNumber = Number(userHours);
  const maxHoursPerLevel = { beginner: 2, intermediate: 3, elite: 5 };
  const maxAllowedHours = maxHoursPerLevel[userLevel] ?? Infinity;
  if (Number.isNaN(hoursNumber) || hoursNumber < 0) {
    addError("Number of Private Coaching Hours must be a non-negative number");
  } else if (hoursNumber > maxAllowedHours) {
    addError(`You can only study a maximum of ${maxAllowedHours} hours per week.`);
  }

  const weightNumber = Number(userWeight);
  if (Number.isNaN(weightNumber) || weightNumber <= 0) {
    addError("Current Weight must be a positive number");
  } else if (weightNumber > 290) {
    addError("Current Weight must be less than or equal to 290kg");
  }

  const competitionsNumber = Number(userCompetitionsEntered);
  if (Number.isNaN(competitionsNumber) || competitionsNumber < 0) {
    addError("Number of Competitions Entered must be a non-negative number");
  } else if (competitionsNumber > 2) {
    addError("The max number of competitions you can enter is 2");
  }

  return errors;
}

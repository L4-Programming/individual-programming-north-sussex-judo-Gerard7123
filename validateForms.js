let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
export function validateFormData(data) {
  const {
    userName,
    userLevel,
    userHours,
    userWeight,
    userCompetitionsEntered,
  } = data;

  console.log({ data });

  const errors = [];

  function addError(message) {
    errors.push(message);
  }

  if (userLevel === "") {
    addError("Please select your progress level");

    return errors;
  }

  if (!userName) {
    addError("Athlete Name is required");

    return errors;
  }

  if (!userLevel) {
    addError("Training Plan is required");

    return errors;
  }

  if (!userWeight) {
    addError("Current Weight is required");

    return errors;
  }

  const maxHoursPerLevel = {
    beginner: 2,
    intermediate: 3,
    elite: 5,
  };
  const maxAllowedHours = maxHoursPerLevel[userLevel];

  console.log({ maxAllowedHours });

  if (userHours > maxAllowedHours) {
    addError(
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }

  if (userWeight <= 0) {
    addError("Current Weight must be a positive number");
  }

  if (userWeight > 290) {
    addError("Current Weight must be less than or equal to 290kg");
  }

  if (userCompetitionsEntered < 0) {
    addError("Number of Competitions Entered must be a non-negative number");
  } else {
    if (userCompetitionsEntered > 2) {
      addError("The max number of competitions you can enter is 2");
    }
  }

  if (userHours < 0) {
    addError("Number of Private Coaching Hours must be a non-negative number");
  }

  if (errors.length > 0) {
    return errors;
  }

  return {
    userName,
    userLevel,
    userHours,
    userWeight,
    userCompetitionsEntered,
  };
}

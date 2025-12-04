export function validateFormData(data) {
  const { userEmail, userLevel, userHours } = data;
  const errors = [];
  if (userLevel === "") {
    addError("level", "please select your progress level");
  }
}
const maxHoursPerLevel = {
  "Beginner( 2 sessions/week)": 2,
  "Intermediate( 3 sessions/week)": 3,
  "Elite( 5 sessions/week)": 5,
};
const maxHoursTutoring = 5;
function addError(fieldId, message) {
  if (fieldId === "tutoring" && maxHoursTutoring >= 5) {
    errors.push("You can only have a maximum of 5 hours of tutoring per week.");
  }
  errors.push(message);
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
    if (
      (userLevel === "Beginner( 2 sessions/week)" && userHours > 2) ||
      (userLevel === "Intermediate( 3 sessions/week)" && userHours > 3) ||
      (userLevel === "Elite( 5 sessions/week)" && userHours > 5)
    ) {
    } else {
      errors.push(
        "Hours per week exceed the maximum allowed for the selected level."
      );
    }

    if (Object.keys(errors).length > 0) {
      displayErrors(errors);

      return false;
    }

    return {
      userEmail,
      userLevel,
      userHours: parseInt(userHours),
    };

    if (!data.athleteName) {
      errors.push("Athlete Name is required");
    }
    if (!data.trainingPlan) {
      errors.push("Training Plan is required");
    }
    if (!data.currentWeight) {
      errors.push("Current Weight is required");
    }
    if (data.currentWeight <= 0 || data.currentWeight >= 290) {
      errors.push("Current Weight must be a positive number");
    }
    if (data.competitionsEntered < 0 || data.competitionsEntered < 2) {
      errors.push(
        "Number of Competitions Entered must be a non-negative number"
      );
    }
    if (data.privateCoachingHours < 0) {
      errors.push(
        "Number of Private Coaching Hours must be a non-negative number"
      );
    }
    return errors;
  }
}

export function validateFormData(data) {
  const errors = [];

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
    errors.push("Number of Competitions Entered must be a non-negative number");
  }
  if (data.privateCoachingHours < 0) {
    errors.push(
      "Number of Private Coaching Hours must be a non-negative number"
    );
  }
  return errors;
}

export function validateForm(formData = {}) {
  const { userEmail = "", userLevel = "", userHours = "" } = formData;
  const errors = {};

  function addError(field, message) {
    errors[field] = message;
  }

  // Email validation
  const emailTrimmed = String(userEmail).trim();
  if (!emailTrimmed) {
    addError("email", "Please provide an email address.");
  } else if (!emailRegex.test(emailTrimmed)) {
    addError("email", "Please provide a valid email address.");
  }

  
  const maxHoursPerLevel = {
    "Beginner (2 sessions/week)": 2,
    "Intermediate (3 sessions/week)": 3,
    "Elite (5 sessions/week)": 5,
  };

  if (!userLevel || userLevel === "") {
    addError("level", "Please select your progress level.");
  } else if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
      addError("level", "Invalid level of study selected.");
  }

  // Hours validation
  if (userHours === "" || userHours === null || userHours === undefined) {
    addError(
      "hoursPerWeek",
      "Please specify the number of hours you plan to study each week."
    );
  } else if (isNaN(userHours) || Number(userHours) <= 0) {
    addError("hoursPerWeek", "Please provide a valid number of hours.");
  } else {
    const hoursNumber = Number(userHours);
    const maxAllowed = maxHoursPerLevel[userLevel] ?? 0;
    if (hoursNumber > maxAllowed) {
      addError(
        "hoursPerWeek",
        `You can only study a maximum of ${maxAllowed} hours per week.`
      );
    }
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      userEmail: emailTrimmed,
      userLevel,
      userHours: Number(userHours),
    },
  };
}


  // Check if the user has provided an email address

  // Check if the user has selected a level
  if (userLevel === "") {
    addError("level", "please select your progress level");
  }



  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected.");
    maxAllowedHours = 0;

  }

  const maxAllowedHours =l[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    if{userLevel === "Beginner( 2 sessions/week)" && userHours > 2 ||
    userLevel === "Intermediate( 3 sessions/week)" && userHours > 3 ||
    userLevel === "Elite( 5 sessions/week)" && userHours > 5 }
    Total cost = userLevel * 4 weeks * userHours * costPerHour[userLevel];
    }
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

export function calculateCosts(data) {
  console.log("Calculating costs");
  console.log({ data });

  const costPerLevel = {
    beginner: 25,
    intermediate: 30,
    elite: 35,
  };

  const additionalFees = {
    tuition: 9.5,
    competition: 22.0,
  };

  let totalCost = costPerLevel[data.userLevel] * data.userHours;
  let tutoringCost =
    costPerLevel["private Tuition:1 session/hour"] * data.userTutoring;
  let competitionFeeCost =
    costPerLevel["Competition fee"] * data.userCompetitionFee;
  totalCost += tutoringCost + competitionFeeCost * 4;

  if (data.costPerHour) {
  }

  return; //
  return {
    totalCost: totalCost,
    userName: data.userName,
    userEmail: data.userEmail,
    userLevel: data.userLevel,
    userHours: data.userHours,
    userTutoring: tutoringCost,
    userCompetitionFee: competitionFeeCost,
    totalCost:
      costPerLevel[data.userLevel] * data.userHours +
      tutoringCost +
      competitionFeeCost * 4,
  };

  console.log(`Total cost: $${totalCost.toFixed(2)}`);
  return costobject;
}

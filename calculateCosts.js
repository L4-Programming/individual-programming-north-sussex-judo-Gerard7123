export function calculateCosts(data = {}) {
  // expected data keys:
  // { userName, userEmail, userLevel, userHours, userTutoring, userCompetitionFee }
  const costPerLevel = {
    beginner: 25,
    intermediate: 30,
    elite: 35,
  };

  const additionalFees = {
    tuitionPerHour: 9.5, // private tutoring per hour
    competitionPerEntry: 22.0, // per competition entered
  };

  const levelKey = data.userLevel || "beginner";
  const hours = Number(data.userHours) || 0;
  const tutoringHours = Number(data.userTutoring) || 0;
  const competitions = Number(data.userCompetitionFee) || 0;

  const baseCost = (costPerLevel[levelKey] ?? 0) * hours;
  const tutoringCost = additionalFees.tuitionPerHour * tutoringHours;
  const competitionFee = additionalFees.competitionPerEntry * competitions;
  const totalCost = baseCost + tutoringCost + competitionFee;

  return {
    userName: data.userName || "",
    userLevel: levelKey,
    userHours: hours,
    tutoringCost,
    baseCost,
    competitionFee,
    totalCost,
  };
}
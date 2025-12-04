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
}

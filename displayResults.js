export function displayResults(output = {}) {
  console.log({ output });

  const container = document.querySelector("#output");

  if (!container) return;

  const totalCost = Number(output.totalCost) || 0;
  const tutoringCost = Number(output.tutoringCost) || 0;
  const competitionFee = Number(output.competitionFee) || 0;
  const hours = output.userHours ?? "—";

  container.innerHTML = `
      <h2>Total Cost</h2>
      <p><strong>Name:</strong> ${output.userName || "—"}</p>
      <p><strong>Level:</strong> ${output.userLevel || "—"}</p>
      <><strong>Base cost:</strong> £${output.baseCost.toFixed(1)}</>

      <p><strong>Tutoring cost:</strong> £${tutoringCost.toFixed(1)}</p>
      <p><strong>Competition fee:</strong> £${competitionFee.toFixed(1)}</p>
      <p><strong>Total hours:</strong> ${hours}</p>
      <h3>Total: £${totalCost.toFixed(2)}</h3>
    `;
}

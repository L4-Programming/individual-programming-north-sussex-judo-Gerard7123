export function displayResults(output = {}) {
  console.log({ output });

  const container = document.getElementById("output");
  if (!container) return;

  const totalCost = Number(output.totalCost) || 0;
  const tutoringCost = Number(output.tutoringCost) || 0;
  const competitionFee = Number(output.competitionFee) || 0;
  const hours = output.userHours ?? "—";

  container.innerHTML = `
  <h2>Total Cost</h2>
    <p>Name: ${output.userName || "—"}</p>
    <p>Level: ${output.userLevel}</p>
    <p>Hours: ${hours}</p>
    <p>Cost: £${totalCost.toFixed(2)}</p>
  `;

  results.innerHTML = `
  <dl>
    <dd class="results-email">${output.userEmail}</dd>

    <dd class="results-cost">£${output.totalCost}<span>per week</span></dd>

    <div class="results-details">
      <div>
        <dt>Level</dt>
        <dd class="results-detail">${output.userLevel}</dd>
      </div>
      <div>
        <dt>Hours</dt>
        <dd class="results-detail">${output.userHours}</dd>
      </div>
    </div>
  </dl>
`;
}
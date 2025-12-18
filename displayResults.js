export function displayResults(output = {}) {
  console.log({ output });
<<<<<<< HEAD
  if (!container && !resultsEl) return;
=======

  const container = document.getElementById("output");
  const resultsEl = document.getElementById("results");
  if (!container) return;

>>>>>>> 76471b3b2ee15471e462fe2c8b9c7291d53836f2
  const totalCost = Number(output.totalCost) || 0;
  const tutoringCost = Number(output.tutoringCost) || 0;
  const competitionFee = Number(output.competitionFee) || 0;
  const hours = output.userHours ?? "—";

  if (container) {
    container.innerHTML = `
      <h2>Total Cost</h2>
      <p><strong>Name:</strong> ${output.userName || "—"}</p>
      <p><strong>Level:</strong> ${output.userLevel || "—"}</p>
      <p><strong>Hours:</strong> ${hours}</p>
      <p><strong>Cost:</strong> £${totalCost.toFixed(2)}</p>
      <p><strong>Tutoring:</strong> £${tutoringCost.toFixed(2)}</p>
      <p><strong>Competition fee:</strong> £${competitionFee.toFixed(2)}</p>
    `;
  }

  if (resultsEl) {
    resultsEl.innerHTML = `

        <dt>Total</dt>
        <dd class="results-cost">£${totalCost.toFixed(2)} <span>per week</span></dd>

        <div class="results-details">
          <div>
            <dt>Level</dt>
            <dd class="results-detail">${output.userLevel || "—"}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd class="results-detail">${output.userHours ?? "—"}</dd>
          </div>
          <div>
            <dt>Tutoring</dt>
            <dd class="results-detail">£${tutoringCost.toFixed(2)}</dd>
          </div>
          <div>
            <dt>Competition fee</dt>
            <dd class="results-detail">£${competitionFee.toFixed(2)}</dd>
          </div>
        </div>
      </dl>
    `;
  }
}
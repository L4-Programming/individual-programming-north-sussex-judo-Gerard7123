export function displayResults(calculateCosts) {
  const resultsContainer = document.querySelector("#results");
  resultsContainer.innerHTML = `
    <h2>Total Cost</h2>
    <p>Email: ${calculateCosts.userEmail}</p>
    <p>Level: ${calculateCosts.userLevel}</p>
    <p>Hours: ${calculateCosts.userHours}</p>
    <p>Cost: $${calculateCosts.totalCost.toFixed(2)}</p>
    <p>Tutoring: ${calculateCosts.userTutoring}</p>
    <p>CompetitionFee: ${calculateCosts.userCompetitionFee}</p>
  `;

  resultsContainer.innerHTML += `
  <dl>
    <dd class="results-email">${calculateCosts.userEmail}</dd>

    <dd class="results-cost">£${calculateCosts.totalCost.toFixed(
      2
    )}<span>per week</span></dd>
    <dd class="results-tutoring">£${calculateCosts.userTutoring.toFixed(
      2
    )}<span>per week</span></dd>
    <dd class="results-competition-fee">£${calculateCosts.userCompetitionFee.toFixed(
      2
    )}<span>per week</span></dd>

    <div class="results-details">
      <div>
        <dt>Level</dt>
        <dd class="results-detail">${calculateCosts.userLevel}</dd>
      </div>
      <div>
        <dt>Hours</dt>
        <dd class="results-detail">${calculateCosts.userHours}</dd>
      </div>
    </div>
  </dl>
`;
}

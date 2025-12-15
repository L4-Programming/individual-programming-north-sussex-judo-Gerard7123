export function displayResults(output) {
  /* const out = document.querySelector("#output");
  let results = document.querySelector("#"); */
  console.log({ output });

  document.getElementById("output").innerHTML = `
    <dl>
      <dt>Athlete Name:</dt>
      <dd>${output.userName || "—"}</dd>
      <dt>Training Level:</dt>
      <dd>${output.userLevel || "—"}</dd>
      <dt>Training Hours per Week:</dt>
      <dd>${output.userCompetitionHours ?? "—"}</dd>
      <dt>Total Cost:</dt>
      <dd>£${Number(output.totalCost).toFixed(2)}</dd>
      <dt>Private Tutoring Cost:</dt>
      <dd>£${Number(output.tutoringCost).toFixed(2)}</dd>
      <dt>Competition Fees:</dt>
      <dd>£${Number(output.competitionFee).toFixed(2)}</dd>
    </dl>
  `;

  out.innerHTML = `
    <h2>Results</h2>
    <div class="results-summary">
      <p><strong>Name:</strong> ${output.userName || "—"}</p>
      <p><strong>Level:</strong> ${output.userLevel || "—"}</p>
      <p><strong>Hours:</strong> ${output.userHours ?? "—"}</p>
      <p><strong>Total cost:</strong> £${Number(output.totalCost).toFixed(
        2
      )}</p>
      <p><strong>Tutoring:</strong> £${Number(output.tutoringCost).toFixed(
        2
      )}</p>
      <p><strong>Competition fee:</strong> £${Number(
        output.competitionFee
      ).toFixed(2)}</p>
    </div>
  `;
}

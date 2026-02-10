// Cache DOM elements once
const ipEl = document.getElementById("ip");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
const errorEl = document.getElementById("error-message");


//Update info cards
export function displayIPInfo(data) {
  if (!data) return;

  const ip = data.ip || "N/A";
  const city = data.location?.city || "";
  const region = data.location?.region || "";
  const timezone = data.location?.timezone || "N/A";
  const isp = data.isp || "N/A";

  ipEl.textContent = ip;
  locationEl.textContent = `${city}, ${region}`;
  timezoneEl.textContent = `UTC ${timezone}`;
  ispEl.textContent = isp;

  clearError(); // hide old errors on success
}


//Show error message
export function showError(msg) {
  if (!errorEl) return;

  errorEl.textContent = msg;
  errorEl.style.display = "block";
}


//Hide error message
export function clearError() {
  if (!errorEl) return;

  errorEl.textContent = "";
  errorEl.style.display = "none";
}
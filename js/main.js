// imports
import { fetchIPData, getUserIP } from "./api.js";
import { initMap, updateMarker } from "./map.js";
import { displayIPInfo, showError, clearError } from "./ui.js";
// import { validateIP, validateDomain } from "./utils.js";


// DOM
const button = document.getElementById("button");
const input = document.getElementById("input");



// 🚀 On page load
window.addEventListener("DOMContentLoaded", async () => {
    try {
        // get user's own IP automatically
        const userIP = await getUserIP();

        const data = await fetchIPData(userIP);

        displayIPInfo(data);
        initMap(data.location.lat, data.location.lng);
    } catch (err) {
        showError("Failed to load your IP location");
        console.error(err);
    }
});


// 🔍 Search function
async function performSearch() {
    const value = input.value.trim();

    clearError();

    // validate input first
    if (!validateIP(value) && !validateDomain(value)) {
        showError("Please enter a valid IP or domain");
        return;
    }

    try {
        const data = await fetchIPData(value);

        // update UI
        displayIPInfo(data);

        // move map
        updateMarker(data.location.lat, data.location.lng);

    } catch (err) {
        showError("Could not fetch IP data");
        console.error(err);
    }
});
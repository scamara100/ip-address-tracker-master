# IP Address Tracker – Development Reflection

## Development Process

I structured this project using an ES6 modular approach, separating concerns across four key JavaScript files: `api.js` (API calls), `main.js` (app orchestration), `map.js` (Leaflet integration), and `ui.js` (DOM updates). This modular design made the codebase more maintainable and testable. I started by planning the data flow—user input → fetch API → update UI → refresh map—then built each module to handle a single responsibility.

## Challenges Faced

**API Integration:** The biggest challenge was handling asynchronous API calls and managing errors gracefully. The IPify API requires a valid key, and requests can fail due to rate limits or network issues. I initially struggled with error propagation across modules.

**Map Library:** Integrating Leaflet was initially confusing due to coordinate systems and zoom levels. Getting the map to pan smoothly to new locations while updating the marker required understanding Leaflet's methods like `panTo()` and `setLatLng()`.

**CORS & Local Testing:** Testing the app locally revealed CORS (Cross-Origin Resource Sharing) issues when opening `index.html` directly. Using a local HTTP server resolved this.

## Solutions Implemented

I implemented a try-catch error handling pattern in `main.js` to catch API failures and display user-friendly error messages. For the map, I created dedicated `initMap()` and `updateMarker()` functions to cleanly handle initialization and updates.

I also separated input validation logic, checking if the user entered a valid IP or domain before making API requests, reducing unnecessary API calls.

## Potential Improvements

1. **Environment Variables:** Move the API key to a `.env` file instead of hardcoding it in `api.js`.
2. **Caching:** Implement localStorage to cache recent lookups and avoid redundant API calls.
3. **Unit Tests:** Add Jest tests for API and utility functions to ensure reliability.
4. **Advanced Map Features:** Support multiple markers or search history on the map.
5. **Accessibility:** Add ARIA labels and keyboard navigation for better screen reader support.

This project deepened my understanding of async JavaScript, API integration, and modular design patterns.

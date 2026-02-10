# IP Address Tracker

![Design preview for the IP address tracker coding challenge](./design/desktop-preview.jpg)

## Project overview

This is an implementation of the Frontend Mentor "IP Address Tracker" challenge. The app looks up IP addresses and domains, shows key details (IP, location, timezone, ISP), and renders the location on a Leaflet map.

## Features

- Responsive layout (mobile & desktop)
- Lookup by IP address or domain
- Automatically shows the user's IP on initial load
- Interactive map powered by Leaflet

## Technologies

- HTML, CSS, JavaScript (ES modules)
- Leaflet for maps
- IP Geolocation API: IPify (geo.ipify.org)

## Quick start

1. Clone the repo and open the project folder.
2. Install dependencies (optional; Leaflet is included via npm):

```bash
npm install
```

3. Serve the project locally (recommended) to avoid CORS issues. From the project root you can use a simple static server, for example:

```bash
# Python 3
python -m http.server 8080

# or using Node (if you have `http-server`)
npx http-server -p 8080
```

4. Open http://localhost:8080 in your browser.

Alternatively, you can open `index.html` directly in the browser, but using a local server is recommended.

## Configuration — API key (IMPORTANT)

This project uses the IP Geolocation API from IPify. The code in `js/api.js` currently includes an example API key. To use your own key:

1. Sign up for a free account at https://geo.ipify.org/ and get your API key.
2. Replace the `apiKey` value used in `js/api.js` with your key. For example, change the URL template to:

```js
const base = `https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY`;
```

Note: Because this is a client-side app, do not commit your real API key to a public repo. Use a placeholder in the repo and set the real key locally or via a build step.

## How the code is organized

- `index.html` — main markup and links to styles and JS modules
- `styles.css` — global styles
- `js/`
	- `api.js` — functions that call the IPify API (replace the apiKey here)
	- `main.js` — app bootstrap and UI interactions
	- `map.js` — map initialization and marker handling (Leaflet)
	- `ui.js` — DOM updates for IP, location, timezone, and ISP
	- `utils.js` — helper functions
- `design/`, `assets/` — images and design previews

Open `js/main.js` to follow app flow: it wires the form, calls `fetchIPData()`, updates the UI, and moves the map.

## Usage

1. On load the app attempts to show the user's current IP and location (if accessible).
2. Enter an IP address or domain in the search field and submit.
3. Results display above the map and the map recenters to the returned location.

## Deployment

I deploy the static site to GitHub Pages. If deploying publicly, remove or rotate any real API key used in the repository and configure the key securely.

## Tips & troubleshooting

- If you see CORS or network errors, serve the project from a local static server (see Quick start).
- If the map fails to show tiles, ensure your internet connection allows Leaflet tile fetching; check console for tile URL errors.

## License & credits

This project is built from a Frontend Mentor challenge. See the original challenge for design assets and guidelines.

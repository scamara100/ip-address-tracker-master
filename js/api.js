async function fetchIPData() {
    try {
        const response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_W36tmoSFI3ZIFoeY5yqPi7RCkbNYo&ipAddress=8.8.8.8") // return a promise
        const data = await response.json() // format data to json
        return data
    } catch (e) {
        console.error(e)
    }
}

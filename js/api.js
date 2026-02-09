async function fetchIPData(ip) {
    try {
        const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_W36tmoSFI3ZIFoeY5yqPi7RCkbNYo&ipAddress=${ip}") // return a promise
        const data = await response.json() // format data to json
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}
// fetchIPData(ip)
// getUserIP()
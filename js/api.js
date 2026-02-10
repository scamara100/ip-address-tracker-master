export async function fetchIPData(ip) {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_W36tmoSFI3ZIFoeY5yqPi7RCkbNYo&ipAddress=${ip}`) // return a promise
        const data = await response.json() // format data to json
        return data
    } catch (e) {
        console.error(e)
    }
}

export async function getUserIP() {
    try {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_W36tmoSFI3ZIFoeY5yqPi7RCkbNYo&ipAddress=${ip}`)
        const data = await res.json()
        return data.ip
    } catch (err) {
        console.error("Failed to get user IP:", err);
        throw err;
    }
}
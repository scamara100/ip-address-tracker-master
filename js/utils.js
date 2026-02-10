// ✅ Validate IPv4 address
export function validateIP(ip) {
    if (!ip) return false;

    // 0.0.0.0 → 255.255.255.255
    const ipRegex =
        /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

    return ipRegex.test(ip.trim());
}


// ✅ Validate domain name (google.com, example.org, etc.)
export function validateDomain(domain) {
    if (!domain) return false;

    const domainRegex =
        /^(?!-)[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

    return domainRegex.test(domain.trim());
}


// ✅ Format timezone nicely
// "-07:00" → "UTC -07:00"
export function formatTime(timezone) {
    if (!timezone) return "UTC";

    return `UTC ${timezone}`;
}
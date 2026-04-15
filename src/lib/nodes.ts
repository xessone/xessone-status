export interface Node {
  city: string;
  code: string;
  region: string;
  flag: string;
  continent: string;
  status: "operational" | "degraded" | "outage" | "maintenance";
  uptime: number;
  latency: number;
}

export const NODES: Node[] = [
  // Asia Pacific
  { city: "Singapore 1", code: "SGP1", region: "sgp", flag: "\u{1F1F8}\u{1F1EC}", continent: "Asia Pacific", status: "operational", uptime: 99.99, latency: 2 },
  { city: "Singapore 2", code: "SGP2", region: "sgp", flag: "\u{1F1F8}\u{1F1EC}", continent: "Asia Pacific", status: "operational", uptime: 99.98, latency: 3 },
  { city: "Tokyo", code: "NRT", region: "nrt", flag: "\u{1F1EF}\u{1F1F5}", continent: "Asia Pacific", status: "operational", uptime: 99.97, latency: 68 },
  { city: "Osaka", code: "ITM", region: "itm", flag: "\u{1F1EF}\u{1F1F5}", continent: "Asia Pacific", status: "operational", uptime: 99.99, latency: 72 },
  { city: "Seoul", code: "ICN", region: "icn", flag: "\u{1F1F0}\u{1F1F7}", continent: "Asia Pacific", status: "operational", uptime: 99.98, latency: 85 },
  { city: "Mumbai", code: "BOM", region: "bom", flag: "\u{1F1EE}\u{1F1F3}", continent: "Asia Pacific", status: "operational", uptime: 99.96, latency: 55 },
  { city: "Delhi", code: "DEL", region: "del", flag: "\u{1F1EE}\u{1F1F3}", continent: "Asia Pacific", status: "operational", uptime: 99.95, latency: 62 },
  { city: "Bangkok", code: "BKK", region: "bkk", flag: "\u{1F1F9}\u{1F1ED}", continent: "Asia Pacific", status: "operational", uptime: 99.97, latency: 28 },
  // Oceania
  { city: "Sydney", code: "SYD", region: "syd", flag: "\u{1F1E6}\u{1F1FA}", continent: "Oceania", status: "operational", uptime: 99.99, latency: 155 },
  { city: "Melbourne", code: "MEL", region: "mel", flag: "\u{1F1E6}\u{1F1FA}", continent: "Oceania", status: "operational", uptime: 99.98, latency: 162 },
  // North America
  { city: "Los Angeles", code: "LAX", region: "lax", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.99, latency: 180 },
  { city: "Silicon Valley", code: "SJC", region: "sjc", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.97, latency: 175 },
  { city: "Seattle", code: "SEA", region: "sea", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.98, latency: 190 },
  { city: "Dallas", code: "DFW", region: "dfw", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.99, latency: 210 },
  { city: "Chicago", code: "ORD", region: "ord", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.96, latency: 220 },
  { city: "New York", code: "EWR", region: "ewr", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.98, latency: 235 },
  { city: "Miami", code: "MIA", region: "mia", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.97, latency: 240 },
  { city: "Atlanta", code: "ATL", region: "atl", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.99, latency: 225 },
  { city: "Toronto", code: "YTO", region: "yto", flag: "\u{1F1E8}\u{1F1E6}", continent: "North America", status: "operational", uptime: 99.98, latency: 230 },
  { city: "Mexico City", code: "MEX", region: "mex", flag: "\u{1F1F2}\u{1F1FD}", continent: "North America", status: "operational", uptime: 99.95, latency: 200 },
  // Europe
  { city: "Frankfurt", code: "FRA", region: "fra", flag: "\u{1F1E9}\u{1F1EA}", continent: "Europe", status: "operational", uptime: 99.99, latency: 165 },
  { city: "London", code: "LHR", region: "lhr", flag: "\u{1F1EC}\u{1F1E7}", continent: "Europe", status: "operational", uptime: 99.98, latency: 170 },
  { city: "Amsterdam", code: "AMS", region: "ams", flag: "\u{1F1F3}\u{1F1F1}", continent: "Europe", status: "operational", uptime: 99.97, latency: 168 },
  { city: "Paris", code: "CDG", region: "cdg", flag: "\u{1F1EB}\u{1F1F7}", continent: "Europe", status: "operational", uptime: 99.96, latency: 172 },
  { city: "Stockholm", code: "ARN", region: "arn", flag: "\u{1F1F8}\u{1F1EA}", continent: "Europe", status: "operational", uptime: 99.99, latency: 185 },
  { city: "Madrid", code: "MAD", region: "mad", flag: "\u{1F1EA}\u{1F1F8}", continent: "Europe", status: "operational", uptime: 99.98, latency: 178 },
  { city: "Warsaw", code: "WAW", region: "waw", flag: "\u{1F1F5}\u{1F1F1}", continent: "Europe", status: "operational", uptime: 99.97, latency: 182 },
  // Middle East
  { city: "Tel Aviv", code: "TLV", region: "tlv", flag: "\u{1F1EE}\u{1F1F1}", continent: "Middle East", status: "operational", uptime: 99.96, latency: 145 },
  // Africa
  { city: "Johannesburg", code: "JNB", region: "jnb", flag: "\u{1F1FF}\u{1F1E6}", continent: "Africa", status: "operational", uptime: 99.95, latency: 280 },
  // South America
  { city: "S\u00E3o Paulo", code: "GRU", region: "gru", flag: "\u{1F1E7}\u{1F1F7}", continent: "South America", status: "operational", uptime: 99.97, latency: 310 },
  { city: "Santiago", code: "SCL", region: "scl", flag: "\u{1F1E8}\u{1F1F1}", continent: "South America", status: "operational", uptime: 99.96, latency: 320 },
  { city: "Buenos Aires", code: "EZE", region: "eze", flag: "\u{1F1E6}\u{1F1F7}", continent: "South America", status: "operational", uptime: 99.95, latency: 330 },
];

export const SERVICES = [
  { name: "Compute (VPS)", status: "operational" as const, uptime: 99.99 },
  { name: "Nextcloud Storage", status: "operational" as const, uptime: 99.98 },
  { name: "S3 Object Storage", status: "operational" as const, uptime: 99.99 },
  { name: "Managed Database", status: "operational" as const, uptime: 99.97 },
  { name: "DNS & SSL", status: "operational" as const, uptime: 99.99 },
  { name: "Business Email", status: "operational" as const, uptime: 99.98 },
  { name: "AI Assistant", status: "operational" as const, uptime: 99.96 },
  { name: "Deploy Pipeline", status: "operational" as const, uptime: 99.99 },
];

export function getNodesByContinent() {
  const groups: Record<string, Node[]> = {};
  for (const node of NODES) {
    if (!groups[node.continent]) groups[node.continent] = [];
    groups[node.continent].push(node);
  }
  return groups;
}

// Deterministic pseudo-random for SSR consistency
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate mock 90-day uptime data (deterministic)
export function generateUptimeData(baseUptime: number): number[] {
  return Array.from({ length: 90 }, (_, i) => {
    const variance = (seededRandom(baseUptime * 1000 + i * 7 + 3) - 0.5) * 0.06;
    return Math.min(100, Math.max(99.5, baseUptime + variance));
  });
}

export interface Node {
  city: string;
  code: string;
  region: string;
  flag: string;
  continent: string;
  status: "operational" | "degraded" | "outage" | "maintenance";
  uptime: number;
  latency: number;
  role?: string;
}

// Real XessOne fleet — 9 edge nodes + 3 utility VPS in Singapore.
// Synced 2026-05-02 with the actual Vultr inventory.
export const NODES: Node[] = [
  // Asia Pacific — edge
  { city: "Singapore", code: "SGP1", region: "sgp", flag: "\u{1F1F8}\u{1F1EC}", continent: "Asia Pacific", status: "operational", uptime: 99.99, latency: 2,  role: "Primary edge · landing + dashboard + DNS" },
  { city: "Tokyo",     code: "NRT",  region: "nrt", flag: "\u{1F1EF}\u{1F1F5}", continent: "Asia Pacific", status: "operational", uptime: 99.97, latency: 68, role: "Edge node" },
  { city: "Osaka",     code: "ITM",  region: "itm", flag: "\u{1F1EF}\u{1F1F5}", continent: "Asia Pacific", status: "operational", uptime: 99.99, latency: 72, role: "Edge node" },
  { city: "Mumbai",    code: "BOM",  region: "bom", flag: "\u{1F1EE}\u{1F1F3}", continent: "Asia Pacific", status: "operational", uptime: 99.96, latency: 55, role: "Edge node" },
  // Oceania
  { city: "Sydney",    code: "SYD",  region: "syd", flag: "\u{1F1E6}\u{1F1FA}", continent: "Oceania",      status: "operational", uptime: 99.99, latency: 155, role: "Edge node" },
  // North America
  { city: "Los Angeles", code: "LAX", region: "lax", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.99, latency: 180, role: "Edge node" },
  { city: "Chicago",     code: "ORD", region: "ord", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.96, latency: 220, role: "Edge node" },
  { city: "New York",    code: "EWR", region: "ewr", flag: "\u{1F1FA}\u{1F1F8}", continent: "North America", status: "operational", uptime: 99.98, latency: 235, role: "Edge node" },
  // Europe
  { city: "Frankfurt", code: "FRA", region: "fra", flag: "\u{1F1E9}\u{1F1EA}", continent: "Europe", status: "operational", uptime: 99.99, latency: 165, role: "Edge node" },
  // Utility VPS (Singapore)
  { city: "Singapore", code: "SGP2", region: "sgp", flag: "\u{1F1F8}\u{1F1EC}", continent: "Utility", status: "operational", uptime: 99.98, latency: 3, role: "Self-hosted DB · PostgreSQL + Valkey + PgBouncer" },
  { city: "Singapore", code: "DEPLOY", region: "sgp", flag: "\u{1F1F8}\u{1F1EC}", continent: "Utility", status: "operational", uptime: 99.95, latency: 4, role: "AI Apps runner · ephemeral Docker hosting" },
  { city: "Singapore", code: "CHAT", region: "sgp", flag: "\u{1F1F8}\u{1F1EC}", continent: "Utility", status: "operational", uptime: 99.97, latency: 4, role: "OpenWA · WhatsApp business gateway" },
];

// Services reflect XessOne's managed product line as of 2026-05-02.
// Nextcloud removed (discontinued). AI Apps added (launched 2026-04-23).
export const SERVICES = [
  { name: "Edge Compute (9 nodes)",   status: "operational" as const, uptime: 99.99 },
  { name: "Managed Database",         status: "operational" as const, uptime: 99.97 },
  { name: "S3 Object Storage",        status: "operational" as const, uptime: 99.99 },
  { name: "DNS & SSL Auto-renew",     status: "operational" as const, uptime: 99.99 },
  { name: "Business Email (MXroute)", status: "operational" as const, uptime: 99.98 },
  { name: "AI Gateway (xo-flash/pro/genius)", status: "operational" as const, uptime: 99.96 },
  { name: "AI Apps · Ephemeral Hosting",      status: "operational" as const, uptime: 99.95 },
  { name: "Deploy Pipeline",          status: "operational" as const, uptime: 99.99 },
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

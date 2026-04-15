import { getNodesByContinent } from "@/lib/nodes";

const CONTINENT_ORDER = [
  "Asia Pacific",
  "Oceania",
  "North America",
  "Europe",
  "Middle East",
  "Africa",
  "South America",
];

export function NodeGrid() {
  const groups = getNodesByContinent();

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold text-white mb-4 animate-fade-in animate-fade-in-delay-2">
          Node Status
        </h2>

        <div className="glass-card rounded-2xl overflow-hidden animate-fade-in animate-fade-in-delay-2">
          {/* Desktop header */}
          <div className="hidden sm:grid grid-cols-[1fr_100px_120px_100px_100px] px-5 py-3 border-b border-white/[0.06] text-xs text-zinc-500 font-medium uppercase tracking-wider">
            <div>Location</div>
            <div>Region</div>
            <div>Status</div>
            <div className="text-right">Latency</div>
            <div className="text-right">Uptime</div>
          </div>

          {CONTINENT_ORDER.map((continent) => {
            const nodes = groups[continent];
            if (!nodes) return null;

            return (
              <div key={continent}>
                {/* Continent label */}
                <div className="px-5 py-2.5 bg-white/[0.02] border-b border-white/[0.04]">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {continent}
                  </span>
                  <span className="text-xs text-zinc-600 ml-2">
                    {nodes.length} node{nodes.length > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Nodes */}
                {nodes.map((node, i) => (
                  <div
                    key={`${node.code}-${i}`}
                    className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_100px_120px_100px_100px] px-5 py-3 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors"
                  >
                    {/* Location */}
                    <div className="flex items-center gap-3">
                      <span className="text-base">{node.flag}</span>
                      <span className="text-sm text-zinc-200">{node.city}</span>
                    </div>

                    {/* Region code - desktop */}
                    <div className="hidden sm:flex items-center">
                      <span className="text-xs font-mono text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded">
                        {node.code}
                      </span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      {/* Mobile: region code */}
                      <span className="sm:hidden text-xs font-mono text-zinc-600">
                        {node.code}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                      <span className="hidden sm:inline text-sm text-green-400">
                        Operational
                      </span>
                    </div>

                    {/* Latency - desktop */}
                    <div className="hidden sm:flex items-center justify-end">
                      <span className="text-xs font-mono text-zinc-500">
                        {node.latency}ms
                      </span>
                    </div>

                    {/* Uptime - desktop */}
                    <div className="hidden sm:flex items-center justify-end">
                      <span className="text-xs font-mono text-green-400/80">
                        {node.uptime}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {/* Summary */}
          <div className="px-5 py-3 bg-white/[0.02] flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              32 nodes across 6 continents
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-green-400">All Operational</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { NODES, SERVICES } from "@/lib/nodes";

export function StatusHeader() {
  const allOperational =
    NODES.every((n) => n.status === "operational") &&
    SERVICES.every((s) => s.status === "operational");

  const totalNodes = NODES.length;
  const avgUptime =
    NODES.reduce((sum, n) => sum + n.uptime, 0) / NODES.length;

  return (
    <section className="pt-24 pb-12 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Status Banner */}
        <div className="animate-fade-in glass-card rounded-2xl p-8 text-center relative overflow-hidden">
          {/* Green glow */}
          {allOperational && (
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.04] to-transparent pointer-events-none" />
          )}

          <div className="relative">
            {/* Status indicator */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                All Systems Operational
              </h1>
            </div>

            <p className="text-zinc-400 text-sm mb-6">
              All {totalNodes} nodes across 6 continents are running normally
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              <div>
                <div className="text-2xl font-bold text-white font-mono">
                  {avgUptime.toFixed(2)}%
                </div>
                <div className="text-xs text-zinc-500 mt-1">Overall Uptime</div>
              </div>
              <div className="w-px h-8 bg-white/[0.06]" />
              <div>
                <div className="text-2xl font-bold text-white font-mono">
                  {totalNodes}
                </div>
                <div className="text-xs text-zinc-500 mt-1">Global Nodes</div>
              </div>
              <div className="w-px h-8 bg-white/[0.06]" />
              <div>
                <div className="text-2xl font-bold text-white font-mono">0</div>
                <div className="text-xs text-zinc-500 mt-1">Active Incidents</div>
              </div>
            </div>
          </div>
        </div>

        {/* Last updated */}
        <div className="text-center mt-4">
          <span className="text-xs text-zinc-600">
            Last checked: just now
          </span>
        </div>
      </div>
    </section>
  );
}

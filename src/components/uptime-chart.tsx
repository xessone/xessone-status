"use client";

import { useState, useEffect } from "react";
import { SERVICES, generateUptimeData } from "@/lib/nodes";

export function UptimeChart() {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState<number[] | null>(null);

  useEffect(() => {
    setData(generateUptimeData(SERVICES[selected].uptime));
  }, [selected]);

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold text-white mb-4 animate-fade-in animate-fade-in-delay-3">
          90-Day Uptime
        </h2>

        <div className="glass-card rounded-2xl p-5 animate-fade-in animate-fade-in-delay-3">
          {/* Service tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SERVICES.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setSelected(i)}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  i === selected
                    ? "bg-accent/20 text-accent border border-accent/30"
                    : "bg-white/[0.04] text-zinc-500 border border-white/[0.06] hover:text-zinc-300"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="flex items-end gap-px h-16 sm:h-20">
            {data ? (
              data.map((uptime, i) => {
                const height = ((uptime - 99) / 1) * 100;
                const isGreen = uptime >= 99.9;
                const isYellow = uptime >= 99.5 && uptime < 99.9;

                return (
                  <div
                    key={i}
                    className="uptime-bar flex-1 rounded-t-sm relative group cursor-pointer"
                    style={{
                      height: `${Math.max(10, height)}%`,
                      backgroundColor: isGreen
                        ? "rgba(74, 222, 128, 0.6)"
                        : isYellow
                        ? "rgba(250, 204, 21, 0.6)"
                        : "rgba(248, 113, 113, 0.6)",
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                      <div className="bg-zinc-800 text-white text-xs rounded-lg px-2.5 py-1.5 whitespace-nowrap shadow-xl border border-white/[0.08]">
                        <div className="font-mono">{uptime.toFixed(3)}%</div>
                        <div className="text-zinc-400 text-[10px]">
                          Day {90 - i}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // Skeleton while loading
              Array.from({ length: 90 }, (_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-white/[0.04]"
                  style={{ height: "80%" }}
                />
              ))
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-zinc-600">90 days ago</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-green-400/60" />
                <span className="text-xs text-zinc-500">{">"}99.9%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-yellow-400/60" />
                <span className="text-xs text-zinc-500">99.5-99.9%</span>
              </div>
            </div>
            <span className="text-xs text-zinc-600">Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}

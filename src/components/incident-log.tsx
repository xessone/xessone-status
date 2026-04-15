"use client";

import { useEffect, useState } from "react";

export function IncidentLog() {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    setDates(
      [0, 1, 2, 3, 4, 5, 6].map((daysAgo) => {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        if (daysAgo === 0) return "Today";
        if (daysAgo === 1) return "Yesterday";
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      })
    );
  }, []);

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold text-white mb-4 animate-fade-in animate-fade-in-delay-4">
          Incident History
        </h2>

        <div className="glass-card rounded-2xl overflow-hidden animate-fade-in animate-fade-in-delay-4">
          {/* No incidents */}
          <div className="px-5 py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-zinc-300 mb-1">
              No incidents reported
            </h3>
            <p className="text-xs text-zinc-500">
              All systems have been operating normally for the past 90 days.
            </p>
          </div>

          {/* Past dates */}
          {dates.length > 0 && (
            <div className="border-t border-white/[0.04]">
              {dates.map((label) => (
                <div
                  key={label}
                  className="px-5 py-3 flex items-center justify-between border-b border-white/[0.03] last:border-0"
                >
                  <span className="text-sm text-zinc-400">{label}</span>
                  <span className="text-xs text-green-400/70">
                    No incidents
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

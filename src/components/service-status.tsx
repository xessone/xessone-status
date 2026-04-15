import { SERVICES } from "@/lib/nodes";

const SERVICE_ICONS: Record<string, string> = {
  "Compute (VPS)": "M5 12h14M12 5l7 7-7 7",
  "Nextcloud Storage": "M3 15a4 4 0 004 4h9a5 5 0 10-1.7-9.7A7 7 0 003 15z",
  "S3 Object Storage": "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  "Managed Database": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  "DNS & SSL": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  "Business Email": "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "AI Assistant": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "Deploy Pipeline": "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
};

export function ServiceStatus() {
  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold text-white mb-4 animate-fade-in">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in animate-fade-in-delay-1">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="glass-card rounded-xl px-4 py-3.5 flex items-center gap-3"
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={SERVICE_ICONS[service.name]}
                  />
                </svg>
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-zinc-200 truncate">
                  {service.name}
                </div>
                <div className="text-xs text-green-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Operational
                </div>
              </div>

              {/* Uptime */}
              <div className="text-xs text-zinc-500 font-mono shrink-0">
                {service.uptime}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

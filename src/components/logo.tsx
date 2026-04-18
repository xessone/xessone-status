// XessOne Logo — reusable component.
// Variants: "full" (mark + "XessOne" wordmark), "mark" (X-from-9-nodes only), "square" (mark in rounded bg).
//
// Usage:
//   <Logo />                                        // default: full horizontal
//   <Logo variant="mark" className="w-8 h-8" />     // icon only
//   <Logo variant="square" className="w-16 h-16" /> // app-icon style
//   <Logo wordmark="Dashboard" />                   // full with custom wordmark text
//
// Color: X rendered as 9 nodes in sky-400 → blue-500 gradient (baked in).
// Wordmark uses currentColor — control via text-white / text-zinc-900 etc.

type Variant = "full" | "mark" | "square";

function NodeMark({ gradientId }: { gradientId: string }) {
  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#60a5fa" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* 9 nodes forming an X — represents 9 XessOne global nodes */}
      <circle cx="7" cy="7" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="11.5" cy="11.5" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="16" cy="16" r="2.6" fill={`url(#${gradientId})`} />
      <circle cx="20.5" cy="20.5" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="25" cy="25" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="25" cy="7" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="20.5" cy="11.5" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="11.5" cy="20.5" r="2.2" fill={`url(#${gradientId})`} />
      <circle cx="7" cy="25" r="2.2" fill={`url(#${gradientId})`} />
    </>
  );
}

export function Logo({
  variant = "full",
  wordmark = "XessOne",
  className = "",
}: {
  variant?: Variant;
  wordmark?: string;
  className?: string;
}) {
  if (variant === "mark") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className || "w-6 h-6"} role="img" aria-label="XessOne">
        <NodeMark gradientId="xo-mark" />
      </svg>
    );
  }

  if (variant === "square") {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={className || "w-10 h-10"} role="img" aria-label="XessOne">
        <defs>
          <linearGradient id="xo-sq-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="xo-sq-node" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="url(#xo-sq-bg)" stroke="#1e293b" strokeWidth="1" />
        {/* 9 nodes scaled to 64 viewport, centered in the 64×64 square */}
        <circle cx="14" cy="14" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="23" cy="23" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="32" cy="32" r="5.2" fill="url(#xo-sq-node)" />
        <circle cx="41" cy="41" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="50" cy="50" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="50" cy="14" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="41" cy="23" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="23" cy="41" r="4.4" fill="url(#xo-sq-node)" />
        <circle cx="14" cy="50" r="4.4" fill="url(#xo-sq-node)" />
      </svg>
    );
  }

  // Full — mark + wordmark
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 flex-shrink-0" role="img" aria-label="XessOne">
        <NodeMark gradientId="xo-full" />
      </svg>
      <span>{wordmark}</span>
    </span>
  );
}

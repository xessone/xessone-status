export function StatusFooter() {
  return (
    <footer className="mt-auto border-t border-white/[0.06] py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <a
            href="https://xessone.com"
            className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span className="text-accent font-bold text-sm">X</span>
            <span className="text-xs">essOne Managed</span>
          </a>
          <span className="text-zinc-700 text-xs">
            PT. XESS ONE GLOBAL
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-xs text-zinc-600">
          <a
            href="https://xessone.com/sla"
            className="hover:text-zinc-400 transition-colors"
          >
            SLA
          </a>
          <a
            href="https://xessone.com/privacy"
            className="hover:text-zinc-400 transition-colors"
          >
            Privacy
          </a>
          <a
            href="https://xessone.com/terms"
            className="hover:text-zinc-400 transition-colors"
          >
            Terms
          </a>
          <a
            href="https://xessone.com/contact"
            className="hover:text-zinc-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Logo } from "@/components/logo";

export function StatusNavbar() {
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="https://xessone.com" className="flex items-center gap-2 group">
          <Logo variant="full" className="text-sm text-zinc-300" />
          <span className="text-zinc-600 text-sm">|</span>
          <span className="text-zinc-300 text-sm font-medium">Status</span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="https://xessone.com"
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            xessone.com
          </a>
          <a
            href="https://app.xessone.com"
            className="text-sm px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.1] transition-all"
          >
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
}

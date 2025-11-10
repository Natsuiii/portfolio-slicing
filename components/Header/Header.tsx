import Link from "next/link";

const linkCls = "text-sm text-white/80 hover:text-white transition-colors";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-center">
        <nav
          className="inline-flex items-center w-fit mx-auto rounded-full border border-white/10 bg-black/30 px-3 py-2 text-white backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          aria-label="Main"
        >
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#home" className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
                Owen
              </Link>
            </li>
            <li><Link href="#about" className={linkCls}>About</Link></li>
            <li><Link href="#skill" className={linkCls}>Skill</Link></li>
            <li><Link href="#projects" className={linkCls}>Projects</Link></li>
            <li><Link href="#faq" className={linkCls}>FAQ</Link></li>
            <li><Link href="#contact" className={linkCls}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

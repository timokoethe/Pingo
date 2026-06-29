import Image from "next/image";
import Link from "next/link";
import appIcon from "@/app/icon.png";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070c]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Pingo Home">
          <Image
            src={appIcon}
            alt=""
            width={34}
            height={34}
            className="rounded-[8px]"
            priority
          />
          <span className="text-base font-semibold tracking-normal text-white">
            Pingo
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/timokoethe/Pingo"
          aria-label="Open Pingo on GitHub"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 transition hover:border-sky-300/60 hover:bg-sky-400/15"
        >
          <Image
            src="/github.svg"
            alt=""
            width={20}
            height={20}
            className="invert"
          />
        </a>
      </nav>
    </header>
  );
}

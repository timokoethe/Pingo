import Image from "next/image";
import Link from "next/link";
import appIcon from "@/app/icon.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f8f9]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Pingo home">
          <Image src={appIcon} alt="" width={30} height={30} className="rounded-[8px]" priority />
          <span className="text-base font-semibold tracking-[-0.02em] text-[#202427]">Pingo</span>
        </Link>

        <a
          href="https://github.com/timokoethe/Pingo"
          className="flex items-center gap-2 text-sm font-medium text-[#202427] transition hover:opacity-60"
        >
          <Image src="/github.svg" alt="" width={18} height={18} />
          GitHub
        </a>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import appIcon from "@/app/icon.png";
import { Navbar } from "@/components/navbar";
import { PORTFOLIO_URL } from "@/lib/seo";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function InfoPage({
  eyebrow,
  title,
  description,
  children,
}: InfoPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8f9] text-[#1d1d1f]">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-6 sm:py-24">
        <header className="border-b border-black/10 pb-12">
          <p className="text-sm font-medium text-[#63717b]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#17191b] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#687178] sm:text-lg">
            {description}
          </p>
        </header>
        <div className="py-12">{children}</div>
      </main>
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-[#7b848a] sm:flex-row sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:text-[#202427]"
          >
            <Image
              src={appIcon}
              alt=""
              width={24}
              height={24}
              className="rounded-md"
            />
            <span>Pingo</span>
          </Link>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            <Link href="/faq" className="transition hover:text-[#202427]">
              FAQ
            </Link>
            <Link href="/privacy" className="transition hover:text-[#202427]">
              Privacy
            </Link>
            <a href={PORTFOLIO_URL} className="transition hover:text-[#202427]">
              Implementation
            </a>
            <a
              href="https://itstimo.me"
              className="transition hover:text-[#202427]"
            >
              Timo Köthe
            </a>
            <span>© {new Date().getFullYear()}</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}

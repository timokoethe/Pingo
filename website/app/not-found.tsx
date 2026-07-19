import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_URL, REPO_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f8f9] px-5 py-20 text-center text-[#1d1d1f]">
      <p className="text-sm font-medium text-[#63717b]">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-balance leading-7 text-[#687178]">
        This URL does not point to a Pingo page. Return to the product, or read
        how the app is implemented.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-[#202427] px-5 text-sm font-medium text-white transition hover:bg-black"
        >
          Back to Pingo
        </Link>
        <a
          href={PORTFOLIO_URL}
          className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-[#30363a] transition hover:bg-[#f2f3f4]"
        >
          Implementation reference
        </a>
        <a
          href={REPO_URL}
          className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-[#30363a] transition hover:bg-[#f2f3f4]"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}

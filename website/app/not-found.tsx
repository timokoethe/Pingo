import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-20 text-center">
        <p className="text-sm font-medium text-foreground-subtle">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-balance leading-7 text-foreground-muted">
          This URL does not point to a Pingo page. Return to the product, or
          read how the app is implemented.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground-strong px-5 text-sm font-medium text-white transition hover:bg-black"
          >
            Back to Pingo
          </Link>
          <a
            href={PORTFOLIO_URL}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-foreground-medium transition hover:bg-background-hover"
          >
            Implementation reference
          </a>
          <a
            href={REPO_URL}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-foreground-medium transition hover:bg-background-hover"
          >
            GitHub
          </a>
        </div>
      </main>
      <SiteFooter bordered />
    </div>
  );
}

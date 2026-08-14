import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-6 sm:py-24">
        <header className="border-b border-black/10 pb-12">
          <p className="text-sm font-medium text-foreground-subtle">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground-display sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-muted sm:text-lg">
            {description}
          </p>
        </header>
        <div className="py-12">{children}</div>
      </main>
      <SiteFooter bordered />
    </div>
  );
}

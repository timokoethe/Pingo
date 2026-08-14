import Image from "next/image";
import Link from "next/link";
import appIcon from "@/app/icon.png";
import { PORTFOLIO_URL } from "@/lib/seo";

type SiteFooterProps = {
  /**
   * Draws a top border. Pages that end on the plain background need it as a
   * separator; the home page ends on a filled section that already separates.
   */
  bordered?: boolean;
};

export function SiteFooter({ bordered = false }: SiteFooterProps) {
  return (
    <footer className={bordered ? "border-t border-black/10" : undefined}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-foreground-muted sm:flex-row sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:text-foreground-strong"
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
          <Link href="/faq" className="transition hover:text-foreground-strong">
            FAQ
          </Link>
          <Link href="/privacy" className="transition hover:text-foreground-strong">
            Privacy
          </Link>
          <a href={PORTFOLIO_URL} className="transition hover:text-foreground-strong">
            Implementation
          </a>
          <a href="https://itstimo.me" className="transition hover:text-foreground-strong">
            Timo Köthe
          </a>
          <span>© {new Date().getFullYear()}</span>
        </nav>
      </div>
    </footer>
  );
}

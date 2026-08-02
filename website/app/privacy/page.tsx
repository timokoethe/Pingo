import { InfoPage } from "@/components/info-page";
import { createPageMetadata } from "@/lib/metadata";
import { REPO_URL } from "@/lib/seo";

const PRIVACY_DESCRIPTION =
  "How Pingo handles API requests on your Mac and what limited technical data the product website processes.";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: PRIVACY_DESCRIPTION,
  path: "/privacy",
});

const sectionClassName =
  "border-b border-black/10 pb-10 last:border-0 last:pb-0";
const headingClassName =
  "text-xl font-semibold tracking-[-0.02em] text-[#202427]";
const paragraphClassName = "mt-4 text-sm leading-7 text-[#687178]";
const linkClassName =
  "font-medium text-[#202427] underline decoration-black/20 underline-offset-4 hover:decoration-[#202427]";

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Last updated August 2, 2026"
      title="Privacy"
      description={PRIVACY_DESCRIPTION}
    >
      <div className="space-y-10">
        <section className={sectionClassName}>
          <h2 className={headingClassName}>The Pingo app</h2>
          <p className={paragraphClassName}>
            Pingo sends HTTP requests directly from your Mac to the URL you
            enter. Request URLs, headers, bodies, and responses are not routed
            through the Pingo website or its developer. The app does not
            require an account and does not include advertising or product
            analytics.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Request data</h2>
          <p className={paragraphClassName}>
            Pingo uses an ephemeral network session. It does not automatically
            store or resend cookies, cache responses, or keep HTTP credentials.
            Cookies, authorization values, and other sensitive information you
            add explicitly are sent to the destination you choose. That
            destination processes the request under its own privacy terms.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Updates</h2>
          <p className={paragraphClassName}>
            Pingo uses Sparkle to check for app updates. Update checks read an
            appcast hosted on GitHub, and releases are downloaded from GitHub.
            These requests necessarily share standard technical request
            information, such as an IP address and user agent, with the
            respective infrastructure providers. Their own privacy terms apply
            to that processing.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>This website</h2>
          <p className={paragraphClassName}>
            The Pingo website is hosted by Vercel. Like other hosting providers,
            Vercel processes technical request data needed to serve and protect
            the site. The website does not provide user accounts, forms,
            advertising, or payment processing, and it does not set its own
            analytics cookies.
          </p>
          <p className={paragraphClassName}>
            The website periodically reads public release information from
            GitHub on the server so its download link can point to the latest
            version. This does not send your API requests or their contents to
            GitHub.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>External links</h2>
          <p className={paragraphClassName}>
            Links to GitHub, releases, and the developer&apos;s portfolio lead
            to independently operated websites. Those providers process visits
            under their own privacy terms.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Questions and changes</h2>
          <p className={paragraphClassName}>
            This page may be updated when Pingo or its website changes. For
            privacy questions, contact the project maintainer through the{" "}
            <a href={REPO_URL} className={linkClassName}>
              Pingo repository
            </a>
            . Please do not include sensitive request data or personal
            information in a public issue.
          </p>
        </section>
      </div>
    </InfoPage>
  );
}

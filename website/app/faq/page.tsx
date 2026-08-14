import { InfoPage } from "@/components/info-page";
import { createPageMetadata } from "@/lib/metadata";
import { REPO_URL, SITE_URL } from "@/lib/seo";

const FAQ_DESCRIPTION =
  "Answers about sending requests with Pingo, handling cookies and credentials, viewing responses, updates, and macOS support.";

export const metadata = createPageMetadata({
  title: "Frequently asked questions",
  description: FAQ_DESCRIPTION,
  path: "/faq",
});

const questions = [
  {
    question: "What does Pingo do?",
    answer:
      "Pingo is a compact macOS menu bar app for quick HTTP requests. Choose a method, enter a URL, add headers or a body when needed, then inspect the response without opening a full API client.",
  },
  {
    question: "Which HTTP methods does Pingo support?",
    answer: "Pingo supports GET, POST, PUT, PATCH, and DELETE requests.",
  },
  {
    question: "Does Pingo store my requests or responses?",
    answer:
      "No. Pingo uses an ephemeral network session and does not maintain an automatic cookie jar, response cache, or HTTP credential store. The current request and response live in the app while you work with them, but Pingo does not provide saved histories, accounts, or cloud sync.",
  },
  {
    question: "Can I send cookies or authorization credentials?",
    answer:
      "Yes. Add Cookie, Authorization, or other required values explicitly in the header editor. Pingo sends the headers you provide but does not automatically store or reuse them for later requests.",
  },
  {
    question: "What response information can I inspect?",
    answer:
      "Pingo shows the HTTP status, request duration, content type, response headers, and a text preview of the response body. Large response previews are limited to keep the app responsive.",
  },
  {
    question: "Can I cancel a request?",
    answer:
      "Yes. You can stop an in-flight request. Pingo also applies request and resource timeouts so an unresponsive endpoint does not keep the scratchpad busy indefinitely.",
  },
  {
    question: "Where are requests sent?",
    answer:
      "Requests go directly from your Mac to the URL you enter. Pingo does not proxy request URLs, headers, bodies, or responses through a Pingo service.",
  },
  {
    question: "Which version of macOS is required?",
    answer: "Pingo requires macOS 14 or later.",
  },
  {
    question: "How do updates work?",
    answer:
      "Pingo uses Sparkle to check for signed updates. You can start an update check from the app, and available releases are provided through the project's GitHub release infrastructure.",
  },
  {
    question: "Is Pingo open source?",
    answer: "Yes. The source code is available on GitHub under the MIT License.",
  },
] as const;

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    url: `${SITE_URL}/faq`,
    name: "Pingo frequently asked questions",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <InfoPage
      eyebrow="Support"
      title="Frequently asked questions"
      description={FAQ_DESCRIPTION}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="divide-y divide-black/10 border-y border-black/10">
        {questions.map(({ question, answer }) => (
          <details key={question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium marker:content-none">
              <span>{question}</span>
              <span
                aria-hidden="true"
                className="text-xl font-light text-[#646d75] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pt-4 text-sm leading-7 text-[#646d75]">
              {answer}
            </p>
          </details>
        ))}
      </div>
      <section className="mt-12 rounded-xl border border-black/10 bg-white p-6">
        <h2 className="font-semibold text-[#202427]">Still have a question?</h2>
        <p className="mt-2 text-sm leading-6 text-[#646d75]">
          Visit the open-source project to review the implementation, report a
          bug, or suggest an improvement.
        </p>
        <a
          href={`${REPO_URL}/issues`}
          className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-[#202427] px-5 text-sm font-medium text-white transition hover:bg-black"
        >
          Open GitHub Issues
        </a>
      </section>
    </InfoPage>
  );
}

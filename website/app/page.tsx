import Image from "next/image";
import { MacosPreview } from "@/components/macos-preview";
import { Navbar } from "@/components/navbar";
import appIcon from "./icon.png";

const capabilities = [
  {
    title: "Request",
    text: "GET, POST, PUT, PATCH und DELETE mit URL, Headern und Body.",
  },
  {
    title: "Response",
    text: "Status, Dauer, Content-Type, Header und Textantwort auf einen Blick.",
  },
  {
    title: "Control",
    text: "Ungültige URLs werden erkannt, laufende Anfragen lassen sich abbrechen.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f7f8f9] text-[#1d1d1f]">
      <Navbar />

      <main>
        <section className="border-b border-black/10">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:py-24">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-[#63717b]">Pingo for macOS</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.045em] text-[#17191b] sm:text-6xl">
                Small requests,
                <br />
                kept simple.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#5f686f]">
                A compact API scratchpad that lives in your menu bar. Send a
                request, inspect the response, and get back to what you were
                doing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[#202427] px-5 text-sm font-medium text-white transition hover:bg-black"
                >
                  Get Pingo
                </a>
                <a
                  href="#details"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-[#30363a] transition hover:bg-[#f2f3f4]"
                >
                  See what it does
                </a>
              </div>
              <p className="mt-4 text-sm text-[#788188]">Requires macOS 14 or later.</p>
            </div>

            <MacosPreview />
          </div>
        </section>

        <section id="details" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#63717b]">The essentials</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17191b] sm:text-4xl">
              Nothing to configure before the first request.
            </h2>
          </div>
          <div className="mt-10 grid divide-y divide-black/10 border-y border-black/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {capabilities.map((capability) => (
              <article key={capability.title} className="py-6 md:px-7 md:first:pl-0 md:last:pr-0">
                <h3 className="font-medium text-[#202427]">{capability.title}</h3>
                <p className="mt-2 leading-7 text-[#687178]">{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className="border-t border-black/10 bg-[#eff2f3]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#17191b]">
                Ready when a request needs checking.
              </h2>
              <p className="mt-2 text-[#687178]">Pingo is open source and available for macOS.</p>
            </div>
            <a
              href="https://github.com/timokoethe/Pingo"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-[#202427] shadow-sm ring-1 ring-black/10 transition hover:bg-[#f7f8f9]"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl items-center justify-between px-5 py-7 text-sm text-[#7b848a] sm:px-6">
        <div className="flex items-center gap-3">
          <Image src={appIcon} alt="" width={24} height={24} className="rounded-md" />
          <span>Pingo</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://itstimo.me"
            className="transition hover:text-[#202427]"
          >
            Timo Köthe
          </a>
          <span>© {currentYear}</span>
        </div>
      </footer>
    </div>
  );
}

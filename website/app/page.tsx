import Image from "next/image";
import { MacosPreview } from "@/components/macos-preview";
import { Navbar } from "@/components/navbar";
import appIcon from "./icon.png";

const features = [
  {
    title: "Menu bar first",
    text: "Open Pingo exactly when you need to check an endpoint, without leaving your flow.",
  },
  {
    title: "HTTP without workspace overhead",
    text: "Send GET, POST, PUT, PATCH, and DELETE requests with URL, headers, body, and response in one compact scratchpad.",
  },
  {
    title: "Immediate feedback",
    text: "Status, duration, content type, headers, and body stay visible so small checks stay small.",
  },
];

const workflow = ["Pick a method", "Paste a URL", "Send the request"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.24),transparent_34rem)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-sky-100">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                API Scratchpad for macOS
              </div>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Small requests. Done instantly.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Pingo lives in the macOS menu bar and gives you a focused place
                for HTTP checks, debugging, and API exploration without opening
                a full API client.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-sky-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
                >
                  Download for macOS
                </a>
                <a
                  href="#features"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.04]"
                >
                  View features
                </a>
              </div>
            </div>

            <MacosPreview />
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-sky-300">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Everything you need for fast API checks.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-300/10 text-sky-200">
                  <span className="h-3 w-3 rounded-full border border-current" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-sky-300">
                Workflow
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                Three steps, no setup.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-white/10 bg-[#070b13] p-5"
                >
                  <div className="text-sm text-sky-300">
                    0{index + 1}
                  </div>
                  <div className="mt-8 text-lg font-semibold text-white">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-sky-300/20 bg-sky-300/[0.06] p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal text-white">
                Ready for faster checks?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Pingo is built for developers who want to handle small HTTP
                requests directly from the menu bar.
              </p>
            </div>
            <a
              href="https://github.com/timokoethe/Pingo"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
            >
              Open GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src={appIcon}
              alt=""
              width={28}
              height={28}
              className="rounded-md"
            />
            <span>Pingo for macOS</span>
          </div>
          <div>MIT License</div>
        </div>
      </footer>
    </div>
  );
}

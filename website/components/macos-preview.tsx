import Image from "next/image";
import appIcon from "@/app/icon.png";

export function MacosPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-6 rounded-[32px] bg-sky-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/80 shadow-2xl shadow-sky-950/40">
        <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-sm text-slate-400">Pingo</span>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <Image
              src={appIcon}
              alt=""
              width={46}
              height={46}
              className="rounded-[10px]"
              priority
            />
            <div>
              <div className="text-sm font-medium text-white">Quick request</div>
              <div className="text-sm text-slate-400">
                Ready from the menu bar
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[86px_1fr] gap-3">
            <div className="rounded-lg border border-sky-300/30 bg-sky-300/10 px-3 py-3 text-sm font-semibold text-sky-100">
              GET
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 font-mono text-sm text-slate-300">
              https://api.example.dev/status
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#070b13] p-4 font-mono text-sm leading-7 text-slate-300">
            <div className="text-emerald-300">200 OK</div>
            <div>duration: 142ms</div>
            <div>content-type: application/json</div>
            <div className="mt-3 text-sky-200">
              {"{ \"healthy\": true }"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

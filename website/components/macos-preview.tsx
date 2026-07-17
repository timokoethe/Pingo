import { Power } from "lucide-react";

const editorClassName =
  "mt-2 block w-full resize-none rounded-xl border border-[#aeb7bd] bg-white/55 p-3 font-mono text-sm text-[#283238] outline-none shadow-[inset_0_1px_1px_rgba(0,0,0,0.02)] focus:border-[#748d98] focus:ring-2 focus:ring-[#d7e8ef]";

export function MacosPreview() {
  return (
    <div className="mx-auto w-full max-w-[500px]">
      <div className="overflow-hidden rounded-[22px] border border-[#9aa5aa] bg-[#f8f8f8] shadow-[0_20px_48px_rgba(37,47,53,0.15),0_3px_10px_rgba(37,47,53,0.08)]">
        <div className="bg-[linear-gradient(180deg,#e6f9ff_0%,#eefaff_19%,#f8f8f8_100%)] p-4 sm:p-5">
          <div className="grid grid-cols-[96px_1fr] gap-2.5">
            <select
              aria-label="HTTP method"
              defaultValue="GET"
              className="h-10 rounded-lg border-0 bg-[#d7e8ef] px-3 text-base font-medium text-[#1b252a] outline-none focus:ring-2 focus:ring-[#8eaebc]"
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
            <input
              aria-label="Request URL"
              defaultValue="https://httpbin.org/get"
              className="h-10 min-w-0 rounded-lg border-0 bg-[#d7e8ef] px-3 text-sm text-[#283238] outline-none focus:ring-2 focus:ring-[#8eaebc] sm:text-base"
            />
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-[#667178]">Headers</p>
            <textarea aria-label="Request headers" className={`${editorClassName} h-12`} />
          </div>
          <div className="mt-3">
            <p className="text-sm font-medium text-[#667178]">Body</p>
            <textarea aria-label="Request body" className={`${editorClassName} h-12`} />
          </div>

          <div className="mt-3 flex items-center gap-2.5 text-sm">
            <button type="button" className="rounded-lg bg-[#e8e9ea] px-3 py-1.5 font-medium text-[#202427] transition hover:bg-[#dfe1e2]">
              Send
            </button>
            <button type="button" disabled className="rounded-lg bg-[#f0f0f1] px-3 py-1.5 text-[#a1a5a8]">
              Cancel
            </button>
            <span className="text-[#6d7479]">Ready</span>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-[#667178]">Response</p>
            <p className="mt-2 text-sm text-[#747c81]">No response yet</p>
            <p className="mt-3 text-sm font-medium text-[#667178]">Response Headers</p>
            <textarea aria-label="Response headers" readOnly className={`${editorClassName} h-12`} />
            <p className="mt-3 text-sm font-medium text-[#667178]">Response Body</p>
            <textarea
              aria-label="Response body"
              readOnly
              className={`${editorClassName} h-20 sm:h-24`}
            />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-black/10 bg-[#fafafa] px-4 py-2.5 text-xs sm:px-5 sm:text-sm">
          <button type="button" className="flex items-center gap-2 rounded-lg bg-[#ececed] px-3 py-1.5 font-medium text-[#202427] transition hover:bg-[#e2e3e4]">
            <Power size={17} strokeWidth={2} aria-hidden="true" />
            Quit
          </button>
          <button type="button" className="rounded-lg bg-[#ececed] px-3 py-1.5 font-medium text-[#202427] transition hover:bg-[#e2e3e4]">
            Check for Updates…
          </button>
        </div>
      </div>
    </div>
  );
}

import { Power } from "lucide-react";

const editorClassName =
  "mt-1 block w-full resize-none rounded-[7px] border border-[#aeb5b9] bg-white/35 px-2 py-1.5 font-mono text-[11px] text-[#283238] outline-none shadow-[inset_0_1px_1px_rgba(0,0,0,0.025)] focus:border-[#748d98] focus:ring-2 focus:ring-[#d7e8ef]";

export function MacosPreview() {
  return (
    <div className="mx-auto w-full max-w-[461px]">
      <div className="overflow-hidden rounded-[18px] border border-[#9aa5aa] bg-[#f8f8f8] shadow-[0_20px_48px_rgba(37,47,53,0.15),0_3px_10px_rgba(37,47,53,0.08)]">
        <div className="bg-[linear-gradient(180deg,#e3f8ff_0%,#eefaff_20%,#f8f8f8_100%)] px-[14px] pt-[14px] pb-[13px]">
          <div className="grid grid-cols-[96px_1fr] gap-2">
            <select
              aria-label="HTTP method"
              defaultValue="GET"
              className="h-6 rounded-[7px] border-0 bg-[#d3e7ee] px-3 text-[13px] font-medium text-[#11181c] outline-none focus:ring-2 focus:ring-[#8eaebc]"
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
              className="h-6 min-w-0 rounded-[7px] border-0 bg-[#d3e7ee] px-2 text-[13px] text-[#172126] outline-none focus:ring-2 focus:ring-[#8eaebc]"
            />
          </div>

          <div className="mt-3">
            <p className="text-[11px] leading-4 font-medium text-[#667178]">Headers</p>
            <textarea aria-label="Request headers" className={`${editorClassName} h-[73px]`} />
          </div>
          <div className="mt-3">
            <p className="text-[11px] leading-4 font-medium text-[#667178]">Body</p>
            <textarea aria-label="Request body" className={`${editorClassName} !mt-0.5 h-[97px]`} />
          </div>

          <div className="mt-3 flex h-6 items-center gap-2 text-[13px]">
            <button type="button" className="h-6 rounded-[7px] bg-[#e8e9ea] px-3 font-medium text-[#111416] transition hover:bg-[#dfe1e2]">
              Send
            </button>
            <button type="button" disabled className="h-6 rounded-[7px] bg-[#f0f0f1] px-3 text-[#a1a5a8]">
              Cancel
            </button>
            <span className="text-[#6d7479]">Ready</span>
          </div>

          <div className="mt-3.5">
            <p className="text-[11px] leading-4 font-medium text-[#667178]">Response</p>
            <p className="mt-1 text-[11px] leading-4 text-[#747c81]">No response yet</p>
            <p className="mt-1 text-[11px] leading-4 font-medium text-[#667178]">Response Headers</p>
            <textarea aria-label="Response headers" readOnly className={`${editorClassName} !mt-0.5 h-[85px]`} />
            <p className="mt-2 text-[11px] leading-4 font-medium text-[#667178]">Response Body</p>
            <textarea
              aria-label="Response body"
              readOnly
              className={`${editorClassName} !mt-0 h-[161px]`}
            />
          </div>
        </div>
        <div className="flex h-[45px] items-center justify-between border-t border-black/10 bg-[#fafafa] px-[14px] text-[13px]">
          <button type="button" className="flex h-6 items-center gap-2 rounded-[7px] bg-[#ececed] px-3 font-medium text-[#111416] transition hover:bg-[#e2e3e4]">
            <Power size={15} strokeWidth={2} aria-hidden="true" />
            Quit
          </button>
          <button type="button" className="h-6 rounded-[7px] bg-[#ececed] px-3 font-medium text-[#111416] transition hover:bg-[#e2e3e4]">
            Check for Updates…
          </button>
        </div>
      </div>
    </div>
  );
}

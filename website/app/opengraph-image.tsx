import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Pingo API scratchpad for macOS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const icon = await readFile(join(process.cwd(), "app/icon.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7f8f9",
          color: "#17191b",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
          <div
            style={{
              alignItems: "center",
              color: "#63717b",
              display: "flex",
              fontSize: 28,
              gap: 18,
            }}
          >
            <img
              alt=""
              height={64}
              src={`data:image/png;base64,${icon}`}
              style={{ borderRadius: 14 }}
              width={64}
            />
            Pingo for macOS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 1.08,
              marginTop: 38,
            }}
          >
            Small requests, kept simple.
          </div>
          <div
            style={{
              color: "#5f686f",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              marginTop: 30,
            }}
          >
            A compact API scratchpad that lives in your menu bar.
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #d6dade",
            borderRadius: 28,
            boxShadow: "0 30px 70px rgba(29, 29, 31, 0.12)",
            display: "flex",
            flexDirection: "column",
            height: 390,
            padding: 30,
            width: 340,
          }}
        >
          <div style={{ color: "#63717b", display: "flex", fontSize: 20 }}>
            GET
          </div>
          <div
            style={{
              background: "#f0f2f3",
              borderRadius: 10,
              color: "#5f686f",
              display: "flex",
              fontSize: 18,
              marginTop: 18,
              padding: "14px 16px",
            }}
          >
            https://api.example.com
          </div>
          <div
            style={{
              alignItems: "center",
              background: "#202427",
              borderRadius: 10,
              color: "white",
              display: "flex",
              fontSize: 20,
              justifyContent: "center",
              marginTop: 18,
              padding: "13px 16px",
            }}
          >
            Send request
          </div>
          <div
            style={{
              borderTop: "1px solid #e0e3e5",
              color: "#63717b",
              display: "flex",
              fontSize: 18,
              marginTop: 28,
              paddingTop: 22,
            }}
          >
            200 OK · 124 ms
          </div>
          <div
            style={{
              color: "#202427",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 17,
              marginTop: 18,
            }}
          >
            {`{ "status": "ready" }`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

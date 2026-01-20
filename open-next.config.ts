import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  wasm: [
    {
      name: "resvg_wasm",
      path: require.resolve("next/dist/compiled/@vercel/og/resvg.wasm"),
    },
    {
      name: "yoga_wasm",
      path: require.resolve("next/dist/compiled/@vercel/og/yoga.wasm"),
    },
  ],
});

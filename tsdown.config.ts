import { defineConfig } from "tsdown";

// oxlint-disable-next-line no-restricted-exports
export default defineConfig({
  minify: true,
  entry: ["./src/oxfmt.ts", "./src/oxlint.ts"],
});

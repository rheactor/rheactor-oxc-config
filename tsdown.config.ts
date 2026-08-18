import { defineConfig } from "tsdown";

// oxlint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  minify: true,
  entry: ["./src/oxfmt.ts", "./src/oxlint.ts"],
});

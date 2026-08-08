import { defineConfig } from "oxlint";

import { allRules } from "#oxlint.config.ts";

// oxlint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  rules: allRules,
  plugins: ["import"],
});

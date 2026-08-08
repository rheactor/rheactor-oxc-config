import { defineConfig } from "oxlint";

import { allRules } from "#oxlint.config.ts";

export default defineConfig({
  rules: allRules,
  plugins: ["typescript"],
});

import { defineConfig } from "oxlint";

import { jsxRules } from "#oxlint.config.ts";

export default defineConfig({
  rules: jsxRules,
  plugins: ["nextjs"],
});

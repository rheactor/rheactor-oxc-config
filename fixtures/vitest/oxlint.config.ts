import { defineConfig } from "oxlint";

import { vitestRules } from "#oxlint.config.ts";

export default defineConfig({
  rules: vitestRules,
  plugins: ["vitest"],
});

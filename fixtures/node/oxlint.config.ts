import { defineConfig } from "oxlint";

import { nodeRules } from "#oxlint.config.ts";

export default defineConfig({
  rules: nodeRules,
  plugins: ["node"],
});

import { defineConfig } from "oxlint";

import { rheactorRules } from "#oxlint.config.ts";

export default defineConfig({
  jsPlugins: ["@rheactor/rheactor-oxc-plugin"],
  rules: rheactorRules,
  plugins: [],
});

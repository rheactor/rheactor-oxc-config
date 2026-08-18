import { defineConfig } from "oxfmt";

// oxlint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  ignorePatterns: ["dist", "node_modules"],
  jsdoc: {
    addDefaultToDescription: false,
    preferCodeFences: true,
    separateReturnsFromParam: true,
    separateTagGroups: true,
  },
  proseWrap: "always",
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  sortTailwindcss: {
    functions: ["twMerge", "twJoin"],
  },
});

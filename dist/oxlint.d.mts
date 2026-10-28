import { DummyRuleMap } from "oxlint";
declare const _default: {
  ignorePatterns: string[];
  rules: DummyRuleMap;
  overrides: {
    files: string[];
    rules: DummyRuleMap;
  }[];
  options: {
    typeAware: true;
    typeCheck: true;
    reportUnusedDisableDirectives: "warn";
  };
  plugins: ("eslint" | "import" | "jsx-a11y" | "nextjs" | "node" | "oxc" | "promise" | "react" | "react-perf" | "typescript" | "unicorn" | "vitest")[];
  settings: {
    react: {
      version: string;
    };
  };
};
export { _default as default };
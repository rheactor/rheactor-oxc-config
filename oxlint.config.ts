import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { defineConfig } from "oxlint";

type LintPlugins = NonNullable<OxlintConfig["plugins"]>;

function isPackageInstalled(packageName: string) {
  try {
    import.meta.resolve(packageName);

    return true;
  } catch {
    return false;
  }
}

export const allRules: DummyRuleMap = {
  /** Eslint rules */
  // eslint/accessor-pairs: off (default)
  "eslint/array-callback-return": ["warn", { checkForEach: true }],
  "eslint/arrow-body-style": "warn",
  "eslint/block-scoped-var": "warn",
  // eslint/capitalized-comments: off (default)
  "eslint/class-methods-use-this": "warn",
  // eslint/complexity: off (default)
  "eslint/constructor-super": "off", // (covered by typescript)
  // eslint/consistent-this ("warn"): not available (https://github.com/oxc-project/oxc/pull/22357)
  "eslint/curly": "warn",
  "eslint/default-case": "warn",
  "eslint/default-case-last": "warn",
  "eslint/default-param-last": "warn",
  // eslint:dot-notation: off (prefer typescript/dot-notation)
  "eslint/eqeqeq": "warn",
  // eslint/for-direction: warn (default)
  "eslint/func-name-matching": "warn",
  "eslint/func-names": "warn",
  "eslint/func-style": ["warn", "declaration"],
  // eslint/getter-return: warn (default)
  "eslint/grouped-accessor-pairs": ["warn", "setBeforeGet"],
  "eslint/guard-for-in": "warn",
  // eslint/id-denylist: off (default)
  // eslint/id-length: off (default)
  "eslint/id-match": [
    "warn",
    `^_*(?:[A-Z_]*|[a-zA-Z]+)$`,
    { classFields: true, ignoreDestructuring: true },
  ],
  // eslint/init-declarations: off (default)
  "eslint/logical-assignment-operators": ["warn", "always", { enforceForIfStatements: true }],
  "eslint/max-classes-per-file": "warn",
  // eslint/max-depth: off (default)
  // eslint/max-lines: off (default)
  // eslint/max-lines-per-function: off (default)
  // eslint/max-nested-callbacks: off (default)
  // eslint/max-params: off (default)
  // eslint/max-statements: off (default)
  "eslint/new-cap": "error",
  "eslint/no-alert": "warn",
  "eslint/no-array-constructor": "warn",
  // eslint/no-async-promise-executor: warn (default)
  "eslint/no-await-in-loop": "warn",
  "eslint/no-bitwise": "warn", // options: {} (default)
  // eslint/no-caller: warn (default)
  "eslint/no-case-declarations": "error",
  "eslint/no-class-assign": "off", // covered by typescript
  // eslint/no-compare-neg-zero: warn (default)
  // eslint/no-cond-assign: warn (default)
  "eslint/no-console": "warn",
  "eslint/no-const-assign": "off", // covered by typescript
  // eslint/no-constant-binary-expression: warn (default)
  // eslint/no-constant-condition: warn (default)
  "eslint/no-constructor-return": "warn",
  // eslint/no-continue: off (default)
  // eslint/no-control-regex: warn (default)
  // eslint/no-debugger: warn (default)
  // eslint/no-delete-var: warn (default)
  "eslint/no-div-regex": "warn",
  // eslint/no-dupe-class-members: warn (default)
  // eslint/no-dupe-else-if: warn (default)
  "eslint/no-dupe-keys": "off", // covered by typescript
  // eslint/no-duplicate-case: warn (default)
  "eslint/no-duplicate-imports": ["warn", { allowSeparateTypeImports: true }],
  "eslint/no-else-return": ["warn", { allowElseIf: false }],
  "eslint/no-empty": "warn",
  // eslint/no-empty-character-class: warn (default)
  "eslint/no-empty-function": "warn",
  // eslint/no-empty-pattern: warn (default)
  // eslint/no-empty-static-block: warn (default)
  "eslint/no-eq-null": "warn",
  // eslint/no-eval: warn (default)
  // eslint/no-ex-assign: warn (default)
  // eslint/no-extend-native: off (default) (covered by typescript)
  "eslint/no-extra-bind": "warn",
  "eslint/no-extra-boolean-cast": ["warn", { enforceForInnerExpressions: true }],
  "eslint/no-extra-label": "warn",
  "eslint/no-fallthrough": "error",
  "eslint/no-func-assign": "off", // covered by typescript
  "eslint/no-global-assign": "off", // covered by typescript
  "eslint/no-implicit-coercion": ["warn", { disallowTemplateShorthand: true }],
  "eslint/no-implicit-globals": "warn",
  // eslint/no-implied-eval: off (default); covered by typescript
  "eslint/no-import-assign": "off", // covered by typescript
  // eslint/no-inline-comments: off (default)
  "eslint/no-inner-declarations": ["warn", "both"],
  // eslint/no-invalid-regexp: warn (default)
  // eslint/no-irregular-whitespace: warn (default)
  "eslint/no-iterator": "off", // covered by typescript
  "eslint/no-label-var": "warn",
  "eslint/no-labels": ["warn", { allowLoop: true, allowSwitch: true }],
  "eslint/no-lone-blocks": "warn",
  "eslint/no-lonely-if": "warn",
  "eslint/no-loop-func": "warn",
  // eslint/no-loss-of-precision: warn (default)
  // eslint/no-magic-numbers: off (default)
  // eslint/no-misleading-character-class: warn (default)
  "eslint/no-multi-assign": "warn",
  "eslint/no-multi-str": "warn",
  // eslint/no-negated-condition: off (default); covered by unicorn/no-negated-condition
  // eslint/no-nested-ternary: off (default)
  "eslint/no-new": "warn",
  "eslint/no-new-func": "warn",
  "eslint/no-new-native-nonconstructor": "off", // covered by typescript
  "eslint/no-new-wrappers": "warn",
  // eslint/no-nonoctal-decimal-escape: warn (default)
  "eslint/no-obj-calls": "off", // covered by typescript
  "eslint/no-object-constructor": "warn",
  "eslint/no-param-reassign": ["warn", { props: true }],
  // eslint/no-plusplus: off (default)
  "eslint/no-promise-executor-return": ["warn", { allowVoid: true }],
  // eslint/no-proto: off (default) (covered by typescript)
  // eslint/no-prototype-builtins: off (default)
  "eslint/no-redeclare": "error", // buggy?
  "eslint/no-regex-spaces": "warn",
  // eslint/no-restricted-exports: off (default)
  // eslint/no-restricted-globals: off (default); needless ("event" is deprecated)
  "eslint/no-restricted-imports": ["warn", { patterns: ["./*", "../*"] }],
  // eslint/no-restricted-properties: off (default)
  "eslint/no-return-assign": ["error", "always"],
  "eslint/no-script-url": "warn",
  // eslint/no-self-assign: warn (default)
  "eslint/no-self-compare": "error",
  "eslint/no-sequences": "error",
  // eslint/no-setter-return: warn (default)
  "eslint/no-shadow": ["warn", { builtinGlobals: true }],
  // eslint/no-shadow-restricted-names: warn (default)
  // eslint/no-sparse-arrays: warn (default)
  "eslint/no-template-curly-in-string": "warn",
  // eslint/no-ternary: off (default)
  "eslint/no-this-before-super": "off", // covered by typescript
  // eslint/no-throw-literal: off (default) (deprecated; use typescript/no-throw-literal)
  // eslint/no-unassigned-vars: warn (default)
  // eslint/no-undef: off (default) (covered by typescript)
  // eslint/no-undefined: off (default)
  "eslint/no-underscore-dangle": ["warn", { allow: ["_id"] }],
  // eslint/no-unexpected-multiline: off (default); needless?
  "eslint/no-unmodified-loop-condition": "error",
  // eslint/no-unneeded-ternary: off (default); covered by unicorn/prefer-logical-operator-over-ternary
  "eslint/no-unreachable": "off", // covered by typescript
  "eslint/no-unreachable-loop": "error",
  // eslint/no-unsafe-finally: warn (default)
  "eslint/no-unsafe-negation": ["warn", { enforceForOrderingRelations: true }],
  "eslint/no-unsafe-optional-chaining": ["warn", { disallowArithmeticOperators: true }],
  "eslint/no-unused-expressions": [
    "warn",
    { enforceForJSX: true }, // buggy for JSX?
  ],
  // eslint/no-unused-labels: warn (default)
  // eslint/no-unused-private-class-members: warn (default)
  // eslint/no-unused-vars: warn (default)
  "eslint/no-use-before-define": "warn",
  "eslint/no-useless-assignment": "warn",
  // eslint/no-useless-backreference: warn (default)
  "eslint/no-useless-call": "warn",
  // eslint/no-useless-catch: warn (default)
  "eslint/no-useless-computed-key": "warn",
  "eslint/no-useless-concat": "warn",
  "eslint/no-useless-constructor": "warn",
  // eslint/no-useless-escape: warn (default)
  // eslint/no-useless-rename: warn (default)
  "eslint/no-useless-return": "warn",
  "eslint/no-var": "warn",
  "eslint/no-void": ["warn", { allowAsStatement: true }],
  "eslint/no-warning-comments": ["warn", { decoration: ["*"], terms: ["todo", "@todo"] }],
  // eslint/no-with: warn (default)
  "eslint/object-shorthand": ["warn", "always", { avoidQuotes: true }],
  "eslint/one-var": ["warn", "never"],
  "eslint/operator-assignment": "warn",
  "eslint/prefer-arrow-callback": "warn",
  "eslint/prefer-const": "warn",
  // eslint/prefer-destructuring: off (default)
  "eslint/prefer-exponentiation-operator": "warn",
  "eslint/prefer-named-capture-group": "warn",
  "eslint/prefer-numeric-literals": "warn",
  "eslint/prefer-object-has-own": "warn",
  "eslint/prefer-object-spread": "warn",
  // eslint/prefer-promise-reject-errors: off (default) (prefer typescript/prefer-promise-reject-errors)
  "eslint/prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
  "eslint/prefer-rest-params": "warn",
  "eslint/prefer-spread": "warn",
  "eslint/prefer-template": "warn",
  "eslint/preserve-caught-error": "warn",
  "eslint/radix": "error",
  // eslint/require-await: off (default) (prefer typescript/require-await)
  "eslint/require-unicode-regexp": ["warn", { requireFlag: "v" }],
  // eslint/require-yield: warn (default)
  // eslint/require-atomic-updates: not available (no PR)
  // eslint/sort-imports: off (default); covered by oxfmt
  // eslint/sort-keys: off (default)
  // eslint/sort-vars: off (default)
  "eslint/symbol-description": "warn",
  "eslint/unicode-bom": "warn",
  "eslint/use-isnan": ["warn", { enforceForIndexOf: true }],
  "eslint/valid-typeof": "off", // covered by typescript
  // eslint/vars-on-top: off (default)
  "eslint/yoda": "warn",

  /** Import rules */
  // import/consistent-type-specifier-style: off (default)
  // import/default: warn (default) (covered by typescript)
  "import/export": "warn",
  // import/exports-last: off (default)
  // import/extensions: off (default) (covered by typescript)
  "import/first": "warn",
  // import/group-exports: off (default)
  // import/max-dependencies: off (default)
  // import/named: off (default) (covered by typescript)
  // import/namespace: warn (default) (covered by typescript)
  "import/newline-after-import": "warn",
  // import/no-absolute-path: off (default) (covered by typescript)
  // import/no-amd: off (default); needless
  "import/no-anonymous-default-export": ["warn", { allowCallExpression: false, allowObject: true }],
  // import/no-commonjs: off (default); needless
  "import/no-cycle": "warn",
  // import/no-default-export: off (default) (covered by eslint/no-restricted-exports)
  // import/no-duplicates: off (default) (covered by eslint/no-duplicate-imports)
  // import/no-dynamic-require: off (default); needless
  "import/no-empty-named-blocks": "warn",
  // import/no-extraneous-dependencies: not available
  // import/no-import-module-exports: not available
  "import/no-mutable-exports": "warn",
  // import/no-named-as-default: off (default); needless
  // import/no-named-as-default-member: off (default); needless
  // import/no-named-default: off (default)
  // import/no-named-export: off (default)
  "import/no-namespace": ["warn", { ignore: ["*.json"] }],
  // import/no-nodejs-modules: off (default)
  // import/no-relative-parent-imports: off (default) (covered by eslint/no-restricted-exports)
  "import/no-self-import": "warn",
  "import/no-unassigned-import": ["warn", { allow: ["**/*.{css,scss,json}"] }],
  // import/no-webpack-loader-syntax: off (default); needless
  // import/prefer-default-export: off (default)
  // import/unambiguous: off (default); confuses

  /** Oxc rules */
  "oxc/approx-constant": "warn",
  "oxc/bad-array-method-on-arguments": "off", // covered by typescript
  // oxc/bad-bitwise-operator: off (default) (covered by typescript)
  "oxc/bad-char-at-comparison": "error",
  "oxc/bad-comparison-sequence": "off", // needless or covered by typescript
  // oxc/bad-match-all-arg: warn (default)
  // oxc/bad-min-max-func: warn (default)
  "oxc/bad-object-literal-comparison": "off", // covered by typescript
  // oxc/bad-replace-all-arg: warn (default)
  "oxc/branches-sharing-code": "warn",
  "oxc/const-comparisons": "off", // covered by typescript
  // oxc/double-comparisons: warn (default)
  // oxc/erasing-op: warn (default)
  "oxc/misrefactored-assign-op": "warn",
  "oxc/missing-throw": "error",
  "oxc/no-accumulating-spread": "warn",
  // oxc/no-async-await: off (default)
  // oxc/no-async-endpoint-handlers: off (default)
  // oxc/no-barrel-file: off (default)
  "oxc/no-const-enum": "warn",
  "oxc/no-map-spread": "warn",
  // oxc/no-optional-chaining: off (default)
  // oxc/no-rest-spread-properties: off (default)
  "oxc/no-this-in-exported-function": "error",
  // oxc/number-arg-out-of-range: warn (default)
  // oxc/only-used-in-recursion: warn (default)
  // oxc/uninvoked-array-callback: warn (default)

  /** Promise rules */
  "promise/always-return": ["warn", { ignoreLastCallback: true }],
  "promise/avoid-new": "warn",
  "promise/catch-or-return": "warn",
  // promise/no-callback-in-promise: warn (default)
  "promise/no-multiple-resolved": "error",
  "promise/no-nesting": "warn",
  "promise/no-new-statics": "error", // also covered by typescript
  "promise/no-promise-in-callback": "warn",
  "promise/no-return-in-finally": "warn",
  "promise/no-return-wrap": "warn",
  "promise/param-names": "warn",
  // promise/prefer-await-to-callbacks: off (default)
  "promise/prefer-await-to-then": "warn",
  "promise/prefer-catch": "warn",
  // promise/spec-only: off (default) (covered by typescript)
  // promise/valid-params: warn (default) (covered by typescript)

  /** Typescript rules */
  // typescript/adjacent-overload-signatures: off (default)
  "typescript/array-type": ["warn", { default: "array-simple" }],
  // typescript/await-thenable: warn (default)
  "typescript/ban-ts-comment": [
    "warn",
    {
      // "ts-expect-error": "allow-with-description" (default)
      // "ts-ignore": true (default)
      "ts-nocheck": "allow-with-description",
      "ts-check": "allow-with-description",
    },
  ],
  // typescript/ban-tslint-comment: off (default)
  "typescript/class-literal-property-style": "warn",
  "typescript/consistent-generic-constructors": "warn",
  "typescript/consistent-indexed-object-style": "warn",
  // typescript/consistent-return: off (default)
  "typescript/consistent-type-assertions": "warn",
  "typescript/consistent-type-definitions": "warn",
  "typescript/consistent-type-exports": "warn",
  "typescript/consistent-type-imports": "warn",
  "typescript/dot-notation": "warn",
  // typescript/explicit-function-return-type: off (default)
  "typescript/explicit-member-accessibility": "warn",
  // typescript/explicit-module-boundary-types: off (default)
  "typescript/method-signature-style": ["warn", "method"],
  // typescript/no-array-delete: warn (default)
  // typescript/no-base-to-string: warn (default)
  "typescript/no-confusing-non-null-assertion": "warn",
  "typescript/no-confusing-void-expression": "warn",
  "typescript/no-deprecated": "warn",
  // typescript/no-duplicate-enum-values: warn (default)
  // typescript/no-duplicate-type-constituents: warn (default)
  "typescript/no-dynamic-delete": "warn",
  "typescript/no-empty-interface": "warn",
  "typescript/no-empty-object-type": "warn",
  "typescript/no-explicit-any": "warn",
  // typescript/no-extra-non-null-assertion: warn (default)
  "typescript/no-extraneous-class": "warn",
  // typescript/no-floating-promises: warn (default)
  // typescript/no-for-in-array: warn (default)
  // typescript/no-implied-eval: warn (default)
  "typescript/no-import-type-side-effects": "warn",
  "typescript/no-inferrable-types": "warn",
  "typescript/no-invalid-void-type": ["warn", { allowAsThisParameter: true }],
  "typescript/no-meaningless-void-operator": ["warn", { checkNever: true }],
  // typescript/no-misused-new: warn (default)
  // typescript/no-misused-promises: off (default) (covered by typescript)
  "typescript/no-misused-spread": "off", // covered by typescript
  "typescript/no-mixed-enums": "warn",
  // typescript/no-namespace: off (default)
  "typescript/no-non-null-asserted-nullish-coalescing": "warn",
  // typescript/no-non-null-asserted-optional-chain: warn (default)
  // typescript/no-non-null-assertion: off (default)
  // typescript/no-redundant-type-constituents: warn (default)
  // typescript/no-require-imports: off (default)
  // typescript/no-restricted-types: off (default)
  "typescript/no-this-alias": ["warn", { allowedNames: ["self", "that"] }],
  "typescript/no-unnecessary-boolean-literal-compare": "warn",
  "typescript/no-unnecessary-condition": [
    "warn",
    { allowConstantLoopConditions: true, checkTypePredicates: true },
  ],
  // typescript/no-unnecessary-parameter-property-assignment: warn (default)
  // typescript/no-unnecessary-qualifier: off (default); needless
  "typescript/no-unnecessary-template-expression": "warn",
  "typescript/no-unnecessary-type-arguments": "warn",
  "typescript/no-unnecessary-type-assertion": "warn",
  // typescript/no-unnecessary-type-constraint: off (default)
  "typescript/no-unnecessary-type-conversion": "warn",
  // typescript/no-unnecessary-type-parameters: off (default)
  "typescript/no-unsafe-argument": "warn",
  "typescript/no-unsafe-assignment": "warn",
  "typescript/no-unsafe-call": "warn",
  // typescript/no-unsafe-declaration-merging: warn (default)
  // typescript/no-unsafe-enum-comparison: off (default) (covered by typescript)
  "typescript/no-unsafe-function-type": "warn",
  "typescript/no-unsafe-member-access": "warn",
  "typescript/no-unsafe-return": "warn",
  // typescript/no-unsafe-type-assertion: off (default); hard to maintain
  // typescript/no-unsafe-unary-minus: warn (default)
  // typescript/no-useless-default-assignment: warn (default)
  // typescript/no-useless-empty-export: warn (default)
  // typescript/no-wrapper-object-types: warn (default)
  "typescript/non-nullable-type-assertion-style": "warn",
  "typescript/only-throw-error": "error",
  "typescript/parameter-properties": ["warn", { prefer: "parameter-property" }],
  // typescript/prefer-as-const: warn (default)
  "typescript/prefer-enum-initializers": "warn",
  "typescript/prefer-find": "warn",
  "typescript/prefer-for-of": "warn",
  "typescript/prefer-function-type": "warn",
  "typescript/prefer-includes": "warn",
  "typescript/prefer-literal-enum-member": "warn",
  "typescript/prefer-namespace-keyword": "off",
  "typescript/prefer-nullish-coalescing": "warn",
  "typescript/prefer-optional-chain": "warn",
  // typescript/prefer-promise-reject-errors: off (default)
  "typescript/prefer-readonly": "warn",
  // typescript/prefer-readonly-parameter-types: off (default); buggy?
  "typescript/prefer-reduce-type-parameter": "warn",
  "typescript/prefer-regexp-exec": "warn",
  "typescript/prefer-return-this-type": "warn",
  "typescript/prefer-string-starts-ends-with": "warn",
  // typescript/prefer-ts-expect-error: off (default)
  "typescript/promise-function-async": "warn",
  "typescript/related-getter-setter-pairs": "warn",
  // typescript/require-array-sort-compare: warn (default)
  "typescript/require-await": "warn",
  "typescript/restrict-plus-operands": [
    "warn",
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
    },
  ],
  // typescript/restrict-template-expressions: warn (default)
  "typescript/return-await": ["warn", "error-handling-correctness-only"],
  "typescript/strict-boolean-expressions": "warn",
  "typescript/strict-void-return": "warn",
  "typescript/switch-exhaustiveness-check": "warn",
  // typescript/triple-slash-reference: warn (default)
  "typescript/unbound-method": ["warn", { ignoreStatic: true }],
  "typescript/unified-signatures": ["warn", { ignoreDifferentlyNamedParameters: true }],
  // typescript/use-unknown-in-catch-callback-variable: off (default)

  /** Unicorn rules */
  "unicorn/catch-error-name": "warn",
  "unicorn/consistent-assert": "warn",
  "unicorn/consistent-date-clone": "warn",
  "unicorn/consistent-empty-array-spread": "warn",
  "unicorn/consistent-existence-index-check": "warn",
  "unicorn/consistent-function-scoping": "warn",
  "unicorn/consistent-template-literal-escape": "warn",
  "unicorn/custom-error-definition": "warn",
  // unicorn/empty-brace-spaces: off (default); covered by oxfmt
  "unicorn/error-message": "warn",
  "unicorn/escape-case": "warn",
  "unicorn/explicit-length-check": "warn",
  "unicorn/explicit-timer-delay": "warn",
  // unicorn/filename-case: off (default)
  // unicorn/import-style: off (default)
  // unicorn/max-nested-calls: off (default)
  "unicorn/new-for-builtins": "warn",
  // unicorn/no-abusive-eslint-disable: off (default)
  "unicorn/no-accessor-recursion": "warn",
  // unicorn/no-anonymous-default-export: off (default)
  "unicorn/no-array-callback-reference": "warn",
  "unicorn/no-array-fill-with-reference-type": "warn",
  "unicorn/no-array-for-each": "warn",
  "unicorn/no-array-method-this-argument": "warn",
  "unicorn/no-array-reduce": "warn",
  "unicorn/no-array-reverse": "warn",
  "unicorn/no-array-sort": "warn",
  "unicorn/no-await-expression-member": "warn",
  // unicorn/no-await-in-promise-methods: warn (default)
  "unicorn/no-confusing-array-with": "warn",
  "unicorn/no-console-spaces": "warn",
  "unicorn/no-document-cookie": "warn",
  // unicorn/no-empty-file: warn (default)
  "unicorn/no-hex-escape": "warn",
  "unicorn/no-immediate-mutation": "warn",
  "unicorn/no-instanceof-array": "warn",
  // unicorn/no-instanceof-builtins: off (default)
  // unicorn/no-invalid-fetch-options: warn (default)
  // unicorn/no-invalid-remove-event-listener: warn (default)
  // unicorn/no-length-as-slice-end: off (default); covered by unicorn/no-unnecessary-slice-end
  "unicorn/no-lonely-if": "warn",
  "unicorn/no-magic-array-flat-depth": "warn",
  "unicorn/no-negated-condition": "warn",
  // unicorn/no-negation-in-equality-check: off (default); covered by typescript
  // unicorn/no-nested-ternary: off (default)
  // unicorn/no-new-array: warn (default)
  "unicorn/no-new-buffer": "warn", // covered by typescript ("deprecated")
  // unicorn/no-null: off (default)
  "unicorn/no-object-as-default-parameter": "warn",
  "unicorn/no-process-exit": "warn",
  // unicorn/no-single-promise-in-promise-methods: warn (default)
  // unicorn/no-static-only-class: off (default); covered by typescript/no-extraneous-class
  "unicorn/no-thenable": "off", // covered by typescript
  // unicorn/no-this-assignment: off (default); covered by typescript/no-this-alias
  "unicorn/no-typeof-undefined": "warn",
  "unicorn/no-unnecessary-array-flat-depth": "warn",
  "unicorn/no-unnecessary-array-splice-count": "warn",
  "unicorn/no-unnecessary-await": "off", // covered by typescript/await-thenable
  "unicorn/no-unnecessary-slice-end": "warn",
  "unicorn/no-unreadable-array-destructuring": "warn",
  // unicorn/no-unreadable-iife: off (default)
  "unicorn/no-useless-collection-argument": "warn",
  "unicorn/no-useless-error-capture-stack-trace": "warn",
  // unicorn/no-useless-fallback-in-spread: warn (default)
  "unicorn/no-useless-iterator-to-array": "warn",
  // unicorn/no-useless-length-check: warn (default)
  "unicorn/no-useless-promise-resolve-reject": "warn",
  // unicorn/no-useless-spread: warn (default)
  // unicorn/no-useless-switch-case: off (default)
  // unicorn/no-useless-undefined: off (default)
  "unicorn/no-zero-fractions": "warn",
  // unicorn/number-literal-case: off (default); buggy/covered by oxfmt
  "unicorn/numeric-separators-style": "warn",
  "unicorn/prefer-add-event-listener": "warn",
  "unicorn/prefer-array-find": "warn",
  "unicorn/prefer-array-flat": "warn",
  "unicorn/prefer-array-flat-map": "warn",
  "unicorn/prefer-array-index-of": "warn",
  "unicorn/prefer-array-some": "warn",
  "unicorn/prefer-at": ["warn", { checkAllIndexAccess: true }],
  "unicorn/prefer-bigint-literals": "warn",
  // unicorn/prefer-blob-reading-methods: off (default); needless
  // unicorn/prefer-class-fields: off (default); covered by typescript
  "unicorn/prefer-classlist-toggle": "warn",
  "unicorn/prefer-code-point": "warn",
  "unicorn/prefer-date-now": "warn",
  "unicorn/prefer-default-parameters": "warn",
  "unicorn/prefer-dom-node-append": "warn",
  "unicorn/prefer-dom-node-dataset": "warn",
  "unicorn/prefer-dom-node-remove": "warn",
  "unicorn/prefer-dom-node-text-content": "warn",
  "unicorn/prefer-event-target": "warn",
  "unicorn/prefer-export-from": "warn",
  "unicorn/prefer-global-this": "warn",
  "unicorn/prefer-import-meta-properties": "warn",
  // unicorn/prefer-includes: off (default); buggy?/covered by typescript/prefer-includes
  "unicorn/prefer-keyboard-event-key": "warn",
  "unicorn/prefer-logical-operator-over-ternary": "warn",
  "unicorn/prefer-math-min-max": "warn",
  "unicorn/prefer-math-trunc": "warn",
  "unicorn/prefer-modern-dom-apis": "warn",
  "unicorn/prefer-modern-math-apis": "warn",
  // unicorn/prefer-module: off (default)
  "unicorn/prefer-native-coercion-functions": "warn",
  "unicorn/prefer-negative-index": "warn",
  "unicorn/prefer-node-protocol": "warn",
  "unicorn/prefer-number-coercion": "warn",
  "unicorn/prefer-number-properties": "warn",
  "unicorn/prefer-object-from-entries": "warn",
  "unicorn/prefer-optional-catch-binding": "warn",
  "unicorn/prefer-prototype-methods": "warn",
  "unicorn/prefer-query-selector": "warn",
  "unicorn/prefer-reflect-apply": "warn",
  "unicorn/prefer-regexp-test": "warn",
  "unicorn/prefer-response-static-json": "warn",
  "unicorn/prefer-set-has": "warn",
  // unicorn/prefer-set-size: warn (default)
  "unicorn/prefer-single-call": "warn",
  "unicorn/prefer-spread": "warn",
  // unicorn/prefer-string-raw: off (default)
  "unicorn/prefer-string-replace-all": "warn",
  "unicorn/prefer-string-slice": "warn",
  // unicorn/prefer-string-starts-ends-with: warn (default)
  "unicorn/prefer-string-trim-start-end": "warn",
  "unicorn/prefer-structured-clone": "warn",
  // unicorn/prefer-ternary: off (default); covered by no-else-return
  "unicorn/prefer-top-level-await": "warn",
  "unicorn/prefer-type-error": "warn",
  "unicorn/relative-url-style": "warn",
  "unicorn/require-array-join-separator": "warn",
  // unicorn/require-module-attributes: off (default)
  // unicorn/require-module-specifiers: off (default); covered by import/no-empty-named-blocks
  "unicorn/require-number-to-fixed-digits-argument": "warn",
  "unicorn/require-post-message-target-origin": "warn",
  "unicorn/switch-case-braces": "warn",
  "unicorn/switch-case-break-position": "warn",
  "unicorn/text-encoding-identifier-case": ["warn", { withDash: true }],
  // unicorn/throw-new-error: off (default); covered by unicorn/new-for-builtins
};

export const nodeRules: DummyRuleMap = {
  /** Node rules */
  // node/callback-return: off (default)
  // node/exports-style: off (default)
  // node/global-require: off (default)
  // node/handle-callback-err: off (default)
  // node/no-exports-assign: off (default)
  // node/no-mixed-requires: off (default)
  // node/no-new-require: off (default)
  "node/no-path-concat": "warn",
  // node/no-process-env: off (default)
  "node/no-sync": "warn",
  // node/no-top-level-await: off (default)
};

export const jsxRules: DummyRuleMap = {
  /** Jsx-a11y rules */
  // jsx-a11y/alt-text: warn (default)
  // jsx-a11y/anchor-ambiguous-text: off (default)
  // jsx-a11y/anchor-has-content: warn (default)
  // jsx-a11y/anchor-is-valid: warn (default); aspects: ["noHref", "invalidHref", "preferButton"] (default)
  "jsx-a11y/aria-activedescendant-has-tabindex": "off",
  "jsx-a11y/aria-props": "error",
  "jsx-a11y/aria-proptypes": "off", // covered by react
  "jsx-a11y/aria-role": "error",
  "jsx-a11y/aria-unsupported-elements": "error",
  "jsx-a11y/autocomplete-valid": "error",
  "jsx-a11y/click-events-have-key-events": "off",
  // jsx-a11y/control-has-associated-label: warn (default)
  "jsx-a11y/heading-has-content": "error",
  // jsx-a11y/html-has-lang: warn (default)
  // jsx-a11y/iframe-has-title: warn (default)
  "jsx-a11y/img-redundant-alt": [
    "warn",
    { words: ["image", "imagem", "photo", "foto", "picture", "figura"] },
  ],
  // jsx-a11y/interactive-supports-focus: warn (default)
  "jsx-a11y/label-has-associated-control": "off",
  // jsx-a11y/lang: warn (default)
  // jsx-a11y/media-has-caption: warn (default)
  "jsx-a11y/mouse-events-have-key-events": "off",
  // jsx-a11y/no-access-key: warn (default)
  "jsx-a11y/no-aria-hidden-on-focusable": "error",
  "jsx-a11y/no-autofocus": "off",
  "jsx-a11y/no-distracting-elements": "off",
  "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
  "jsx-a11y/no-noninteractive-element-interactions": "off", // default: warn
  // jsx-a11y/no-noninteractive-element-to-interactive-role: warn (default)
  "jsx-a11y/no-noninteractive-tabindex": "error",
  // jsx-a11y/no-redundant-roles: warn (default)
  "jsx-a11y/no-static-element-interactions": "off",
  // jsx-a11y/prefer-tag-over-role: warn (default)
  "jsx-a11y/role-has-required-aria-props": "error",
  "jsx-a11y/role-supports-aria-props": "error",
  "jsx-a11y/scope": "off", // covered by react
  "jsx-a11y/tabindex-no-positive": "off", // not works for react

  /** Nextjs rules */
  "nextjs/google-font-display": "off", // needless
  "nextjs/google-font-preconnect": "off", // needless
  // nextjs/inline-script-id: warn (default)
  // nextjs/next-script-for-ga: warn (default)
  "nextjs/no-assign-module-variable": "off", // needless
  "nextjs/no-async-client-component": "error",
  "nextjs/no-before-interactive-script-outside-document": "off", // needless
  // nextjs/no-css-tags: warn (default)
  "nextjs/no-document-import-in-page": "off", // needless
  "nextjs/no-duplicate-head": "error",
  // nextjs/no-head-element: warn (default)
  "nextjs/no-head-import-in-document": "off", // needless
  // nextjs/no-html-link-for-pages: warn (default)
  // nextjs/no-img-element: warn (default)
  "nextjs/no-page-custom-font": "off", // needless
  // nextjs/no-script-component-in-head: warn (default)
  "nextjs/no-styled-jsx-in-document": "off", // needless
  "nextjs/no-sync-scripts": "off", // needless
  "nextjs/no-title-in-document-head": "off", // needless
  // nextjs/no-typos: warn (default)
  "nextjs/no-unwanted-polyfillio": "off", // needless

  /** React rules */
  "react/button-has-type": "warn",
  "react/capitalized-calls": "warn",
  "react/checked-requires-onchange-or-readonly": "warn",
  // react/error-boundaries: warn (default)
  // react/exhaustive-deps: warn (default)
  "react/exhaustive-effect-dependencies": "warn",
  "react/forward-ref-uses-ref": "off", // deprecated for React 19
  "react/function-component-definition": "warn",
  // react/globals: warn (default)
  "react/hook-use-state": "warn",
  "react/hooks": "warn",
  "react/iframe-missing-sandbox": "warn",
  // react/immutability: warn (default)
  "react/incompatible-library": "off",
  "react/invariant": "warn",
  "react/jsx-boolean-value": "warn",
  "react/jsx-curly-brace-presence": "warn",
  "react/jsx-fragments": "warn",
  "react/jsx-handler-names": [
    "warn",
    {
      // checkInlineFunction: false (default)
      checkLocalVariables: true,
    },
  ],
  // react/jsx-key: warn (default)
  "react/jsx-no-comment-textnodes": "warn",
  "react/jsx-no-constructed-context-values": "warn",
  "react/jsx-no-duplicate-props": "off",
  "react/jsx-no-target-blank": "warn",
  "react/jsx-no-undef": "off",
  "react/jsx-no-useless-fragment": "warn",
  "react/jsx-pascal-case": "warn",
  // react/jsx-props-no-spread-multi: warn (default)
  "react/memo-dependencies": "warn",
  "react/no-array-index-key": "warn",
  // react/no-children-prop: warn (default)
  "react/no-clone-element": "warn",
  // react/no-danger-with-children: warn (default)
  "react/no-danger": "warn",
  "react/no-deriving-state-in-effects": "warn",
  "react/no-did-mount-set-state": "off",
  "react/no-did-update-set-state": "off",
  "react/no-direct-mutation-state": "off",
  "react/no-find-dom-node": "off",
  "react/no-is-mounted": "off",
  "react/no-multi-comp": "warn", // ignoreStateless: false (default)
  "react/no-object-type-as-default-prop": "warn",
  "react/no-react-children": "warn",
  "react/no-render-return-value": "off",
  "react/no-this-in-sfc": "off",
  "react/no-unescaped-entities": "warn",
  "react/no-unsafe": "off",
  "react/no-unstable-nested-components": "warn",
  "react/no-will-update-set-state": "off",
  "react/only-export-components": ["warn", { allowExportNames: ["metadata"] }],
  // react/preserve-manual-memoization: warn (default)
  // react/purity: warn (default)
  // react/refs: warn (default)
  // react/rule-suppression: off (default)
  "react/rules-of-hooks": "warn",
  "react/self-closing-comp": "warn",
  // react/set-state-in-effect: warn (default)
  // react/set-state-in-render: warn (default)
  // react/static-components: warn (default)
  "react/syntax": "warn",
  "react/todo": "warn",
  // react/unsupported-syntax: off (default); buggy?
  // react/use-memo: warn (default)
  // react/void-dom-elements-no-children: warn (default)
  // react/void-use-memo: warn (default)
  // react/display-name: off (default)
  // react/forbid-component-props: off (default)
  // react/forbid-dom-props: off (default)
  // react/forbid-elements: off (default)
  // react/jsx-child-element-spacing: not available
  // react/jsx-filename-extension: off (default) (covered by typescript)
  // react/jsx-max-depth: off (default)
  // react/jsx-newline: not available
  // react/jsx-no-literals: off (default)
  // react/jsx-no-script-url: off (default)
  // react/jsx-props-no-spreading: off (default)
  // react/no-namespace: off (default)
  // react/no-redundant-should-component-update: off (default)
  // react/no-set-state: off (default)
  // react/no-string-refs: warn (default)
  // react/no-unknown-property: off (default) (covered by typescript)
  // react/prefer-es6-class: off (default)
  // react/prefer-function-component: off (default)
  // react/react-in-jsx-scope: off (default)
  // react/require-render-return: off (default)
  // react/state-in-constructor: off (default)
  // react/style-prop-object: off (default) (covered by typescript)

  /** React-perf rules */
  "react-perf/jsx-no-jsx-as-prop": "warn",
  "react-perf/jsx-no-new-array-as-prop": "warn",
  // react-perf/jsx-no-new-function-as-prop: off (default); hard to maintain
  "react-perf/jsx-no-new-object-as-prop": "warn",
};

export const vitestRules: DummyRuleMap = {
  /** Vitest rules */
  "vitest/consistent-each-for": [
    "warn",
    { describe: "each", it: "each", suite: "each", test: "each" },
  ],
  // vitest/consistent-test-filename: off (default); buggy?
  "vitest/consistent-test-it": "warn",
  "vitest/consistent-vitest-vi": "warn",
  // vitest/expect-expect: warn (default)
  // vitest/hoisted-apis-on-top: warn (default)
  // vitest/max-expects: off (default)
  // vitest/max-nested-describe: off (default)
  "vitest/no-alias-methods": "warn",
  // vitest/no-commented-out-tests: off (default)
  // vitest/no-conditional-expect: warn (default)
  "vitest/no-conditional-in-test": "warn",
  // vitest/no-conditional-tests: warn (default)
  // vitest/no-disabled-tests: warn (default)
  "vitest/no-duplicate-hooks": "warn",
  // vitest/no-focused-tests: warn (default)
  // vitest/no-hooks: off (default)
  "vitest/no-identical-title": "warn",
  "vitest/no-import-node-test": "warn",
  // vitest/no-importing-vitest-globals: off (default)
  "vitest/no-interpolation-in-snapshots": "warn",
  // vitest/no-large-snapshots: off (default)
  "vitest/no-mocks-import": "warn",
  // vitest/no-restricted-matchers: off (default)
  // vitest/no-restricted-vi-methods: off (default)
  // vitest/no-standalone-expect: warn (default)
  // vitest/no-test-prefixes: off (default); covered by typescript
  "vitest/no-test-return-statement": "warn",
  "vitest/no-unneeded-async-expect-function": "warn",
  "vitest/padding-around-after-all-blocks": "warn",
  "vitest/padding-around-test-blocks": "warn",
  "vitest/prefer-called-exactly-once-with": "warn",
  "vitest/prefer-called-once": "warn",
  // vitest/prefer-called-times: off (default)
  "vitest/prefer-called-with": "warn",
  "vitest/prefer-comparison-matcher": "warn",
  "vitest/prefer-describe-function-title": "warn",
  "vitest/prefer-each": "warn",
  "vitest/prefer-equality-matcher": "warn",
  "vitest/prefer-expect-assertions": ["warn", { onlyFunctionsWithAsyncKeyword: true }],
  "vitest/prefer-expect-resolves": "warn",
  "vitest/prefer-expect-type-of": "warn",
  "vitest/prefer-hooks-in-order": "warn",
  "vitest/prefer-hooks-on-top": "warn",
  "vitest/prefer-import-in-mock": "warn",
  // vitest/prefer-importing-vitest-globals: off (default); covered by typescript
  // vitest/prefer-lowercase-title: off (default)
  // vitest/prefer-mock-promise-shorthand: off (default); jest-only
  // vitest/prefer-mock-return-shorthand: off (default); jest-only
  // vitest/prefer-snapshot-hint: warn (default)
  "vitest/prefer-spy-on": "warn",
  "vitest/prefer-strict-boolean-matchers": "warn",
  "vitest/prefer-strict-equal": "warn",
  "vitest/prefer-to-be": "warn",
  // vitest/prefer-to-be-falsy: off (default)
  // vitest/prefer-to-be-object: off (default); jest-only?
  // vitest/prefer-to-be-truthy: off (default)
  "vitest/prefer-to-contain": "warn",
  // vitest/prefer-to-have-been-called-times: off (default); jest-only?
  "vitest/prefer-to-have-length": "warn",
  "vitest/prefer-todo": "warn",
  // vitest/require-awaited-expect-poll: warn (default)
  "vitest/require-hook": "warn",
  // vitest/require-local-test-context-for-concurrent-snapshots: warn (default)
  // vitest/require-mock-type-parameters: warn (default)
  // vitest/require-test-timeout: off (default)
  // vitest/require-to-throw-message: warn (default)
  "vitest/require-top-level-describe": "warn",
  // vitest/valid-describe-callback: warn (default)
  // vitest/valid-expect: warn (default)
  // vitest/valid-expect-in-promise: warn (default)
  "vitest/valid-title": ["warn", { ignoreTypeOfDescribeName: true }],
  // vitest/warn-todo: warn (default)
};

// oxlint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  ignorePatterns: ["dist"],
  rules: allRules,
  overrides: [
    { files: ["**/*.ts"], rules: nodeRules },
    { files: ["**/*.tsx"], rules: jsxRules },
    { files: ["**/*.test.ts", "**/*.test.tsx"], rules: vitestRules },
  ],
  options: {
    typeAware: true,
    typeCheck: true,
    reportUnusedDisableDirectives: "warn",
  },
  plugins: [
    "eslint",
    "import",
    "jsx-a11y",
    ...(isPackageInstalled("next") ? (["nextjs"] satisfies LintPlugins) : []),
    "node",
    "oxc",
    "promise",
    ...(isPackageInstalled("react") ? (["react", "react-perf"] satisfies LintPlugins) : []),
    "typescript",
    "unicorn",
    ...(isPackageInstalled("vitest") ? (["vitest"] satisfies LintPlugins) : []),
  ],
  settings: {
    react: { version: "19.2" },
  },
});

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
  // eslint/accessor-pairs: off
  "eslint/array-callback-return": ["warn", { checkForEach: true }],
  "eslint/arrow-body-style": "warn",
  "eslint/block-scoped-var": "warn",
  // eslint/capitalized-comments: off
  "eslint/class-methods-use-this": "warn",
  // eslint/complexity: off
  "eslint/constructor-super": "off", // (covered by typescript)
  // eslint/consistent-this ("warn"): not available (https://github.com/oxc-project/oxc/pull/22357)
  "eslint/curly": "warn",
  "eslint/default-case": "warn",
  "eslint/default-case-last": "warn",
  "eslint/default-param-last": "warn",
  // eslint:dot-notation: off (prefer typescript/dot-notation)
  "eslint/eqeqeq": "warn",
  // eslint/for-direction: on by default
  "eslint/func-name-matching": "warn",
  "eslint/func-names": "warn",
  "eslint/func-style": ["warn", "declaration"],
  // eslint/getter-return: on by default
  "eslint/grouped-accessor-pairs": ["warn", "setBeforeGet"],
  "eslint/guard-for-in": "warn",
  // eslint/id-denylist: off
  "eslint/id-length": [
    "warn",
    {
      exceptions: [
        "_",
        // Basic
        "a",
        "b",
        "c",
        "k",
        "n",
        "v",
        "x",
        "y",
        "z",
        // Looping
        "i",
        "j",
        "k",
        // Generics
        "T", // Type
        "K", // Key
        "V", // Value
        "R", // Return
      ],
    },
  ],
  "eslint/id-match": [
    "warn",
    `^_*(?:[A-Z_]*|[a-zA-Z]+)$`,
    { classFields: true, ignoreDestructuring: true },
  ],
  // eslint/init-declarations: off
  "eslint/logical-assignment-operators": ["warn", "always", { enforceForIfStatements: true }],
  "eslint/max-classes-per-file": "warn",
  // eslint/max-depth: off
  // eslint/max-lines: off
  // eslint/max-lines-per-function: off
  // eslint/max-nested-callbacks: off
  // eslint/max-params: off
  // eslint/max-statements: off
  "eslint/new-cap": "error",
  "eslint/no-alert": "warn",
  "eslint/no-array-constructor": "warn",
  // eslint/no-async-promise-executor: on by default
  "eslint/no-await-in-loop": "warn",
  "eslint/no-bitwise": ["warn", {}],
  // eslint/no-caller: on by default
  "eslint/no-case-declarations": "error",
  "eslint/no-class-assign": "off", // covered by typescript
  // eslint/no-compare-neg-zero: on by default
  // eslint/no-cond-assign: on by default
  "eslint/no-console": "warn",
  // eslint/no-const-assign: off (covered by typescript)
  "eslint/no-const-assign": "off",
  // eslint/no-constant-binary-expression: on by default
  // eslint/no-constant-condition: on by default
  "eslint/no-constructor-return": "warn",
  // eslint/no-continue: off
  // eslint/no-control-regex: on by default
  // eslint/no-debugger: on by default
  // eslint/no-delete-var: on by default
  "eslint/no-div-regex": "warn",
  // eslint/no-dupe-class-members: on by default
  // eslint/no-dupe-else-if: on by default
  "eslint/no-dupe-keys": "off", // covered by typescript
  // eslint/no-duplicate-case: on by default
  "eslint/no-duplicate-imports": ["warn", { allowSeparateTypeImports: true }],
  "eslint/no-else-return": ["warn", { allowElseIf: false }],
  "eslint/no-empty": "warn",
  // eslint/no-empty-character-class: on by default
  "eslint/no-empty-function": "warn",
  // eslint/no-empty-pattern: on by default
  // eslint/no-empty-static-block: on by default
  "eslint/no-eq-null": "warn",
  // eslint/no-eval: on by default
  // eslint/no-ex-assign: on by default
  // eslint/no-extend-native: off (covered by typescript)
  "eslint/no-extra-bind": "warn",
  "eslint/no-extra-boolean-cast": ["warn", { enforceForInnerExpressions: true }],
  "eslint/no-extra-label": "warn",
  "eslint/no-fallthrough": "error",
  "eslint/no-func-assign": "off", // covered by typescript
  "eslint/no-global-assign": "off", // covered by typescript
  "eslint/no-implicit-coercion": ["warn", { disallowTemplateShorthand: true }],
  "eslint/no-implicit-globals": "warn",
  "eslint/no-implied-eval": "off", // covered by typescript
  "eslint/no-import-assign": "off", // covered by typescript
  // eslint/no-inline-comments: off
  "eslint/no-inner-declarations": ["warn", "both"],
  // eslint/no-invalid-regexp: on by default
  // eslint/no-irregular-whitespace: on by default
  "eslint/no-iterator": "off", // covered by typescript
  "eslint/no-label-var": "warn",
  "eslint/no-labels": ["warn", { allowLoop: true, allowSwitch: true }],
  "eslint/no-lone-blocks": "warn",
  "eslint/no-lonely-if": "warn",
  "eslint/no-loop-func": "warn",
  // eslint/no-loss-of-precision: on by default
  // eslint/no-magic-numbers: off
  // eslint/no-misleading-character-class: on by default
  "eslint/no-multi-assign": "warn",
  "eslint/no-multi-str": "warn",
  "eslint/no-negated-condition": "off", // covered by unicorn/no-negated-condition
  // eslint/no-nested-ternary: off
  "eslint/no-new": "warn",
  "eslint/no-new-func": "warn",
  "eslint/no-new-native-nonconstructor": "off", // covered by typescript
  "eslint/no-new-wrappers": "warn",
  // eslint/no-nonoctal-decimal-escape: on by default
  "eslint/no-obj-calls": "off", // covered by typescript
  "eslint/no-object-constructor": "warn",
  "eslint/no-param-reassign": ["warn", { props: true }],
  // eslint/no-plusplus: off
  "eslint/no-promise-executor-return": ["warn", { allowVoid: true }],
  // eslint/no-proto: off (covered by typescript)
  // eslint/no-prototype-builtins: off
  "eslint/no-redeclare": "error", // buggy?
  "eslint/no-regex-spaces": "warn",
  "eslint/no-restricted-exports": "off",
  // eslint/no-restricted-globals: off/needless ("event" is deprecated)
  "eslint/no-restricted-imports": ["warn", { patterns: ["./*", "../*"] }],
  // eslint/no-restricted-properties: off
  "eslint/no-return-assign": ["error", "always"],
  "eslint/no-script-url": "warn",
  // eslint/no-self-assign: on by default
  "eslint/no-self-compare": "error",
  "eslint/no-sequences": "error",
  // eslint/no-setter-return: on by default
  "eslint/no-shadow": ["warn", { builtinGlobals: true }],
  // eslint/no-shadow-restricted-names: on by default
  // eslint/no-sparse-arrays: on by default
  "eslint/no-template-curly-in-string": "warn",
  // eslint/no-ternary: off
  "eslint/no-this-before-super": "off", // covered by typescript
  // eslint/no-throw-literal: off (deprecated; use typescript/no-throw-literal)
  // eslint/no-unassigned-vars: on by default
  // eslint/no-undef: off (covered by typescript)
  // eslint/no-undefined: off
  "eslint/no-underscore-dangle": ["warn", { allow: ["_id"] }],
  // eslint/no-unexpected-multiline: off/needless?
  "eslint/no-unmodified-loop-condition": "error",
  "eslint/no-unneeded-ternary": "off", // covered by unicorn/prefer-logical-operator-over-ternary
  "eslint/no-unreachable": "off", // covered by typescript
  "eslint/no-unreachable-loop": "error",
  // eslint/no-unsafe-finally: on by default
  "eslint/no-unsafe-negation": ["warn", { enforceForOrderingRelations: true }],
  "eslint/no-unsafe-optional-chaining": ["warn", { disallowArithmeticOperators: true }],
  "eslint/no-unused-expressions": [
    "warn",
    { enforceForJSX: true }, // buggy for JSX?
  ],
  // eslint/no-unused-labels: on by default
  // eslint/no-unused-private-class-members: on by default
  // eslint/no-unused-vars: on by default
  "eslint/no-use-before-define": "warn",
  "eslint/no-useless-assignment": "warn",
  // eslint/no-useless-backreference: on by default
  "eslint/no-useless-call": "warn",
  // eslint/no-useless-catch: on by default
  "eslint/no-useless-computed-key": "warn",
  "eslint/no-useless-concat": "warn",
  "eslint/no-useless-constructor": "warn",
  // eslint/no-useless-escape: on by default
  // eslint/no-useless-rename: on by default
  "eslint/no-useless-return": "warn",
  "eslint/no-var": "warn",
  "eslint/no-void": ["warn", { allowAsStatement: true }],
  "eslint/no-warning-comments": ["warn", { decoration: ["*"], terms: ["todo", "@todo"] }],
  // eslint/no-with: on by default
  "eslint/object-shorthand": ["warn", "always", { avoidQuotes: true }],
  "eslint/one-var": ["warn", "never"],
  "eslint/operator-assignment": "warn",
  "eslint/prefer-arrow-callback": "warn",
  "eslint/prefer-const": "warn",
  // eslint/prefer-destructuring: off
  "eslint/prefer-exponentiation-operator": "warn",
  "eslint/prefer-named-capture-group": "warn",
  "eslint/prefer-numeric-literals": "warn",
  "eslint/prefer-object-has-own": "warn",
  "eslint/prefer-object-spread": "warn",
  // eslint/prefer-promise-reject-errors: off (prefer typescript/prefer-promise-reject-errors)
  "eslint/prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
  "eslint/prefer-rest-params": "warn",
  "eslint/prefer-spread": "warn",
  "eslint/prefer-template": "warn",
  "eslint/preserve-caught-error": "warn",
  "eslint/radix": "error",
  // eslint/require-await: off (prefer typescript/require-await)
  "eslint/require-unicode-regexp": ["warn", { requireFlag: "v" }],
  // eslint/require-yield: on by default
  // eslint/require-atomic-updates: not available (no PR)
  "eslint/sort-imports": "off", // covered by oxfmt
  // eslint/sort-keys: off
  // eslint/sort-vars: off
  "eslint/symbol-description": "warn",
  "eslint/unicode-bom": "warn",
  "eslint/use-isnan": ["warn", { enforceForIndexOf: true }],
  "eslint/valid-typeof": "off", // covered by typescript
  // eslint/vars-on-top: off
  "eslint/yoda": "warn",

  /** Import rules */
  // import/consistent-type-specifier-style: off
  // import/default: off (covered by typescript)
  "import/export": "warn",
  // import/exports-last: off
  // import/extensions: off (covered by typescript)
  "import/first": "warn",
  // import/group-exports: off
  // import/max-dependencies: off
  // import/named: off (covered by typescript)
  // import/namespace: off (covered by typescript)
  "import/newline-after-import": "warn",
  // import/no-absolute-path: off (covered by typescript)
  // import/no-amd: off/needless
  "import/no-anonymous-default-export": ["warn", { allowCallExpression: false }],
  // import/no-commonjs: off/needless
  "import/no-cycle": "warn",
  // import/no-default-export: off (covered by eslint/no-restricted-exports)
  // import/no-duplicates: off (covered by eslint/no-duplicate-imports)
  // import/no-dynamic-require: off/needless
  "import/no-empty-named-blocks": "warn",
  // import/no-extraneous-dependencies: not available
  // import/no-import-module-exports: not available
  "import/no-mutable-exports": "warn",
  // import/no-named-as-default: off/needless
  // import/no-named-as-default-member: off/needless
  // import/no-named-default: off
  // import/no-named-export: off
  "import/no-namespace": ["warn", { ignore: ["*.json"] }],
  // import/no-nodejs-modules: off
  // import/no-relative-parent-imports: off (covered by eslint/no-restricted-exports)
  "import/no-self-import": "warn",
  "import/no-unassigned-import": ["warn", { allow: ["**/*.{css,scss,json}"] }],
  // import/no-webpack-loader-syntax: off/needless
  // import/prefer-default-export: off
  "import/unambiguous": "off", // confuses

  /** Oxc rules */
  "oxc/approx-constant": "warn",
  "oxc/bad-array-method-on-arguments": "off", // covered by typescript
  // oxc/bad-bitwise-operator: off (covered by typescript)
  "oxc/bad-char-at-comparison": "error",
  "oxc/bad-comparison-sequence": "off", // needless or covered by typescript
  // oxc/bad-match-all-arg: on by default
  // oxc/bad-min-max-func: on by default
  "oxc/bad-object-literal-comparison": "off", // covered by typescript
  // oxc/bad-replace-all-arg: on by default
  "oxc/branches-sharing-code": "warn",
  "oxc/const-comparisons": "off", // covered by typescript
  // oxc/double-comparisons: on by default
  // oxc/erasing-op: on by default
  "oxc/misrefactored-assign-op": "warn",
  "oxc/missing-throw": "error",
  "oxc/no-accumulating-spread": "warn",
  // oxc/no-async-await: off
  // oxc/no-async-endpoint-handlers: off
  // oxc/no-barrel-file: off
  "oxc/no-const-enum": "warn",
  "oxc/no-map-spread": "warn",
  // oxc/no-optional-chaining: off
  // oxc/no-rest-spread-properties: off
  "oxc/no-this-in-exported-function": "error",
  // oxc/number-arg-out-of-range: on by default
  // oxc/only-used-in-recursion: on by default
  // oxc/uninvoked-array-callback: on by default

  /** Promise rules */
  "promise/always-return": ["warn", { ignoreLastCallback: true }],
  "promise/avoid-new": "warn",
  "promise/catch-or-return": "warn",
  "promise/no-callback-in-promise": "warn",
  "promise/no-multiple-resolved": "error",
  "promise/no-nesting": "warn",
  "promise/no-new-statics": "error", // also covered by typescript
  "promise/no-promise-in-callback": "warn",
  "promise/no-return-in-finally": "warn",
  "promise/no-return-wrap": "warn",
  "promise/param-names": "warn",
  "promise/prefer-await-to-callbacks": "off",
  "promise/prefer-await-to-then": "warn",
  "promise/prefer-catch": "warn",
  // promise/spec-only: off (covered by typescript)
  // promise/valid-params: off (covered by typescript)

  /** Typescript rules */
  // typescript/adjacent-overload-signatures: off
  "typescript/array-type": ["warn", { default: "array-simple" }],
  "typescript/await-thenable": "warn",
  "typescript/ban-ts-comment": [
    "warn",
    {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": "allow-with-description",
      "ts-nocheck": "allow-with-description",
      "ts-check": "allow-with-description",
    },
  ],
  // typescript/ban-tslint-comment: off
  "typescript/class-literal-property-style": "warn",
  "typescript/consistent-generic-constructors": "warn",
  "typescript/consistent-indexed-object-style": "warn",
  "typescript/consistent-return": "off",
  "typescript/consistent-type-assertions": "warn",
  "typescript/consistent-type-definitions": "warn",
  "typescript/consistent-type-exports": "warn",
  "typescript/consistent-type-imports": "warn",
  "typescript/dot-notation": ["warn", { allowPattern: "_" }],
  // typescript/explicit-function-return-type: off
  "typescript/explicit-member-accessibility": "warn",
  // typescript/explicit-module-boundary-types: off
  "typescript/method-signature-style": ["warn", "method"],
  "typescript/no-array-delete": "warn",
  // typescript/no-base-to-string: on by default
  "typescript/no-confusing-non-null-assertion": "warn",
  "typescript/no-confusing-void-expression": "warn",
  "typescript/no-deprecated": "warn",
  // typescript/no-duplicate-enum-values: on by default
  // typescript/no-duplicate-type-constituents: on by default
  "typescript/no-dynamic-delete": "warn",
  "typescript/no-empty-interface": "warn",
  "typescript/no-empty-object-type": "warn",
  "typescript/no-explicit-any": "warn",
  // typescript/no-extra-non-null-assertion: off
  "typescript/no-extraneous-class": "warn",
  // typescript/no-floating-promises: on by default
  "typescript/no-for-in-array": "warn",
  // typescript/no-implied-eval: on by default
  "typescript/no-import-type-side-effects": "warn",
  "typescript/no-inferrable-types": "warn",
  "typescript/no-invalid-void-type": ["warn", { allowAsThisParameter: true }],
  "typescript/no-meaningless-void-operator": ["warn", { checkNever: true }],
  // typescript/no-misused-new: on by default
  // typescript/no-misused-promises: off (covered by typescript)
  "typescript/no-misused-spread": "off", // covered by typescript
  "typescript/no-mixed-enums": "warn",
  // typescript/no-namespace: off
  "typescript/no-non-null-asserted-nullish-coalescing": "warn",
  // typescript/no-non-null-asserted-optional-chain: on by default
  // typescript/no-non-null-assertion: off
  // typescript/no-redundant-type-constituents: off
  // typescript/no-require-imports: off
  // typescript/no-restricted-types: off
  "typescript/no-this-alias": ["warn", { allowedNames: ["self", "that"] }],
  "typescript/no-unnecessary-boolean-literal-compare": "warn",
  "typescript/no-unnecessary-condition": [
    "warn",
    { allowConstantLoopConditions: true, checkTypePredicates: true },
  ],
  // typescript/no-unnecessary-parameter-property-assignment: on by default
  // typescript/no-unnecessary-qualifier: off/needless
  "typescript/no-unnecessary-template-expression": "warn",
  "typescript/no-unnecessary-type-arguments": "warn",
  "typescript/no-unnecessary-type-assertion": "warn",
  // typescript/no-unnecessary-type-constraint: off
  "typescript/no-unnecessary-type-conversion": "warn",
  // typescript/no-unnecessary-type-parameters: off
  "typescript/no-unsafe-argument": "warn",
  "typescript/no-unsafe-assignment": "warn",
  "typescript/no-unsafe-call": "warn",
  // typescript/no-unsafe-declaration-merging: on by default
  // typescript/no-unsafe-enum-comparison: off (covered by typescript)
  "typescript/no-unsafe-function-type": "warn",
  "typescript/no-unsafe-member-access": "warn",
  "typescript/no-unsafe-return": "warn",
  "typescript/no-unsafe-type-assertion": "off", // hard to maintain
  // typescript/no-unsafe-unary-minus: on by default
  // typescript/no-useless-default-assignment: on by default
  // typescript/no-useless-empty-export: on by default
  // typescript/no-wrapper-object-types: on by default
  "typescript/non-nullable-type-assertion-style": "warn",
  "typescript/only-throw-error": "error",
  "typescript/parameter-properties": ["warn", { prefer: "parameter-property" }],
  // typescript/prefer-as-const: on by default
  "typescript/prefer-enum-initializers": "warn",
  "typescript/prefer-find": "warn",
  "typescript/prefer-for-of": "warn",
  "typescript/prefer-function-type": "warn",
  "typescript/prefer-includes": "warn",
  "typescript/prefer-literal-enum-member": "warn",
  "typescript/prefer-namespace-keyword": "off",
  "typescript/prefer-nullish-coalescing": "warn",
  "typescript/prefer-optional-chain": "warn",
  // typescript/prefer-promise-reject-errors: off
  "typescript/prefer-readonly": "warn",
  "typescript/prefer-readonly-parameter-types": "off", // buggy?
  "typescript/prefer-reduce-type-parameter": "warn",
  "typescript/prefer-regexp-exec": "warn",
  "typescript/prefer-return-this-type": "warn",
  "typescript/prefer-string-starts-ends-with": "warn",
  // typescript/prefer-ts-expect-error: off
  "typescript/promise-function-async": "warn",
  "typescript/related-getter-setter-pairs": "warn",
  // typescript/require-array-sort-compare: on by default
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
  // typescript/restrict-template-expressions: on by default
  "typescript/return-await": ["warn", "error-handling-correctness-only"],
  "typescript/strict-boolean-expressions": "warn",
  "typescript/strict-void-return": "warn",
  "typescript/switch-exhaustiveness-check": "warn",
  // triple-slash-reference: on by default
  "typescript/unbound-method": ["warn", { ignoreStatic: true }],
  "typescript/unified-signatures": ["warn", { ignoreDifferentlyNamedParameters: true }],
  // typescript/use-unknown-in-catch-callback-variable: off

  /** Unicorn rules */
  "unicorn/catch-error-name": "warn",
  "unicorn/consistent-assert": "warn",
  "unicorn/consistent-date-clone": "warn",
  "unicorn/consistent-empty-array-spread": "warn",
  "unicorn/consistent-existence-index-check": "warn",
  "unicorn/consistent-function-scoping": "warn",
  "unicorn/consistent-template-literal-escape": "warn",
  "unicorn/custom-error-definition": "warn",
  "unicorn/empty-brace-spaces": "off", // covered by oxfmt
  "unicorn/error-message": "warn",
  "unicorn/escape-case": "warn",
  "unicorn/explicit-length-check": "warn",
  "unicorn/explicit-timer-delay": "warn",
  "unicorn/filename-case": "off",
  "unicorn/import-style": "off",
  "unicorn/max-nested-calls": "off",
  "unicorn/new-for-builtins": "warn",
  "unicorn/no-abusive-eslint-disable": "off",
  "unicorn/no-accessor-recursion": "warn",
  "unicorn/no-anonymous-default-export": "off",
  "unicorn/no-array-callback-reference": "warn",
  "unicorn/no-array-fill-with-reference-type": "warn",
  "unicorn/no-array-for-each": "warn",
  "unicorn/no-array-method-this-argument": "warn",
  "unicorn/no-array-reduce": "warn",
  "unicorn/no-array-reverse": "warn",
  "unicorn/no-array-sort": "warn",
  "unicorn/no-await-expression-member": "warn",
  "unicorn/no-confusing-array-with": "warn",
  "unicorn/no-console-spaces": "warn",
  "unicorn/no-document-cookie": "warn",
  "unicorn/no-empty-file": "warn",
  "unicorn/no-hex-escape": "warn",
  "unicorn/no-immediate-mutation": "warn",
  "unicorn/no-instanceof-array": "warn",
  "unicorn/no-instanceof-builtins": "off",
  "unicorn/no-invalid-fetch-options": "warn",
  "unicorn/no-invalid-remove-event-listener": "warn",
  "unicorn/no-length-as-slice-end": "off", // covered by unicorn/no-unnecessary-slice-end
  "unicorn/no-lonely-if": "warn",
  "unicorn/no-magic-array-flat-depth": "warn",
  "unicorn/no-negated-condition": "warn",
  "unicorn/no-negation-in-equality-check": "off", // covered by typescript
  "unicorn/no-nested-ternary": "off",
  "unicorn/no-new-array": "warn",
  "unicorn/no-new-buffer": "warn", // covered by typescript ("deprecated")
  "unicorn/no-null": "off",
  "unicorn/no-object-as-default-parameter": "warn",
  "unicorn/no-process-exit": "warn",
  "unicorn/no-single-promise-in-promise-methods": "warn",
  "unicorn/no-static-only-class": "off", // covered by typescript/no-extraneous-class
  "unicorn/no-thenable": "off", // covered by typescript
  "unicorn/no-this-assignment": "off", // covered by typescript/no-this-alias
  "unicorn/no-typeof-undefined": "warn",
  "unicorn/no-unnecessary-array-flat-depth": "warn",
  "unicorn/no-unnecessary-array-splice-count": "warn",
  "unicorn/no-unnecessary-await": "off", // covered by typescript/await-thenable
  "unicorn/no-unnecessary-slice-end": "warn",
  "unicorn/no-unreadable-array-destructuring": "warn",
  "unicorn/no-unreadable-iife": "off",
  "unicorn/no-useless-collection-argument": "warn",
  "unicorn/no-useless-error-capture-stack-trace": "warn",
  "unicorn/no-useless-fallback-in-spread": "warn",
  "unicorn/no-useless-iterator-to-array": "warn",
  "unicorn/no-useless-length-check": "warn",
  "unicorn/no-useless-promise-resolve-reject": "warn",
  "unicorn/no-useless-spread": "warn",
  "unicorn/no-useless-switch-case": "off",
  "unicorn/no-useless-undefined": "off",
  "unicorn/no-zero-fractions": "warn",
  "unicorn/number-literal-case": "off", // buggy/covered by oxfmt
  "unicorn/numeric-separators-style": "warn",
  "unicorn/prefer-add-event-listener": "warn",
  "unicorn/prefer-array-find": "warn",
  "unicorn/prefer-array-flat": "warn",
  "unicorn/prefer-array-flat-map": "warn",
  "unicorn/prefer-array-index-of": "warn",
  "unicorn/prefer-array-some": "warn",
  "unicorn/prefer-at": ["warn", { checkAllIndexAccess: true }],
  "unicorn/prefer-bigint-literals": "warn",
  "unicorn/prefer-blob-reading-methods": "off", // needless
  "unicorn/prefer-class-fields": "off", // covered by typescript
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
  "unicorn/prefer-includes": "off", // buggy?/covered by typescript/prefer-includes
  "unicorn/prefer-keyboard-event-key": "warn",
  "unicorn/prefer-logical-operator-over-ternary": "warn",
  "unicorn/prefer-math-min-max": "warn",
  "unicorn/prefer-math-trunc": "warn",
  "unicorn/prefer-modern-dom-apis": "warn",
  "unicorn/prefer-modern-math-apis": "warn",
  "unicorn/prefer-module": "off",
  "unicorn/prefer-native-coercion-functions": "warn",
  "unicorn/prefer-negative-index": "warn",
  "unicorn/prefer-node-protocol": "warn",
  "unicorn/prefer-number-coercion": "warn",
  "unicorn/prefer-number-properties": "warn",
  "unicorn/prefer-object-from-entries": "warn", // can't proof/buggy?
  "unicorn/prefer-optional-catch-binding": "warn",
  "unicorn/prefer-prototype-methods": "warn",
  "unicorn/prefer-query-selector": "warn",
  "unicorn/prefer-reflect-apply": "warn",
  "unicorn/prefer-regexp-test": "warn",
  "unicorn/prefer-response-static-json": "warn",
  "unicorn/prefer-set-has": "warn",
  "unicorn/prefer-set-size": "warn",
  "unicorn/prefer-single-call": "warn",
  "unicorn/prefer-spread": "warn",
  "unicorn/prefer-string-raw": "off",
  "unicorn/prefer-string-replace-all": "warn",
  "unicorn/prefer-string-slice": "warn",
  "unicorn/prefer-string-trim-start-end": "warn",
  "unicorn/prefer-structured-clone": "warn",
  "unicorn/prefer-ternary": "off", // covered by no-else-return
  "unicorn/prefer-top-level-await": "warn",
  "unicorn/prefer-type-error": "warn",
  "unicorn/relative-url-style": "warn",
  "unicorn/require-array-join-separator": "warn",
  "unicorn/require-module-attributes": "off",
  "unicorn/require-module-specifiers": "off", // covered by import/no-empty-named-blocks
  "unicorn/require-number-to-fixed-digits-argument": "warn",
  "unicorn/require-post-message-target-origin": "warn",
  "unicorn/switch-case-braces": "warn",
  "unicorn/switch-case-break-position": "warn",
  "unicorn/text-encoding-identifier-case": ["warn", { withDash: true }],
  "unicorn/throw-new-error": "off", // covered by unicorn/new-for-builtins
};

export const nodeRules: DummyRuleMap = {
  /** Node rules */
  // node/callback-return: off
  // node/exports-style: off
  // node/global-require: off
  // node/handle-callback-err: off
  // node/no-exports-assign: off
  // node/no-mixed-requires: off
  // node/no-new-require: off
  "node/no-path-concat": "warn",
  // node/no-process-env: off
  "node/no-sync": "warn",
  // node/no-top-level-await: off
};

export const jsxRules: DummyRuleMap = {
  /** Jsx-a11y rules */
  "jsx-a11y/alt-text": "warn",
  // jsx-a11y/anchor-ambiguous-text: off
  "jsx-a11y/anchor-has-content": "warn",
  "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["noHref", "invalidHref", "preferButton"] }],
  "jsx-a11y/aria-activedescendant-has-tabindex": "off",
  "jsx-a11y/aria-props": "error",
  "jsx-a11y/aria-proptypes": "off", // covered by react
  "jsx-a11y/aria-role": "error",
  "jsx-a11y/aria-unsupported-elements": "error",
  "jsx-a11y/autocomplete-valid": "error",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/control-has-associated-label": "warn",
  "jsx-a11y/heading-has-content": "error",
  "jsx-a11y/html-has-lang": "warn",
  "jsx-a11y/iframe-has-title": "warn",
  "jsx-a11y/img-redundant-alt": [
    "warn",
    { words: ["image", "imagem", "photo", "foto", "picture", "figura"] },
  ],
  "jsx-a11y/interactive-supports-focus": "warn",
  "jsx-a11y/label-has-associated-control": "off",
  "jsx-a11y/lang": "warn",
  "jsx-a11y/media-has-caption": "warn",
  "jsx-a11y/mouse-events-have-key-events": "off",
  "jsx-a11y/no-access-key": "warn",
  "jsx-a11y/no-aria-hidden-on-focusable": "error",
  "jsx-a11y/no-autofocus": "off",
  "jsx-a11y/no-distracting-elements": "off",
  "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
  "jsx-a11y/no-noninteractive-element-interactions": "warn",
  "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
  "jsx-a11y/no-noninteractive-tabindex": "error",
  "jsx-a11y/no-redundant-roles": "warn",
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/prefer-tag-over-role": "warn",
  "jsx-a11y/role-has-required-aria-props": "error",
  "jsx-a11y/role-supports-aria-props": "error",
  "jsx-a11y/scope": "off", // covered by react
  "jsx-a11y/tabindex-no-positive": "off", // not works for react

  /** Nextjs rules */
  "nextjs/google-font-display": "off", // needless
  "nextjs/google-font-preconnect": "off", // needless
  "nextjs/inline-script-id": "warn",
  "nextjs/next-script-for-ga": "warn",
  "nextjs/no-assign-module-variable": "off", // needless
  "nextjs/no-async-client-component": "error",
  "nextjs/no-before-interactive-script-outside-document": "off", // needless
  "nextjs/no-css-tags": "warn",
  "nextjs/no-document-import-in-page": "off", // needless
  "nextjs/no-duplicate-head": "error",
  "nextjs/no-head-element": "warn",
  "nextjs/no-head-import-in-document": "off", // needless
  "nextjs/no-html-link-for-pages": "warn",
  "nextjs/no-img-element": "warn",
  "nextjs/no-page-custom-font": "off", // needless
  "nextjs/no-script-component-in-head": "warn",
  "nextjs/no-styled-jsx-in-document": "off", // needless
  "nextjs/no-sync-scripts": "off", // needless
  "nextjs/no-title-in-document-head": "off", // needless
  "nextjs/no-typos": "off", // buggy?
  "nextjs/no-unwanted-polyfillio": "off", // needless

  /** React rules */
  "react/button-has-type": "warn",
  "react/checked-requires-onchange-or-readonly": "warn",
  // react/display-name: off
  "react/exhaustive-deps": "warn",
  // react/forbid-component-props: off
  // react/forbid-dom-props: off
  // react/forbid-elements: off
  "react/forward-ref-uses-ref": "off", // deprecated for React 19
  "react/function-component-definition": "warn",
  "react/hook-use-state": "warn",
  "react/iframe-missing-sandbox": "warn",
  "react/jsx-boolean-value": "warn",
  // react/jsx-child-element-spacing: not available
  "react/jsx-curly-brace-presence": "warn",
  // react/jsx-filename-extension: off (covered by typescript)
  "react/jsx-fragments": "warn",
  "react/jsx-handler-names": ["warn", { checkInlineFunction: false, checkLocalVariables: true }],
  "react/jsx-key": "warn",
  // react/jsx-newline: not available
  // react/jsx-max-depth: off
  "react/jsx-no-comment-textnodes": "warn",
  "react/jsx-no-constructed-context-values": "warn",
  "react/jsx-no-duplicate-props": "off",
  // react/jsx-no-literals: off
  // react/jsx-no-script-url: off
  "react/jsx-no-target-blank": "warn",
  "react/jsx-no-undef": "off",
  "react/jsx-no-useless-fragment": "warn",
  "react/jsx-pascal-case": "warn",
  "react/jsx-props-no-spread-multi": "warn",
  // react/jsx-props-no-spreading: off
  "react/no-array-index-key": "warn",
  "react/no-children-prop": "warn",
  "react/no-clone-element": "warn",
  "react/no-danger": "warn",
  "react/no-danger-with-children": "warn",
  "react/no-did-mount-set-state": "off",
  "react/no-did-update-set-state": "off",
  "react/no-direct-mutation-state": "off",
  "react/no-find-dom-node": "off",
  "react/no-is-mounted": "off",
  "react/no-multi-comp": ["warn", { ignoreStateless: true }],
  // react/no-namespace: off
  "react/no-object-type-as-default-prop": "warn",
  "react/no-react-children": "warn",
  // react/no-redundant-should-component-update: off
  "react/no-render-return-value": "off",
  // react/no-set-state: off
  // react/no-string-refs: off
  "react/no-this-in-sfc": "off",
  "react/no-unescaped-entities": "warn",
  // react/no-unknown-property: off (covered by typescript)
  "react/no-unsafe": "off",
  "react/no-unstable-nested-components": "warn",
  "react/no-will-update-set-state": "off",
  "react/only-export-components": ["warn", { allowExportNames: ["metadata"] }],
  // react/prefer-es6-class: off
  // react/prefer-function-component: off
  "react/react-compiler": "off", // buggy?
  // react/react-in-jsx-scope: off
  // react/require-render-return: off
  "react/rules-of-hooks": "warn",
  "react/self-closing-comp": "warn",
  // react/state-in-constructor: off
  // react/style-prop-object: off (covered by typescript)
  "react/void-dom-elements-no-children": "warn",

  /** React-perf rules */
  "react-perf/jsx-no-jsx-as-prop": "warn",
  "react-perf/jsx-no-new-array-as-prop": "warn",
  "react-perf/jsx-no-new-function-as-prop": "off", // hard to maintain
  "react-perf/jsx-no-new-object-as-prop": "warn",
};

export const vitestRules: DummyRuleMap = {
  /** Vitest rules */
  "vitest/consistent-each-for": [
    "warn",
    { describe: "each", it: "each", suite: "each", test: "each" },
  ],
  "vitest/consistent-test-filename": "off", // buggy?
  "vitest/consistent-test-it": "warn",
  "vitest/consistent-vitest-vi": "warn",
  "vitest/expect-expect": "warn",
  "vitest/hoisted-apis-on-top": "warn",
  "vitest/max-expects": "off",
  "vitest/max-nested-describe": "off",
  "vitest/no-alias-methods": "warn",
  "vitest/no-commented-out-tests": "off",
  "vitest/no-conditional-expect": "warn",
  "vitest/no-conditional-in-test": "warn",
  "vitest/no-conditional-tests": "warn",
  "vitest/no-disabled-tests": "warn",
  "vitest/no-duplicate-hooks": "warn",
  "vitest/no-focused-tests": "warn",
  "vitest/no-hooks": "off",
  "vitest/no-identical-title": "warn",
  "vitest/no-import-node-test": "warn",
  "vitest/no-importing-vitest-globals": "off",
  "vitest/no-interpolation-in-snapshots": "warn",
  "vitest/no-large-snapshots": "off",
  "vitest/no-mocks-import": "warn",
  "vitest/no-restricted-matchers": "off",
  "vitest/no-restricted-vi-methods": "off",
  "vitest/no-standalone-expect": "warn",
  "vitest/no-test-prefixes": "off", // covered by typescript
  "vitest/no-test-return-statement": "warn",
  "vitest/no-unneeded-async-expect-function": "warn",
  "vitest/padding-around-after-all-blocks": "warn",
  "vitest/padding-around-test-blocks": "warn",
  "vitest/prefer-called-exactly-once-with": "warn",
  "vitest/prefer-called-once": "warn",
  "vitest/prefer-called-times": "off",
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
  "vitest/prefer-importing-vitest-globals": "off", // covered by typescript
  "vitest/prefer-lowercase-title": "off",
  "vitest/prefer-mock-promise-shorthand": "off", // jest-only
  "vitest/prefer-mock-return-shorthand": "off", // jest-only
  "vitest/prefer-snapshot-hint": "warn",
  "vitest/prefer-spy-on": "warn",
  "vitest/prefer-strict-boolean-matchers": "warn",
  "vitest/prefer-strict-equal": "warn",
  "vitest/prefer-to-be": "warn",
  "vitest/prefer-to-be-falsy": "off",
  "vitest/prefer-to-be-object": "off", // jest-only?
  "vitest/prefer-to-be-truthy": "off",
  "vitest/prefer-to-contain": "warn",
  "vitest/prefer-to-have-been-called-times": "off", // jest-only?
  "vitest/prefer-to-have-length": "warn",
  "vitest/prefer-todo": "warn",
  "vitest/require-awaited-expect-poll": "warn",
  "vitest/require-hook": "warn",
  "vitest/require-local-test-context-for-concurrent-snapshots": "warn",
  "vitest/require-mock-type-parameters": "warn",
  "vitest/require-test-timeout": "off",
  "vitest/require-to-throw-message": "warn",
  "vitest/require-top-level-describe": "warn",
  "vitest/valid-describe-callback": "warn",
  "vitest/valid-expect": "warn",
  "vitest/valid-expect-in-promise": "warn",
  "vitest/valid-title": ["warn", { ignoreTypeOfDescribeName: true }],
  "vitest/warn-todo": "warn",
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

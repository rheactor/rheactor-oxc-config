// oxlint-disable-next-line max-classes-per-file
import assert from "node:assert";
import EventEmitter from "node:events";
import { readFile } from "node:fs/promises";
import { dirname } from "node:path";

function noop() {
  // empty
}

try {
  noop();
  // Rule: unicorn/catch-error-name
  // oxlint-disable-next-line no-unused-vars unicorn/catch-error-name unicorn/prefer-optional-catch-binding
} catch (badName) {
  // empty
}

// Rule: unicorn/consistent-assert
// oxlint-disable-next-line unicorn/consistent-assert
assert(Math.random() === 5);

// Rule: unicorn/consistent-date-clone
// oxlint-disable-next-line unicorn/consistent-date-clone unicorn/prefer-date-now
export const consistentDateClone = new Date(new Date().getTime());

// Rule: unicorn/consistent-empty-array-spread
// oxlint-disable-next-line unicorn/consistent-empty-array-spread
export const consistentEmptyArraySpread = [123, ...(Math.random() ? ["a", "b"] : "")];

const items = [1, 2, 3];

const consistentExistenceIndexCheck = items.indexOf(3);

// Rule: unicorn/consistent-existence-index-check
// oxlint-disable-next-line unicorn/consistent-existence-index-check
if (consistentExistenceIndexCheck < 0) {
  // empty
}

export function consistentFunctionScoping() {
  // Rule: unicorn/consistent-function-scoping
  // oxlint-disable-next-line unicorn/consistent-function-scoping
  function doBar(bar: number) {
    return bar === 123;
  }

  return doBar;
}

// Rule: unicorn/consistent-template-literal-escape
// oxlint-disable-next-line unicorn/consistent-template-literal-escape
export const consistentTemplateLiteralEscape = `Hello, $\{items.length}!`;

export class CustomError extends Error {
  public constructor(message: string) {
    // Rule: unicorn/custom-error-definition
    // oxlint-disable-next-line unicorn/custom-error-definition
    super(message);

    this.message = message;
    this.name = "CustomError";
  }
}

export function errorMessage() {
  // Rule: unicorn/error-message
  // oxlint-disable-next-line unicorn/error-message
  throw new Error();
}

// Rule: unicorn/escape-case
// oxlint-disable-next-line unicorn/escape-case
export const escapeCase = /\u00a9/v;

// Rule: unicorn/explicit-length-check
// oxlint-disable-next-line unicorn/explicit-length-check
if (items.length) {
  // empty
}

// Rule: unicorn/explicit-timer-delay
// oxlint-disable-next-line unicorn/explicit-timer-delay
setTimeout(noop);

// Rule: unicorn/new-for-builtins
// oxlint-disable-next-line unicorn/new-for-builtins no-new-wrappers
export const newForBuiltinsA = new String("hello world");

// oxlint-disable-next-line no-array-constructor unicorn/new-for-builtins
export const newForBuiltinsB = Array(1, 2, 3);

// oxlint-disable-next-line unicorn/new-for-builtins
export const newForBuiltinsC = Date();

export class NoAccessorRecursion {
  public get foo(): number {
    // Rule: unicorn/no-accessor-recursion
    // oxlint-disable-next-line unicorn/no-accessor-recursion
    return this.foo;
  }
}

// Rule: unicorn/no-array-callback-reference
// oxlint-disable-next-line unicorn/no-array-callback-reference
export const noArrayCallbackReference = items.map(String.toString);

// Rule: unicorn/no-array-fill-with-reference-type
// oxlint-disable-next-line unicorn/no-array-fill-with-reference-type
export const noArrayFillWithReferenceType = Array.from({ length: 5 }).fill({});

// Rule: unicorn/no-array-for-each
// oxlint-disable-next-line unicorn/no-array-callback-reference unicorn/no-array-for-each
items.forEach(noop);

// Rule: unicorn/no-array-method-this-argument
// oxlint-disable-next-line unicorn/no-array-method-this-argument
items.map(() => this, this);

function sum(acc: number, value: number) {
  return acc + value;
}

// Rule: unicorn/no-array-reduce
// oxlint-disable-next-line unicorn/no-array-callback-reference unicorn/no-array-reduce
items.reduce(sum, 0);

// Rule: unicorn/no-array-reverse
// oxlint-disable-next-line unicorn/no-array-reverse
export const noArrayReverse = items.reverse();

// Rule: unicorn/no-array-sort
// oxlint-disable-next-line unicorn/no-array-sort
export const noArraySort = items.sort();

export async function noAwaitExpressionMember() {
  // Rule: unicorn/no-await-expression-member
  // oxlint-disable-next-line unicorn/no-await-expression-member unicorn/prefer-at
  return (await Promise.resolve([1, 2]))[1];
}

// Rule: unicorn/no-confusing-array-with
// oxlint-disable-next-line unicorn/no-confusing-array-with
export const noConfusingArrayWith = items.with(-1, 0);

// Rule: unicorn/no-console-spaces
// oxlint-disable-next-line no-console unicorn/no-console-spaces
console.log("abc ", "def");

// Rule: unicorn/no-document-cookie
// oxlint-disable-next-line unicorn/no-document-cookie
document.cookie = "abc";

// Rule: unicorn/no-hex-escape
// oxlint-disable-next-line no-control-regex unicorn/no-hex-escape
export const noHexEscape = /\x1B/v;

const itemsB = [1, 2];

// Rule: unicorn/no-immediate-mutation
// oxlint-disable-next-line unicorn/no-immediate-mutation
itemsB.push(3);

// Rule: unicorn/no-instanceof-array
// oxlint-disable-next-line unicorn/no-instanceof-array
export const noInstanceofArray = items instanceof Array;

export const noInvalidFetchOptions = await fetch("/api/data", {
  method: "GET",
  // Rule: unicorn/no-invalid-fetch-options
  // oxlint-disable-next-line unicorn/no-invalid-fetch-options
  body: "foo=bar",
});

// Rule: unicorn/no-invalid-remove-event-listener
// oxlint-disable-next-line unicorn/no-invalid-remove-event-listener no-empty-function
document.removeEventListener("click", () => {});

if (items instanceof Number) {
  // Rule: unicorn/no-lonely-if
  // oxlint-disable-next-line unicorn/no-lonely-if
  if (items.length > 0) {
    // empty
  }
}

// Rule: unicorn/no-magic-array-flat-depth
// oxlint-disable-next-line unicorn/no-magic-array-flat-depth
items.flat(5);

// Rule: unicorn/no-negated-condition
// oxlint-disable-next-line unicorn/no-negated-condition
if (!items.includes(1)) {
  // oxlint-disable-next-line no-console
  console.log("a");
} else {
  // oxlint-disable-next-line no-console
  console.log("b");
}

// Rule: unicorn/no-new-array
// oxlint-disable-next-line unicorn/no-new-array
export const noNewArray = new Array(1);

// Rule: unicorn/no-new-buffer
// oxlint-disable-next-line unicorn/no-new-buffer
export const noNewBuffer = new Buffer(10);

// Rule: unicorn/no-object-as-default-parameter
// oxlint-disable-next-line unicorn/no-object-as-default-parameter
export function noObjectAsDefaultParameter(_foo = { abc: false }) {
  // empty
}

export function noProcessExit() {
  // Rule: unicorn/no-process-exit
  // oxlint-disable-next-line unicorn/no-process-exit
  process.exit();
}

// Rule: unicorn/no-single-promise-in-promise-methods
// oxlint-disable-next-line unicorn/no-single-promise-in-promise-methods
export const noSinglePromiseInPromiseMethods = Promise.all([Promise.resolve(123)]);

declare const undefinedValue: unknown;

// Rule: unicorn/no-typeof-undefined
// oxlint-disable-next-line unicorn/no-typeof-undefined
export const noTypeofUndefined = typeof undefinedValue === "undefined";

// Rule: unicorn/no-unnecessary-array-flat-depth
// oxlint-disable-next-line unicorn/no-unnecessary-array-flat-depth
items.flat(1);

// Rule: unicorn/no-unnecessary-array-splice-count
// oxlint-disable-next-line unicorn/no-unnecessary-array-splice-count
items.splice(1, items.length);

// Rule: unicorn/no-unnecessary-slice-end
// oxlint-disable-next-line unicorn/no-unnecessary-slice-end
items.slice(1, items.length);

// Rule: unicorn/no-unreadable-array-destructuring
// oxlint-disable-next-line unicorn/no-unreadable-array-destructuring
export const [, , itemThird] = items;

// Rule: unicorn/no-useless-collection-argument
// oxlint-disable-next-line unicorn/no-useless-collection-argument
export const noUselessCollectionArgument = new Set([]);

export class NoUselessErrorCaptureStackTraceError extends Error {
  // oxlint-disable-next-line unicorn/custom-error-definition
  public constructor() {
    super();

    // Rule: unicorn/no-useless-error-capture-stack-trace
    // oxlint-disable-next-line unicorn/no-useless-error-capture-stack-trace
    Error.captureStackTrace(this, NoUselessErrorCaptureStackTraceError);
  }
}

// Rule: unicorn/no-useless-fallback-in-spread
// oxlint-disable-next-line unicorn/no-useless-fallback-in-spread
export const noUselessFallbackInSpread = { ...items, ...(undefinedValue ?? {}) };

// Rule: unicorn/no-useless-iterator-to-array
// oxlint-disable-next-line unicorn/no-useless-iterator-to-array
export const noUselessIteratorToArray = new Set([].entries().toArray());

// Rule: unicorn/no-useless-length-check
// oxlint-disable-next-line unicorn/no-useless-length-check
export const noUselessLengthCheck = items.length === 0 || items.every(Boolean);

export async function noUselessPromiseResolveReject() {
  // Rule: unicorn/no-useless-promise-resolve-reject
  // oxlint-disable-next-line unicorn/no-useless-promise-resolve-reject
  return Promise.resolve(123);
}

// Rule: unicorn/no-useless-spread
// oxlint-disable-next-line unicorn/no-useless-spread
export const noUselessSpread = [...[items]];

// Rule: unicorn/no-zero-fractions
// oxlint-disable-next-line unicorn/no-zero-fractions
export const noZeroFractions = 1.0;

// Rule: unicorn/numeric-separators-style
// oxlint-disable-next-line unicorn/numeric-separators-style
export const numericSeparatorStyle = 1000000000;

// Rule: unicorn/prefer-add-event-listener
// oxlint-disable-next-line unicorn/prefer-add-event-listener
document.onclick = () => {
  // empty
};

// Rule: unicorn/prefer-array-find
// oxlint-disable-next-line no-unused-expressions unicorn/prefer-array-find unicorn/prefer-at
items.filter((item) => item === 0)[0];

// Rule: unicorn/prefer-array-flat
// oxlint-disable-next-line unicorn/prefer-array-flat unicorn/no-useless-spread unicorn/prefer-spread
[].concat(...[]);

// Rule: unicorn/prefer-array-flat-map
// oxlint-disable-next-line unicorn/prefer-array-flat-map
items.map((item) => [item]).flat();

// Rule: unicorn/prefer-array-index-of
// oxlint-disable-next-line unicorn/prefer-array-index-of
items.findIndex((item) => item === 0);

// Rule: unicorn/prefer-array-some
// oxlint-disable-next-line unicorn/prefer-array-some
export const preferArraySome = items.find(Boolean) ? "a" : "b";

// Rule: unicorn/prefer-at
// oxlint-disable-next-line unicorn/prefer-at
export const preferAt = items[items.length - 1];

// Rule: unicorn/prefer-bigint-literals
// oxlint-disable-next-line unicorn/prefer-bigint-literals
export const preferBigintLiterals = BigInt(123);

// Rule: unicorn/prefer-classlist-toggle
// oxlint-disable-next-line unicorn/prefer-classlist-toggle
if (Math.random()) {
  document.body.classList.add("foo");
} else {
  document.body.classList.remove("foo");
}

// Rule: unicorn/prefer-code-point
// oxlint-disable-next-line unicorn/prefer-code-point
export const preferCodePoint = "🦄".charCodeAt(0);

// Rule: unicorn/prefer-date-now
// oxlint-disable-next-line unicorn/prefer-date-now
export const preferDateNow = new Date().getTime();

export function preferDefaultParameters(foo: string) {
  // Rule: unicorn/prefer-default-parameters
  // oxlint-disable-next-line logical-assignment-operators no-param-reassign unicorn/prefer-default-parameters
  foo = foo || "bar";

  return foo;
}

// Rule: unicorn/prefer-dom-node-append
// oxlint-disable-next-line unicorn/prefer-dom-node-append
document.body.appendChild(document.body);

// Rule: unicorn/prefer-dom-node-dataset
// oxlint-disable-next-line unicorn/prefer-dom-node-dataset
document.body.setAttribute("data-unicorn", "🦄");

// Rule: unicorn/prefer-dom-node-remove
// oxlint-disable-next-line unicorn/prefer-dom-node-remove
document.body.removeChild(document.body);

// Rule: unicorn/prefer-dom-node-text-content
// oxlint-disable-next-line unicorn/prefer-dom-node-text-content
export const preferDomNodeTextContent = document.body.innerText;

// Rule: unicorn/prefer-event-target
// oxlint-disable-next-line unicorn/prefer-event-target
export class PreferEventTarget extends EventEmitter {
  // empty
}

// Rule: unicorn/prefer-export-from
// oxlint-disable-next-line unicorn/prefer-export-from
import { named } from "#fixtures/unicorn/support";

export { named };

// Rule: unicorn/prefer-global-this
// oxlint-disable-next-line no-alert unicorn/prefer-global-this
window.alert("hello");

// Rule: unicorn/prefer-import-meta-properties
// oxlint-disable-next-line unicorn/prefer-import-meta-properties
export const preferImportMetaProperties = dirname(import.meta.filename);

globalThis.addEventListener("keydown", (event) => {
  // Rule: unicorn/prefer-keyboard-event-key
  // oxlint-disable-next-line unicorn/prefer-keyboard-event-key
  if (event.keyCode === 8) {
    // empty
  }
});

// Rule: unicorn/prefer-logical-operator-over-ternary
// oxlint-disable-next-line unicorn/prefer-logical-operator-over-ternary
export const preferLogicalOperatorOverTernary = items ? items : 0;

declare const numberValue = 123;

// Rule: unicorn/prefer-math-min-max
// oxlint-disable-next-line unicorn/prefer-math-min-max
export const preferMathMinMax = numberValue > 50 ? 50 : numberValue;

// Rule: unicorn/prefer-math-trunc
// oxlint-disable-next-line unicorn/prefer-math-trunc no-bitwise
export const preferMathTrunc = numberValue | 0;

// Rule: unicorn/prefer-modern-dom-apis
// oxlint-disable-next-line unicorn/prefer-modern-dom-apis
document.body.insertAdjacentText("beforebegin", "🦄");

// Rule: unicorn/prefer-modern-math-apis
// oxlint-disable-next-line unicorn/prefer-modern-math-apis
export const preferModernMathAPIs = Math.log(numberValue) * Math.LOG10E;

// Rule: unicorn/prefer-native-coercion-functions
// oxlint-disable-next-line unicorn/prefer-native-coercion-functions
export function preferNativeCoercionFunctions(str: unknown) {
  return String(str);
}

// Rule: unicorn/prefer-negative-index
// oxlint-disable-next-line unicorn/prefer-negative-index
items.at(items.length - 1);

// Rule: unicorn/prefer-node-protocol
// oxlint-disable-next-line unicorn/prefer-node-protocol
import { existsSync as _existsSync } from "fs";

// Rule: unicorn/prefer-number-coercion
// oxlint-disable-next-line unicorn/prefer-number-coercion unicorn/prefer-number-properties
export const preferNumberCoercion = parseInt("123", 10);

try {
  noop();
  // Rule: unicorn/prefer-optional-catch-binding
  // oxlint-disable-next-line no-unused-vars unicorn/prefer-optional-catch-binding
} catch (_error) {
  // empty
}

// Rule: unicorn/prefer-prototype-methods
// oxlint-disable-next-line unicorn/prefer-prototype-methods
export const preferPrototypeMethods = [].slice.apply(items);

// Rule: unicorn/prefer-query-selector
// oxlint-disable-next-line unicorn/prefer-query-selector
document.getElementById("foo");

// Rule: unicorn/prefer-reflect-apply
// oxlint-disable-next-line no-useless-call unicorn/prefer-reflect-apply
noop.apply(null, []);

// Rule: unicorn/prefer-regexp-test
// oxlint-disable-next-line unicorn/prefer-regexp-test
if (/unicorn/v.exec("abc")) {
  // empty
}

// Rule: unicorn/prefer-response-static-json
// oxlint-disable-next-line unicorn/prefer-response-static-json
export const preferResponseStaticJSON = new Response(JSON.stringify("data"));

// Rule: unicorn/prefer-set-has
// oxlint-disable-next-line unicorn/prefer-set-has
const itemsC = [1, 2, 3];

export function preferSetHas(value: number) {
  return itemsC.includes(value);
}

// Rule: unicorn/prefer-set-size
// oxlint-disable-next-line unicorn/prefer-set-size
export const preferSetSize = [...new Set([1, 2, 3])].length;

items.push(1);
// Rule: unicorn/prefer-single-call
// oxlint-disable-next-line unicorn/prefer-single-call
items.push(2);

// Rule: unicorn/prefer-spread
// oxlint-disable-next-line unicorn/prefer-spread
export const preferSpread = Array.from(new Set([1, 2]));

export const preferStringRaw = "C:\\test";

// Rule: unicorn/prefer-string-replace-all
// oxlint-disable-next-line unicorn/prefer-string-replace-all
export const preferStringReplaceAll = "abc".replace(/a/gv, "b");

// Rule: unicorn/prefer-string-slice
// oxlint-disable-next-line unicorn/prefer-string-slice
"foo".substr(1, 2);

// Rule: unicorn/prefer-string-trim-start-end
// oxlint-disable-next-line unicorn/prefer-string-trim-start-end
"str".trimLeft();

// Rule: unicorn/prefer-structured-clone
// oxlint-disable-next-line unicorn/prefer-structured-clone
export const preferStructuredClone = JSON.parse(JSON.stringify(123));

// Rule: unicorn/prefer-top-level-await
// oxlint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  await Promise.resolve();
})();

if (Array.isArray(123)) {
  // Rule: unicorn/prefer-type-error
  // oxlint-disable-next-line unicorn/prefer-type-error
  throw new Error("Expected foo to be an array");
}

// Rule: unicorn/relative-url-style
// oxlint-disable-next-line unicorn/relative-url-style
export const relativeURLStyle = new URL("./foo", "base");

// Rule: unicorn/require-array-join-separator
// oxlint-disable-next-line unicorn/require-array-join-separator
export const requireArrayJoinSeparator = items.join();

// Rule: unicorn/require-number-to-fixed-digits-argument
// oxlint-disable-next-line unicorn/require-number-to-fixed-digits-argument
export const requireNumberToFixedDigtsArgument = (123).toFixed();

// Rule: unicorn/require-post-message-target-origin
// oxlint-disable-next-line unicorn/require-post-message-target-origin
window.postMessage({});

switch (items.length) {
  // Rule: unicorn/switch-case-braces
  // oxlint-disable-next-line unicorn/switch-case-braces no-empty no-lone-blocks
  case 1: {
  }
  // oxlint-disable-next-line no-fallthrough unicorn/switch-case-braces
  case 2:
    // oxlint-disable-next-line no-console
    console.log("Case 2");
    break;
  // no default
}

switch (items.length) {
  // oxlint-disable-next-line unicorn/switch-case-braces
  case 1:
    // oxlint-disable-next-line no-lone-blocks
    {
      noop();
    }
    // Rule: unicorn/switch-case-break-position
    // oxlint-disable-next-line unicorn/switch-case-break-position
    break;
  // no default
}

// Rule: unicorn/text-encoding-identifier-case
// oxlint-disable-next-line unicorn/text-encoding-identifier-case
export const textEncodingIdentifierCase = readFile("", "utf8");

const entries = [["name", "value"]] as const;

// Rule: unicorn/prefer-object-from-entries
// oxlint-disable-next-line unicorn/no-array-reduce unicorn/prefer-object-from-entries
export const preferObjectFromEntries = entries.reduce(
  (object, [key, value]) => ({ ...object, [key]: value }),
  {},
);

// Rule: unicorn/no-await-in-promise-methods
// oxlint-disable-next-line unicorn/no-single-promise-in-promise-methods unicorn/no-await-in-promise-methods
export const noAwaitInPromiseMethods = Promise.all([await Promise.resolve(123)]);

// Rule: unicorn/prefer-string-starts-ends-with
// oxlint-disable-next-line unicorn/prefer-string-starts-ends-with
export const preferStringStartsEndsWith = /^hello/v.test("hello world");

// Rule: unicorn/prefer-number-properties
// oxlint-disable-next-line unicorn/prefer-number-properties
export const preferNumberProperties = isNaN(123);

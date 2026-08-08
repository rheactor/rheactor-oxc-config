import assert from "node:assert";
import EventEmitter from "node:events";
import { readFile } from "node:fs/promises";
import { dirname } from "node:path";

function noop() {
  // empty
}

try {
  noop();
  // oxlint-disable-next-line no-unused-vars unicorn/catch-error-name unicorn/prefer-optional-catch-binding
} catch (badName) {
  // empty
}

// oxlint-disable-next-line unicorn/consistent-assert
assert(Math.random() === 5);

// oxlint-disable-next-line unicorn/consistent-date-clone unicorn/prefer-date-now
export const consistentDateClone = new Date(new Date().getTime());

// oxlint-disable-next-line unicorn/consistent-empty-array-spread
export const consistentEmptyArraySpread = [123, ...(Math.random() ? ["a", "b"] : "")];

const items = [1, 2, 3];

const consistentExistenceIndexCheck = items.indexOf(3);

// oxlint-disable-next-line unicorn/consistent-existence-index-check
if (consistentExistenceIndexCheck < 0) {
  // empty
}

export function consistentFunctionScoping() {
  // oxlint-disable-next-line unicorn/consistent-function-scoping
  function doBar(bar: number) {
    return bar === 123;
  }

  return doBar;
}

// oxlint-disable-next-line unicorn/consistent-template-literal-escape
export const consistentTemplateLiteralEscape = `Hello, $\{items.length}!`;

export class CustomError extends Error {
  public constructor(message: string) {
    // oxlint-disable-next-line unicorn/custom-error-definition
    super(message);

    this.message = message;
    this.name = "CustomError";
  }
}

export function errorMessage() {
  // oxlint-disable-next-line unicorn/error-message
  throw new Error();
}

// oxlint-disable-next-line unicorn/escape-case
export const escapeCase = /\u00a9/v;

// oxlint-disable-next-line unicorn/explicit-length-check
if (items.length) {
  // empty
}

// oxlint-disable-next-line unicorn/explicit-timer-delay
setTimeout(noop);

// oxlint-disable-next-line unicorn/new-for-builtins no-new-wrappers
export const newForBuiltinsA = new String("hello world");

// oxlint-disable-next-line no-array-constructor unicorn/new-for-builtins
export const newForBuiltinsB = Array(1, 2, 3);

// oxlint-disable-next-line unicorn/new-for-builtins
export const newForBuiltinsC = Date();

// oxlint-disable-next-line max-classes-per-file
export class NoAccessorRecursion {
  public get foo(): number {
    // oxlint-disable-next-line unicorn/no-accessor-recursion
    return this.foo;
  }
}

// oxlint-disable-next-line unicorn/no-array-callback-reference
export const noArrayCallbackReference = items.map(String.toString);

// oxlint-disable-next-line unicorn/no-array-fill-with-reference-type
export const noArrayFillWithReferenceType = Array.from({ length: 5 }).fill({});

// oxlint-disable-next-line unicorn/no-array-callback-reference unicorn/no-array-for-each
items.forEach(noop);

// oxlint-disable-next-line unicorn/no-array-method-this-argument
items.map(() => this, this);

function sum(acc: number, value: number) {
  return acc + value;
}

// oxlint-disable-next-line unicorn/no-array-callback-reference unicorn/no-array-reduce
items.reduce(sum, 0);

// oxlint-disable-next-line unicorn/no-array-reverse
export const noArrayReverse = items.reverse();

// oxlint-disable-next-line unicorn/no-array-sort
export const noArraySort = items.sort();

export async function noAwaitExpressionMember() {
  // oxlint-disable-next-line unicorn/no-await-expression-member unicorn/prefer-at
  return (await Promise.resolve([1, 2]))[1];
}

// oxlint-disable-next-line unicorn/no-confusing-array-with
export const noConfusingArrayWith = items.with(-1, 0);

// oxlint-disable-next-line no-console unicorn/no-console-spaces
console.log("abc ", "def");

// oxlint-disable-next-line unicorn/no-document-cookie
document.cookie = "abc";

// oxlint-disable-next-line no-control-regex unicorn/no-hex-escape
export const noHexEscape = /\x1B/v;

const itemsB = [1, 2];

// oxlint-disable-next-line unicorn/no-immediate-mutation
itemsB.push(3);

// oxlint-disable-next-line unicorn/no-instanceof-array
export const noInstanceofArray = items instanceof Array;

export const noInvalidFetchOptions = await fetch("/api/data", {
  method: "GET",
  // oxlint-disable-next-line unicorn/no-invalid-fetch-options
  body: "foo=bar",
});

// oxlint-disable-next-line unicorn/no-invalid-remove-event-listener no-empty-function
document.removeEventListener("click", () => {});

if (items instanceof Number) {
  // oxlint-disable-next-line unicorn/no-lonely-if
  if (items.length > 0) {
    // empty
  }
}

// oxlint-disable-next-line unicorn/no-magic-array-flat-depth
items.flat(5);

// oxlint-disable-next-line unicorn/no-negated-condition
if (!items.includes(1)) {
  // oxlint-disable-next-line no-console
  console.log("a");
} else {
  // oxlint-disable-next-line no-console
  console.log("b");
}

// oxlint-disable-next-line unicorn/no-new-array
export const noNewArray = new Array(1);

// oxlint-disable-next-line unicorn/no-new-buffer
export const noNewBuffer = new Buffer(10);

// oxlint-disable-next-line unicorn/no-object-as-default-parameter
export function noObjectAsDefaultParameter(_foo = { abc: false }) {
  // empty
}

export function noProcessExit() {
  // oxlint-disable-next-line unicorn/no-process-exit
  process.exit();
}

// oxlint-disable-next-line unicorn/no-single-promise-in-promise-methods
export const noSinglePromiseInPromiseMethods = Promise.all([Promise.resolve(123)]);

declare const undefinedValue: unknown;

// oxlint-disable-next-line unicorn/no-typeof-undefined
export const noTypeofUndefined = typeof undefinedValue === "undefined";

// oxlint-disable-next-line unicorn/no-unnecessary-array-flat-depth
items.flat(1);

// oxlint-disable-next-line unicorn/no-unnecessary-array-splice-count
items.splice(1, items.length);

// oxlint-disable-next-line unicorn/no-unnecessary-slice-end
items.slice(1, items.length);

// oxlint-disable-next-line unicorn/no-unreadable-array-destructuring
export const [, , itemThird] = items;

// oxlint-disable-next-line unicorn/no-useless-collection-argument
export const noUselessCollectionArgument = new Set([]);

export class NoUselessErrorCaptureStackTraceError extends Error {
  // oxlint-disable-next-line unicorn/custom-error-definition
  public constructor() {
    super();

    // oxlint-disable-next-line unicorn/no-useless-error-capture-stack-trace
    Error.captureStackTrace(this, NoUselessErrorCaptureStackTraceError);
  }
}

// oxlint-disable-next-line unicorn/no-useless-fallback-in-spread
export const noUselessFallbackInSpread = { ...items, ...(undefinedValue ?? {}) };

// oxlint-disable-next-line unicorn/no-useless-iterator-to-array
export const noUselessIteratorToArray = new Set([].entries().toArray());

// oxlint-disable-next-line unicorn/no-useless-length-check
export const noUselessLengthCheck = items.length === 0 || items.every(Boolean);

export async function noUselessPromiseResolveReject() {
  // oxlint-disable-next-line unicorn/no-useless-promise-resolve-reject
  return Promise.resolve(123);
}

// oxlint-disable-next-line unicorn/no-useless-spread
export const noUselessSpread = [...[items]];

// oxlint-disable-next-line unicorn/no-zero-fractions
export const noZeroFractions = 1.0;

// oxlint-disable-next-line unicorn/numeric-separators-style
export const numericSeparatorStyle = 1000000000;

// oxlint-disable-next-line unicorn/prefer-add-event-listener
document.onclick = () => {
  // empty
};

// oxlint-disable-next-line no-unused-expressions unicorn/prefer-array-find unicorn/prefer-at
items.filter((item) => item === 0)[0];

// oxlint-disable-next-line unicorn/prefer-array-flat unicorn/no-useless-spread unicorn/prefer-spread
[].concat(...[]);

// oxlint-disable-next-line unicorn/prefer-array-flat-map
items.map((item) => [item]).flat();

// oxlint-disable-next-line unicorn/prefer-array-index-of
items.findIndex((item) => item === 0);

// oxlint-disable-next-line unicorn/prefer-array-some
export const preferArraySome = items.find(Boolean) ? "a" : "b";

// oxlint-disable-next-line unicorn/prefer-at
export const preferAt = items[items.length - 1];

// oxlint-disable-next-line unicorn/prefer-bigint-literals
export const preferBigintLiterals = BigInt(123);

// oxlint-disable-next-line unicorn/prefer-classlist-toggle
if (Math.random()) {
  document.body.classList.add("foo");
} else {
  document.body.classList.remove("foo");
}

// oxlint-disable-next-line unicorn/prefer-code-point
export const preferCodePoint = "🦄".charCodeAt(0);

// oxlint-disable-next-line unicorn/prefer-date-now
export const preferDateNow = new Date().getTime();

export function preferDefaultParameters(foo: string) {
  // oxlint-disable-next-line logical-assignment-operators no-param-reassign unicorn/prefer-default-parameters
  foo = foo || "bar";

  return foo;
}

// oxlint-disable-next-line unicorn/prefer-dom-node-append
document.body.appendChild(document.body);

// oxlint-disable-next-line unicorn/prefer-dom-node-dataset
document.body.setAttribute("data-unicorn", "🦄");

// oxlint-disable-next-line unicorn/prefer-dom-node-remove
document.body.removeChild(document.body);

// oxlint-disable-next-line unicorn/prefer-dom-node-text-content
export const preferDomNodeTextContent = document.body.innerText;

// oxlint-disable-next-line unicorn/prefer-event-target
export class PreferEventTarget extends EventEmitter {
  // empty
}

// oxlint-disable-next-line unicorn/prefer-export-from
import { named } from "#fixtures/unicorn/support";

export { named };

// oxlint-disable-next-line no-alert unicorn/prefer-global-this
window.alert("hello");

// oxlint-disable-next-line unicorn/prefer-import-meta-properties
export const preferImportMetaProperties = dirname(import.meta.filename);

globalThis.addEventListener("keydown", (event) => {
  // oxlint-disable-next-line unicorn/prefer-keyboard-event-key
  if (event.keyCode === 8) {
    // empty
  }
});

// oxlint-disable-next-line unicorn/prefer-logical-operator-over-ternary
export const preferLogicalOperatorOverTernary = items ? items : 0;

declare const numberValue = 123;

// oxlint-disable-next-line unicorn/prefer-math-min-max
export const preferMathMinMax = numberValue > 50 ? 50 : numberValue;

// oxlint-disable-next-line unicorn/prefer-math-trunc no-bitwise
export const preferMathTrunc = numberValue | 0;

// oxlint-disable-next-line unicorn/prefer-modern-dom-apis
document.body.insertAdjacentText("beforebegin", "🦄");

// oxlint-disable-next-line unicorn/prefer-modern-math-apis
export const preferModernMathAPIs = Math.log(numberValue) * Math.LOG10E;

// oxlint-disable-next-line unicorn/prefer-native-coercion-functions
export function preferNativeCoercionFunctions(str: unknown) {
  return String(str);
}

// oxlint-disable-next-line unicorn/prefer-negative-index
items.at(items.length - 1);

// oxlint-disable-next-line unicorn/prefer-node-protocol
import { existsSync as _existsSync } from "fs";

// oxlint-disable-next-line unicorn/prefer-number-coercion unicorn/prefer-number-properties
export const preferNumberCoercion = parseInt("123", 10);

try {
  noop();
  // oxlint-disable-next-line no-unused-vars unicorn/prefer-optional-catch-binding
} catch (_error) {
  // empty
}

// oxlint-disable-next-line unicorn/prefer-prototype-methods
export const preferPrototypeMethods = [].slice.apply(items);

// oxlint-disable-next-line unicorn/prefer-query-selector
document.getElementById("foo");

// oxlint-disable-next-line no-useless-call unicorn/prefer-reflect-apply
noop.apply(null, []);

// oxlint-disable-next-line unicorn/prefer-regexp-test
if (/unicorn/v.exec("abc")) {
  // empty
}

// oxlint-disable-next-line unicorn/prefer-response-static-json
export const preferResponseStaticJSON = new Response(JSON.stringify("data"));

// oxlint-disable-next-line unicorn/prefer-set-has
const itemsC = [1, 2, 3];

export function preferSetHas(value: number) {
  return itemsC.includes(value);
}

// oxlint-disable-next-line unicorn/prefer-set-size
export const preferSetSize = [...new Set([1, 2, 3])].length;

items.push(1);
// oxlint-disable-next-line unicorn/prefer-single-call
items.push(2);

// oxlint-disable-next-line unicorn/prefer-spread
export const preferSpread = Array.from(new Set([1, 2]));

export const preferStringRaw = "C:\\test";

// oxlint-disable-next-line unicorn/prefer-string-replace-all
export const preferStringReplaceAll = "abc".replace(/a/gv, "b");

// oxlint-disable-next-line unicorn/prefer-string-slice
"foo".substr(1, 2);

// oxlint-disable-next-line unicorn/prefer-string-trim-start-end
"str".trimLeft();

// oxlint-disable-next-line unicorn/prefer-structured-clone
export const preferStructuredClone = JSON.parse(JSON.stringify(123));

// oxlint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  await Promise.resolve();
})();

if (Array.isArray(123)) {
  // oxlint-disable-next-line unicorn/prefer-type-error
  throw new Error("Expected foo to be an array");
}

// oxlint-disable-next-line unicorn/relative-url-style
export const relativeURLStyle = new URL("./foo", "base");

// oxlint-disable-next-line unicorn/require-array-join-separator
export const requireArrayJoinSeparator = items.join();

// oxlint-disable-next-line unicorn/require-number-to-fixed-digits-argument
export const requireNumberToFixedDigtsArgument = (123).toFixed();

// oxlint-disable-next-line unicorn/require-post-message-target-origin
window.postMessage({});

switch (items.length) {
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
    // oxlint-disable-next-line unicorn/switch-case-break-position
    break;
  // no default
}

// oxlint-disable-next-line unicorn/text-encoding-identifier-case
export const textEncodingIdentifierCase = readFile("", "utf8");

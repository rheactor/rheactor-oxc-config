// oxlint-disable-next-line max-classes-per-file
import { readFileSync } from "node:fs";
// oxlint-disable-next-line no-duplicate-imports
import { existsSync } from "node:fs";
import type { Mode } from "node:fs";

// oxlint-disable-next-line no-restricted-imports
import { named } from "./support";

// oxlint-disable-next-line no-console
console.log(named);

// oxlint-disable-next-line no-label-var
const items = [1, 2, 3, 4];

// oxlint-disable-next-line array-callback-return
items.map((item) => {
  // oxlint-disable-next-line no-console
  console.log(item);
});

// oxlint-disable-next-line array-callback-return
items.forEach((item) => item);

// oxlint-disable-next-line arrow-body-style
items.map((item) => {
  return item;
});

// oxfmt-ignore
// oxlint-disable-next-line no-inner-declarations no-lone-blocks no-var
{ var varScoped = true; }

// oxlint-disable-next-line block-scoped-var no-console
console.log(varScoped);

export class ExampleA {
  // oxlint-disable-next-line class-methods-use-this
  public example() {
    // oxlint-disable-next-line no-console
    console.log("Hello World");
  }
}

// oxlint-disable-next-line curly
if (items.length > 0) items.push(5);

// oxlint-disable-next-line default-case
switch (items.length) {
  case 1:
    break;
}

switch (items.length) {
  // oxlint-disable-next-line default-case-last
  default:
    break;
  case 1:
    break;
}

// oxlint-disable-next-line default-param-last no-empty-function
export function defaultParamLast(_a = 0, _b: number) {}

// oxlint-disable-next-line eqeqeq
export const eqeqeq = items.length == 1;

// oxlint-disable-next-line for-direction no-empty no-inner-declarations no-var
for (var noInnerDeclarationsIndex = 0; noInnerDeclarationsIndex < 10; noInnerDeclarationsIndex--) {}

// oxlint-disable-next-line func-name-matching func-style no-empty-function
export const funcNameMatching = function bar() {};

// oxlint-disable-next-line func-names no-empty-function object-shorthand
export const cat = { meow: function () {} };

export class GetterReturn {
  // @ts-ignore: no return.
  // oxlint-disable-next-line class-methods-use-this
  public get name() {
    // no return
  }
}

export const groupedAccessorPairs = {
  // oxlint-disable-next-line grouped-accessor-pairs
  get valueA() {
    return 1;
  },
  valueB: 1,
  set valueA(value) {
    this.valueB = value;
  },
};

const objectItems = { abc: 123 };

// oxlint-disable-next-line guard-for-in
for (const key in objectItems) {
  // oxlint-disable-next-line no-console
  console.log(key);
}

// oxlint-disable-next-line id-length
export class w {}

// oxlint-disable-next-line id-length
export type F = 123;
export type IdLength<T> = T;

// oxlint-disable-next-line id-match
export const id_match_example = "test";

// oxlint-disable-next-line id-match
export const idMatch2 = "test";

export class IdMatch {
  // oxlint-disable-next-line id-match
  public id_match = true;

  // oxlint-disable-next-line id-match
  public example(id_match: boolean) {
    // oxlint-disable-next-line id-match
    return this ? id_match : null;
  }
}

export const { id_match } = new IdMatch();

new IdMatch().id_match = true;

export let logicalAssignmentOperator = 123;

// oxlint-disable-next-line logical-assignment-operators
logicalAssignmentOperator = logicalAssignmentOperator || 456;

// oxlint-disable-next-line logical-assignment-operators
if (logicalAssignmentOperator) {
  logicalAssignmentOperator = 123;
}

export function NewCap(value: unknown) {
  return Boolean(value);
}

// oxlint-disable-next-line new-cap
export const newCapInstance = NewCap(true);

export class newCap {}

// oxlint-disable-next-line new-cap
export const newCapInstanceB = new newCap();

// oxlint-disable-next-line no-alert
alert(123);

// oxlint-disable-next-line no-array-constructor
export const noArrayConstructor = new Array();

// oxlint-disable-next-line no-async-promise-executor
export const noAsyncPromiseExecutor = new Promise(async (resolve) => {
  resolve(123);
});

for (const item of items) {
  // oxlint-disable-next-line no-await-in-loop
  await Promise.resolve(item);
}

// oxlint-disable-next-line no-bitwise no-console no-implicit-coercion
console.log(~items.indexOf(1) === -1);

export function noCaller() {
  // oxlint-disable-next-line no-caller
  return arguments.callee;
}

switch (items.length) {
  case 1:
    // oxlint-disable-next-line no-case-declarations
    const x: number[] = [];
    // oxlint-disable-next-line no-console
    console.log(x);
    break;
  // no default
}

// oxlint-disable-next-line no-compare-neg-zero
export const noCompareNegativeZero = items.length === -0;

export const noCondAssign = { jobTitle: "example" };

// oxfmt-ignore
// oxlint-disable-next-line no-constant-condition no-cond-assign
if (noCondAssign.jobTitle = "manager") {
  // empty
}

export const noConstAssign: number | undefined = 0;

// @ts-ignore: no const assignment
noConstAssign = 1;

// @ts-ignore: no const binary expression
// oxlint-disable-next-line no-constant-binary-expression
export const noConstantBinaryExpression = noConstAssign + noConstAssign ?? noConstAssign;

// oxlint-disable-next-line no-constant-condition
if (true) {
  noCaller();

  void new Promise(() => {
    while (true) {
      noCaller();
    }
  });
}

export class NoConstructorReturn {
  public constructor() {
    // oxlint-disable-next-line no-constructor-return
    return 42;
  }
}

// oxlint-disable-next-line no-control-regex
export const noControlRegExp = /\x00/v;

// oxlint-disable-next-line no-debugger
debugger;

// oxlint-disable-next-line no-div-regex
export const noDivRegExp = /=foo/v;

// oxlint-disable-next-line no-dupe-else-if
if (items.length === 1) {
  noCaller();
} else if (items.length === 1) {
  noCaller();
}

switch (items.length) {
  // oxlint-disable-next-line no-duplicate-case
  case 1:
    break;
  case 1:
    break;
  // no default
}

export const fileTest = existsSync(".") && readFileSync(".", "utf8");

export const fileMode: Mode = "r";

export function noElseReturn() {
  if (items.length === 0) {
    return items.length;
    // oxlint-disable-next-line no-else-return
  } else if (items.length === 1) {
    return items.length;
  } else {
    return 123;
  }
}

if (items.length === 1) {
  // empty
}

try {
  if (items.length === 1) {
    // empty
  }
  // oxlint-disable-next-line no-empty
} catch {}

// oxlint-disable-next-line no-empty-character-class
export const noEmptyCharacterClass = /^abc[]/v;

// oxlint-disable-next-line no-empty-function
export function noEmptyFunction() {}

const {
  // oxlint-disable-next-line no-empty-pattern
  pattern: {},
} = { pattern: {} };

export class NoEmptyStaticBlock {
  // oxlint-disable-next-line no-empty-static-block
  static {}
}

// oxlint-disable-next-line no-eq-null eqeqeq
if (items == null) {
  noCaller();
}

// oxlint-disable-next-line no-eval
eval("const a = 0");

try {
  // code
} catch (error) {
  // oxlint-disable-next-line no-console
  console.log(error);

  // oxlint-disable-next-line no-ex-assign
  error = 10;
}

export const noExtraBind = (() => {
  noCaller();
  // oxlint-disable-next-line no-extra-bind
}).bind(this);

// oxlint-disable-next-line no-extra-boolean-cast no-implicit-coercion
export const noExtraBooleanCast = Boolean(!!items.length);

export const noImplicitCoercionBug = ` ${items.length}`;

// oxlint-disable-next-line no-extra-boolean-cast no-implicit-coercion
if (!!items.length || items.length) {
  // empty
}

NoExtraLabel: switch (items.length) {
  case 0:
    // oxlint-disable-next-line no-extra-label
    break NoExtraLabel;
  // no default
}

switch (items.length) {
  case 1:
  case 3:
    noCaller();
  // oxlint-disable-next-line no-fallthrough
  case 2:
    noCaller();
  // no default
}

const string = "hello";

// oxlint-disable-next-line no-implicit-coercion
export const noImplicitCoercionBoolean = !!string;
// oxlint-disable-next-line no-implicit-coercion
export const noImplicitCoercionNumber = +string;
// oxlint-disable-next-line no-implicit-coercion prefer-template
export const noImplicitCoercionString = "" + string;
export const noImplicitCoercionTemplate = String(string); // buggy when disallowTemplateShorthand is true

setTimeout("alert('Hi!')", 100);

if (items.length) {
  // oxlint-disable-next-line no-inner-declarations no-underscore-dangle
  function _noInnerDeclaration() {
    // empty
  }
}

// oxlint-disable-next-line no-invalid-regexp prefer-regex-literals
RegExp("[", "v");

export function noIrregularWhitespace() {
  return "bar";
}

items: switch (items.length) {
  case 0:
    // oxlint-disable-next-line no-extra-label
    break items;
  // no default
}

// oxlint-disable-next-line no-labels
label: if (items.length) {
  // oxlint-disable-next-line no-labels
  break label;
}

if (items.length) {
  // empty
} else {
  // oxlint-disable-next-line no-lonely-if
  if (items.length) {
    // empty
  }
}

const object: Record<number, Function> = {};

// oxlint-disable-next-line no-inner-declarations no-var
for (var noLoopFuncIndex = 0; noLoopFuncIndex < 10; noLoopFuncIndex++) {
  // oxlint-disable-next-line no-loop-func
  object[noLoopFuncIndex] = function noLoopFunc() {
    return noLoopFuncIndex;
  };
}

// oxlint-disable-next-line no-loss-of-precision
export const noLossOfPrecision = 2e999;

// oxlint-disable-next-line no-misleading-character-class
export const noMisleadingCharacterClass = /^[❇️]$/v;

// oxlint-disable-next-line no-underscore-dangle prefer-const
let _noMultiAssignA;
// oxlint-disable-next-line no-underscore-dangle prefer-const
let _noMultiAssignB;

// oxlint-disable-next-line no-multi-assign
_noMultiAssignA = _noMultiAssignB = "baz";

export const noMultiStr =
  // oxlint-disable-next-line no-multi-str
  "Line 1 \
 Line 2";

if (!items) {
  noCaller();
} else {
  noCaller();
}

// oxlint-disable-next-line no-new
new ExampleA();

// oxlint-disable-next-line
export const noNewFunc = new Function("a", "b", "return a + b");

// oxlint-disable-next-line no-new-wrappers
export const noNewWrappers = new String("Hello world");

// oxlint-disable-next-line no-object-constructor
export const noObjectConstructor = Object();

export function noParamReassign(_foo: number) {
  // oxlint-disable-next-line no-param-reassign
  _foo = 1;
}

export const noPromiseExecutorReturn = new Promise(
  () =>
    // oxlint-disable-next-line no-promise-executor-return
    1,
);

export const noPromiseExecutorReturnVoidAllowed = new Promise(
  () =>
    // oxlint-disable-next-line no-void
    void 1,
);

// oxlint-disable-next-line no-regex-spaces
export const noRegExpSpaces = /foo  bar/v;

// @ts-ignore: default reassign
export { default } from "#fixtures/eslint/support";

// @ts-ignore: default reassign
export { items as default };

// @ts-ignore: default reassign
export { named as default } from "#fixtures/eslint/support";

export function noReturnAssign() {
  // oxlint-disable-next-line no-return-assign
  return (items.length = 0);
}

// oxlint-disable-next-line no-script-url
location.href = "javascript:void(0)";

// oxlint-disable-next-line no-self-assign
items.length = items.length;

// oxlint-disable-next-line no-self-compare
if (items.length === items.length) {
  // empty
}

// oxlint-disable-next-line func-style no-sequences
export const noSequences = () => (noCaller(), items.length);

export class NoSetterReturn {
  // oxlint-disable-next-line class-methods-use-this
  public set origin(_value: number) {
    // @ts-ignore: no setter return
    // oxlint-disable-next-line no-setter-return
    return _value;
  }
}

// oxlint-disable-next-line no-underscore-dangle no-var
var _noShadow = 1;

export function noShadowFunction() {
  // oxlint-disable-next-line no-shadow no-underscore-dangle no-var
  var _noShadow = 2;
  // oxlint-disable-next-line no-unused-vars no-shadow no-var
  var Object = 123;

  return _noShadow;
}

// oxlint-disable-next-line no-shadow no-shadow-restricted-names no-var
var undefined = 123;

// oxlint-disable-next-line no-sparse-arrays
export const noSparseArrays = [, ,];

// oxlint-disable-next-line no-template-curly-in-string
export const noTemplateCurlyInString = "Hello ${name}!";

// oxlint-disable-next-line no-unassigned-vars
let noUnassignedVar;

if (noUnassignedVar === "ready") {
  // oxlint-disable-next-line no-console
  console.log("Ready!");
}

// oxlint-disable-next-line no-underscore-dangle id-match
export const noUnderscoreDangle_ = 123;

export const { length: _length } = items;

export function noUnmodifiedLoopCondition() {
  const done = false;

  // oxlint-disable-next-line no-unmodified-loop-condition
  while (!done) {
    noCaller();
  }
}

// oxlint-disable-next-line no-unreachable-loop
for (const item of items) {
  // oxlint-disable-next-line no-console
  console.log(item);

  break;
}

(() => {
  try {
    return "ok";
  } catch {
    return "ok";
  } finally {
    // oxlint-disable-next-line no-unsafe-finally
    return "bad";
  }
})();

// @ts-ignore: no unsafe negation
// oxlint-disable-next-line no-use-before-define
if ((!length) in items) {
  // empty
}

// @ts-ignore: no unsafe negation
// oxlint-disable-next-line no-unsafe-negation
if (!items.length < 0) {
  // empty
}

const itemsOrUndefined: number[][] | undefined = [];

// oxlint-disable-next-line no-unsafe-optional-chaining no-underscore-dangle
for (const _item of itemsOrUndefined?.[0]) {
  // empty
}

// @ts-ignore: no unsafe optional chaining
// oxlint-disable-next-line no-unsafe-optional-chaining
export const noUnsafeOptionalChaining = itemsOrUndefined?.[0] + 1;

// oxlint-disable-next-line no-unused-expressions
1 as number;

// oxlint-disable-next-line no-unused-expressions
noCaller() && noCaller();

// oxlint-disable-next-line no-unused-expressions
("use strict"); // bad place

// oxlint-disable-next-line no-underscore-dangle no-var
var _noUnusedExpressionsJSX = <></>; // buggy?

// oxlint-disable-next-line no-unused-labels no-labels
unusedLabel: if (items.length) {
  // empty
}

export class NoUnusedPrivateClassMembers {
  // oxlint-disable-next-line no-unused-private-class-members
  #unusedMember = 5;
}

// oxlint-disable-next-line no-unused-vars
export function noUnusedVars(used: number, unused: number) {
  return used;
}

// @ts-ignore: no use before define
// oxlint-disable-next-line no-use-before-define
export const noUseBeforeDefine = new NoUseBeforeDefine();

class NoUseBeforeDefine {}

function noop(..._args: unknown[]) {
  // empty
}

export function noUselessAssignment() {
  let value = "used";

  noop(value);

  // oxlint-disable-next-line no-useless-assignment
  value = "unused";
}

// oxlint-disable-next-line no-useless-backreference prefer-named-capture-group
export const noUselessBackreference = /\1(a)/v;

// oxlint-disable-next-line no-useless-call
noop.call(undefined, 1, 2, 3);

try {
  noop();
  // oxlint-disable-next-line no-useless-catch
} catch (error) {
  throw error;
}

// oxlint-disable-next-line no-useless-computed-key
export const noUselessComputedKey = { ["a"]: "b" };

// oxlint-disable-next-line no-useless-concat
export const noUselessConcat = "a" + "b";

export class NoUselessConstructor {
  // oxlint-disable-next-line no-useless-constructor
  public constructor() {
    // "empty" comment is useless here
  }
}

// oxlint-disable-next-line no-useless-escape
export const noUselessEscape = "\'";

// @ts-ignore: no use before define
// oxlint-disable-next-line no-useless-rename
export const { length: length } = items;

export function noUselessReturn() {
  // oxlint-disable-next-line no-useless-return
  return;
}

// oxlint-disable-next-line no-var no-underscore-dangle
var _noVar = "use let or const";

// oxlint-disable-next-line no-void
export const noVoid = void 0;

void Promise.resolve(); // allowAsStatement

// oxlint-disable-next-line no-warning-comments
// TODO: implement this feature
export function noWarningCommentsA() {
  // empty
}

// oxlint-disable-next-line no-warning-comments
/** @todo Implement this feature */
export function noWarningCommentsB() {
  // empty
}

// oxlint-disable-next-line no-warning-comments
/** @todo Implement this feature */
export function noWarningCommentsC() {
  // empty
}

export const objectShorthand = {
  // oxlint-disable-next-line object-shorthand func-names
  shorthandBad: function () {
    // empty
  },
  shorthandGood() {
    // empty
  },
};

// oxlint-disable-next-line one-var
export const oneVarA = 1,
  oneVarB = 2;

// oxlint-disable-next-line operator-assignment
items.length = items.length + 1;

// oxlint-disable-next-line prefer-arrow-callback
export const preferArrowCallback = noop(function preferArrowCallbackFunction(
  this: void,
  value: number,
) {
  return value;
});

// oxlint-disable-next-line prefer-const
let preferConst = 123;

// oxlint-disable-next-line no-console
console.log(preferConst);

// oxlint-disable-next-line prefer-const
let { preferConstKey } = { preferConstKey: 123 };

// oxlint-disable-next-line no-console
console.log(preferConstKey);

// oxlint-disable-next-line prefer-exponentiation-operator
export const preferExponentiationOperator = Math.pow(1, 2);

// oxlint-disable-next-line prefer-named-capture-group
export const preferNamedCaptureGroup = /(\d{4})-(\d{2})/v;

// oxlint-disable-next-line prefer-numeric-literals
export const preferNumericLiterals = parseInt("111110111", 2);

// oxlint-disable-next-line prefer-object-has-own
export const preferObjectHasOwn = Object.prototype.hasOwnProperty.call(items, "length");

// oxlint-disable-next-line prefer-object-spread
export const preferObjectSpread = Object.assign({}, {});

// oxlint-disable-next-line prefer-regex-literals require-unicode-regexp
export const preferRegExpLiteralsA = new RegExp("^\\d\\.$");

// oxlint-disable-next-line prefer-regex-literals require-unicode-regexp
export const preferRegExpLiteralsB = new RegExp(/abc/);

export function preferRestParams() {
  // oxlint-disable-next-line no-console prefer-rest-params
  console.log(arguments);
}

// oxlint-disable-next-line prefer-spread
export const preferSpread = Math.max.apply(Math, items);

// oxlint-disable-next-line prefer-template
export const preferTemplate = "Hello, " + items.length + "!";

export function preserveCaughtErrors() {
  try {
    noop();
  } catch (error) {
    // oxlint-disable-next-line no-console
    console.log(error);

    // oxlint-disable-next-line preserve-caught-error
    throw new Error("Something failed");
  }
}

// oxlint-disable-next-line radix
export const radix = parseInt("071");

// oxlint-disable-next-line require-unicode-regexp
export const requireUnicodeRegExp = /foo/u; // prefer "v"

// oxlint-disable-next-line require-yield
export function* requireYield() {
  return 10;
}

// oxlint-disable-next-line symbol-description
export const symbolDescription = Symbol();

// @ts-ignore: use isNaN()
// oxlint-disable-next-line use-isnan
export const useIsNaN = items.length === NaN;

// oxlint-disable-next-line use-isnan
export const useIsNaNIndexOf = items.indexOf(NaN);

// oxlint-disable-next-line use-isnan
switch (NaN) {
  case 1:
    break;
  // no default
}

// oxlint-disable-next-line yoda
export const yoda = 123 === items.length;

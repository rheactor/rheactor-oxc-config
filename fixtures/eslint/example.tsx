// oxlint-disable-next-line max-classes-per-file
import { readFileSync } from "node:fs";
// Rule: eslint/no-duplicate-imports
// oxlint-disable-next-line no-duplicate-imports
import { existsSync } from "node:fs";
import type { Mode } from "node:fs";

// Rule: eslint/no-restricted-imports
// oxlint-disable-next-line no-restricted-imports
import { named } from "./support";

// Rule: eslint/no-console
// oxlint-disable-next-line no-console
console.log(named);

// Rule: eslint/no-label-var
// oxlint-disable-next-line no-label-var
const items = [1, 2, 3, 4];

// Rule: eslint/array-callback-return
// oxlint-disable-next-line array-callback-return
items.map((item) => {
  // oxlint-disable-next-line no-console
  console.log(item);
});

// oxlint-disable-next-line array-callback-return
items.forEach((item) => item);

// Rule: eslint/arrow-body-style
// oxlint-disable-next-line arrow-body-style
items.map((item) => {
  return item;
});

// oxfmt-ignore
// Rule: eslint/no-lone-blocks
// oxlint-disable-next-line no-inner-declarations no-lone-blocks no-var
{ var varScoped = true; }

// Rule: eslint/block-scoped-var
// oxlint-disable-next-line block-scoped-var no-console
console.log(varScoped);

export class ExampleA {
  // Rule: eslint/class-methods-use-this
  // oxlint-disable-next-line class-methods-use-this
  public example() {
    // oxlint-disable-next-line no-console
    console.log("Hello World");
  }
}

// Rule: eslint/curly
// oxlint-disable-next-line curly
if (items.length > 0) items.push(5);

// Rule: eslint/default-case
// oxlint-disable-next-line default-case
switch (items.length) {
  case 1:
    break;
}

switch (items.length) {
  // Rule: eslint/default-case-last
  // oxlint-disable-next-line default-case-last
  default:
    break;
  case 1:
    break;
}

// Rule: eslint/default-param-last
// oxlint-disable-next-line default-param-last no-empty-function
export function defaultParamLast(_a = 0, _b: number) {}

// Rule: eslint/eqeqeq
// oxlint-disable-next-line eqeqeq
export const eqeqeq = items.length == 1;

// Rule: eslint/for-direction
// oxlint-disable-next-line for-direction no-empty no-inner-declarations no-var
for (var noInnerDeclarationsIndex = 0; noInnerDeclarationsIndex < 10; noInnerDeclarationsIndex--) {}

// Rule: eslint/func-name-matching
// oxlint-disable-next-line func-name-matching func-style no-empty-function
export const funcNameMatching = function bar() {};

// Rule: eslint/func-names
// oxlint-disable-next-line func-names no-empty-function object-shorthand
export const cat = { meow: function () {} };

export class GetterReturn {
  // @ts-expect-error: no return.
  // oxlint-disable-next-line class-methods-use-this
  public get name() {
    // no return
  }
}

export const groupedAccessorPairs = {
  // Rule: eslint/grouped-accessor-pairs
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

// Rule: eslint/guard-for-in
// oxlint-disable-next-line guard-for-in
for (const key in objectItems) {
  // oxlint-disable-next-line no-console
  console.log(key);
}

export type IdLength<T> = T;

// Rule: eslint/id-match
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

// Rule: eslint/logical-assignment-operators
// oxlint-disable-next-line logical-assignment-operators
logicalAssignmentOperator = logicalAssignmentOperator || 456;

// oxlint-disable-next-line logical-assignment-operators
if (logicalAssignmentOperator) {
  logicalAssignmentOperator = 123;
}

export function NewCap(value: unknown) {
  return Boolean(value);
}

// Rule: eslint/new-cap
// oxlint-disable-next-line new-cap
export const newCapInstance = NewCap(true);

export class newCap {}

// oxlint-disable-next-line new-cap
export const newCapInstanceB = new newCap();

// Rule: eslint/no-alert
// oxlint-disable-next-line no-alert
alert(123);

// Rule: eslint/no-array-constructor
// oxlint-disable-next-line no-array-constructor
export const noArrayConstructor = new Array();

// Rule: eslint/no-async-promise-executor
// oxlint-disable-next-line no-async-promise-executor
export const noAsyncPromiseExecutor = new Promise(async (resolve) => {
  resolve(123);
});

for (const item of items) {
  // Rule: eslint/no-await-in-loop
  // oxlint-disable-next-line no-await-in-loop
  await Promise.resolve(item);
}

// Rule: eslint/no-bitwise
// oxlint-disable-next-line no-bitwise no-console no-implicit-coercion
console.log(~items.indexOf(1) === -1);

export function noCaller() {
  // Rule: eslint/no-caller
  // oxlint-disable-next-line no-caller
  return arguments.callee;
}

switch (items.length) {
  case 1:
    // Rule: eslint/no-case-declarations
    // oxlint-disable-next-line no-case-declarations
    const x: number[] = [];
    // oxlint-disable-next-line no-console
    console.log(x);
    break;
  // no default
}

// Rule: eslint/no-compare-neg-zero
// oxlint-disable-next-line no-compare-neg-zero
export const noCompareNegativeZero = items.length === -0;

export const noCondAssign = { jobTitle: "example" };

// oxfmt-ignore
// Rule: eslint/no-cond-assign
// oxlint-disable-next-line no-constant-condition no-cond-assign
if (noCondAssign.jobTitle = "manager") {
  // empty
}

export const noConstAssign: number | undefined = 0;

// @ts-expect-error: no const assignment
noConstAssign = 1;

// @ts-expect-error: no const binary expression
// Rule: eslint/no-constant-binary-expression
// oxlint-disable-next-line no-constant-binary-expression
export const noConstantBinaryExpression = noConstAssign + noConstAssign ?? noConstAssign;

// Rule: eslint/no-constant-condition
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
    // Rule: eslint/no-constructor-return
    // oxlint-disable-next-line no-constructor-return
    return 42;
  }
}

// Rule: eslint/no-control-regex
// oxlint-disable-next-line no-control-regex
export const noControlRegExp = /\x00/v;

// Rule: eslint/no-debugger
// oxlint-disable-next-line no-debugger
debugger;

// Rule: eslint/no-div-regex
// oxlint-disable-next-line no-div-regex
export const noDivRegExp = /=foo/v;

// Rule: eslint/no-dupe-else-if
// oxlint-disable-next-line no-dupe-else-if
if (items.length === 1) {
  noCaller();
} else if (items.length === 1) {
  noCaller();
}

switch (items.length) {
  // Rule: eslint/no-duplicate-case
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
    // Rule: eslint/no-else-return
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
  // Rule: eslint/no-empty
  // oxlint-disable-next-line no-empty
} catch {}

// Rule: eslint/no-empty-character-class
// oxlint-disable-next-line no-empty-character-class
export const noEmptyCharacterClass = /^abc[]/v;

// Rule: eslint/no-empty-function
// oxlint-disable-next-line no-empty-function
export function noEmptyFunction() {}

const {
  // Rule: eslint/no-empty-pattern
  // oxlint-disable-next-line no-empty-pattern
  pattern: {},
} = { pattern: {} };

export class NoEmptyStaticBlock {
  // Rule: eslint/no-empty-static-block
  // oxlint-disable-next-line no-empty-static-block
  static {}
}

// Rule: eslint/no-eq-null
// oxlint-disable-next-line no-eq-null eqeqeq
if (items == null) {
  noCaller();
}

// Rule: eslint/no-eval
// oxlint-disable-next-line no-eval
eval("const a = 0");

try {
  // code
} catch (error) {
  // oxlint-disable-next-line no-console
  console.log(error);

  // Rule: eslint/no-ex-assign
  // oxlint-disable-next-line no-ex-assign
  error = 10;
}

export const noExtraBind = (() => {
  noCaller();
  // Rule: eslint/no-extra-bind
  // oxlint-disable-next-line no-extra-bind
}).bind(this);

// Rule: eslint/no-extra-boolean-cast
// oxlint-disable-next-line no-extra-boolean-cast no-implicit-coercion
export const noExtraBooleanCast = Boolean(!!items.length);

export const noImplicitCoercionBug = ` ${items.length}`;

// oxlint-disable-next-line no-extra-boolean-cast no-implicit-coercion
if (!!items.length || items.length) {
  // empty
}

NoExtraLabel: switch (items.length) {
  case 0:
    // Rule: eslint/no-extra-label
    // oxlint-disable-next-line no-extra-label
    break NoExtraLabel;
  // no default
}

switch (items.length) {
  case 1:
  case 3:
    noCaller();
  // Rule: eslint/no-fallthrough
  // oxlint-disable-next-line no-fallthrough
  case 2:
    noCaller();
  // no default
}

const string = "hello";

// Rule: eslint/no-implicit-coercion
// oxlint-disable-next-line no-implicit-coercion
export const noImplicitCoercionBoolean = !!string;
// oxlint-disable-next-line no-implicit-coercion
export const noImplicitCoercionNumber = +string;
// oxlint-disable-next-line no-implicit-coercion prefer-template
export const noImplicitCoercionString = "" + string;
export const noImplicitCoercionTemplate = String(string); // buggy when disallowTemplateShorthand is true

setTimeout("alert('Hi!')", 100);

if (items.length) {
  // Rule: eslint/no-inner-declarations
  // oxlint-disable-next-line no-inner-declarations no-underscore-dangle
  function _noInnerDeclaration() {
    // empty
  }
}

// Rule: eslint/no-invalid-regexp
// oxlint-disable-next-line no-invalid-regexp prefer-regex-literals
RegExp("[", "v");

export function noIrregularWhitespace() {
  // oxfmt-ignore
  // Rule: eslint/no-irregular-whitespace
  // oxlint-disable-next-line eslint/no-irregular-whitespace
  return "bar";
}

items: switch (items.length) {
  case 0:
    // oxlint-disable-next-line no-extra-label
    break items;
  // no default
}

// Rule: eslint/no-labels
// oxlint-disable-next-line no-labels
label: if (items.length) {
  // oxlint-disable-next-line no-labels
  break label;
}

if (items.length) {
  // empty
} else {
  // Rule: eslint/no-lonely-if
  // oxlint-disable-next-line no-lonely-if
  if (items.length) {
    // empty
  }
}

const object: Record<number, Function> = {};

// oxlint-disable-next-line no-inner-declarations no-var
for (var noLoopFuncIndex = 0; noLoopFuncIndex < 10; noLoopFuncIndex++) {
  // Rule: eslint/no-loop-func
  // oxlint-disable-next-line no-loop-func
  object[noLoopFuncIndex] = function noLoopFunc() {
    return noLoopFuncIndex;
  };
}

// Rule: eslint/no-loss-of-precision
// oxlint-disable-next-line no-loss-of-precision
export const noLossOfPrecision = 2e999;

// Rule: eslint/no-misleading-character-class
// oxlint-disable-next-line no-misleading-character-class
export const noMisleadingCharacterClass = /^[❇️]$/v;

// oxlint-disable-next-line no-underscore-dangle prefer-const
let _noMultiAssignA;
// oxlint-disable-next-line no-underscore-dangle
let _noMultiAssignB;

// Rule: eslint/no-multi-assign
// oxlint-disable-next-line no-multi-assign
_noMultiAssignA = _noMultiAssignB = "baz";

export const noMultiStr =
  // Rule: eslint/no-multi-str
  // oxlint-disable-next-line no-multi-str
  "Line 1 \
 Line 2";

if (!items) {
  noCaller();
} else {
  noCaller();
}

// Rule: eslint/no-new
// oxlint-disable-next-line no-new
new ExampleA();

// Rule: eslint/no-new-func
// oxlint-disable-next-line no-new-func
export const noNewFunc = new Function("a", "b", "return a + b");

// Rule: eslint/no-new-wrappers
// oxlint-disable-next-line no-new-wrappers
export const noNewWrappers = new String("Hello world");

// Rule: eslint/no-object-constructor
// oxlint-disable-next-line no-object-constructor
export const noObjectConstructor = Object();

export function noParamReassign(_foo: number) {
  // Rule: eslint/no-param-reassign
  // oxlint-disable-next-line no-param-reassign
  _foo = 1;
}

export const noPromiseExecutorReturn = new Promise(
  () =>
    // Rule: eslint/no-promise-executor-return
    // oxlint-disable-next-line no-promise-executor-return
    1,
);

export const noPromiseExecutorReturnVoidAllowed = new Promise(
  () =>
    // oxlint-disable-next-line no-void
    void 1,
);

// Rule: eslint/no-regex-spaces
// oxlint-disable-next-line no-regex-spaces
export const noRegExpSpaces = /foo  bar/v;

// @ts-expect-error: default reassign
export { default } from "#fixtures/eslint/support";

// @ts-expect-error: default reassign
export { items as default };

// @ts-expect-error: default reassign
export { named as default } from "#fixtures/eslint/support";

export function noReturnAssign() {
  // Rule: eslint/no-return-assign
  // oxlint-disable-next-line no-return-assign
  return (items.length = 0);
}

// Rule: eslint/no-script-url
// oxlint-disable-next-line no-script-url
location.href = "javascript:void(0)";

// Rule: eslint/no-self-assign
// oxlint-disable-next-line no-self-assign
items.length = items.length;

// Rule: eslint/no-self-compare
// oxlint-disable-next-line no-self-compare
if (items.length === items.length) {
  // empty
}

// Rule: eslint/no-sequences
// oxlint-disable-next-line func-style no-sequences
export const noSequences = () => (noCaller(), items.length);

export class NoSetterReturn {
  // oxlint-disable-next-line class-methods-use-this
  public set origin(_value: number) {
    // @ts-expect-error: no setter return
    // Rule: eslint/no-setter-return
    // oxlint-disable-next-line no-setter-return
    return _value;
  }
}

// oxlint-disable-next-line no-underscore-dangle no-var
var _noShadow = 1;

export function noShadowFunction() {
  // Rule: eslint/no-shadow
  // oxlint-disable-next-line no-shadow no-underscore-dangle no-var
  var _noShadow = 2;
  // oxlint-disable-next-line no-unused-vars no-shadow no-var
  var Object = 123;

  return _noShadow;
}

// Rule: eslint/no-shadow-restricted-names
// oxlint-disable-next-line no-shadow no-shadow-restricted-names no-var
var undefined = 123;

// Rule: eslint/no-sparse-arrays
// oxlint-disable-next-line no-sparse-arrays
export const noSparseArrays = [, ,];

// Rule: eslint/no-template-curly-in-string
// oxlint-disable-next-line no-template-curly-in-string
export const noTemplateCurlyInString = "Hello ${name}!";

// Rule: eslint/no-unassigned-vars
// oxlint-disable-next-line no-unassigned-vars
let noUnassignedVar;

if (noUnassignedVar === "ready") {
  // oxlint-disable-next-line no-console
  console.log("Ready!");
}

// Rule: eslint/no-underscore-dangle
// oxlint-disable-next-line no-underscore-dangle id-match
export const noUnderscoreDangle_ = 123;

export const { length: _length } = items;

export function noUnmodifiedLoopCondition() {
  const done = false;

  // Rule: eslint/no-unmodified-loop-condition
  // oxlint-disable-next-line no-unmodified-loop-condition
  while (!done) {
    noCaller();
  }
}

// Rule: eslint/no-unreachable-loop
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
    // Rule: eslint/no-unsafe-finally
    // oxlint-disable-next-line no-unsafe-finally
    return "bad";
  }
})();

// @ts-expect-error: no unsafe negation
// oxlint-disable-next-line no-use-before-define
if ((!length) in items) {
  // empty
}

// @ts-expect-error: no unsafe negation
// Rule: eslint/no-unsafe-negation
// oxlint-disable-next-line no-unsafe-negation
if (!items.length < 0) {
  // empty
}

const itemsOrUndefined: number[][] | undefined = [];

// Rule: eslint/no-unsafe-optional-chaining
// oxlint-disable-next-line no-unsafe-optional-chaining no-underscore-dangle
for (const _item of itemsOrUndefined?.[0]) {
  // empty
}

// @ts-expect-error: no unsafe optional chaining
// oxlint-disable-next-line no-unsafe-optional-chaining
export const noUnsafeOptionalChaining = itemsOrUndefined?.[0] + 1;

// Rule: eslint/no-unused-expressions
// oxlint-disable-next-line no-unused-expressions
1 as number;

// oxlint-disable-next-line no-unused-expressions
noCaller() && noCaller();

// oxlint-disable-next-line no-unused-expressions
("use strict"); // bad place

// oxlint-disable-next-line no-underscore-dangle no-var
var _noUnusedExpressionsJSX = <></>; // buggy?

// Rule: eslint/no-unused-labels
// oxlint-disable-next-line no-unused-labels no-labels
unusedLabel: if (items.length) {
  // empty
}

export class NoUnusedPrivateClassMembers {
  // Rule: eslint/no-unused-private-class-members
  // oxlint-disable-next-line no-unused-private-class-members
  #unusedMember = 5;
}

// Rule: eslint/no-unused-vars
// oxlint-disable-next-line no-unused-vars
export function noUnusedVars(used: number, unused: number) {
  return used;
}

// @ts-expect-error: no use before define
// Rule: eslint/no-use-before-define
// oxlint-disable-next-line no-use-before-define
export const noUseBeforeDefine = new NoUseBeforeDefine();

class NoUseBeforeDefine {}

function noop(..._args: unknown[]) {
  // empty
}

export function noUselessAssignment() {
  let value = "used";

  noop(value);

  // Rule: eslint/no-useless-assignment
  // oxlint-disable-next-line no-useless-assignment
  value = "unused";
}

// Rule: eslint/no-useless-backreference
// oxlint-disable-next-line no-useless-backreference prefer-named-capture-group
export const noUselessBackreference = /\1(a)/v;

// Rule: eslint/no-useless-call
// oxlint-disable-next-line no-useless-call
noop.call(undefined, 1, 2, 3);

try {
  noop();
  // Rule: eslint/no-useless-catch
  // oxlint-disable-next-line no-useless-catch
} catch (error) {
  throw error;
}

// Rule: eslint/no-useless-computed-key
// oxlint-disable-next-line no-useless-computed-key
export const noUselessComputedKey = { ["a"]: "b" };

// Rule: eslint/no-useless-concat
// oxlint-disable-next-line no-useless-concat
export const noUselessConcat = "a" + "b";

export class NoUselessConstructor {
  // Rule: eslint/no-useless-constructor
  // oxlint-disable-next-line no-useless-constructor
  public constructor() {
    // "empty" comment is useless here
  }
}

// Rule: eslint/no-useless-escape
// oxlint-disable-next-line no-useless-escape
export const noUselessEscape = "\'";

// @ts-expect-error: no use before define
// Rule: eslint/no-useless-rename
// oxlint-disable-next-line no-useless-rename
export const { length: length } = items;

export function noUselessReturn() {
  // Rule: eslint/no-useless-return
  // oxlint-disable-next-line no-useless-return
  return;
}

// Rule: eslint/no-var
// oxlint-disable-next-line no-var no-underscore-dangle
var _noVar = "use let or const";

// Rule: eslint/no-void
// oxlint-disable-next-line no-void
export const noVoid = void 0;

void Promise.resolve(); // allowAsStatement

// Rule: eslint/no-warning-comments
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
  // Rule: eslint/object-shorthand
  // oxlint-disable-next-line object-shorthand func-names
  shorthandBad: function () {
    // empty
  },
  shorthandGood() {
    // empty
  },
};

// Rule: eslint/one-var
// oxlint-disable-next-line one-var
export const oneVarA = 1,
  oneVarB = 2;

// Rule: eslint/operator-assignment
// oxlint-disable-next-line operator-assignment
items.length = items.length + 1;

// Rule: eslint/prefer-arrow-callback
// oxlint-disable-next-line prefer-arrow-callback
export const preferArrowCallback = noop(function preferArrowCallbackFunction(
  this: void,
  value: number,
) {
  return value;
});

// Rule: eslint/prefer-const
// oxlint-disable-next-line prefer-const
let preferConst = 123;

// oxlint-disable-next-line no-console
console.log(preferConst);

// oxlint-disable-next-line prefer-const
let { preferConstKey } = { preferConstKey: 123 };

// oxlint-disable-next-line no-console
console.log(preferConstKey);

// Rule: eslint/prefer-exponentiation-operator
// oxlint-disable-next-line prefer-exponentiation-operator
export const preferExponentiationOperator = Math.pow(1, 2);

// Rule: eslint/prefer-named-capture-group
// oxlint-disable-next-line prefer-named-capture-group
export const preferNamedCaptureGroup = /(\d{4})-(\d{2})/v;

// Rule: eslint/prefer-numeric-literals
// oxlint-disable-next-line prefer-numeric-literals
export const preferNumericLiterals = parseInt("111110111", 2);

// Rule: eslint/prefer-object-has-own
// oxlint-disable-next-line prefer-object-has-own
export const preferObjectHasOwn = Object.prototype.hasOwnProperty.call(items, "length");

// Rule: eslint/prefer-object-spread
// oxlint-disable-next-line prefer-object-spread
export const preferObjectSpread = Object.assign({}, {});

// Rule: eslint/prefer-regex-literals
// oxlint-disable-next-line prefer-regex-literals require-unicode-regexp
export const preferRegExpLiteralsA = new RegExp("^\\d\\.$");

// oxlint-disable-next-line prefer-regex-literals require-unicode-regexp
export const preferRegExpLiteralsB = new RegExp(/abc/);

export function preferRestParams() {
  // Rule: eslint/prefer-rest-params
  // oxlint-disable-next-line no-console prefer-rest-params
  console.log(arguments);
}

// Rule: eslint/prefer-spread
// oxlint-disable-next-line prefer-spread
export const preferSpread = Math.max.apply(Math, items);

// Rule: eslint/prefer-template
// oxlint-disable-next-line prefer-template
export const preferTemplate = "Hello, " + items.length + "!";

export function preserveCaughtErrors() {
  try {
    noop();
  } catch (error) {
    // oxlint-disable-next-line no-console
    console.log(error);

    // Rule: eslint/preserve-caught-error
    // oxlint-disable-next-line preserve-caught-error
    throw new Error("Something failed");
  }
}

// Rule: eslint/radix
// oxlint-disable-next-line radix
export const radix = parseInt("071");

// Rule: eslint/require-unicode-regexp
// oxlint-disable-next-line require-unicode-regexp
export const requireUnicodeRegExp = /foo/u; // prefer "v"

// Rule: eslint/require-yield
// oxlint-disable-next-line require-yield
export function* requireYield() {
  return 10;
}

// Rule: eslint/symbol-description
// oxlint-disable-next-line symbol-description
export const symbolDescription = Symbol();

// @ts-expect-error: use isNaN()
// Rule: eslint/use-isnan
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

// Rule: eslint/yoda
// oxlint-disable-next-line yoda
export const yoda = 123 === items.length;

// Rule: eslint/func-style
// oxlint-disable-next-line eslint/func-style
export const funcStyle = function funcStyle() {
  return 1;
};

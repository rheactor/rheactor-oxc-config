// Rule: typescript/triple-slash-reference
// oxlint-disable-next-line typescript/triple-slash-reference
/// <reference path="../unicorn/support.ts" />

// Rule: typescript/array-type
// oxlint-disable-next-line typescript/array-type max-classes-per-file
export const arrayTypeA: Array<number> = new Array<number>();

// oxlint-disable-next-line typescript/array-type
export const arrayTypeB: ReadonlyArray<number> = [1, 2, 3];

// oxlint-disable-next-line typescript/array-type
export const arrayTypeC: { abc: number }[] = [{ abc: 123 }];

// Rule: typescript/await-thenable
// oxlint-disable-next-line typescript/await-thenable
export const awaitThenable = await 12;

// oxlint-disable-next-line no-constant-condition typescript/no-unnecessary-condition
if (false) {
  // oxlint-disable-next-line no-console
  console.log("hello");
}

export class ClassLiteralPropertyStyle {
  // Rule: typescript/class-literal-property-style
  // oxlint-disable-next-line typescript/class-literal-property-style class-methods-use-this
  public get name() {
    return "oxc";
  }
}

// Rule: typescript/consistent-generic-constructors
// oxlint-disable-next-line typescript/consistent-generic-constructors
export const consistentGenericConstructors: Set<string> = new Set();

// Rule: typescript/consistent-type-definitions
// oxlint-disable-next-line typescript/consistent-type-definitions
export type ConsistentIndexedObjectStyle = {
  // Rule: typescript/consistent-indexed-object-style
  // oxlint-disable-next-line typescript/consistent-indexed-object-style
  [key: string]: unknown;
};

type Number = number;

// Rule: typescript/consistent-type-assertions
// oxlint-disable-next-line typescript/consistent-type-assertions
export const number = <Number>123;

export type { Number };

const dotNotation = { abc: 123 };

// Rule: typescript/dot-notation
// oxlint-disable-next-line typescript/dot-notation
export const dotNotationAbc = dotNotation["abc"];

export class ExplicitMemberAccessibility {
  // Rule: typescript/explicit-member-accessibility
  // oxlint-disable-next-line typescript/explicit-member-accessibility
  get self() {
    return this;
  }
}

export interface MethodSignatureStyle {
  // Rule: typescript/method-signature-style
  // oxlint-disable-next-line typescript/method-signature-style
  func: (arg: string) => number;
}

const items = [1, 2, 3];

// Rule: typescript/no-array-delete
// oxlint-disable-next-line typescript/no-array-delete
delete items[1];

// Rule: typescript/no-base-to-string
// oxlint-disable-next-line no-console typescript/no-base-to-string
console.log({}.toString());

if (items instanceof Array) {
  // empty
}

function noop() {
  // empty
}

// Rule: typescript/no-confusing-void-expression
// oxlint-disable-next-line typescript/no-confusing-void-expression func-style
export const noConfusingVoidExpression = () => noop();

/** @deprecated */
declare function deprecated(): string;

// Rule: typescript/no-deprecated
// oxlint-disable-next-line typescript/no-deprecated
deprecated();

export enum NoDuplicatedEnumValues {
  // Rule: typescript/no-duplicate-enum-values
  // oxlint-disable-next-line typescript/no-duplicate-enum-values
  ValueA = "A",
  ValueB = "A",
}

// Rule: typescript/no-duplicate-type-constituents
// oxlint-disable-next-line typescript/no-duplicate-type-constituents
export type NoDuplicateTypeConstituents = "A" | "A";

const object: Record<string, number> = { abc: 123 };

// Rule: typescript/no-dynamic-delete
// oxlint-disable-next-line typescript/no-dynamic-delete no-useless-concat
delete object["ab" + "c"];

// Rule: typescript/no-empty-interface
// oxlint-disable-next-line typescript/no-empty-interface typescript/no-empty-object-type
export interface NoEmptyInterface {}

// Rule: typescript/no-explicit-any
// oxlint-disable-next-line typescript/no-explicit-any
export const noExplicitAny: any = "123";

const numberOrNull: { bar: number } | null = null;

// Rule: typescript/no-extra-non-null-assertion
// oxlint-disable-next-line typescript/no-unnecessary-type-assertion typescript/no-extra-non-null-assertion
export const noExtraNonNullAssertion = numberOrNull!!.bar;

// Rule: typescript/no-extraneous-class
// oxlint-disable-next-line typescript/no-extraneous-class
export class StaticConstants {
  public static readonly version = 42;
}

// Rule: typescript/no-floating-promises
// oxlint-disable-next-line typescript/no-floating-promises
Promise.resolve();

// Rule: typescript/no-for-in-array
// oxlint-disable-next-line guard-for-in typescript/no-for-in-array
for (const item in items) {
  // oxlint-disable-next-line no-console
  console.log(items[item]);
}

// Rule: typescript/no-implied-eval
// oxlint-disable-next-line typescript/no-implied-eval
setTimeout('alert("Hi!");', 100);

import { type Mode, existsSync as _existsSync } from "node:fs";

export type { Mode };

// Rule: typescript/no-inferrable-types
// oxlint-disable-next-line typescript/no-inferrable-types
export const noInferrableTypes: number = 5;

// Rule: typescript/no-invalid-void-type
// oxlint-disable-next-line typescript/no-invalid-void-type
export function noInvalidVoidType(_arg: void) {
  // empty
}

function noMeaninglessVoidOperator(): void {
  // oxlint-disable-next-line no-useless-return
  return;
}

noMeaninglessVoidOperator();

function noMeaninglessVoidOperatorNever(): never {
  throw Error();
}

// Rule: typescript/no-meaningless-void-operator
// oxlint-disable-next-line typescript/no-meaningless-void-operator
void noMeaninglessVoidOperatorNever();

export interface NoMisusedNew {
  // Rule: typescript/no-misused-new
  // oxlint-disable-next-line typescript/no-misused-new
  constructor(): void;
}

export enum NoMixedEnums {
  Open = 1,
  // Rule: typescript/no-mixed-enums
  // oxlint-disable-next-line typescript/no-mixed-enums
  Closed = "closed",
}

// oxlint-disable-next-line no-unassigned-vars
let noNonNullAssertedNullishCoalescing!: string;

// oxlint-disable-next-line no-unused-expressions typescript/no-unnecessary-condition
noNonNullAssertedNullishCoalescing ?? "";

export function noNonNullAssertedOptionalChain(objectNullable?: { abc: 123 }) {
  // Rule: typescript/no-non-null-asserted-optional-chain
  // oxlint-disable-next-line typescript/no-non-null-asserted-optional-chain
  return objectNullable?.abc!;
}

// Rule: typescript/no-redundant-type-constituents
// oxlint-disable-next-line typescript/no-redundant-type-constituents
export type NoRedundantTypeContituents = string | unknown;

// Rule: typescript/no-this-alias
// oxlint-disable-next-line typescript/no-this-alias
const thisThat = this;

setTimeout(() => {
  // oxlint-disable-next-line no-console
  console.log(thisThat);
});

declare const someCondition: boolean;

if (someCondition) {
  // ...
}

declare const value: null;

// Rule: typescript/no-unnecessary-condition
// oxlint-disable-next-line typescript/no-unnecessary-condition typescript/strict-boolean-expressions
if (value) {
  noop();
}

declare const narrow: (value: unknown) => value is true;

const narrowValue = true;

// oxlint-disable-next-line typescript/no-unnecessary-condition
if (narrow(narrowValue)) {
  // ...
}

export class NoUnnecessaryParameterPropertyAssignment {
  public constructor(public name: unknown) {
    // Rule: typescript/no-unnecessary-parameter-property-assignment
    // oxlint-disable-next-line typescript/no-unnecessary-parameter-property-assignment
    this.name = name;
  }
}

// Rule: typescript/no-unnecessary-template-expression
// oxlint-disable-next-line typescript/no-unnecessary-template-expression
export const noUnnecessaryTemplateExpression = `ab${"cd"}`;

function identity<T = string>(arg: T): T {
  return arg;
}

// Rule: typescript/no-unnecessary-type-arguments
// oxlint-disable-next-line typescript/no-unnecessary-type-arguments
export const noUnnecessaryTypeArguments = identity<string>("hello");

// oxlint-disable-next-line typescript/no-inferrable-types
const str: string = "hello";

// Rule: typescript/no-unnecessary-type-assertion
// oxlint-disable-next-line typescript/no-unnecessary-type-assertion
export const noUnnecessaryTypeAssertion = str as string;

// Rule: typescript/no-unnecessary-type-conversion
// oxlint-disable-next-line typescript/no-unnecessary-type-conversion
export const noUnnecessaryTypeConversion = String(str);

// oxlint-disable-next-line typescript/no-explicit-any
declare const anyValue: any;

// oxlint-disable-next-line no-shadow
function takesString(str: string): void {
  // oxlint-disable-next-line no-console
  console.log(str.length);
}

// Rule: typescript/no-unsafe-argument
// oxlint-disable-next-line typescript/no-unsafe-argument
takesString(anyValue);

// Rule: typescript/no-unsafe-assignment
// oxlint-disable-next-line typescript/no-unsafe-assignment
export const strAny: string = anyValue;

// Rule: typescript/no-unsafe-call
// oxlint-disable-next-line typescript/no-unsafe-call
anyValue();

// Rule: typescript/no-unsafe-declaration-merging
// oxlint-disable-next-line typescript/no-empty-interface typescript/no-unsafe-declaration-merging typescript/no-empty-object-type no-redeclare
interface NoUnsafeDeclarationMerging {}

// oxlint-disable-next-line typescript/no-extraneous-class
class NoUnsafeDeclarationMerging {}

export const noUnsafeDeclarationMerging = new NoUnsafeDeclarationMerging();

// Rule: typescript/no-unsafe-function-type
// oxlint-disable-next-line no-unused-vars prefer-const typescript/no-unsafe-function-type
let noParametersOrReturn: Function;

// oxlint-disable-next-line no-empty-function
noParametersOrReturn = () => {};

// Rule: typescript/no-unsafe-member-access
// oxlint-disable-next-line no-console typescript/no-unsafe-member-access
console.log(anyValue.foo);

export function getString(): string {
  // Rule: typescript/no-unsafe-return
  // oxlint-disable-next-line typescript/no-unsafe-return
  return anyValue;
}

declare const stringLiteral: string;

// Rule: typescript/no-unsafe-unary-minus
// oxlint-disable-next-line typescript/no-unsafe-unary-minus
export const stringLiteralResponse = -stringLiteral;

// Rule: typescript/no-useless-default-assignment
// oxlint-disable-next-line typescript/no-useless-default-assignment
[1, 2, 3].map((item = 0) => item + 1);

// Rule: typescript/no-useless-empty-export
// oxlint-disable-next-line typescript/no-useless-empty-export
export {};

// Rule: typescript/no-wrapper-object-types
// oxlint-disable-next-line typescript/no-wrapper-object-types
export const myObject: Object = "abc";

declare const stringNullable: string | null;

// Rule: typescript/non-nullable-type-assertion-style
// oxlint-disable-next-line typescript/non-nullable-type-assertion-style
export const stringNullableResponse = stringNullable as string;

export function throwError() {
  // Rule: typescript/only-throw-error
  // oxlint-disable-next-line typescript/only-throw-error
  throw "error";
}

export class Foo {
  // Rule: typescript/parameter-properties
  // oxlint-disable-next-line typescript/parameter-properties
  public age: number;

  public constructor(
    private readonly name: string,
    age: number,
  ) {
    this.age = age;
  }
}

// Rule: typescript/prefer-as-const
// oxlint-disable-next-line typescript/prefer-as-const
export const preferConst = { bar: "baz" as "baz" };

export enum PreferEnumInitializers {
  Open = 1,
  // Rule: typescript/prefer-enum-initializers
  // oxlint-disable-next-line typescript/prefer-enum-initializers
  Close,
}

// Rule: typescript/prefer-find
// oxlint-disable-next-line typescript/prefer-find
export const itemsFirst = items.filter((item) => item)[0];

// Rule: typescript/prefer-for-of
// oxlint-disable-next-line typescript/prefer-for-of
for (let i = 0; i < items.length; i++) {
  // oxlint-disable-next-line no-console
  console.log(items[i]);
}

// Rule: typescript/prefer-function-type
// oxlint-disable-next-line typescript/prefer-function-type
export function foo(example: { (): number }): number {
  return example();
}

// Rule: typescript/prefer-includes
// oxlint-disable-next-line typescript/prefer-includes
if (str.indexOf("world") !== -1) {
  // oxlint-disable-next-line no-console
  console.log("found");
}

const imOutside = 2;

export enum PreferLiteralEnumMember {
  // Rule: typescript/prefer-literal-enum-member
  // oxlint-disable-next-line typescript/prefer-literal-enum-member
  outer = imOutside,
  inner = 1,
  // oxlint-disable-next-line typescript/prefer-literal-enum-member
  innerB = inner,
}

declare const preferNullishCoalescing: string | null;

// Rule: typescript/prefer-nullish-coalescing
// oxlint-disable-next-line typescript/prefer-nullish-coalescing typescript/strict-boolean-expressions
export const preferNullishCoalescingResponse = preferNullishCoalescing || "default";

// Rule: typescript/prefer-optional-chain
// oxlint-disable-next-line typescript/prefer-optional-chain typescript/strict-boolean-expressions
export const preferOptionalChain = preferNullishCoalescing && preferNullishCoalescing.length;

export class Counter {
  // Rule: typescript/prefer-readonly
  // oxlint-disable-next-line typescript/prefer-readonly
  private value = 0;

  public getValue() {
    return this.value;
  }
}

// oxlint-disable-next-line no-shadow
export function update(items: string[]) {
  items.push("x");
}

export const preferReduceTypeParameter = items.reduce((acc: string[], curr) => {
  acc.push(curr.toString());

  return acc;
  // Rule: typescript/prefer-reduce-type-parameter
  // oxlint-disable-next-line typescript/prefer-reduce-type-parameter
}, [] as string[]);

const text = "value";

// Rule: typescript/prefer-regexp-exec
// oxlint-disable-next-line typescript/prefer-regexp-exec
text.match(/v/v);

export class Builder {
  private value = "";

  // Rule: typescript/prefer-return-this-type
  // oxlint-disable-next-line typescript/prefer-return-this-type no-shadow
  public setValue(value: string): Builder {
    this.value = value;

    return this;
  }
}

// Rule: typescript/prefer-string-starts-ends-with
// oxlint-disable-next-line no-unused-expressions typescript/prefer-string-starts-ends-with
str.slice(0, 3) === "foo";

// Rule: typescript/promise-function-async
// oxlint-disable-next-line typescript/promise-function-async
export function fetchData(): Promise<string> {
  // oxlint-disable-next-line typescript/promise-function-async
  return fetch("/api/data").then((res) => res.text());
}

export class RelatedGetterSetterPairs {
  private privateValue = 0;

  public set value(val: number) {
    this.privateValue = val;
  }

  // Rule: typescript/related-getter-setter-pairs
  // oxlint-disable-next-line typescript/related-getter-setter-pairs
  public get value(): string {
    return this.privateValue.toString();
  }
}

// Rule: typescript/require-array-sort-compare
// oxlint-disable-next-line typescript/require-array-sort-compare
items.sort();

// Rule: typescript/require-await
// oxlint-disable-next-line typescript/require-await
export async function processData() {
  return items.map((x) => x * 2);
}

declare const booleanValue: boolean;
declare const stringValue: string;

// Rule: typescript/restrict-plus-operands
// oxlint-disable-next-line typescript/restrict-plus-operands
export const sumValues = booleanValue + stringValue;

// Rule: typescript/restrict-template-expressions
// oxlint-disable-next-line typescript/no-base-to-string typescript/restrict-template-expressions
export const restrictTemplateExpressions = `Value: ${{}}`;

// Rule: typescript/strict-boolean-expressions
// oxlint-disable-next-line typescript/strict-boolean-expressions
if (stringNullable) {
  // oxlint-disable-next-line no-console
  console.log("string");
}

declare function run(cb: () => void): void;

// Rule: typescript/strict-void-return
// oxlint-disable-next-line typescript/strict-void-return
run(() => "value");

enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

export function getColorName(color: Color) {
  // Rule: typescript/switch-exhaustiveness-check
  // oxlint-disable-next-line typescript/switch-exhaustiveness-check
  switch (color) {
    case Color.Red:
      return "red";

    case Color.Green:
      return "green";

    // no default
  }

  return "blue";
}

const instance = new Builder();

// Rule: typescript/unbound-method
// oxlint-disable-next-line typescript/unbound-method
["abc"].map(instance.setValue);

export function unifiedSignatures(param: number): void;

// Rule: typescript/unified-signatures
// oxlint-disable-next-line typescript/unified-signatures
export function unifiedSignatures(param: string): void;

export function unifiedSignatures(_param: string | number) {
  return undefined;
}

declare const maybeNumber: number | undefined;

// Rule: typescript/no-confusing-non-null-assertion
// oxlint-disable-next-line eslint/eqeqeq typescript/no-confusing-non-null-assertion
export const confusingNonNullAssertion = maybeNumber! == 1;

const maybeString = Math.random() > 0.5 ? "value" : undefined;

// Rule: typescript/no-non-null-asserted-nullish-coalescing
// oxlint-disable-next-line typescript/no-unnecessary-condition typescript/no-non-null-asserted-nullish-coalescing
export const nonNullAssertedNullishCoalescing = maybeString! ?? "fallback";

// Rule: typescript/no-unnecessary-boolean-literal-compare
// oxlint-disable-next-line typescript/no-unnecessary-boolean-literal-compare
export const unnecessaryBooleanLiteralCompare = booleanValue === true;

export async function returnAwait() {
  try {
    // Rule: typescript/return-await
    // oxlint-disable-next-line typescript/return-await
    return Promise.resolve("value");
  } catch {
    return "fallback";
  }
}

// Rule: typescript/no-import-type-side-effects
// oxlint-disable-next-line typescript/no-import-type-side-effects
import { type EventEmitter } from "node:events";
// Rule: typescript/consistent-type-imports
// oxlint-disable-next-line eslint/no-duplicate-imports typescript/consistent-type-imports
import { Mode as ImportedMode } from "node:fs";
import type { Stats } from "node:fs";

export type { ImportedMode, EventEmitter };

// Rule: typescript/consistent-type-exports
// oxlint-disable-next-line typescript/consistent-type-exports
export { Stats };

// Rule: typescript/no-empty-object-type
// oxlint-disable-next-line typescript/consistent-type-definitions typescript/no-empty-object-type
export type NoEmptyObjectType = {};

export const tripleSlashReference = true;

// Rule: typescript/ban-ts-comment
// oxlint-disable-next-line typescript/ban-ts-comment
export const banTsComment = 1; // @ts-ignore

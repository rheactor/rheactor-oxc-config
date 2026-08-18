// oxlint-disable-next-line typescript/array-type max-classes-per-file
export const arrayTypeA: Array<number> = new Array<number>();

// oxlint-disable-next-line typescript/array-type
export const arrayTypeB: ReadonlyArray<number> = [1, 2, 3];

// oxlint-disable-next-line typescript/array-type
export const arrayTypeC: { abc: number }[] = [{ abc: 123 }];

// oxlint-disable-next-line typescript/await-thenable
export const awaitThenable = await 12;

// oxlint-disable-next-line no-constant-condition typescript/no-unnecessary-condition
if (false) {
  // @ts-ignore: Unreachable code error
  // oxlint-disable-next-line no-console
  console.log("hello");
}

export class ClassLiteralPropertyStyle {
  // oxlint-disable-next-line typescript/class-literal-property-style class-methods-use-this
  public get name() {
    return "oxc";
  }
}

// oxlint-disable-next-line typescript/consistent-generic-constructors
export const consistentGenericConstructors: Set<string> = new Set();

// oxlint-disable-next-line typescript/consistent-type-definitions
export type ConsistentIndexedObjectStyle = {
  // oxlint-disable-next-line typescript/consistent-indexed-object-style
  [key: string]: unknown;
};

type Number = number;

// oxlint-disable-next-line typescript/consistent-type-assertions
export const number = <Number>123;

export type { Number };

const dotNotation = { abc: 123 };

export const dotNotationAbc = dotNotation.abc;

export class ExplicitMemberAccessibility {
  // oxlint-disable-next-line typescript/explicit-member-accessibility
  get self() {
    return this;
  }
}

export interface MethodSignatureStyle {
  // oxlint-disable-next-line typescript/method-signature-style
  func: (arg: string) => number;
}

const items = [1, 2, 3];

// oxlint-disable-next-line typescript/no-array-delete
delete items[1];

// oxlint-disable-next-line no-console typescript/no-base-to-string
console.log({}.toString());

if (items instanceof Array) {
  // empty
}

function noop() {
  // empty
}

// oxlint-disable-next-line func-style
export const noConfusingVoidExpression = () => {
  noop();
};

/** @deprecated */
declare function deprecated(): string;

// oxlint-disable-next-line typescript/no-deprecated
deprecated();

export enum NoDuplicatedEnumValues {
  // oxlint-disable-next-line typescript/no-duplicate-enum-values
  ValueA = "A",
  ValueB = "A",
}

export type NoDuplicateTypeConstituents = "A";

const object: Record<string, number> = { abc: 123 };

// oxlint-disable-next-line typescript/no-dynamic-delete no-useless-concat
delete object["ab" + "c"];

// oxlint-disable-next-line typescript/no-empty-interface typescript/no-empty-object-type
export interface NoEmptyInterface {}

// oxlint-disable-next-line typescript/no-explicit-any
export const noExplicitAny: any = "123";

const numberOrNull: { bar: number } | null = null;

export const noExtraNonNullAssertion = numberOrNull!.bar;

// oxlint-disable-next-line typescript/no-extraneous-class
export class StaticConstants {
  public static readonly version = 42;
}

// oxlint-disable-next-line typescript/no-floating-promises
Promise.resolve();

// oxlint-disable-next-line guard-for-in typescript/no-for-in-array
for (const item in items) {
  // oxlint-disable-next-line no-console
  console.log(items[item]);
}

// oxlint-disable-next-line typescript/no-implied-eval
setTimeout('alert("Hi!");', 100);

import { type Mode, existsSync as _existsSync } from "node:fs";

export type { Mode };

// oxlint-disable-next-line typescript/no-inferrable-types
export const noInferrableTypes: number = 5;

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

// oxlint-disable-next-line typescript/no-meaningless-void-operator
void noMeaninglessVoidOperatorNever();

export interface NoMisusedNew {
  // oxlint-disable-next-line typescript/no-misused-new
  constructor(): void;
}

export enum NoMixedEnums {
  Open = 1,
  // oxlint-disable-next-line typescript/no-mixed-enums
  Closed = "closed",
}

// oxlint-disable-next-line no-unassigned-vars
let noNonNullAssertedNullishCoalescing!: string;

// oxlint-disable-next-line no-unused-expressions typescript/no-unnecessary-condition
noNonNullAssertedNullishCoalescing ?? "";

export function noNonNullAssertedOptionalChain(objectNullable?: { abc: 123 }) {
  // oxlint-disable-next-line typescript/no-non-null-asserted-optional-chain
  return objectNullable?.abc!;
}

// oxlint-disable-next-line typescript/no-redundant-type-constituents
export type NoRedundantTypeContituents = string | unknown;

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
    // oxlint-disable-next-line typescript/no-unnecessary-parameter-property-assignment
    this.name = name;
  }
}

export const noUnnecessaryTemplateExpression = `ab`;

function identity<T = string>(arg: T): T {
  return arg;
}

export const noUnnecessaryTypeArguments = identity("hello");

// oxlint-disable-next-line typescript/no-inferrable-types
const str: string = "hello";

export const noUnnecessaryTypeAssertion = str;

// oxlint-disable-next-line typescript/no-unnecessary-type-conversion
export const noUnnecessaryTypeConversion = String(str);

// oxlint-disable-next-line typescript/no-explicit-any
declare const anyValue: any;

// oxlint-disable-next-line no-shadow
function takesString(str: string): void {
  // oxlint-disable-next-line no-console
  console.log(str.length);
}

// oxlint-disable-next-line typescript/no-unsafe-argument
takesString(anyValue);

// oxlint-disable-next-line typescript/no-unsafe-assignment
export const strAny: string = anyValue;

// oxlint-disable-next-line typescript/no-unsafe-call
anyValue();

// oxlint-disable-next-line typescript/no-empty-interface typescript/no-unsafe-declaration-merging typescript/no-empty-object-type no-redeclare
interface NoUnsafeDeclarationMerging {}

// oxlint-disable-next-line typescript/no-extraneous-class
class NoUnsafeDeclarationMerging {}

export const noUnsafeDeclarationMerging = new NoUnsafeDeclarationMerging();

// oxlint-disable-next-line no-unused-vars prefer-const typescript/no-unsafe-function-type
let noParametersOrReturn: Function;

// oxlint-disable-next-line no-empty-function
noParametersOrReturn = () => {};

// oxlint-disable-next-line no-console typescript/no-unsafe-member-access
console.log(anyValue.foo);

export function getString(): string {
  // oxlint-disable-next-line typescript/no-unsafe-return
  return anyValue;
}

declare const stringLiteral: string;

// oxlint-disable-next-line typescript/no-unsafe-unary-minus
export const stringLiteralResponse = -stringLiteral;

// oxlint-disable-next-line typescript/no-useless-default-assignment
[1, 2, 3].map((item = 0) => item + 1);

// oxlint-disable-next-line typescript/no-useless-empty-export
export {};

// oxlint-disable-next-line typescript/no-wrapper-object-types
export const myObject: Object = "abc";

declare const stringNullable: string | null;

// oxlint-disable-next-line typescript/non-nullable-type-assertion-style
export const stringNullableResponse = stringNullable as string;

export function throwError() {
  // oxlint-disable-next-line typescript/only-throw-error
  throw "error";
}

export class Foo {
  // oxlint-disable-next-line typescript/parameter-properties
  public age: number;

  public constructor(
    private readonly name: string,
    age: number,
  ) {
    this.age = age;
  }
}

// oxlint-disable-next-line typescript/prefer-as-const
export const preferConst = { bar: "baz" as "baz" };

export enum PreferEnumInitializers {
  Open = 1,
  // oxlint-disable-next-line typescript/prefer-enum-initializers
  Close,
}

// oxlint-disable-next-line typescript/prefer-find
export const itemsFirst = items.filter((item) => item)[0];

// oxlint-disable-next-line typescript/prefer-for-of
for (let i = 0; i < items.length; i++) {
  // oxlint-disable-next-line no-console
  console.log(items[i]);
}

// oxlint-disable-next-line typescript/prefer-function-type
export function foo(example: { (): number }): number {
  return example();
}

if (str.includes("world")) {
  // oxlint-disable-next-line no-console
  console.log("found");
}

const imOutside = 2;

export enum PreferLiteralEnumMember {
  // oxlint-disable-next-line typescript/prefer-literal-enum-member
  outer = imOutside,
  inner = 1,
  // oxlint-disable-next-line typescript/prefer-literal-enum-member
  innerB = inner,
}

declare const preferNullishCoalescing: string | null;

// oxlint-disable-next-line typescript/prefer-nullish-coalescing typescript/strict-boolean-expressions
export const preferNullishCoalescingResponse = preferNullishCoalescing || "default";

// oxlint-disable-next-line typescript/prefer-optional-chain typescript/strict-boolean-expressions
export const preferOptionalChain = preferNullishCoalescing && preferNullishCoalescing.length;

export class Counter {
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
  // oxlint-disable-next-line typescript/prefer-reduce-type-parameter
}, [] as string[]);

const text = "value";

// oxlint-disable-next-line typescript/prefer-regexp-exec
text.match(/v/v);

export class Builder {
  private value = "";

  // oxlint-disable-next-line typescript/prefer-return-this-type no-shadow
  public setValue(value: string): Builder {
    this.value = value;

    return this;
  }
}

// oxlint-disable-next-line no-unused-expressions typescript/prefer-string-starts-ends-with
str.slice(0, 3) === "foo";

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

  // oxlint-disable-next-line typescript/related-getter-setter-pairs
  public get value(): string {
    return this.privateValue.toString();
  }
}

// oxlint-disable-next-line typescript/require-array-sort-compare
items.sort();

// oxlint-disable-next-line typescript/require-await
export async function processData() {
  return items.map((x) => x * 2);
}

declare const booleanValue: boolean;
declare const stringValue: string;

// oxlint-disable-next-line typescript/restrict-plus-operands
export const sumValues = booleanValue + stringValue;

// oxlint-disable-next-line typescript/no-base-to-string typescript/restrict-template-expressions
export const restrictTemplateExpressions = `Value: ${{}}`;

// oxlint-disable-next-line typescript/strict-boolean-expressions
if (stringNullable) {
  // oxlint-disable-next-line no-console
  console.log("string");
}

declare function run(cb: () => void): void;

// oxlint-disable-next-line typescript/strict-void-return
run(() => "value");

enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

export function getColorName(color: Color) {
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

// oxlint-disable-next-line typescript/unbound-method
["abc"].map(instance.setValue);

export function unifiedSignatures(param: number): void;

// oxlint-disable-next-line typescript/unified-signatures
export function unifiedSignatures(param: string): void;

export function unifiedSignatures(_param: string | number) {
  return undefined;
}

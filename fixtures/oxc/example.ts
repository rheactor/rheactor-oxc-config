// Rule: oxc/approx-constant
// oxlint-disable-next-line id-match oxc/approx-constant
export const log10e = 0.434294;

const string = "abc";

// Rule: oxc/bad-char-at-comparison
// oxlint-disable-next-line oxc/bad-char-at-comparison
if (string.at(0) === "abc") {
  // empty
}

// Rule: oxc/bad-match-all-arg
// oxlint-disable-next-line require-unicode-regexp oxc/bad-match-all-arg
export const matchAll = string.matchAll(/abc/);

// Rule: oxc/bad-min-max-func
// oxlint-disable-next-line oxc/bad-min-max-func
export const badClamp = Math.min(Math.max(100, 123), 0);

// Rule: oxc/bad-replace-all-arg
// oxlint-disable-next-line require-unicode-regexp oxc/bad-replace-all-arg
export const replaceAll = string.replaceAll(/abc/, "b");

export function branchesSharingCode() {
  // Rule: oxc/branches-sharing-code
  // oxlint-disable-next-line oxc/branches-sharing-code
  if (string === "abc") {
    // oxlint-disable-next-line no-console
    console.log("Hello");

    return 123;
    // oxlint-disable-next-line no-else-return
  } else {
    // oxlint-disable-next-line no-console
    console.log("Hello");

    return 456;
  }
}

const numberA: number = 123;
const numberB: number = 456;

// Rule: oxc/double-comparisons
// oxlint-disable-next-line oxc/double-comparisons
export const doubleComparisons = numberA === numberB || numberA < numberB;

// Rule: oxc/erasing-op
// oxlint-disable-next-line oxc/erasing-op
export const erasingOp = numberA * 0;

let numberC = 1;

// Rule: oxc/misrefactored-assign-op
// oxlint-disable-next-line oxc/misrefactored-assign-op
numberC += numberC + 1;

export const numberD = numberC;

export function missingThrow() {
  // Rule: oxc/missing-throw
  // oxlint-disable-next-line no-new oxc/missing-throw
  new Error();
}

const items = [1, 2, 3];

// Rule: oxc/no-accumulating-spread
// oxlint-disable-next-line oxc/no-accumulating-spread
export const noAccumulatingSpread = items.reduce((acc, item) => [...acc, item], [] as number[]);

const objects = [{ value: 1 }, { value: 2 }, { value: 3 }];

// Rule: oxc/no-map-spread
// oxlint-disable-next-line oxc/no-map-spread
export const noMapSpread = objects.map((obj) => ({ ...obj, valueB: obj.value * 2 }));

export function noThisInExportedFunction(this: string) {
  // Rule: oxc/no-this-in-exported-function
  // oxlint-disable-next-line no-console oxc/no-this-in-exported-function
  console.log(this);
}

// Rule: oxc/number-arg-out-of-range
// oxlint-disable-next-line oxc/number-arg-out-of-range
export const numberArgOutOfRange = Number(123).toString(64);

// Rule: oxc/only-used-in-recursion
// oxlint-disable-next-line oxc/only-used-in-recursion
export function onlyUsedInRecursion(valueA: number, valueB: number): number {
  if (valueA === 0) {
    return 1;
  }

  return onlyUsedInRecursion(valueA - 1, valueB);
}

// Rule: oxc/uninvoked-array-callback
// oxlint-disable-next-line oxc/uninvoked-array-callback
export const uninvokedArrayCallback = new Array(5).map(() => 123);

// Rule: oxc/no-const-enum
// oxlint-disable-next-line oxc/no-const-enum
export const enum ConstEnum {
  First = "first",
}

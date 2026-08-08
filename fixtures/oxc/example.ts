// oxlint-disable-next-line id-match oxc/approx-constant
export const log10e = 0.434294;

const string = "abc";

// oxlint-disable-next-line oxc/bad-char-at-comparison
if (string.at(0) === "abc") {
  // empty
}

// oxlint-disable-next-line require-unicode-regexp oxc/bad-match-all-arg
export const matchAll = string.matchAll(/abc/);

// oxlint-disable-next-line oxc/bad-min-max-func
export const badClamp = Math.min(Math.max(100, 123), 0);

// oxlint-disable-next-line require-unicode-regexp oxc/bad-replace-all-arg
export const replaceAll = string.replaceAll(/abc/, "b");

export function branchesSharingCode() {
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

// oxlint-disable-next-line oxc/double-comparisons
export const doubleComparisons = numberA === numberB || numberA < numberB;

// oxlint-disable-next-line oxc/erasing-op
export const erasingOp = numberA * 0;

let numberC = 1;

// oxlint-disable-next-line oxc/misrefactored-assign-op
numberC += numberC + 1;

export const numberD = numberC;

export function missingThrow() {
  // oxlint-disable-next-line no-new oxc/missing-throw
  new Error();
}

const items = [1, 2, 3];

// oxlint-disable-next-line oxc/no-accumulating-spread
export const noAccumulatingSpread = items.reduce((acc, item) => [...acc, item], [] as number[]);

const objects = [{ value: 1 }, { value: 2 }, { value: 3 }];

// oxlint-disable-next-line oxc/no-map-spread
export const noMapSpread = objects.map((obj) => ({ ...obj, valueB: obj.value * 2 }));

export function noThisInExportedFunction(this: string) {
  // oxlint-disable-next-line no-console oxc/no-this-in-exported-function
  console.log(this);
}

// oxlint-disable-next-line oxc/number-arg-out-of-range
export const numberArgOutOfRange = Number(123).toString(64);

// oxlint-disable-next-line oxc/only-used-in-recursion
export function onlyUsedInRecursion(valueA: number, valueB: number): number {
  if (valueA === 0) {
    return 1;
  }

  return onlyUsedInRecursion(valueA - 1, valueB);
}

// oxlint-disable-next-line oxc/uninvoked-array-callback
export const uninvokedArrayCallback = new Array(5).map((_) => 123);

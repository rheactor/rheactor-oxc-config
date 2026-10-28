export const promise = Promise.resolve()
  // Rule: promise/always-return
  // oxlint-disable-next-line promise/always-return promise/prefer-await-to-then
  .then(() => {
    // oxlint-disable-next-line no-console
    console.log(123);
  })
  // oxlint-disable-next-line promise/always-return promise/prefer-await-to-then
  .then(() => {
    // oxlint-disable-next-line no-console
    console.log(123);
  });

void Promise.resolve()
  // oxlint-disable-next-line promise/always-return promise/prefer-await-to-then
  .then(() => {
    // oxlint-disable-next-line no-console
    console.log(123);
  })
  // Rule: promise/prefer-await-to-then
  // oxlint-disable-next-line promise/prefer-await-to-then
  .then(() => {
    // oxlint-disable-next-line no-console
    console.log(123);
  });

export function avoidNew() {
  // Rule: promise/avoid-new
  // oxlint-disable-next-line promise/avoid-new
  return new Promise(() => {
    // empty
  });
}

avoidNew()
  // oxlint-disable-next-line promise/prefer-await-to-then
  .then(() => {
    // empty
  })
  // oxlint-disable-next-line promise/prefer-await-to-then
  .catch(() => {
    // empty
  });

function callback(..._args: unknown[]) {
  // empty
}

Promise.resolve()
  // Rule: promise/no-callback-in-promise
  // oxlint-disable-next-line promise/no-callback-in-promise promise/prefer-await-to-then
  .then(() => callback())
  // oxlint-disable-next-line promise/no-callback-in-promise promise/prefer-await-to-then
  .catch(() => callback());

// oxlint-disable-next-line promise/avoid-new
void new Promise((resolve, reject) => {
  if (Math.random()) {
    reject("error");
  }

  resolve("value");
});

// Rule: promise/no-nesting
// oxlint-disable-next-line promise/no-nesting promise/prefer-await-to-then
void avoidNew().then(() => avoidNew().then(() => 123));

// @ts-expect-error: new Promise
// Rule: promise/no-new-statics
// oxlint-disable-next-line promise/no-new-statics new-cap
export const noNewStatics = new Promise.resolve(value);

export function noPromiseInCallback(error: Error) {
  // oxlint-disable-next-line no-console
  console.log(error);

  // Rule: promise/no-promise-in-callback
  // oxlint-disable-next-line promise/no-promise-in-callback
  void Promise.all([]);
}

// oxlint-disable-next-line promise/prefer-await-to-then
void avoidNew().finally(() => 123);

// Rule: promise/no-return-wrap
// oxlint-disable-next-line promise/no-return-wrap promise/prefer-await-to-then
void avoidNew().then(() => Promise.resolve(4));

// Rule: promise/param-names
// oxlint-disable-next-line promise/avoid-new promise/param-names
void new Promise((_rejected, _resolved) => {
  // empty
});

// Rule: promise/catch-or-return
// oxlint-disable-next-line promise/catch-or-return promise/prefer-catch promise/prefer-await-to-then
avoidNew().then(
  () => 123,
  () => 456,
);

export function invalidPromiseParameters() {
  // @ts-expect-error: Promise.resolve accepts at most one argument.
  // Rule: promise/valid-params
  // oxlint-disable-next-line promise/valid-params
  return Promise.resolve(1, 2);
}

export function preferCatch(pendingPromise: Promise<number>) {
  // Rule: promise/prefer-catch
  // oxlint-disable-next-line promise/catch-or-return promise/prefer-await-to-then promise/prefer-catch
  pendingPromise.then(undefined, () => 0);
}

export function multipleResolved() {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<number>((resolve) => {
    resolve(1);

    // Rule: promise/no-multiple-resolved
    // oxlint-disable-next-line promise/no-multiple-resolved
    resolve(2);
  });
}

export function returnInFinally() {
  // oxlint-disable-next-line eslint/arrow-body-style
  return Promise.resolve(1).finally(() => {
    // Rule: promise/no-return-in-finally
    // oxlint-disable-next-line promise/no-return-in-finally
    return 2;
  });
}

export const promise = Promise.resolve()
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
  // oxlint-disable-next-line promise/prefer-await-to-then
  .then(() => {
    // oxlint-disable-next-line no-console
    console.log(123);
  });

export function avoidNew() {
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

// oxlint-disable-next-line promise/no-nesting promise/prefer-await-to-then
void avoidNew().then(() => avoidNew().then(() => 123));

// @ts-ignore: new Promise
// oxlint-disable-next-line promise/no-new-statics new-cap
export const noNewStatics = new Promise.resolve(value);

export function noPromiseInCallback(error: Error) {
  // oxlint-disable-next-line no-console
  console.log(error);

  // oxlint-disable-next-line promise/no-promise-in-callback
  void Promise.all([]);
}

// oxlint-disable-next-line promise/prefer-await-to-then
void avoidNew().finally(() => 123);

// oxlint-disable-next-line promise/no-return-wrap promise/prefer-await-to-then
void avoidNew().then(() => Promise.resolve(4));

// oxlint-disable-next-line promise/avoid-new promise/param-names
void new Promise((_rejected, _resolved) => {
  // empty
});

// oxlint-disable-next-line promise/catch-or-return promise/prefer-catch promise/prefer-await-to-then
avoidNew().then(
  () => 123,
  () => 456,
);

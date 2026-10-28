import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  test,
  vi,
  // Rule: vitest/consistent-vitest-vi
  // oxlint-disable-next-line vitest/consistent-vitest-vi
  vitest,
} from "vitest";

// Rule: vitest/no-mocks-import
// oxlint-disable-next-line vitest/no-mocks-import
import { named as _named } from "#fixtures/vitest/__mocks__/support";

// oxlint-disable-next-line vitest/consistent-vitest-vi vitest/prefer-import-in-mock vitest/require-hook
vitest.mock("", { spy: true });

describe("example", () => {
  // empty
});

declare const numberValue: number;

// Rule: vitest/no-identical-title
// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  interface Test {
    input: string;
    output: string;
  }

  const tests: Test[] = [{ input: "example", output: "example" }];

  // Rule: vitest/consistent-each-for
  // oxlint-disable-next-line vitest/consistent-each-for
  it.for(tests)("example", () => {
    expect(true).toBe(true);
  });

  // Rule: vitest/consistent-test-it
  // oxlint-disable-next-line vitest/consistent-test-it vitest/no-identical-title
  test("example", () => {
    expect(true).toBe(true);
  });

  // Rule: vitest/expect-expect
  // oxlint-disable-next-line vitest/expect-expect vitest/no-identical-title vitest/prefer-todo
  it("example", () => {
    // empty
  });

  // Rule: vitest/hoisted-apis-on-top
  // oxlint-disable-next-line vitest/hoisted-apis-on-top vitest/prefer-import-in-mock
  vi.mock("", { spy: true });

  // Rule: vitest/no-conditional-tests
  // oxlint-disable-next-line vitest/no-conditional-tests
  if (Math.random()) {
    it("example", () => {
      // Rule: vitest/no-alias-methods
      // oxlint-disable-next-line vitest/no-alias-methods
      expect(it).toBeCalledWith();

      // Rule: vitest/no-conditional-in-test
      // oxlint-disable-next-line vitest/no-conditional-in-test
      if (Math.random()) {
        // Rule: vitest/no-conditional-expect
        // oxlint-disable-next-line vitest/no-conditional-expect
        expect(true).toBe(true);
      }
    });
  }

  // Rule: vitest/no-disabled-tests
  // oxlint-disable-next-line vitest/no-disabled-tests vitest/prefer-todo
  it.skip("foo", () => {
    // empty
  });

  // Rule: vitest/prefer-hooks-on-top
  // oxlint-disable-next-line vitest/prefer-hooks-on-top
  beforeEach(() => {
    // empty
  });

  // Rule: vitest/no-duplicate-hooks
  // oxlint-disable-next-line vitest/no-duplicate-hooks vitest/prefer-hooks-on-top
  beforeEach(() => {
    // empty
  });

  // Rule: vitest/no-focused-tests
  // oxlint-disable-next-line vitest/no-focused-tests vitest/no-identical-title
  it.only("foo", () => {
    expect(true).toBe(true);

    const property = 123;

    // Rule: vitest/no-interpolation-in-snapshots
    // oxlint-disable-next-line vitest/no-interpolation-in-snapshots
    expect({}).toMatchInlineSnapshot(`Object { property: ${property} }`);
  });

  // Rule: vitest/no-standalone-expect
  // oxlint-disable-next-line vitest/no-standalone-expect vitest/require-hook
  expect(true).toBe(true);

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // Rule: vitest/no-test-return-statement
    // oxlint-disable-next-line vitest/no-test-return-statement
    return expect(true).toBe(true);
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", async () => {
    expect.assertions(1);

    // Rule: vitest/no-unneeded-async-expect-function
    // oxlint-disable-next-line vitest/no-unneeded-async-expect-function
    await expect(async () => {
      await Promise.resolve();
    }).rejects.toThrow("");
  });
  // Rule: vitest/padding-around-after-all-blocks
  // oxlint-disable-next-line vitest/padding-around-after-all-blocks vitest/prefer-hooks-on-top
  afterAll(() => {
    // empty
  });
  // Rule: vitest/padding-around-test-blocks
  // oxlint-disable-next-line vitest/no-identical-title vitest/padding-around-test-blocks
  it("example", () => {
    expect(true).toBe(true);
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // Rule: vitest/prefer-called-exactly-once-with
    // oxlint-disable-next-line vitest/prefer-called-exactly-once-with
    expect(() => {
      // empty
    }).toHaveBeenCalledOnce();
    expect(() => {
      // empty
    }).toHaveBeenCalledWith("foo");
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    expect(() => {
      // empty
      // oxlint-disable-next-line vitest/prefer-called-once vitest/no-alias-methods
    }).toBeCalledTimes(1);
    expect(() => {
      // empty
      // Rule: vitest/prefer-called-once
      // oxlint-disable-next-line vitest/prefer-called-once
    }).toHaveBeenCalledTimes(1);
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    expect(() => {
      // empty
      // Rule: vitest/prefer-called-with
      // oxlint-disable-next-line vitest/no-alias-methods vitest/prefer-called-with
    }).toBeCalled();
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // Rule: vitest/prefer-comparison-matcher
    // oxlint-disable-next-line vitest/prefer-comparison-matcher
    expect(numberValue > 5).toBe(true);
  });
});

// Rule: vitest/prefer-describe-function-title
// oxlint-disable-next-line vitest/prefer-describe-function-title
describe("it", () => {
  // Rule: vitest/prefer-each
  // oxlint-disable-next-line vitest/prefer-each
  for (const item of [] as number[]) {
    it(`Item: ${item}`, () => {
      expect(item).toBe("foo");
    });
  }

  it("example", () => {
    // Rule: vitest/prefer-equality-matcher
    // oxlint-disable-next-line vitest/prefer-equality-matcher
    expect(numberValue === 5).toBe(true);
  });

  // oxlint-disable-next-line vitest/no-identical-title vitest/prefer-expect-assertions
  it("example", async () => {
    // oxlint-disable-next-line vitest/prefer-equality-matcher
    expect(numberValue === 5).toBe(true);

    await Promise.resolve();
  });

  // Rule: vitest/prefer-expect-assertions
  // oxlint-disable-next-line vitest/prefer-expect-assertions
  it("passes", async () => {
    // Rule: vitest/prefer-expect-resolves
    // oxlint-disable-next-line vitest/prefer-expect-resolves
    expect(await Promise.resolve()).toBe(true);
  });

  // oxlint-disable-next-line vitest/prefer-hooks-on-top
  beforeEach(() => {
    // empty
  });

  // Rule: vitest/prefer-hooks-in-order
  // oxlint-disable-next-line vitest/prefer-hooks-in-order vitest/prefer-hooks-on-top
  beforeAll(() => {
    // empty
  });

  it("type checking", () => {
    // Rule: vitest/prefer-expect-type-of
    // oxlint-disable-next-line vitest/prefer-expect-type-of
    expect(typeof "hello").toBe("string");
  });
});

// Rule: vitest/prefer-import-in-mock
// oxlint-disable-next-line vitest/prefer-import-in-mock
vi.mock("./path/to/module");

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  it.each([])("example", async () => {
    expect.hasAssertions();

    const { example } = await Promise.resolve({ example: 123 });

    // Rule: vitest/prefer-snapshot-hint
    // oxlint-disable-next-line vitest/prefer-snapshot-hint
    expect(example).toMatchSnapshot();
    // oxlint-disable-next-line vitest/prefer-snapshot-hint
    expect(example).toMatchSnapshot();
  });
});

// Rule: vitest/prefer-spy-on
// oxlint-disable-next-line vitest/prefer-spy-on vitest/require-mock-type-parameters
Date.now = vi.fn();

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  it("example", () => {
    // Rule: vitest/prefer-strict-boolean-matchers
    // oxlint-disable-next-line vitest/prefer-strict-boolean-matchers
    expect(true).toBeTruthy();

    // Rule: vitest/prefer-strict-equal
    // oxlint-disable-next-line vitest/prefer-strict-equal
    expect({ abc: "a", def: undefined }).toEqual({ abc: "a" });

    // Rule: vitest/prefer-to-be
    // oxlint-disable-next-line vitest/prefer-to-be
    expect(numberValue).not.toStrictEqual(5);

    // Rule: vitest/prefer-to-contain
    // oxlint-disable-next-line vitest/prefer-to-contain
    expect([1].includes(1)).toBe(true);

    // Rule: vitest/prefer-to-have-length
    // oxlint-disable-next-line vitest/prefer-to-have-length
    expect([].length).toBe(1);
  });

  // Rule: vitest/prefer-todo
  // oxlint-disable-next-line vitest/no-identical-title vitest/expect-expect vitest/prefer-todo
  it("example", () => {
    // empty
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // Rule: vitest/require-awaited-expect-poll
    // oxlint-disable-next-line vitest/require-awaited-expect-poll
    expect.poll(() => document.querySelector(".element")).toBeDefined();
  });
});

const database = new Set([1, 2, 3]);

function clearDatabase() {
  database.clear();
}

// Rule: vitest/require-hook
// oxlint-disable-next-line vitest/require-hook
clearDatabase();

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  it.concurrent("myLogic", () => {
    // Rule: vitest/require-local-test-context-for-concurrent-snapshots
    // oxlint-disable-next-line vitest/require-local-test-context-for-concurrent-snapshots
    expect(true).toMatchSnapshot();
  });

  it("example", () => {
    // Rule: vitest/require-mock-type-parameters
    // oxlint-disable-next-line vitest/require-mock-type-parameters
    const mocked = vi.fn();

    // Rule: vitest/require-to-throw-message
    // oxlint-disable-next-line vitest/require-to-throw-message
    expect(mocked).toThrow();
  });
});

// Rule: vitest/require-top-level-describe
// oxlint-disable-next-line vitest/require-top-level-describe vitest/warn-todo
test.todo("my test");

// Rule: vitest/valid-describe-callback
// oxlint-disable-next-line vitest/valid-describe-callback
describe("myFunction()", (_done) => {
  // Rule: vitest/warn-todo
  // oxlint-disable-next-line vitest/warn-todo
  it.todo("my test");

  it("example", () => {
    // Rule: vitest/valid-expect
    // oxlint-disable-next-line vitest/valid-expect
    expect("something");

    // Rule: vitest/valid-expect-in-promise
    // oxlint-disable-next-line vitest/valid-expect-in-promise
    Promise.resolve().then(() => {
      expect(1).toBe(1);
    });
  });

  // Rule: vitest/valid-title
  // oxlint-disable-next-line vitest/valid-title
  it("", () => {
    expect(1).toBe(1);
  });

  // oxlint-disable-next-line vitest/warn-todo
  it.todo("foo", () => {
    expect(1).toBe(1);
  });
});

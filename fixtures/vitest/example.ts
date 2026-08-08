import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  test,
  vi,
  // oxlint-disable-next-line vitest/consistent-vitest-vi
  vitest,
} from "vitest";

// oxlint-disable-next-line vitest/no-mocks-import
import { named as _named } from "#fixtures/vitest/__mocks__/support";

// oxlint-disable-next-line vitest/consistent-vitest-vi vitest/prefer-import-in-mock vitest/require-hook
vitest.mock("", { spy: true });

describe("example", () => {
  // empty
});

declare const numberValue: number;

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  interface Test {
    input: string;
    output: string;
  }

  const tests: Test[] = [{ input: "example", output: "example" }];

  // oxlint-disable-next-line vitest/consistent-each-for
  it.for(tests)("example", () => {
    expect(true).toBe(true);
  });

  // oxlint-disable-next-line vitest/consistent-test-it vitest/no-identical-title
  test("example", () => {
    expect(true).toBe(true);
  });

  // oxlint-disable-next-line vitest/expect-expect vitest/no-identical-title vitest/prefer-todo
  it("example", () => {
    // empty
  });

  // oxlint-disable-next-line vitest/hoisted-apis-on-top vitest/prefer-import-in-mock
  vi.mock("", { spy: true });

  // oxlint-disable-next-line vitest/no-conditional-tests
  if (Math.random()) {
    it("example", () => {
      // oxlint-disable-next-line vitest/no-alias-methods
      expect(it).toBeCalledWith();

      // oxlint-disable-next-line vitest/no-conditional-in-test
      if (Math.random()) {
        // oxlint-disable-next-line vitest/no-conditional-expect
        expect(true).toBe(true);
      }
    });
  }

  // oxlint-disable-next-line vitest/no-disabled-tests vitest/prefer-todo
  it.skip("foo", () => {
    // empty
  });

  // oxlint-disable-next-line vitest/prefer-hooks-on-top
  beforeEach(() => {
    // empty
  });

  // oxlint-disable-next-line vitest/no-duplicate-hooks vitest/prefer-hooks-on-top
  beforeEach(() => {
    // empty
  });

  // oxlint-disable-next-line vitest/no-focused-tests vitest/no-identical-title
  it.only("foo", () => {
    expect(true).toBe(true);

    const property = 123;

    // oxlint-disable-next-line vitest/no-interpolation-in-snapshots
    expect({}).toMatchInlineSnapshot(`Object { property: ${property} }`);
  });

  // oxlint-disable-next-line vitest/no-standalone-expect vitest/require-hook
  expect(true).toBe(true);

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // oxlint-disable-next-line vitest/no-test-return-statement
    return expect(true).toBe(true);
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", async () => {
    expect.assertions(1);

    // oxlint-disable-next-line vitest/no-unneeded-async-expect-function
    await expect(async () => {
      await Promise.resolve();
    }).rejects.toThrow("");
  });
  // oxlint-disable-next-line vitest/padding-around-after-all-blocks vitest/prefer-hooks-on-top
  afterAll(() => {
    // empty
  });
  // oxlint-disable-next-line vitest/no-identical-title vitest/padding-around-test-blocks
  it("example", () => {
    expect(true).toBe(true);
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
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
      // oxlint-disable-next-line vitest/prefer-called-once
    }).toHaveBeenCalledTimes(1);
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    expect(() => {
      // empty
      // oxlint-disable-next-line vitest/no-alias-methods vitest/prefer-called-with
    }).toBeCalled();
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // oxlint-disable-next-line vitest/prefer-comparison-matcher
    expect(numberValue > 5).toBe(true);
  });
});

// oxlint-disable-next-line vitest/prefer-describe-function-title
describe("it", () => {
  // oxlint-disable-next-line vitest/prefer-each
  for (const item of [] as number[]) {
    it(`Item: ${item}`, () => {
      expect(item).toBe("foo");
    });
  }

  it("example", () => {
    // oxlint-disable-next-line vitest/prefer-equality-matcher
    expect(numberValue === 5).toBe(true);
  });

  // oxlint-disable-next-line vitest/no-identical-title vitest/prefer-expect-assertions
  it("example", async () => {
    // oxlint-disable-next-line vitest/prefer-equality-matcher
    expect(numberValue === 5).toBe(true);

    await Promise.resolve();
  });

  // oxlint-disable-next-line vitest/prefer-expect-assertions
  it("passes", async () => {
    // oxlint-disable-next-line vitest/prefer-expect-resolves
    expect(await Promise.resolve()).toBe(true);
  });

  // oxlint-disable-next-line vitest/prefer-hooks-on-top
  beforeEach(() => {
    // empty
  });

  // oxlint-disable-next-line vitest/prefer-hooks-in-order vitest/prefer-hooks-on-top
  beforeAll(() => {
    // empty
  });

  it("type checking", () => {
    // oxlint-disable-next-line vitest/prefer-expect-type-of
    expect(typeof "hello").toBe("string");
  });
});

// oxlint-disable-next-line vitest/prefer-import-in-mock
vi.mock("./path/to/module");

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  it.each([])("example", async () => {
    expect.hasAssertions();

    const { example } = await Promise.resolve({ example: 123 });

    // oxlint-disable-next-line vitest/prefer-snapshot-hint
    expect(example).toMatchSnapshot();
    // oxlint-disable-next-line vitest/prefer-snapshot-hint
    expect(example).toMatchSnapshot();
  });
});

// oxlint-disable-next-line vitest/prefer-spy-on vitest/require-mock-type-parameters
Date.now = vi.fn();

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  it("example", () => {
    // oxlint-disable-next-line vitest/prefer-strict-boolean-matchers
    expect(true).toBeTruthy();

    // oxlint-disable-next-line vitest/prefer-strict-equal
    expect({ abc: "a", def: undefined }).toEqual({ abc: "a" });

    // oxlint-disable-next-line vitest/prefer-to-be
    expect(numberValue).not.toStrictEqual(5);

    // oxlint-disable-next-line vitest/prefer-to-contain
    expect([1].includes(1)).toBe(true);

    // oxlint-disable-next-line vitest/prefer-to-have-length
    expect([].length).toBe(1);
  });

  // oxlint-disable-next-line vitest/no-identical-title vitest/expect-expect vitest/prefer-todo
  it("example", () => {
    // empty
  });

  // oxlint-disable-next-line vitest/no-identical-title
  it("example", () => {
    // oxlint-disable-next-line vitest/require-awaited-expect-poll
    expect.poll(() => document.querySelector(".element")).toBeDefined();
  });
});

const database = new Set([1, 2, 3]);

function clearDatabase() {
  database.clear();
}

// oxlint-disable-next-line vitest/require-hook
clearDatabase();

// oxlint-disable-next-line vitest/no-identical-title
describe("example", () => {
  it.concurrent("myLogic", () => {
    // oxlint-disable-next-line vitest/require-local-test-context-for-concurrent-snapshots
    expect(true).toMatchSnapshot();
  });

  it("example", () => {
    // oxlint-disable-next-line vitest/require-mock-type-parameters
    const mocked = vi.fn();

    // oxlint-disable-next-line vitest/require-to-throw-message
    expect(mocked).toThrow();
  });
});

// oxlint-disable-next-line vitest/require-top-level-describe vitest/warn-todo
test.todo("my test");

// oxlint-disable-next-line vitest/valid-describe-callback
describe("myFunction()", (_done) => {
  // oxlint-disable-next-line vitest/warn-todo
  it.todo("my test");

  it("example", () => {
    // oxlint-disable-next-line vitest/valid-expect
    expect("something");

    // oxlint-disable-next-line vitest/valid-expect-in-promise
    Promise.resolve().then(() => {
      expect(1).toBe(1);
    });
  });

  // oxlint-disable-next-line vitest/valid-title
  it("", () => {
    expect(1).toBe(1);
  });

  // oxlint-disable-next-line vitest/warn-todo
  it.todo("foo", () => {
    expect(1).toBe(1);
  });
});

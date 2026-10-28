"use strict";

export const test = 123;

// Rule: import/first
// oxlint-disable-next-line import/first
import { type Mode } from "node:fs";

// @ts-expect-error: css
// oxlint-disable-next-line import/first
import "#fixtures/import/example.css";

// Rule: import/no-namespace
// oxlint-disable-next-line import/first import/no-namespace
import * as path from "node:path";

// Rule: import/no-empty-named-blocks
// oxlint-disable-next-line import/first import/no-empty-named-blocks
import {} from "#fixtures/eslint/example";
// Rule: import/no-self-import
// oxlint-disable-next-line import/first import/no-cycle import/no-self-import  import/newline-after-import
import { named as namedB } from "#fixtures/import/example";
export const mode: Mode = "r";

export const named = 123;

// Rule: import/export
// oxlint-disable-next-line import/export import/no-cycle
export * from "#fixtures/import/support";

// oxlint-disable-next-line no-console
console.log(path.basename(""), namedB);

// @ts-expect-error: This fixture requests a default export from a named-only module.
// Rule: import/default
// oxlint-disable-next-line import/first import/default
import missingDefault from "#fixtures/import/support";

export const importedDefault = missingDefault;

// oxlint-disable-next-line eslint/no-duplicate-imports import/first import/no-namespace
import * as support from "#fixtures/import/support";

// @ts-expect-error: This fixture reads a name that is not exported by the module.
// Rule: import/namespace
// oxlint-disable-next-line import/namespace
export const missingNamespaceMember = support.notExported;

// Rule: import/no-anonymous-default-export
// oxlint-disable-next-line import/no-anonymous-default-export
export default () => ({ value: 1 });

// Rule: import/no-mutable-exports
// oxlint-disable-next-line import/no-mutable-exports
export let mutableValue = 1;

mutableValue = 2;

// Rule: import/no-unassigned-import
// oxlint-disable-next-line import/first import/no-unassigned-import
import "node:fs";
// Rule: import/newline-after-import
// oxlint-disable-next-line import/first import/newline-after-import
import { sep } from "node:path";
export const pathSeparator = sep;

"use strict";

export const test = 123;

// oxlint-disable-next-line import/first
import { type Mode } from "node:fs";

// @ts-ignore: css
// oxlint-disable-next-line import/first
import "#fixtures/import/example.css";

// oxlint-disable-next-line import/first import/no-namespace
import * as path from "node:path";

// oxlint-disable-next-line import/first import/no-empty-named-blocks
import {} from "#fixtures/eslint/example";
// oxlint-disable-next-line import/first import/no-cycle import/no-self-import  import/newline-after-import
import { named as namedB } from "#fixtures/import/example";
export const mode: Mode = "r";

export const named = 123;

// oxlint-disable-next-line import/export import/no-cycle
export * from "#fixtures/import/support";

// oxlint-disable-next-line no-console
console.log(path.basename(""), namedB);

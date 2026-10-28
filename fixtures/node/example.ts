import { existsSync } from "node:fs";

// Rule: node/no-path-concat
// oxlint-disable-next-line node/no-path-concat
export const filepath = `${__dirname}/foo.js`;

// Rule: node/no-sync
// oxlint-disable-next-line node/no-sync
existsSync("/");

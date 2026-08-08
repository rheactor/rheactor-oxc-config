import { existsSync } from "node:fs";

// oxlint-disable-next-line node/no-path-concat
export const filepath = `${__dirname}/foo.js`;

// oxlint-disable-next-line node/no-sync
existsSync("/");

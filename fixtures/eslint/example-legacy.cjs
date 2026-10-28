// oxlint-disable-next-line eslint/prefer-const
let deletable = 123;
// Rule: eslint/no-delete-var
// oxlint-disable-next-line eslint/no-delete-var
delete deletable;

// Rule: eslint/no-nonoctal-decimal-escape
// oxlint-disable-next-line eslint/no-nonoctal-decimal-escape
const nonoctalDecimalEscape = "\8";
void nonoctalDecimalEscape;

// Rule: eslint/no-with
// oxlint-disable-next-line eslint/no-with
with ({ value: 123 }) {
  value += 1;
}

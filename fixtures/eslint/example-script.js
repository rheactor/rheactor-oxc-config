// Rule: eslint/max-classes-per-file
// oxlint-disable-next-line eslint/max-classes-per-file
class DuplicateClassMembers {
  // Rule: eslint/no-dupe-class-members
  // oxlint-disable-next-line eslint/class-methods-use-this eslint/no-dupe-class-members
  value() {
    return 1;
  }

  // oxlint-disable-next-line eslint/class-methods-use-this
  value() {
    return 2;
  }
}

class GetterReturn {
  // Rule: eslint/getter-return
  // oxlint-disable-next-line eslint/class-methods-use-this eslint/getter-return
  get value() {
    // empty
  }
}

// oxlint-disable-next-line eslint/no-implicit-globals
function noRedeclare() {
  // Rule: eslint/no-redeclare
  // oxlint-disable-next-line eslint/no-var eslint/no-redeclare
  var redeclared = 1;
  // oxlint-disable-next-line eslint/no-var
  var redeclared = 2;

  return redeclared;
}

// Rule: eslint/no-implicit-globals
// oxlint-disable-next-line eslint/no-var eslint/no-implicit-globals
var implicitGlobal = 123;
void implicitGlobal;

void DuplicateClassMembers;
void GetterReturn;
void noRedeclare;

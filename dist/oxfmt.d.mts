//#region oxfmt.config.d.ts
declare const _default: {
  ignorePatterns: string[];
  jsdoc: {
    addDefaultToDescription: false;
    preferCodeFences: true;
    separateReturnsFromParam: true;
    separateTagGroups: true;
  };
  proseWrap: "always";
  sortImports: true;
  sortPackageJson: {
    sortScripts: true;
  };
  sortTailwindcss: {
    functions: string[];
  };
};
//#endregion
export { _default as default };
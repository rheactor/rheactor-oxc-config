import type { JSX } from "react/jsx-runtime";

interface Properties {
  item?: JSX.Element;
  array?: number[];
  obj?: object;
  fn?(this: void): void;
}

export function Component({ ..._props }: Properties) {
  return (
    <div>
      <Component
        // oxlint-disable-next-line react-perf/jsx-no-jsx-as-prop
        item={<div />}
        // oxlint-disable-next-line react-perf/jsx-no-new-array-as-prop
        array={[1, 2, 3]}
        // oxlint-disable-next-line react-perf/jsx-no-new-object-as-prop
        obj={{ abc: 123 }}
      />
    </div>
  );
}

import {
  Component,
  Children,
  cloneElement,
  createContext,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { PropsWithChildren } from "react";

interface Properties {
  items?: number[];
  string: string;
  isBoolean: boolean;
  onEvent?(this: void): void;
}

// Rule: react/function-component-definition
// oxlint-disable-next-line react/function-component-definition react/jsx-no-useless-fragment
export const Component_B = () => <></>;

// oxlint-disable-next-line react/no-multi-comp
export function ComponentC({ isBoolean, children }: PropsWithChildren & Partial<Properties>) {
  return (
    <div>
      {isBoolean}

      {/* Rule: react/no-react-children */}
      {/* oxlint-disable-next-line react/no-react-children */}
      <div>{Children.toArray(children)}</div>
    </div>
  );
}

// Rule: react/no-object-type-as-default-prop
// oxlint-disable-next-line react/no-multi-comp react/no-object-type-as-default-prop
export function ReactPurity({ items = [1, 2, 3], string, isBoolean, onEvent }: Properties) {
  const [state, setState] = useState(0);

  useEffect(
    () => {
      console.log(string, isBoolean);

      setState(123);

      console.log(state);
    },
    // Rule: react/exhaustive-deps
    // oxlint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const eventHandler = useCallback(() => {
    onEvent?.();
  }, [onEvent]);

  const props = { isBoolean };

  // Rule: react/no-unstable-nested-components
  // oxlint-disable-next-line react/no-unstable-nested-components
  function UnstableNestedComponent() {
    return <div />;
  }

  if (Math.random()) {
    // Rule: react/rules-of-hooks
    // oxlint-disable-next-line react-hooks/rules-of-hooks
    const [invalidState, setInvalidState] = useState(false);

    setInvalidState(true);

    console.log(invalidState);
  }

  return (
    <>
      {/* Rule: react/button-has-type */}
      {/* oxlint-disable-next-line react/button-has-type */}
      <button>Example</button>

      {/* Rule: react/checked-requires-onchange-or-readonly */}
      {/* oxlint-disable-next-line react/checked-requires-onchange-or-readonly */}
      <input type="checkbox" checked />

      {/* Rule: react/iframe-missing-sandbox */}
      {/* oxlint-disable-next-line react/iframe-missing-sandbox */}
      <iframe />

      <ReactPurity
        // Rule: react/jsx-curly-brace-presence
        // oxlint-disable-next-line react/jsx-curly-brace-presence
        string={"123"}
        // Rule: react/jsx-boolean-value
        // oxlint-disable-next-line react/jsx-boolean-value
        isBoolean={true}
        // Rule: react/jsx-handler-names
        // oxlint-disable-next-line react/jsx-handler-names
        onEvent={eventHandler}
      />

      {/* Rule: react/jsx-fragments */}
      {/* oxlint-disable-next-line react/jsx-fragments react/jsx-no-useless-fragment */}
      <Fragment>Example</Fragment>

      {/* Rule: react/jsx-key */}
      {/* oxlint-disable-next-line react/jsx-key */}
      {[1, 2, 3].map(() => (
        // Rule: react/jsx-pascal-case
        // oxlint-disable-next-line react/jsx-pascal-case
        <Component_B />
      ))}

      {/* Rule: react/jsx-no-comment-textnodes */}
      {/* oxlint-disable-next-line react/jsx-no-comment-textnodes react/jsx-no-useless-fragment */}
      <>// Example</>

      {/* Rule: react/jsx-no-target-blank */}
      {/* oxlint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://google.com" target="_blank">
        Test
      </a>

      {/* Rule: react/jsx-props-no-spread-multi */}
      {/* oxlint-disable-next-line react/jsx-props-no-spread-multi react/no-children-prop react/self-closing-comp */}
      <ComponentC {...props} children="Test" {...props}></ComponentC>

      {[1, 2, 3].map((item, key) => (
        // Rule: react/no-array-index-key
        // oxlint-disable-next-line react/no-array-index-key
        <div key={key}>{item}</div>
      ))}

      {items.map((item) =>
        // Rule: react/no-clone-element
        // oxlint-disable-next-line react/no-clone-element
        cloneElement(<div>{item}</div>, { item }),
      )}

      {/* Rule: react/no-danger-with-children */}
      {/* oxlint-disable-next-line react/no-danger-with-children */}
      <div
        // Rule: react/no-danger
        // oxlint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: "Hello World" }}
      >
        Teste
      </div>

      {/* Rule: react/no-unescaped-entities */}
      {/* oxlint-disable-next-line react/no-unescaped-entities */}
      <div>'</div>

      <UnstableNestedComponent />

      {/* Rule: react/self-closing-comp */}
      {/* oxlint-disable-next-line react/self-closing-comp */}
      <br></br>
    </>
  );
}

const Context = createContext({});

// oxlint-disable-next-line react/no-multi-comp
export function ContextProvider() {
  const [state, setState] = useState(0);

  useEffect(() => {
    // Rule: react/set-state-in-effect
    // oxlint-disable-next-line react/set-state-in-effect
    setState(123);
  }, []);

  // Rule: react/jsx-no-constructed-context-values
  // oxlint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={{ state }}>Example</Context.Provider>;
}

// Rule: react/only-export-components
// oxlint-disable-next-line react/only-export-components
export const onlyExportsComponents = 123;

// oxlint-disable-next-line react/no-multi-comp
export function ErrorBoundaries() {
  try {
    // Rule: react/error-boundaries
    // oxlint-disable-next-line react/error-boundaries
    return <div />;
  } catch {
    return null;
  }
}

// oxlint-disable-next-line no-unused-vars
let globalVariable = 123;

// oxlint-disable-next-line react/no-multi-comp
export function ReactGlobals() {
  // Rule: react/globals
  // oxlint-disable-next-line react/globals
  globalVariable = 456;

  return <div />;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactImmutability() {
  // Rule: react/hook-use-state
  // oxlint-disable-next-line react/hook-use-state
  const [state] = useState({ a: 0 });

  // Rule: react/immutability
  // oxlint-disable-next-line react/immutability
  state.a = 1; // mutates state directly

  return <div>{state.a}</div>;
}

function useHook() {
  throw new Error("Function not implemented.");
}

// oxlint-disable-next-line react/only-export-components
export function usePreserveManualMemoization(x: number) {
  const value: number[] = [];

  useHook();

  value.push(x);

  // Rule: react/preserve-manual-memoization
  // oxlint-disable-next-line react/preserve-manual-memoization react-hooks/exhaustive-deps
  return useCallback(() => [value], [value]);
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactPurityB() {
  // Rule: react/purity
  // oxlint-disable-next-line react/purity
  const rand = Math.random();

  return <div>{rand}</div>;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactRefs() {
  const ref = useRef(null);

  // Rule: react/refs
  // oxlint-disable-next-line react/refs
  const value = ref.current;

  return <div>{value}</div>;
}

export function ReactSetStateInEffect() {
  const [state, setState] = useState(0);

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setState((s) => s + 1);
  }, []);

  return state;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactSetStateInRender() {
  const [state, setState] = useState(0);

  // Rule: react/set-state-in-render
  // oxlint-disable-next-line react/set-state-in-render
  setState(state + 1);

  return <div>{state}</div>;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactStaticComponents() {
  const Component = () => ReactSetStateInRender();

  // Rule: react/static-components
  // oxlint-disable-next-line react/static-components
  return <Component />;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactUseMemo() {
  // Rule: react/use-memo
  // oxlint-disable-next-line react/use-memo
  const x = useMemo(async () => {
    await Promise.resolve();

    return 123;
  }, []);

  return <div>{x}</div>;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactUnsupportedSyntax() {
  // oxlint-disable-next-line no-eval
  eval("props.x = true");

  return <div />;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactVoidUseMemo() {
  // Rule: react/void-use-memo
  // oxlint-disable-next-line react/void-use-memo
  useMemo(() => {
    console.log(123);
  }, []);

  return <div />;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactNoDerivingStateInEffects() {
  // oxlint-disable-next-line react/hook-use-state
  const [firstName] = useState("X");
  // oxlint-disable-next-line react/hook-use-state
  const [lastName] = useState("Y");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Rule: react/no-deriving-state-in-effects
    // oxlint-disable-next-line react/set-state-in-effect react/no-deriving-state-in-effects
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return <div>{fullName}</div>;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactCapitalizedCalls() {
  // Rule: react/capitalized-calls
  // oxlint-disable-next-line react/capitalized-calls
  return <div>{ReactNoDerivingStateInEffects()}</div>;
}

// oxlint-disable-next-line react/no-multi-comp
export function ReactHooks(x: number) {
  if (x > 0) {
    // oxlint-disable-next-line react/hook-use-state react-hooks/rules-of-hooks
    useState(0); // hooks may not be called conditionally
  }

  return <div>{x}</div>;
}

export function ReactMemoDependencies({ x, y }: { x: number; y: number }) {
  // Rule: react/memo-dependencies
  // oxlint-disable-next-line react/memo-dependencies react-hooks/exhaustive-deps
  return useMemo(() => x, [x, y]);
}

// oxlint-disable-next-line react/no-multi-comp
export function EffectDependencies({ value }: { value: string }) {
  useEffect(
    () => {
      document.title = value;
    },
    // Suppressing the classic rule also prevents this compiler diagnostic.
    // Rule: react/exhaustive-effect-dependencies
    // oxlint-disable-next-line react/exhaustive-deps
    [],
  );

  return <div />;
}

// oxlint-disable-next-line react/no-multi-comp
export function ConditionalHooks({ enabled }: { enabled: boolean }) {
  if (enabled) {
    // Suppressing the classic rule also prevents this compiler diagnostic.
    // Rule: react/hooks
    // oxlint-disable-next-line react/rules-of-hooks
    useRef(null);
  }

  return <div />;
}

// oxlint-disable-next-line react/no-multi-comp
export class FirstComponent extends Component {
  public override render() {
    return <div />;
  }
}

// Rule: react/no-multi-comp
// oxlint-disable-next-line react/no-multi-comp
export class SecondComponent extends Component {
  public override render() {
    return <div />;
  }
}

// oxlint-disable-next-line react/no-multi-comp
export function StringRef() {
  // @ts-expect-error: String refs were removed from React's ref type.
  // Rule: react/no-string-refs
  // oxlint-disable-next-line react/no-string-refs
  return <div ref="legacy" />;
}

// oxlint-disable-next-line react/no-multi-comp
export function InvalidConstAssignment() {
  // oxlint-disable-next-line eslint/no-const-assign
  const value = 0;

  // @ts-expect-error: This fixture demonstrates invalid const reassignment.
  // Rule: react/syntax
  // oxlint-disable-next-line react/syntax
  value = 1;

  return <div>{value}</div>;
}

// oxlint-disable-next-line react/no-multi-comp
export function UnsupportedEffectFinally() {
  useEffect(() => {
    // Rule: react/todo
    // oxlint-disable-next-line react/todo
    try {
      document.title = "example";
    } finally {
      document.title = "cleanup";
    }
  }, []);

  return <div />;
}

// oxlint-disable-next-line react/no-multi-comp
export function VoidElementChildren() {
  // Rule: react/void-dom-elements-no-children
  // oxlint-disable-next-line react/void-dom-elements-no-children
  return <br>Example</br>;
}

// oxlint-disable-next-line react/no-multi-comp
export function UselessFragment() {
  return (
    // Rule: react/jsx-no-useless-fragment
    // oxlint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div />
    </>
  );
}

// oxlint-disable-next-line react/no-multi-comp
export function ChildrenProp() {
  // Rule: react/no-children-prop
  // oxlint-disable-next-line react/no-children-prop
  return <div children="example" />;
}

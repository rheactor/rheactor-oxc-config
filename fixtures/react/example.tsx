import {
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

// oxlint-disable-next-line react/function-component-definition react/jsx-no-useless-fragment
export const Component_B = () => <></>;

export function ComponentC({ isBoolean, children }: PropsWithChildren & Partial<Properties>) {
  return (
    <div>
      {isBoolean}

      {/* oxlint-disable-next-line react/no-react-children */}
      <div>{Children.toArray(children)}</div>
    </div>
  );
}

// oxlint-disable-next-line react/no-object-type-as-default-prop
export function ReactPurity({ items = [1, 2, 3], string, isBoolean, onEvent }: Properties) {
  const [state, setState] = useState(0);

  useEffect(
    () => {
      console.log(string, isBoolean);

      setState(123);

      console.log(state);
    },
    // oxlint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const eventHandler = useCallback(() => {
    onEvent?.();
  }, [onEvent]);

  const props = { isBoolean };

  // oxlint-disable-next-line react/no-unstable-nested-components
  function UnstableNestedComponent() {
    return <div />;
  }

  if (Math.random()) {
    // oxlint-disable-next-line react-hooks/rules-of-hooks
    const [invalidState, setInvalidState] = useState(false);

    setInvalidState(true);

    console.log(invalidState);
  }

  return (
    <>
      {/* oxlint-disable-next-line react/button-has-type */}
      <button>Example</button>

      {/* oxlint-disable-next-line react/checked-requires-onchange-or-readonly */}
      <input type="checkbox" checked />

      {/* oxlint-disable-next-line react/iframe-missing-sandbox */}
      <iframe />

      <ReactPurity
        // oxlint-disable-next-line react/jsx-curly-brace-presence
        string={"123"}
        // oxlint-disable-next-line react/jsx-boolean-value
        isBoolean={true}
        // oxlint-disable-next-line react/jsx-handler-names
        onEvent={eventHandler}
      />

      {/* oxlint-disable-next-line react/jsx-fragments react/jsx-no-useless-fragment */}
      <Fragment>Example</Fragment>

      {/* oxlint-disable-next-line react/jsx-key */}
      {[1, 2, 3].map(() => (
        // oxlint-disable-next-line react/jsx-pascal-case
        <Component_B />
      ))}

      {/* oxlint-disable-next-line react/jsx-no-comment-textnodes react/jsx-no-useless-fragment */}
      <>// Example</>

      {/* oxlint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://google.com" target="_blank">
        Test
      </a>

      {/* oxlint-disable-next-line react/jsx-props-no-spread-multi react/no-children-prop react/self-closing-comp */}
      <ComponentC {...props} children="Test" {...props}></ComponentC>

      {[1, 2, 3].map((item, key) => (
        // oxlint-disable-next-line react/no-array-index-key
        <div key={key}>{item}</div>
      ))}

      {items.map((item) =>
        // oxlint-disable-next-line react/no-clone-element
        cloneElement(<div>{item}</div>, { item }),
      )}

      {/* oxlint-disable-next-line react/no-danger-with-children */}
      <div
        // oxlint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: "Hello World" }}
      >
        Teste
      </div>

      {/* oxlint-disable-next-line react/no-unescaped-entities */}
      <div>'</div>

      <UnstableNestedComponent />

      {/* oxlint-disable-next-line react/self-closing-comp */}
      <br></br>
    </>
  );
}

const Context = createContext({});

export function ContextProvider() {
  const [state, setState] = useState(0);

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setState(123);
  }, []);

  // oxlint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={{ state }}>Example</Context.Provider>;
}

// oxlint-disable-next-line react/only-export-components
export const onlyExportsComponents = 123;

export function ErrorBoundaries() {
  try {
    // oxlint-disable-next-line react/error-boundaries
    return <div />;
  } catch {
    return null;
  }
}

// oxlint-disable-next-line no-unused-vars
let globalVariable = 123;

export function ReactGlobals() {
  // oxlint-disable-next-line react/globals
  globalVariable = 456;

  return <div />;
}

export function ReactImmutability() {
  // oxlint-disable-next-line react/hook-use-state
  const [state] = useState({ a: 0 });

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

  // oxlint-disable-next-line react/preserve-manual-memoization react-hooks/exhaustive-deps
  return useCallback(() => [value], [value]);
}

export function ReactPurityB() {
  // oxlint-disable-next-line react/purity
  const rand = Math.random();

  return <div>{rand}</div>;
}

export function ReactRefs() {
  const ref = useRef(null);

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

export function ReactSetStateInRender() {
  const [state, setState] = useState(0);

  // oxlint-disable-next-line react/set-state-in-render
  setState(state + 1);

  return <div>{state}</div>;
}

export function ReactStaticComponents() {
  const Component = () => ReactSetStateInRender();

  // oxlint-disable-next-line react/static-components
  return <Component />;
}

export function ReactUseMemo() {
  // oxlint-disable-next-line react/use-memo
  const x = useMemo(async () => {
    await Promise.resolve();

    return 123;
  }, []);

  return <div>{x}</div>;
}

export function ReactUnsupportedSyntax() {
  // oxlint-disable-next-line no-eval
  eval("props.x = true");

  return <div />;
}

export function ReactVoidUseMemo() {
  // oxlint-disable-next-line react/void-use-memo
  useMemo(() => {
    console.log(123);
  }, []);

  return <div />;
}

export function ReactNoDerivingStateInEffects() {
  // oxlint-disable-next-line react/hook-use-state
  const [firstName] = useState("X");
  // oxlint-disable-next-line react/hook-use-state
  const [lastName] = useState("Y");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect react/no-deriving-state-in-effects
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return <div>{fullName}</div>;
}

export function ReactCapitalizedCalls() {
  // oxlint-disable-next-line react/capitalized-calls
  return <div>{ReactNoDerivingStateInEffects()}</div>;
}

export function ReactHooks(x: number) {
  if (x > 0) {
    // oxlint-disable-next-line react/hook-use-state react-hooks/rules-of-hooks
    useState(0); // hooks may not be called conditionally
  }

  return <div>{x}</div>;
}

export function ReactMemoDependencies({ x, y }: { x: number; y: number }) {
  // oxlint-disable-next-line react/memo-dependencies react-hooks/exhaustive-deps
  return useMemo(() => x, [x, y]);
}

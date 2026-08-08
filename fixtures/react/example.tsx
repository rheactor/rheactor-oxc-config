import {
  Children,
  cloneElement,
  createContext,
  Fragment,
  useCallback,
  useEffect,
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
export function Component({ items = [1, 2, 3], string, isBoolean, onEvent }: Properties) {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(string, isBoolean);

    // oxlint-disable-next-line react/react-compiler
    setState(123);

    console.log(state);
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventHandler = useCallback(() => {
    onEvent?.();
  }, [onEvent]);

  const props = { isBoolean };

  // oxlint-disable-next-line react/no-unstable-nested-components
  function UnstableNestedComponent() {
    return <div />;
  }

  // oxlint-disable-next-line react/react-compiler
  if (Math.random()) {
    // oxlint-disable-next-line react-hooks/rules-of-hooks react/react-compiler
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

      <Component
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

      {/* oxlint-disable-next-line react/react-compiler */}
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
    // oxlint-disable-next-line react/react-compiler
    setState(123);
  }, []);

  // oxlint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={{ state }}>Example</Context.Provider>;
}

// oxlint-disable-next-line react/only-export-components
export const onlyExportsComponents = 123;

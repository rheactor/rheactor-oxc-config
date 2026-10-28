export function Component() {
  return (
    // Rule: jsx-a11y/html-has-lang
    // oxlint-disable-next-line jsx-a11y/html-has-lang jsx-a11y/lang
    <html>
      {/* Rule: jsx-a11y/alt-text */}
      {/* oxlint-disable-next-line jsx-a11y/alt-text */}
      <img src="flower.jpg" />

      <a href="/">click here</a>

      {/* Rule: jsx-a11y/anchor-has-content */}
      {/* oxlint-disable-next-line jsx-a11y/anchor-has-content jsx-a11y/control-has-associated-label */}
      <a href="/" />

      {/* Rule: jsx-a11y/anchor-is-valid */}
      {/* oxlint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="javascript:void(0)"
        onClick={() => {
          // empty
        }}
      >
        Perform action
      </a>

      {/* Rule: jsx-a11y/aria-props */}
      {/* oxlint-disable-next-line jsx-a11y/aria-props */}
      <input aria-labeledby="address_label" />

      {/* Rule: jsx-a11y/aria-role */}
      {/* oxlint-disable-next-line jsx-a11y/aria-role */}
      <div role="datepicker" />

      {/* Rule: jsx-a11y/aria-unsupported-elements */}
      {/* oxlint-disable-next-line jsx-a11y/aria-unsupported-elements */}
      <meta charSet="utf-8" aria-hidden="false" />

      {/* Rule: jsx-a11y/autocomplete-valid */}
      {/* oxlint-disable-next-line jsx-a11y/autocomplete-valid */}
      <input type="text" autoComplete="invalid-value" />

      {/* Rule: jsx-a11y/control-has-associated-label */}
      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button />

      {/* Rule: jsx-a11y/heading-has-content */}
      {/* oxlint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 />

      {/* Rule: jsx-a11y/iframe-has-title */}
      {/* oxlint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe />

      {/* Rule: jsx-a11y/img-redundant-alt */}
      {/* oxlint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img alt="photo" />

      {/* Rule: jsx-a11y/interactive-supports-focus */}
      {/* oxlint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <span
        onClick={() => {
          // empty
        }}
        // Rule: jsx-a11y/prefer-tag-over-role
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
        role="button"
      >
        Submit
      </span>

      {/* Rule: jsx-a11y/media-has-caption */}
      {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
      <audio />

      {/* Rule: jsx-a11y/no-access-key */}
      {/* oxlint-disable-next-line jsx-a11y/no-access-key */}
      <div accessKey="h" />

      {/* Rule: jsx-a11y/no-aria-hidden-on-focusable */}
      {/* oxlint-disable-next-line jsx-a11y/no-aria-hidden-on-focusable jsx-a11y/no-noninteractive-tabindex */}
      <div aria-hidden="true" tabIndex={0} />

      {/* Rule: jsx-a11y/no-interactive-element-to-noninteractive-role */}
      {/* oxlint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role jsx-a11y/prefer-tag-over-role */}
      <button role="img">Save</button>

      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label */}
      <li
        // Rule: jsx-a11y/no-noninteractive-element-to-interactive-role
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role jsx-a11y/prefer-tag-over-role
        role="link"
        onClick={() => {
          // empty
        }}
      />

      {/* Rule: jsx-a11y/no-noninteractive-tabindex */}
      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div tabIndex={0} />

      {/* Rule: jsx-a11y/no-redundant-roles */}
      {/* oxlint-disable-next-line jsx-a11y/no-redundant-roles */}
      <button role="button">example</button>

      {/* Rule: jsx-a11y/role-has-required-aria-props */}
      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label jsx-a11y/prefer-tag-over-role jsx-a11y/role-has-required-aria-props */}
      <div role="checkbox" />

      {/* Rule: jsx-a11y/role-supports-aria-props */}
      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role jsx-a11y/role-supports-aria-props jsx-a11y/prefer-tag-over-role */}
      <li aria-required tabIndex={-1} role="radio" aria-checked="false">
        Example
      </li>
    </html>
  );
}

export function NonInteractiveClick() {
  return (
    // Rule: jsx-a11y/no-noninteractive-element-interactions (disabled)
    <li onClick={() => undefined}>Example</li>
  );
}

export function InvalidLanguage() {
  // Rule: jsx-a11y/lang
  // oxlint-disable-next-line jsx-a11y/lang
  return <html lang="invalid-language-tag" />;
}

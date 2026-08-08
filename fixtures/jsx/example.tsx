export function Component() {
  return (
    // oxlint-disable-next-line jsx-a11y/html-has-lang jsx-a11y/lang
    <html>
      {/* oxlint-disable-next-line jsx-a11y/alt-text */}
      <img src="flower.jpg" />

      <a href="/">click here</a>

      {/* oxlint-disable-next-line jsx-a11y/anchor-has-content jsx-a11y/control-has-associated-label */}
      <a href="/" />

      {/* oxlint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="javascript:void(0)"
        onClick={() => {
          // empty
        }}
      >
        Perform action
      </a>

      {/* oxlint-disable-next-line jsx-a11y/aria-props */}
      <input aria-labeledby="address_label" />

      {/* oxlint-disable-next-line jsx-a11y/aria-role */}
      <div role="datepicker" />

      {/* oxlint-disable-next-line jsx-a11y/aria-unsupported-elements */}
      <meta charSet="utf-8" aria-hidden="false" />

      {/* oxlint-disable-next-line jsx-a11y/autocomplete-valid */}
      <input type="text" autoComplete="invalid-value" />

      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button />

      {/* oxlint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 />

      {/* oxlint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe />

      {/* oxlint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img alt="photo" />

      {/* oxlint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <span
        onClick={() => {
          // empty
        }}
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
        role="button"
      >
        Submit
      </span>

      {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
      <audio />

      {/* oxlint-disable-next-line jsx-a11y/no-access-key */}
      <div accessKey="h" />

      {/* oxlint-disable-next-line jsx-a11y/no-aria-hidden-on-focusable jsx-a11y/no-noninteractive-tabindex */}
      <div aria-hidden="true" tabIndex={0} />

      {/* oxlint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role jsx-a11y/prefer-tag-over-role */}
      <button role="img">Save</button>

      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label */}
      <li
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role jsx-a11y/prefer-tag-over-role
        role="link"
        onClick={() => {
          // empty
        }}
      />

      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div tabIndex={0} />

      {/* oxlint-disable-next-line jsx-a11y/no-redundant-roles */}
      <button role="button">example</button>

      {/* oxlint-disable-next-line jsx-a11y/control-has-associated-label jsx-a11y/prefer-tag-over-role jsx-a11y/role-has-required-aria-props */}
      <div role="checkbox" />

      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role jsx-a11y/role-supports-aria-props jsx-a11y/prefer-tag-over-role */}
      <li aria-required tabIndex={-1} role="radio" aria-checked="false">
        Example
      </li>
    </html>
  );
}

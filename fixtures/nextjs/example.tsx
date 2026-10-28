"use client";

import Head from "next/head";
import Script from "next/script";

export function Component() {
  return (
    <html lang="pt-BR">
      {/* Rule: nextjs/no-duplicate-head */}
      {/* oxlint-disable-next-line next/no-duplicate-head next/no-script-component-in-head */}
      <Head>
        <title>Example</title>

        {/* Rule: nextjs/no-css-tags */}
        {/* oxlint-disable-next-line next/no-css-tags */}
        <link href="/_next/static/css/styles.css" rel="stylesheet" />

        {/* Rule: nextjs/inline-script-id */}
        {/* oxlint-disable-next-line next/inline-script-id */}
        <Script>alert(123);</Script>
      </Head>
      <Head>
        <title>Example</title>
      </Head>
      {/* Rule: nextjs/no-head-element */}
      {/* oxlint-disable-next-line next/no-head-element */}
      <head>
        <title>Example</title>
      </head>
      <body>
        {/* Rule: nextjs/next-script-for-ga */}
        {/* oxlint-disable-next-line next/next-script-for-ga */}
        <script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />

        {/* Rule: nextjs/no-html-link-for-pages */}
        {/* oxlint-disable-next-line next/no-html-link-for-pages */}
        <a href="/about">About Us</a>

        {/* Rule: nextjs/no-img-element */}
        {/* oxlint-disable-next-line next/no-img-element */}
        <img src="/test.png" alt="test" />
      </body>
    </html>
  );
}

// Rule: nextjs/no-async-client-component
// oxlint-disable-next-line next/no-async-client-component
export default async function AsyncComponent() {
  return <></>;
}

export function ScriptInHead() {
  return (
    // Rule: nextjs/no-script-component-in-head
    // oxlint-disable-next-line nextjs/no-script-component-in-head
    <Head>
      <Script src="https://example.com/script.js" />
    </Head>
  );
}

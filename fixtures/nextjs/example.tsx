"use client";

import Head from "next/head";
import Script from "next/script";

export function Component() {
  return (
    <html lang="pt-BR">
      {/* oxlint-disable-next-line next/no-duplicate-head next/no-script-component-in-head */}
      <Head>
        <title>Example</title>

        {/* oxlint-disable-next-line next/no-css-tags */}
        <link href="/_next/static/css/styles.css" rel="stylesheet" />

        {/* oxlint-disable-next-line next/inline-script-id */}
        <Script>alert(123);</Script>
      </Head>
      <Head>
        <title>Example</title>
      </Head>
      {/* oxlint-disable-next-line next/no-head-element */}
      <head>
        <title>Example</title>
      </head>
      <body>
        {/* oxlint-disable-next-line next/next-script-for-ga */}
        <script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />

        {/* oxlint-disable-next-line next/no-html-link-for-pages */}
        <a href="/about">About Us</a>

        {/* oxlint-disable-next-line next/no-img-element */}
        <img src="/test.png" alt="test" />
      </body>
    </html>
  );
}

// oxlint-disable-next-line next/no-async-client-component
export default async function AsyncComponent() {
  return <></>;
}

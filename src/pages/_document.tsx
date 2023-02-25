import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <body className={`font-sans font-semibold text-gray-900 antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

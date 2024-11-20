import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="icon" href="/images/smartlivinglogo-og-1.jpg" />
      <title>Smart Living pg</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

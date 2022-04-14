import { Html, Head, Main, NextScript } from "next/document";

const gradients = [
  "from-indigo-300 via-purple-300 to-pink-200",
  "from-indigo-100 via-pink-100 to-pink-50",
];
export default function Document() {
  const baseStyling = `min-h-screen bg-gradient-to-r ${gradients[1]}`;
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Square+Peg&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={baseStyling}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

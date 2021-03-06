import { Html, Head, Main, NextScript } from "next/document";

const gradients = [
  "from-indigo-300 via-purple-300 to-pink-200",
  "from-indigo-100 via-pink-100 to-pink-50",
  "from-champagne via-pale-pink to-pale-pink",
];
export default function Document() {
  const baseStyling = `min-h-screen bg-gradient-to-br ${gradients[1]}`;
  return (
    <Html>
      <Head />
      <body className={baseStyling}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

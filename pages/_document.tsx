import { Html, Head, Main, NextScript } from "next/document";

const gradients = [
  "from-indigo-300 via-purple-300 to-pink-200",
  "from-pink-100 via-pink-50 to-pink-50",
];
export default function Document() {
  const baseStyling = `min-h-screen bg-gradient-to-r ${gradients[1]}`;
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

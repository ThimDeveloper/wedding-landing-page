import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import kiss from "../public/images/kiss.jpeg";
import midsummer from "../public/images/midsummer_bw.jpeg";
import osterlen from "../public/images/osterlen_bw.jpeg";
import { animated, useSpring, config, easings } from "react-spring";
import { useState } from "react";

const Home: NextPage = () => {
  function Scrolling() {
    const [flip, set] = useState(false);

    const words = ["Save the date", "9-11 September, 2022"];

    const { scroll } = useSpring({
      scroll: (words.length - 1) * 50,
      from: { scroll: 0 },
      reset: true,
      reverse: flip,
      delay: 1200,
      config: {
        ...config.molasses,
        easing: easings.easeInOutCirc,
        duration: 1200,
      },
      onRest: () => set(!flip),
    });

    return (
      <animated.div
        style={{
          position: "relative",
          width: "100%",
          height: 50,
          overflow: "hidden",
          fontSize: "1em",
        }}
        scrollTop={scroll}
      >
        {words.map((word, i) => (
          <div
            key={`${word}_${i}`}
            style={{ width: "100%", height: 50, textAlign: "center" }}
          >
            {word}
          </div>
        ))}
      </animated.div>
    );
  }

  return (
    <div>
      <Head>
        <title>Simon och Maries Bröllop</title>
        <meta name="description" content="En upplevelse att minnas" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="w-full h-full">
        <div className="absolute w-full sm:h-full z-10 md:text-5xl sm:text-xl text-neutral-200 font-thin flex justify-center items-center pt-32 md:pt-0">
          <Scrolling />
        </div>
        <Image
          className="mix-blend-multiply"
          src={kiss}
          alt="Kyss"
          placeholder="blur"
          layout="responsive"
          priority
        />

        <Image
          className="mix-blend-multiply"
          src={midsummer}
          alt="Midsommar"
          placeholder="blur"
          layout="responsive"
        />
        <Image
          className="mix-blend-multiply"
          src={osterlen}
          alt="Midsommar"
          placeholder="blur"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Home;

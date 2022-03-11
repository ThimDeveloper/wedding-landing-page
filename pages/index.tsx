import type { NextPage } from "next";
import Image from "next/image";
import kiss from "../public/images/kiss.jpeg";
import midsummer from "../public/images/midsummer_bw.jpeg";
import osterlen from "../public/images/osterlen_bw.jpeg";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full p-4 ">
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
        objectFit="cover"
      />
      <Image
        className="mix-blend-multiply"
        src={osterlen}
        alt="Midsommar"
        placeholder="blur"
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};

export default Home;

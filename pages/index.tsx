import type { NextPage } from "next";
import Image from "next/image";
import kiss from "../public/images/kiss.jpeg";
import midsummer from "../public/images/midsummer_bw.jpeg";
import osterlen from "../public/images/osterlen_bw.jpeg";

const Home: NextPage = () => {
  return (
    <div className="p-2 min-h-screen w-11/12 mx-auto md:p-0 md:w-7/12 ">
      <div className="m-2 border-[8px] border-b-[64px] border-white shadow-lg rotate-2">
        <Image src={kiss} alt="Kyss" layout="responsive" priority />
      </div>
      <div className="m-2 border-[8px] border-b-[64px] border-white shadow-lg -rotate-3">
        <Image src={midsummer} alt="Midsommar" layout="responsive" priority />
      </div>
      <div className="m-2 border-[8px] border-b-[64px] border-white shadow-lg rotate-6">
        <Image src={osterlen} alt="Midsommar" layout="responsive" />
      </div>
    </div>
  );
};

export default Home;

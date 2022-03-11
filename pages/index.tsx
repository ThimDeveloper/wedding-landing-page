import type { NextPage } from "next";
import Image from "next/image";
import kiss from "../public/images/kiss.jpeg";
import midsummer from "../public/images/midsummer_bw.jpeg";
import osterlen from "../public/images/osterlen_bw.jpeg";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full md:w-10/12 m-auto">
      <div className="m-2 border-[8px] border-b-[64px] border-slate-200 shadow-lg rotate-2">
        <Image src={kiss} alt="Kyss" layout="responsive" priority />
      </div>
      <div className="m-2 border-[8px] border-b-[64px] border-slate-200 shadow-lg -rotate-3">
        <Image src={midsummer} alt="Midsommar" layout="responsive" />
      </div>
      <div className="m-2 border-[8px] border-b-[64px] border-slate-200 shadow-lg rotate-6">
        <Image src={osterlen} alt="Midsommar" layout="responsive" />
      </div>
    </div>
  );
};

export default Home;

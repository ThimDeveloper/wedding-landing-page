import type { NextPage } from "next";
import { Swish } from "@/components/Swish";

const Gifts: NextPage = () => {
  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 flex flex-col justify-center items-center">
      <main className="bg-white max-w-4xl mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl text-black font-thin ">
        <p className="text-xl">
          Genom åren har vi samlat på oss mer prylar än vad vi får plats med,
          men ett bidrag till vår bröllopsresa uppskattas, stort eller litet!
        </p>
        <div className="flex flex-col text-center mt-4 text-4xl">♡♡♡</div>
      </main>
      <Swish />
      <div className="flex flex-col text-center mt-4 text-4xl">
        3048 0364230 Nordea
      </div>
    </div>
  );
};

export default Gifts;

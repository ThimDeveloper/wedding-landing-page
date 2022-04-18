import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Swish } from "@/components/Swish";

const Gifts: NextPage = () => {
  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 flex flex-col justify-center items-center">
      <main className="bg-white max-w-4xl mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl text-black font-thin ">
        <p className="text-2xl">
          Din närvaro är allt vi önskar. Vill ni ändå uppmärksamma vår dag med
          en gåva uppskattar vi ett bidrag till vår bröllopsresa. Genom åren har
          vi samlat på oss mer prylar än vad vi får plats med, men ett bidrag
          till vår bröllopsresa uppskattas, stort eller litet!
        </p>
        <div className="flex flex-col text-center mt-4 text-4xl">♡♡♡</div>
      </main>
      <Swish />
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context;
  const session = await getSession({ req });
  if (!session && res) {
    return {
      props: { session: null },
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: { session: session },
  };
}

export default Gifts;

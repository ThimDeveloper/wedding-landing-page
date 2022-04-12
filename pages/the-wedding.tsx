import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
const TheWedding: NextPage = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-2xl">Bröllopet</p>
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

export default TheWedding;

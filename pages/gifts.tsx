import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
const Gifts: NextPage = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-2xl">Gåvor</p>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context;
  const session = await getSession({ req });
  if (session && res) {
    return {
      props: { session },
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session: null },
  };
}

export default <Gifts />;

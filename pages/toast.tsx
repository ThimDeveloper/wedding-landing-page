import type { GetServerSidePropsContext, NextPage } from "next";
import { RegisterSpeechForm } from "@/components/RegisterSpeechForm";
import { getSession } from "next-auth/react";
const Toast: NextPage = () => {
  return <RegisterSpeechForm />;
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

export default Toast;

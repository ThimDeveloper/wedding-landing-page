import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const SignOut: NextPage = () => {
  let time = useRef<NodeJS.Timeout | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    time.current = setTimeout(() => {
      router.replace(router.asPath, "/");
    }, 3000);

    return () => {
      clearTimeout(time.current as unknown as number);
    };
  }, []);

  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <main className="bg-white max-w-4xl mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section className="font-thin text-xl">
          <p>Tack för ditt besök!</p>
        </section>
      </main>
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
        destination: "/our-story",
        permanent: false,
      },
    };
  }
  return {
    props: { session: null },
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default SignOut;

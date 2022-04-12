import { GetServerSidePropsContext, NextPage } from "next";
import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { EyeIcon } from "@/components/EyeIcon";

const SignIn: NextPage = () => {
  const router = useRouter();
  const [authcode, setAuthcode] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const onPassCodeChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthcode(evt.target.value);
  };
  const onSubmitHandler = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    const response = await signIn("credentials", {
      authcode: authcode,
      redirect: false,
      callbackUrl: "/our-story",
    });
    if ((response as any)?.error) {
      setError(true);
    } else {
      setError(false);
      await router.replace(router.asPath, "/our-story");
    }
  };

  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto"></header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Välkommen</h3>
          <p className="text-gray-400 pt-2">
            Vänligen, logga in för att ta del av innehållet
          </p>
        </section>
        <section className="mt-10">
          <form className="flex flex-col">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="password"
              >
                Hemlig kod
              </label>
              <div className="flex flex-row w-full">
                <input
                  className="w-11/12 bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={visible ? "text" : "password"}
                  id="authcode"
                  defaultValue={authcode}
                  onChange={onPassCodeChangeHandler}
                />
                <div
                  className="w-1/12"
                  onClick={() => setVisible((prev) => !prev)}
                >
                  <EyeIcon visible={visible}></EyeIcon>
                </div>
              </div>
            </div>
            {
              <div className="flex justify-end">
                <p className="text-sm text-red-400 mb-6">
                  {error ? "Ogiltig kod. Försök igen!" : ""}
                </p>
              </div>
            }
            {/* <div className="flex justify-end">
              <Link href="/forgot-password">
                <a className="text-sm text-sky-600 hover:text-sky-700 hover:underline mb-6">
                  Har du glömt din hemliga kod?
                </a>
              </Link>
            </div> */}
            <button
              className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 rounded shadow-lg hover:scale-105 hover:shadow-xl transition delay-75 duration-200 ease-in-out"
              onClick={onSubmitHandler}
            >
              Logga in
            </button>
          </form>
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
  };
}
export default SignIn;

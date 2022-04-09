import { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, SyntheticEvent, useState } from "react";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };
  const onPasswordChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };
  const onSubmitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-gradient-to-t from-maximum-blue-purple to-pale-pink">
      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">
          Simon och Maries Bröllop
        </h1>
      </header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Välkommen</h3>
          <p className="text-gray-400 pt-2">
            Vänligen, logga in för att ta del av innehållet
          </p>
        </section>
        <section>
          <form className="flex flex-col">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-maximum-blue-purple transition duration-500"
                type="email"
                id="email"
                placeholder="gladgäst@bröllop.se"
                defaultValue={email}
                onChange={onEmailChangeHandler}
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="password"
              >
                Hemlig kod
              </label>
              <input
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-maximum-blue-purple transition duration-500"
                type="password"
                id="password"
                placeholder="xxxx-xxxx-xxxx"
                defaultValue={password}
                onChange={onPasswordChangeHandler}
              />
            </div>
            <div className="flex justify-end">
              <Link href="/forget-password">
                <a className="text-sm text-maximum-blue-purple hover:text-blush hover:underline mb-6">
                  Har du glömt din hemliga kod?
                </a>
              </Link>
            </div>
            <button
              className="bg-maximum-blue-purple hover:bg-maximum-blue-purple text-white font-bold py-2 rounded shadow-lg hover:scale-105 hover:shadow-xl transition delay-75 duration-200 ease-in-out"
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

export default SignIn;

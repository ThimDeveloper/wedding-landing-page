import { useForm } from "@mantine/hooks";

export const RegisterSpeechForm: React.FC = () => {
  const onSubmitHandler = () => {
    return "";
  };

  return <>
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
                htmlFor="text"
              >
                Förnamn
              </label>
              <div className="flex flex-row w-full">
                <input
                  className="w-11/12 bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"text"}
                  id="förnamn"
                  defaultValue={""}
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="text"
              >
                Efternamn
              </label>
              <div className="flex flex-row w-full">
                <input
                  className="w-11/12 bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"text"}
                  id="förnamn"
                  defaultValue={""}
                />
              </div>
            </div>

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
    </div>
    </>
  
};

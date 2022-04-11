import { useForm } from "@mantine/form";
import { Checkbox } from "@mantine/core";
import { MouseEvent } from "react";

export const RegisterSpeechForm: React.FC = () => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      relation: "",
      phone: "",
      email: "",
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Felaktig email"),
    },
  });

  const onSubmitHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    return "";
  };

  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto"></header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">
            Vad kul att du vill hålla ett tal!
          </h3>
          <p className="text-gray-400 pt-2">
            Vänligen, fyll i all nödvändig information.
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
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"text"}
                  id="firstName"
                  defaultValue={form.getInputProps("firstName").value}
                  onChange={(evt) =>
                    form.setFieldValue("firstName", evt.target.value)
                  }
                />
              </div>
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
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"text"}
                  id="lastName"
                  defaultValue={form.getInputProps("lastName").value}
                  onChange={(evt) =>
                    form.setFieldValue("lastName", evt.target.value)
                  }
                />
              </div>
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="text"
              >
                Vad är din relation till brudparet?
              </label>
              <div className="flex flex-row w-full">
                <input
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"text"}
                  id="relation"
                  defaultValue={form.getInputProps("relation").value}
                  onChange={(evt) =>
                    form.setFieldValue("relation", evt.target.value)
                  }
                />
              </div>
            </div>

            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="phone"
              >
                Telefonnummer
              </label>
              <div className="flex flex-row w-full">
                <input
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"phone"}
                  id="phone"
                  placeholder="0712345678"
                  defaultValue={form.getInputProps("phone").value}
                  onChange={(evt) =>
                    form.setFieldValue("phone", evt.target.value)
                  }
                />
              </div>
            </div>

            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="email"
              >
                Efternamn
              </label>
              <div className="flex flex-row w-full">
                <input
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                  type={"email"}
                  id="lastName"
                  defaultValue={form.getInputProps("email").value}
                  onChange={(evt) =>
                    form.setFieldValue("email", evt.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex flex-row w-full pb-4">
              <Checkbox
                mt="sm"
                color={"pink"}
                label="Jag tillåter att min data används för att planera talen under bröllopsmiddagen"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />
            </div>
            <button
              className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 rounded shadow-lg hover:scale-105 hover:shadow-xl transition delay-75 duration-200 ease-in-out"
              onClick={onSubmitHandler}
            >
              Skicka in
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

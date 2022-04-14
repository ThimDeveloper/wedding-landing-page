import { Checkbox } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { ThankYouMessage } from "./ThankYouMessage";
import { LoadingOverlay } from "@mantine/core";
interface FormValues {
  firstName: string;
  lastName: string;
  relation: string;
  phone: string;
  email: string;
  termsOfService: boolean;
}

const initialState = {
  firstName: "",
  lastName: "",
  relation: "",
  phone: "",
  email: "",
  termsOfService: false,
};

export const RegisterSpeechForm: React.FC = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState<FormValues>({ ...initialState });
  const [complete, setComplete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allFilled = Object.values(formValues).every((value) => !!value);
    setComplete(allFilled);
  }, [formValues]);

  const handleModalClose = (openState: boolean) => {
    setOpenModal(openState);
    router.reload();
  };
  const onSubmitHandler = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/toast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        setErrorMessage(null);
        setOpenModal(true);
        setLoading(false);
      } else {
        setErrorMessage(
          "Dina svar har tyvärr inte blivit registrerade. Försök igen."
        );
        setOpenModal(true);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(
        "Dina svar har tyvärr inte blivit registrerade. Försök igen."
      );
      setOpenModal(true);
      setLoading(false);
    }
  };

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = evt.target;
    console.log("handle on change triggered");
    if (id == "termsOfService") {
      setFormValues((prev) => ({
        ...prev,
        [id]: checked,
      }));
      return;
    }
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <ThankYouMessage
        open={openModal}
        errorMessage={errorMessage}
        setOpen={handleModalClose}
      />
      <LoadingOverlay
        visible={loading}
        zIndex={10}
        style={{ position: "fixed" }}
        loaderProps={{ size: "lg", color: "pink", variant: "bars" }}
      />
      <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
          <section>
            <h3 className="font-bold text-2xl">
              Vad kul att du vill hålla ett tal!
            </h3>
            <p className="text-gray-400 pt-2">
              Vänligen, fyll i all information.
            </p>
          </section>
          <section className="mt-10">
            <form className="flex flex-col" onSubmit={onSubmitHandler}>
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
                    defaultValue={formValues.firstName}
                    onChange={handleOnChange}
                    required
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
                    defaultValue={formValues.lastName}
                    onChange={handleOnChange}
                    required
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
                    defaultValue={formValues.relation}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="phone"
                >
                  Telefon
                </label>
                <div className="flex flex-row w-full">
                  <input
                    className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                    type={"phone"}
                    id="phone"
                    defaultValue={formValues.phone}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex flex-row w-full">
                  <input
                    className="w-full bg-gray-200 text-gray-700 focus:outline-none border-b-4 border-gray-300 px-3 pb-3 focus:border-pink-300 transition duration-500"
                    type={"email"}
                    id="email"
                    defaultValue={formValues.email}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full pb-10">
                <Checkbox
                  required
                  mt="sm"
                  color={"pink"}
                  id="termsOfService"
                  checked={formValues.termsOfService}
                  onChange={handleOnChange}
                  label="Jag tillåter att min data används för att planera talen under bröllopsmiddagen."
                />
              </div>
              <button
                type="submit"
                disabled={!complete}
                className={
                  complete
                    ? "bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 rounded shadow-lg hover:scale-105 hover:shadow-xl transition delay-75 duration-200 ease-in-out"
                    : "bg-gray-300 text-white font-bold py-2 rounded shadow-sm transition delay-75 duration-200 ease-in-out"
                }
              >
                Skicka in
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <main className="bg-white max-w-4xl mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section className="pb-4">
          <h1 className="text-5xl mb-4" style={{ fontFamily: "Square Peg" }}>
            Simon och Marie ska gifta sig!
          </h1>
          <section className="font-thin text-xl">
            <p>
              Välkommen till vår bröllopswebbplats, vi kan inte vänta med att
              fira vår speciella dag med dig.
            </p>
            <div className="flex flex-col text-center mt-4">♡♡♡</div>
          </section>
        </section>
        <section className="font-thin text-xl mb-8">
          <p>
            Vi har skapat den här webbplatsen som ett bekvämt och interaktivt
            sätt att dela alla viktiga detaljer med dig inför vårt bröllop. Du
            kan läsa mer om vår kärlekshistoria, och anmäla intresse om att
            hålla ett tal på bröllopet.
          </p>
          <div className="flex flex-col text-center mt-4">♡♡♡</div>
        </section>
        <section className="font-thin text-xl">
          <p>
            Vi är så glada över att dela denna dag med dig och ser fram emot att
            dansa hela natten med alla våra favoritmänniskor!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;

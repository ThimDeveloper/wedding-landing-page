import type { NextPage } from "next";
const TheWedding: NextPage = () => {
  return (
    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <main className="bg-white max-w-4xl mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section className="pb-4">
          <h1 className="text-5xl mb-4">Information om helgen</h1>
          <section className="font-thin text-xl">
            <p>
              <h1>Boende:</h1>
              Lakan, handdukar samt städning av rummet ingår när man bor på
              Ulvhäll. Vi önskar att när ni OSAr, att ni meddelar om ni planerar
              att bo på herrgården samt vilka dagar ni kommer närvara, detta för
              att underlätta planering. Vi vet också om att saker och ting kan
              förändras så om något ändras, meddela gärna oss på OSA mailen,
              <a href="mailto:osa@simonmariebrollop.se">
                osa@simonmariebrollop.se
              </a>
              . Detta kan självklart ske efter inlämnade OSA och men gärna innan
              bröllopet. Betalning för boendet görs till brudparet för att
              förenkla administration samt grupprabatt. Betalning sker i samband
              med bröllopshelgen.
            </p>
            <div className="flex flex-col text-center mt-4">♡♡♡</div>
          </section>
        </section>
        <section className="font-thin text-xl mb-8">
          <p>
            Ulvhäll Vi kommer att ha tillgång till Herrgårdens alla faciliteter
            under helgen vilket inkluderar biljardrum, tennisbanor, gym, bastu &
            relax, bar, matsal och mycket mer. Ulvhäll ligger beläget vid
            mälaren vilket öppnar upp för bad för de som är sugna.
          </p>
          <div className="flex flex-col text-center mt-4">♡♡♡</div>
        </section>
        <section className="font-thin text-xl">
          <p>
            <h1>Mat och dryck</h1>
            Vätska samt återhämtning är viktigt, därför kommer det vara fribar
            under hela helgen. I den fria baren går det att hitta både
            alkoholhaltiga drycker samt alkoholfria alternativ. För de som
            anländer på fredagen kommer vi att bjuda på grillning för att mätta
            våra magar. Det kommer efter vigseln att serveras snittar för att vi
            alla ska hålla humöret på topp fram till middagen på lördag.
            <h2>Frukost: </h2>
            För de som önskar frukost på herrgården går det att beställa.
            Kostnaden för frukosten är 125kr per person samt dag. Om ni vill ha
            frukost får ni gärna meddela detta vid OSA. Dock går det att ändra
            detta fram till 2 veckor innan bröllopet.
            <h2>Lunch:</h2>
            För de som vill äta lunch innan vigseln hänvisar vi till matmeckat
            Strängnäs där utbudet av mat är oändligt och bör uppfylla allas
            önskemål.
          </p>
        </section>
        <section className="font-thin text-xl">
          <p>
            <h1>Hitta hit</h1>
            Med bil Om ni tror på konceptet att använda GPS rekommenderar vi att
            ni knappar in Ulvhälls herrgård så kommer ni komma till rätt
            destination. Alt. om ni åker direkt till kyrkan så är det Strängnäs
            Domkyrkan.
            <br />
            Om ni inte gillar GPS, följer nedan en klassisk beskrivning från
            Stockholm: Kommer du från centrala Stockholm följer du E20/E4 mot
            Biskopskvarnleden (riktning Södertälje/Eskilstuna) och tar av vid
            utfart 137 Trafikplats Biskopskvarn. Fortsätt längs
            Biskopskvarnleden rakt fram (andra avfarten) i fem rondeller. I den
            sjätte rondellen svänger du höger (första avfart) in på Fårhusvägen
            och fortsätter vidare på Dammvägen samt Mariefredsvägen. Sväng sedan
            höger in på Gorsingeholmsvägen, därefter vänster in på Fridhemsgatan
            och ta andra höger för att komma fram till Ulvhälls allé. Parkering
            Det finns många parkeringsplatser och fri parkering för samtliga
            gäster. Med tåg Ta tåget till Strängnäs station. Ulvhälls Herrgård
            ligger ca 1.4km från tågstationen, vilket tar ca 15 min att gå eller
            7 min med bil.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TheWedding;

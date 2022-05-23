import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  paragraphs: (JSX.IntrinsicElements | ReactNode | ReactElement)[];
}
const InfoSection: React.FC<InfoSectionProps> = ({ title, paragraphs }) => {
  return (
    <section className="font-thin text-xl">
      <p>
        <h1 className="text-4xl font-square-peg">{title}</h1>
        {paragraphs.map((paragraph, idx) => {
          return (
            <p className="py-2" key={idx}>
              {paragraph}
            </p>
          );
        })}
      </p>
      <div className="flex flex-col text-center mt-4">♡♡♡</div>
    </section>
  );
};

interface ParagraphHeadingProps {
  text: string;
}
const ParagraphHeading: React.FC<ParagraphHeadingProps> = ({ text }) => {
  return <h2 className="text-3xl font-square-peg">{text}</h2>;
};

const TheWedding: NextPage = () => {
  return (
    <div className="min-h-full pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <main className="bg-white max-w-4xl mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl">
        <section className="pb-4">
          <h1 className="text-5xl mb-4 font-square-peg">
            Information om helgen
          </h1>
          <InfoSection
            title="Boende"
            paragraphs={[
              <>
                Lakan, handdukar samt städning av rummet ingår när man bor på
                Ulvhäll. Vi önskar att när ni OSAr, att ni meddelar om ni
                planerar att bo på herrgården samt vilka dagar ni kommer
                närvara, detta för att underlätta planering. Vi vet också om att
                saker och ting kan förändras så om något ändras, meddela gärna
                oss på{" "}
                <a
                  className="text-base font-mono md:hover:text-pink-300"
                  href="mailto:osa@simonmariebrollop.se"
                >
                  osa@simonmariebrollop.se
                </a>
                .
              </>,
              ,
              <>
                Detta kan självklart ske efter inledande OSA, men gärna innan
                bröllopet. Betalning för boendet görs till brudparet för att
                förenkla administration samt grupprabatt. Betalning sker i
                samband med bröllopshelgen.
              </>,
            ]}
          />
          <InfoSection
            title="Ulvhäll"
            paragraphs={[
              <>
                Vi kommer att ha tillgång till Herrgårdens alla faciliteter
                under helgen vilket inkluderar biljardrum, tennisbanor, gym,
                bastu & relax, bar, matsal och mycket mer. Ulvhäll ligger
                beläget vid mälaren vilket öppnar upp för bad för de som är
                sugna.
              </>,
            ]}
          />

          <InfoSection
            title="Mat och dryck"
            paragraphs={[
              <>
                Vätska samt återhämtning är viktigt, därför kommer det vara
                fribar under hela helgen. I den fria baren går det att hitta
                både alkoholhaltiga drycker samt alkoholfria alternativ. För de
                som anländer på fredagen kommer vi att bjuda på grillning för
                att mätta våra magar. Det kommer efter vigseln att serveras
                snittar för att vi alla ska hålla humöret på topp fram till
                middagen på lördag.
              </>,
              <>
                <ParagraphHeading text={"Frukost"} />
                För de som önskar frukost på herrgården går det att beställa.
                Kostnaden för frukosten är 125kr per person samt dag. Om ni vill
                ha frukost får ni gärna meddela detta vid OSA. Dock går det att
                ändra detta fram till 2 veckor innan bröllopet.
              </>,
              <>
                <ParagraphHeading text={"Lunch"} />
                För de som vill äta lunch innan vigseln hänvisar vi till
                matmeckat Strängnäs där utbudet av mat är oändligt och bör
                uppfylla allas önskemål.
              </>,
            ]}
          />

          <InfoSection
            title="Hitta hit"
            paragraphs={[
              <>
                <iframe
                  className="rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.2210265206863!2d17.04034441626484!3d59.362649981670465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465efc2fddbdd81b%3A0x10da11e2a646e7ee!2sUlvh%C3%A4lls%20Herrg%C3%A5rd%20Hotel!5e0!3m2!1ssv!2sse!4v1653253922881!5m2!1ssv!2sse"
                  width={"100%"}
                  height="300"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </>,
              <>
                <ParagraphHeading text={"Med bil"} />
                Om ni tror på konceptet att använda GPS rekommenderar vi att ni
                knappar in Ulvhälls herrgård så kommer ni komma till rätt
                destination.
              </>,
              <>
                Alt. om ni åker direkt till kyrkan så är det Strängnäs
                Domkyrkan.
                <iframe
                  className="rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.4457458057775!2d17.032172116074143!3d59.37558878167504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465efc20a6c606d3%3A0xcc44716e287c5692!2zU3Ryw6RuZ27DpHMgRG9ta3lya2E!5e0!3m2!1ssv!2sse!4v1653254942507!5m2!1ssv!2sse"
                  width={"100%"}
                  height="300"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </>,
              <>
                Om ni inte gillar GPS, följer nedan en klassisk beskrivning från
                Stockholm:
                <br />
                <br />
                <ol>
                  <li>
                    1. Kommer du från centrala Stockholm följer du E20/E4 mot
                    Biskopskvarnleden (riktning Södertälje/Eskilstuna) och tar
                    av vid utfart 137 Trafikplats Biskopskvarn.
                  </li>
                  <li>
                    2. Fortsätt längs Biskopskvarnleden rakt fram (andra
                    avfarten) i fem rondeller.
                  </li>
                  <li>
                    3. I den sjätte rondellen svänger du höger (första avfart)
                    in på Fårhusvägen och fortsätter vidare på Dammvägen samt
                    Mariefredsvägen.
                  </li>
                  <li>
                    4. Sväng sedan höger in på Gorsingeholmsvägen, därefter
                    vänster in på Fridhemsgatan och ta andra höger för att komma
                    fram till Ulvhälls allé.
                  </li>
                </ol>
              </>,
              <>
                <ParagraphHeading text={"Parkering"} />
                Det finns många parkeringsplatser och fri parkering för samtliga
                gäster.
              </>,
              <>
                <ParagraphHeading text={"Med tåg"} />
                Ta tåget till Strängnäs station. Ulvhälls Herrgård ligger ca
                1.4km från tågstationen, vilket tar ca 15 min att gå eller 7 min
                med bil.
              </>,
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default TheWedding;

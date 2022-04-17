import type { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import kiss from "../public/images/kiss.jpeg";
import midsummer from "../public/images/midsummer_bw.jpeg";
import osterlen from "../public/images/osterlen_bw.jpeg";
import new_year from "../public/images/new_year.jpeg";
import { Blockquote, Grid } from "@mantine/core";
import { getSession } from "next-auth/react";

const OurStory: NextPage = () => {
  return (
    <>
      <div className="p-2 min-h-screen w-11/12 mx-auto md:p-0 md:w-7/12 ">
        <Grid>
          <Grid.Col sm={12} md={6}>
            <Blockquote
              className="font-square-peg"
              cite="– Anne Swärd"
              style={{ fontSize: "2rem" }}
            >
              Kärleken är en resa utan kompass i ett väglöst land. Ett äventyr.
            </Blockquote>
            <div className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl -rotate-3">
              <Image
                src={midsummer}
                alt="Midsommar"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </div>
            <div className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl -rotate-4">
              <Image
                src={new_year}
                alt="New Year"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </div>
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <div className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl rotate-2">
              <Image
                src={kiss}
                alt="Kyss"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </div>
            <div className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl rotate-6">
              <Image
                src={osterlen}
                alt="Midsommar"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
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

export default OurStory;

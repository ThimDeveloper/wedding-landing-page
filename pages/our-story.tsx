import type { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import kiss from "../public/images/kiss.jpeg";
import midsummer from "../public/images/midsummer_bw.jpeg";
import osterlen from "../public/images/osterlen_bw.jpeg";
import new_year from "../public/images/new_year.jpeg";
import { Blockquote, Grid } from "@mantine/core";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";

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
            <motion.div
              style={{ rotate: -3 }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl"
            >
              <Image
                src={midsummer}
                alt="Midsommar"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </motion.div>
            <motion.div
              style={{ rotate: 4 }}
              whileHover={{ scale: 1.1, rotate: 4 }}
              className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl"
            >
              <Image
                className="-z-10"
                src={new_year}
                alt="New Year"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </motion.div>
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <motion.div
              style={{ rotate: 2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl"
            >
              <Image
                src={kiss}
                alt="Kyss"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </motion.div>
            <motion.div
              style={{ rotate: 6 }}
              whileHover={{ scale: 1.1, rotate: 6 }}
              className="m-2 rounded border-[8px] border-b-[64px] border-white shadow-lg md:shadow-xl"
            >
              <Image
                src={osterlen}
                alt="Midsommar"
                layout="responsive"
                placeholder="blur"
              />
            </motion.div>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default OurStory;

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simon och Maries Bröllop</title>
        <meta name="description" content="En upplevelse att minnas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Save the date 9-11 September, 2022</h1>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:info@simonmariebrollop.se">info@simonmariebrollop.se</a>
      </footer>
    </div>
  );
};

export default Home;

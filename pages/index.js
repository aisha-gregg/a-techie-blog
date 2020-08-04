import Head from "next/head";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.blogtitle}>
          A (somewhat) techie life by A.K Gregg
        </h1>

        <section className={styles.introduction}>
          <div>
            <h3>About</h3>
            <p className={styles.paragraph}>
              <strong>Aisha Kamilah Gregg</strong> is a
              <strong>frontend web developer</strong>, blogger,
              <strong>UI and visual design lover</strong> and
              <strong>project management graduate</strong>.
            </p>{" "}
          </div>
          <img src="/vercel.svg" alt="" className={styles.image} />
        </section>
      </main>
    </div>
  );
}
